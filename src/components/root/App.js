import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import PostList from '../postList/PostList';
import PostDetail from '../postList/PostDetail';
import EditPost from '../post/EditPost';
import DeletePost from '../post/DeletePost';
export function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' exact component={PostList} />
          <Route exact path='/posts/:id' component={PostDetail} />
          <Route path='/posts/:id/edit' component={EditPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
