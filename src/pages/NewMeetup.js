import NewMeetupsForm from "../Components/Meetups/NewMeetupsForm";
import {useHistory} from 'react-router-dom'

 function NewMeetup() {
     const history=useHistory()
      function AddMeetupHandler(meetupData){
         fetch('https://meet-up-2d78c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
           {
            method:'POST',
            body:JSON.stringify(meetupData),
             headers:{
                    'Content-Type':'application/json'
                    }
            }
        ).then(()=>{
            history.replace('/')
        })  
       
     }
    return (
        <section>
            <h1>Add New Meetup</h1>
           <NewMeetupsForm onAddMeetup={AddMeetupHandler}/>
        </section>
    )
}
export default NewMeetup