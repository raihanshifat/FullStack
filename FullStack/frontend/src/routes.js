import React from 'react';
import {Route} from 'react-router-dom';
import ArticleDetail from './containers/ArticleDetailView';
import ArticleList from './containers/ArticleListView'
import NormalLoginForm from './containers/Login'

const BaseRouter=() =>( 
<div>
<Route exact path='/' component={ArticleList}/>
<Route exact path='/int:articleID' component={ArticleDetail}/>

<Route path='/login' component={NormalLoginForm}/>


</div>
);




export default BaseRouter;