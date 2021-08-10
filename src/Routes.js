import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todo from './pages/Todo';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './contexts/authContext';
import ForgetPassword from './components/ForgetPassword';

const Routes = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            {/* <Loader /> */}
        <AuthProvider>
            
            <Switch>
                <Route path="/" exact component={Todo} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/forget-password" exact component={ForgetPassword} />
            </Switch>
        </AuthProvider>

        </BrowserRouter>
    );
};

export default Routes;