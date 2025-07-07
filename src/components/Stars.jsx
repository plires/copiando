import star from '@/assets/img/star.png'

import styles from '@/components/stars.module.css'

const Stars = ({ resena }) => {
  var node = ''
  var element = ''

  for (let i = 1; i <= resena.stars; i++) {
    node = `<img class='${styles.star_individual}' src='${star}' alt='${resena.name} - estrella numero ${i}' />`
    element = element + node
  }

  return (
    <>
      <div
        className={`${styles.content}`}
        dangerouslySetInnerHTML={{ __html: element }}
      />
    </>
  )
}

export default Stars
