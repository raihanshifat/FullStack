import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes'
import CustomLayout from './containers/Layout';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth'

class App extends React.Component {
  componentDidMount()
  {
    this.props.tryAutoLogin();
  }
  render()
  {
  return (
    <div className="App">
    <Router>
    <CustomLayout {...this.props}>
    <BaseRouter/>
    </CustomLayout>

    </Router>
    
    </div>
  );
}
}

const mapStateToProps=(state)=>{
  return{
    isAuthenticated: state.token !== null
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    tryAutoLogin:()=>{
      dispatch(actions.authCheckState())
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
