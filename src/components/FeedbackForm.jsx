import {useState, useEffect} from 'react'
import Card from './shared/Card';
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import FeedbackDataContext from '../context/FeedbackContext';
import {useContext} from 'react'

function FeedbackForm() {
    const {addNewComments, editDataItem, editOldComment} = useContext(FeedbackDataContext);
    const [feedbacktext, setText] = useState("");
    const [btnDisable, setDisableStatus] = useState(true);
    const [message, showMessage] = useState("");
    const [selectedRating, setSelected] = useState(10);

    useEffect(() => {
        console.log("---"+editDataItem.edit);
        if(editDataItem.edit === true){
            setDisableStatus(false);
            setText(editDataItem.item.text);
            setSelected(editDataItem.item.rating);
            
        }
    },[editDataItem])
    const feedbackChange = (e) => {
        setText(e.target.value);
        if(feedbacktext === ''){
            setDisableStatus(true);
            showMessage(null);
        }else if (feedbacktext !== '' && feedbacktext.trim().length < 10){
            setDisableStatus(true);
            showMessage("Text should be atleast 10 charactors long.");
        }else {
            setDisableStatus(false);
            showMessage(null);
        }
    }
    const handleChangeOnRatingSelect = (e) => {
        setSelected(+e.currentTarget.value);
    }
    const submitNewComment = (e) => {
        e.preventDefault();
        const newComment = {
            rating : selectedRating,
            text : feedbacktext
        }
        // console.log(newComment);
        if(editDataItem.edit === true){
            editOldComment(editDataItem.item.id, newComment);
            
        }else {
            addNewComments(newComment);
        }
        setText('');
        setDisableStatus(true);
    }
  return (
    <Card reverse={true}>
        <form onSubmit={submitNewComment}>
            <h2>How would you rate our services ?</h2>
            <RatingSelect selectedRating={selectedRating} handleChangeOnRatingSelect={handleChangeOnRatingSelect} />
            <div className="input-group reverse">
                <input style={{height : 40, padding:10}} placeholder='Write your review here' type="text" onChange={feedbackChange} value={feedbacktext} />
                <Button style={{padding:10}} type="submit" version="secondary" isDisabled={btnDisable}>Submit</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
