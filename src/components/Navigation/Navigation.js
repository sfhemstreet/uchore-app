import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.js';
import './Navigation.css';

const Navigation = ({isSignedIn, onRouteChange}) => {

    if(isSignedIn){
        return(
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <Logo 
                    onRouteChange={onRouteChange}
                />   
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <NavLink  
                        to='/creategroup'
                        className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer">
                        Create Group
                    </NavLink>
                    <NavLink 
                        to='/groups'
                        className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer">
                        Groups
                    </NavLink>
                    <NavLink 
                        to='/signout'
                        className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer">
                        Sign Out
                    </NavLink>
                    <NavLink 
                        to='/about'
                        className="link dim dark-gray f6 f5-l dib pointer">
                        About
                    </NavLink>
                </div>
            </nav>  
        )
    }
    else{
        return(
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <Logo 
                    onRouteChange={onRouteChange}
                />  
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <NavLink to='/signin'
                        className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer">
                        Sign In
                    </NavLink>
                    <NavLink to='/register'
                        className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer">
                        Register
                    </NavLink>
                    <NavLink to='/about' 
                        className="link dim dark-gray f6 f5-l dib pointer">
                        About
                    </NavLink>
                </div>
            </nav>   
        )
        
    }

}

export default Navigation;

