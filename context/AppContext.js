import React from 'react'
import { createContext, useState } from 'react'
export const AppProvider = createContext()
function AppContext({children}) {
    const initialState = {
        cart: [], categories: []
    }
    const [state, dispatch] = useState(initialState)
    return (
        <AppProvider.Provider value={{state, dispatch}}>
            {children}
        </AppProvider.Provider>
    )
}

export default AppContext
