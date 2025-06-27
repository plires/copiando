import './features.css'

const Features = ({ item, col }) => {
  return (
    <article className={`${col} features`}>
      <div data-aos='fade-up' className='item'>
        <div className='superior'>
          <p className='number'>{item.number}</p>
          <p
            className='title'
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></p>
        </div>
        <div className='inferior'>
          <p className='description'>{item.description}</p>
        </div>
      </div>
    </article>
  )
}
export default Features
