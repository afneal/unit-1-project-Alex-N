import { useState } from 'react'
import List from "../PlannerComponents/List";
import SubmitButton from "../PlannerComponents/SubmitButton";

function ReminderList({ reminderList, setReminderList, reminderListData, setReminderListData }) {
    const [list, setList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        setReminderList([...reminderList, ...list]);
        setReminderListData([...reminderListData, list]);
        alert("Reminder list successfully saved");
        setList([])
    }
    return (
        <div>
            <h1 className="reminder-list">Important Reminders</h1>
            <form className="reminder-list-form">
                <List list={list} setList={setList}/>
                <SubmitButton onClick={handleSubmit} label="Save Reminder List" className="reminder-list-submit-button" />
            </form>

        </div>
    )
}

export default ReminderList;




