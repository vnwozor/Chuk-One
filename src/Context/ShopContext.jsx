import React, { createContext } from 'react'
import { leaderInfo } from '../assets/assets.js'

export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {

    const value = {
        leaderInfo
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
