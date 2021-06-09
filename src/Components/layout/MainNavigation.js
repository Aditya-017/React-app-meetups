import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'


 function MainNavigation() {
    const favcontext  = useContext(FavoritesContext)
    return (
    <header className={classes.header}>
        <div className={classes.logo}>React meetups</div>
        <div>
            <nav>
                <ul>
                    <li> <Link to='/'>All Metups</Link></li>
                    <li> <Link to='/new-meetup'>Add new Meetup</Link></li>
                    <li> <Link to='/fav'>
                        Favourites
                        <span className={classes.badge}>{favcontext.totalFavorites}</span>
                        </Link></li>
                </ul>
            </nav>
            
        </div>
        </header>
    )
}
export default MainNavigation