import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';



function MeetupList(props) {
   console.log(props.meetups)

   
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup,i) => (
        <MeetupItem
        key={i}
          id={meetup.id}
       
          image={meetup.enteredImage}
          title={meetup.enteredTitle}
          address={meetup.enteredAddress}
          description={meetup.enteredDescript}
        />
      ))}
    </ul>
  );
}

export default MeetupList;