import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
    const { loginWithRedirect,  isAuthenticated } = useAuth0()
    return (
        !isAuthenticated && (
        <div className='content-container'>
            <button className='button' onClick={()=>loginWithRedirect()}>Login</button>
        </div>
    ))
}
