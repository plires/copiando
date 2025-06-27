import './accordion.css'

export default function Accordion({ id, items }) {
  return (
    <div className='accordion' id={id}>
      {items.map(item => {
        const collapseId = `${id}-collapse-${item.id}`
        const headingId = `${id}-heading-${item.id}`
        const isFirst = item.id === 0

        return (
          <div className='accordion-item' key={item.id}>
            <h2 className='accordion-header' id={headingId}>
              <button
                className={`accordion-button transition ${!isFirst ? 'collapsed' : ''}`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#${collapseId}`}
                aria-expanded={isFirst ? 'true' : 'false'}
                aria-controls={collapseId}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
              aria-labelledby={headingId}
              data-bs-parent={`#${id}`}
            >
              <div className='accordion-body'>{item.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
