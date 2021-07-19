import React from 'react'

export default React.createContext({
    user: null, 
    updates: [],
    children: [],
    addChild: () => {},
    addUpdate: () => {},
    deleteUpdate: () => {},
    removeChild: () => {},
    setUser: () => {}
})