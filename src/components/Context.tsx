import { useContext, useReducer, createContext } from 'react'

const ActiveArticleStateContext = createContext('')
const ActiveArticleDispatchContext = createContext(null)

const reducer = (state, action) => {
  return action.payload
}

export const ActiveArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, '')
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
