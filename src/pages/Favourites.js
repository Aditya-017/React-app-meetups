import {useContext} from 'react'
import MeetupList from '../Components/Meetups/MeetupList'

import FavoritesContext from '../store/favorites-context'

 function Favourites() {
      const favcontext = useContext(FavoritesContext)
      let content;
      if(favcontext.totalFavorites===0){
        content=<p>No favorites yet!!!</p>
      }else
      content=<MeetupList meetups={favcontext.favorites}/>
    return (
      <section>
          <h1>My Favorites</h1>
          {content}
      </section>
    )
}

export default Favourites