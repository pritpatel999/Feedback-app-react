import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit}  from 'react-icons/fa'
import FeedbackDataContext from '../context/FeedbackContext'
import {useContext} from 'react'

function FeedbackItem({feedbackInfo}) {
    // const [rating, setRatings] = useState(7);
    // const [text, setText] = useState("This is an example of feedback message.");
    const {deleteComment, editComment} = useContext(FeedbackDataContext)
  return (
    <Card reverse={true}>
      <div className='num-display'>{feedbackInfo.rating}</div>
      <button onClick={()=>deleteComment(feedbackInfo.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <button onClick={()=>editComment(feedbackInfo)} className="edit">
        <FaEdit color='purple'/>
      </button>
      <div className='text-display'>{feedbackInfo.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    feedbackInfo : PropTypes.object.isRequired,
}
export default FeedbackItem
