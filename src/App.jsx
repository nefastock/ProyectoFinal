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

import UserListView from './containers/user-list/UserList';
import UserDetailView from './containers/user-detail/UserDetail';
import UserCreate from './containers/user-create/UserCreate';

import routes from './routes';
import NotFound from './containers/not-found/NotFound';

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
    const ctx = {
        data: this.state,
        toggleTheme: this.toggleTheme,
    };
    return (
      <Provider store={store}>
        <Context.Provider value={this.state}>
          <Router>
            <Header />            
            <Switch>
              <Route path={routes.home} exact component={Home} />              
              <Route path={routes.login} exact component={Login} />
              <Route path={routes.register} exact component={UserCreate} /> 

              <PrivateRoute path={routes.privateHome} component={PrivateHome} />
              <PrivateRoute path={routes.postDetail} exact component={PostDetail} />
              <PrivateHome path={routes.privateHome} exact component={PrivateHome} /> 
              
              <PrivateRoute path="/users" exact component={UserListView} />
              <PrivateRoute path="/users:id" exact component={UserDetailView} />
              
              
              <Route component={NotFound} />
            </Switch>
            
            <Footer />
          </Router>
          
        </Context.Provider>
      </Provider>
    )
  }
}

export default App;
