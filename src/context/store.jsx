import { createContext, useState, useRef } from 'react'

export const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const [message, setMessage] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const textAreaRef = useRef(null)
  return (
    <StoreContext.Provider
      value={{
        message,
        setMessage,
        textAreaRef,
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
