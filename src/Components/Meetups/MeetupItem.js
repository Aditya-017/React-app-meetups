import Card from '../UI/Card';
import classes from './MeetupItem.module.css';
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props) {
  const favcontext = useContext(FavoritesContext)
  const ItemIsFavorite= favcontext.itemIsFavorite(props.id) 
  function togleFavoriteStatusHandler(){
    console.log(ItemIsFavorite)
   if(ItemIsFavorite){
     favcontext.removeFavorite(props.id)
   }else{
    favcontext.addFavorite({
      id:props.id,
      enteredTitle:props.title,
      enteredDescript:props.description,
      enteredImage:props.image,
      enteredAddress:props.address
    })
   }
   console.log(ItemIsFavorite)
  }
  console.log(props)
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={togleFavoriteStatusHandler}>{ItemIsFavorite ? "Remove from Favorites" : "To Favotites" }</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;