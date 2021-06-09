import Card from '../UI/Card'
import classes from './NewMeetupsForm.module.css'
import {useRef} from 'react'


 function NewMeetupsForm(props) {
const titleInputRef = useRef()
const imageInputRef = useRef()
const addressInputRef = useRef()
const descriptionInputRef = useRef()

     function submitHandler(event){
        event.preventDefault()
        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredAddress=addressInputRef.current.value;
        const enteredDescript=descriptionInputRef.current.value;
        const meetupData={
            enteredTitle,
            enteredImage,
            enteredAddress,
            enteredDescript
        }
        props.onAddMeetup(meetupData);
        //console.log(meetupdata)
     }
    return (
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" id ="title" name="title" required ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image Url</label>
                <input type="text" id ="image" name="image" required ref={imageInputRef}/>
            </div>    
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" id ="address" name="address" required ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id ="description" name="description" required rows='5' ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
            <button >
                Submit
            </button>
            </div>
            </form>
            
        </Card>    
    )
}
export default NewMeetupsForm