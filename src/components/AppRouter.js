import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { authRoutes, publicRoutes } from '../routes'
import { LOGIN_PAGE_ROUTE } from '../const/routePaths'

const AppRouter = () => {
    const history = useHistory()
    const isAuth = useSelector(state => state.isAuth)
    
    if (!isAuth) {
        history.push(LOGIN_PAGE_ROUTE)
    }
    
    return (
            <Switch>
                {isAuth && authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact/>
                ))}
                {!isAuth && publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} />
                ))}
            </Switch>
        
    )
}

export default AppRouter