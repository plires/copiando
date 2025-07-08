import { forwardRef, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react19-google-recaptcha-v3'
import ErrorInput from '@/components/commons/ErrorInput.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '@/components/commons/Loader'
import { validation } from '@/utils/dataUtils'

import styles from './formulario.module.css'

const Formulario = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(false)
  const [wordBtn, setWordBtn] = useState('QUIERO MÁS INFORMACIÓN')
  const [inputSelect, setInputSelect] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)
    setWordBtn('ENVIANDO...')

    const token = await executeRecaptcha('form_contacto')
    values.recaptchaToken = token

    values.interes = inputSelect

    values.origin = import.meta.env.VITE_NAME_LANDING

    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('utm_source')) {
      values.utm_source = urlParams.get('utm_source')
    } else {
      values.utm_source = 'No Set'
    }

    if (urlParams.has('utm_medium')) {
      values.utm_medium = urlParams.get('utm_medium')
    } else {
      values.utm_medium = 'No Set'
    }

    if (urlParams.has('utm_campaign')) {
      values.utm_campaign = urlParams.get('utm_campaign')
    } else {
      values.utm_campaign = 'No Set'
    }

    if (urlParams.has('utm_content')) {
      values.utm_content = urlParams.get('utm_content')
    } else {
      values.utm_content = 'No Set'
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_ROOT + 'php/process.php',
        values,
      )

      const responseData = res.data

      console.log(responseData)

      if (responseData.success) {
        toast.success(responseData.msg_success)
      } else {
        if (Array.isArray(responseData.errors)) {
          responseData.errors.map(error => toast.error(error))
        } else {
          toast.error('Ocurrió un error inesperado.')
        }
      }
    } catch (error) {
      toast.error(
        'Aparentemente en este momento no hay conexión con el servidor, por favor intente más tarde.',
      )
    }

    resetForm()
    setSubmitting(false)
    setLoading(false)
    setWordBtn('QUIERO MÁS INFORMACIÓN')
  }

  const initFormDefault = {
    name: '',
    email: '',
    phone: '',
    comments: '',
  }

  return (
    <section ref={ref} className={`${styles.formulario}`}>
      <div id='formulario'>
        <div className={`${styles.frase}`}>
          <p>
            Solicitá Relevamiento <br />
            para tu empresa SIN CARGO!
          </p>
        </div>
        <div className={`${styles.contentPadding}`}>
          <Formik
            // ref={contactoRef}
            initialValues={initFormDefault}
            validate={validation}
            onSubmit={sendForm}
          >
            {({ handleSubmit, isSubmitting, setFieldValue }) => (
              <Form
                data-aos='fade-up'
                id='form_contacto'
                onSubmit={handleSubmit}
                style={{ position: 'relative' }}
              >
                {loading && <Loader />}
                <div className='row'>
                  <div className={`col-sm-12 ${styles.inputContainer}`}>
                    <label htmlFor='name' className={`${styles.label}`}>
                      Nombre
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='text'
                      name='name'
                      placeholder=''
                    />
                    <ErrorMessage name='name' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 ${styles.inputContainer}`}>
                    <label htmlFor='email' className={`${styles.label}`}>
                      Email
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='email'
                      name='email'
                      placeholder=''
                    />
                    <ErrorMessage name='email' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 ${styles.inputContainer}`}>
                    <label htmlFor='phone' className={`${styles.label}`}>
                      Teléfono
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='number'
                      name='phone'
                      placeholder=''
                    />
                    <ErrorMessage name='phone' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 ${styles.inputContainer}`}>
                    <label
                      htmlFor='comments'
                      className={`${styles.label} ${styles.labelComments}`}
                    >
                      Dejanos tu consulta
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      as='textarea'
                      name='comments'
                      rows='4'
                      placeholder=''
                    />
                    <ErrorMessage name='comments' component={ErrorInput} />
                  </div>
                </div>

                <button
                  id='send'
                  className={`btn anton transition ${styles.btnSend}`}
                  type='submit'
                  disabled={isSubmitting}
                >
                  {wordBtn}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
})
export default Formulario
