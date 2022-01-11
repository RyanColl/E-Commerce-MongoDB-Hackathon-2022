import React from 'react'
import { createContext, useState } from 'react'

// provider created
export const AppProvider = createContext()

// provider component created
function AppContext({children}) {
    const initialState = {
        cart: [], categories: [], products: [], loading: false, modal: false
    }
    const [state, dispatch] = useState(initialState)
    return (
        <AppProvider.Provider value={{state, dispatch}}>
            {children}
        </AppProvider.Provider>
    )
}

export default AppContext
