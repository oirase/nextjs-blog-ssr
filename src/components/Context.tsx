import { useContext, useState, createContext } from 'react'

const ActiveArticleStateContext = createContext('')
const ActiveArticleDispatchContext = createContext(null)

export const ActiveArticleProvider = ({ children }) => {
  const [state, dispatch] = useState('')
  return (
    <ActiveArticleDispatchContext.Provider value={dispatch}>
      <ActiveArticleStateContext.Provider value={state}>
        {children}
      </ActiveArticleStateContext.Provider>
    </ActiveArticleDispatchContext.Provider>
  )
}

export const useActiveArticleState = () => useContext(ActiveArticleStateContext)
export const useActiveArticleDispatch = () => useContext(ActiveArticleDispatchContext)
