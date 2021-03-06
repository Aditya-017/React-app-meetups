import {Route,Switch} from 'react-router-dom'
import Layout from './Components/layout/Layout';

import AllMeetups from './pages/AllMeetups'
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
  <Layout>
   
    <Switch> {/* //So that only 1is active */}
    <Route path='/' exact>
      <AllMeetups/>
    </Route>
    <Route path='/new-meetup'>
      <NewMeetup/>
    </Route>
    
    <Route path='/fav'>
      <Favourites/>
    </Route>
    </Switch>
  </Layout>
  )
}

export default App;
