import './loader.css'

const Loader = () => {
  return (
    <section className='loader'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </section>
  )
}

export default Loader
