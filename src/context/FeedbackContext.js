import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const FeedbackDataContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedbackData, setFeedbackData] = useState([
        {
            id : '1',
            rating : 6,
            text : 'This is the feedback with Average service.',
        },
        {
            id : '2',
            rating : 10,
            text : 'This is the feedback with Best service.',
        },
        {
            id : '3',
            rating : 2,
            text : 'This is the feedback with Worst service.',
        }
    ])
    const [editDataItem, setEditDataItem] = useState({
        item : {},
        edit:false,
    });
    const deleteComment = (id) => {
        if(window.confirm("Are you sure you want to delete this comment ?")){
            setFeedbackData(feedbackData.filter((item)=> item.id !== id));
        }
    }
    const addNewComments = (newComment) => {
        newComment.id = uuidv4();
        setFeedbackData([newComment, ...feedbackData]);
        // console.log(newComment);
    }
    const editComment = (editItem) => {
        setEditDataItem({
            item : editItem,
            edit:true,
        })
    }
    const editOldComment = (id, updatedComment) => {
        setFeedbackData(
            feedbackData.map((item) => (item.id === id ? { ...item, ...updatedComment} : item))
        )
        setEditDataItem({
            item : {},
            edit:false,
        });
    }
    return <FeedbackDataContext.Provider value={{
        feedbackData: feedbackData,
        editDataItem,
        deleteComment,
        addNewComments,
        editComment,
        editOldComment,
    }}>
        {children}
    </FeedbackDataContext.Provider>
}

export default FeedbackDataContext;