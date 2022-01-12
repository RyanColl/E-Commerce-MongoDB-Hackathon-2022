import React from 'react'
import { createContext, useState } from 'react'

// provider created
export const AppProvider = createContext()
export const initialModalState = {
    contact: false, account: false, track: false, 
    shipping: false, returns: false, conditions: false,
    privacy: false, cookie: false, careers: false, about: false,
    history: false, responsibility: false, disclaimer: false
}
// provider component created
function AppContext({children}) {
    const initialState = {
        cart: [], categories: [], products: [], loading: false, 
        modal: initialModalState, modalRef: React.createRef(null)
    }
    const [state, dispatch] = useState(initialState)
    return (
        <AppProvider.Provider value={{state, dispatch}}>
            {children}
        </AppProvider.Provider>
    )
}

export default AppContext
