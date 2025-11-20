import { useState } from 'react'
import List from "../PlannerComponents/List";
import SubmitButton from "../PlannerComponents/SubmitButton";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReminderList({ reminderList, setReminderList, reminderListData, setReminderListData }) {
    const [list, setList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        setReminderList([...reminderList, list]);
        // setReminderList([...reminderList, ...list]);
        // setReminderListData([...reminderListData, list]);
        setList([])
        toast.success("Reminders List Successfully Saved!");
    }
    return (
        <>
            
            <div className='reminder-list-input-container'>
                <h1 className="reminder-list-title">Important Reminders</h1>

                <form className="reminder-list-form">
                    <List list={list} setList={setList} />
                    <SubmitButton onClick={handleSubmit} label="Save Reminder List" className="reminder-list-submit-button" />
                </form>

            </div>
        </>
    )
}

export default ReminderList;




