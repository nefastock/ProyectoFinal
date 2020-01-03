import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Context from './Context';

import PrivateRoute from './components/private-route/PrivateRoute';
import store from './store';

import Home from './containers/home/Home';
import Login from './containers/login/Login';
import PrivateHome from './containers/private-home/PrivateHome'

import PostDetail from './containers/post-detail/PostDetail'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import PostEdit from './containers/post-edit/PostEdit';
import UserCreate from './containers/user-create/UserCreate';
import PostCreate from './containers/post-create/PostCreate';

import routes from './routes';
import NotFound from './containers/not-found/NotFound';

/**
 * Componente basado en clase
 * 
 * @author Emmanuel Lepe <simon.lepe@gmail.com>
 * @since 0.1.0
 * @version 1.0.0 
 * 
 */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        theme: 'dark',
        toggleTheme: this.toggleTheme,
    };
}


toggleTheme = () => {
    // otra opcion de setState, es utilizar una funcion calback
    this.setState((prevState) => {
        // retornamos el nuevo state
        return { theme: prevState.theme !== 'dark' ? 'dark' : 'light' };
    });
}
  
  render () {
    
    return (
      <Provider store={store}>
        <Context.Provider value={this.state}>
          <Router>
            <Header />     
            <div className="margen">
            <Switch>
              <Route path={routes.home} exact component={Home} />              
              <Route path={routes.login} exact component={Login} />
              <Route path={routes.register} exact component={UserCreate} /> 
              <Route path={routes.postDetail} exact component={PostDetail} />
              <PrivateRoute path={routes.privateHome} component={PrivateHome} />   
              <PrivateRoute path={routes.privatePostEdit} exact component={PostEdit} />
              <PrivateRoute path={routes.privatePostCreate} exact component={PostCreate} />  
              <Route component={NotFound} />
            </Switch>
            </div> 
            <Footer />
          </Router>          
        </Context.Provider>
      </Provider>
    )
  }
}

export default App;
