import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes } from '../routes';
import { PURCHASES_ROUTE } from "../utils/consts"
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context);

    console.log(user);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to={PURCHASES_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;