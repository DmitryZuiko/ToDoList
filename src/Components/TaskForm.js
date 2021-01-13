import React, {useRef, useEffect} from 'react';
import './TaskForm.css';

function TaskForm (props) {

    const focusRef = useRef()

    useEffect(() => {
        focusRef.current.focus();
    }, [props.state.showMore])

    return (
        <div style={props.isFormActive ? {display: "block"} : {display: "none"}}>
            <form  className="userForm">
                <div className="container">
                    <label>
                        First name:
                        <input
                            className="input"
                            type="text"
                            name="firstName"
                            value={props.state.firstName}
                            onChange={props.firstNameChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Last name:
                        <input
                            className="input"
                            type="text" name="lastName"
                            value={props.state.lastName}
                            onChange={props.lastNameChange}
                        />
                    </label>
                    <br/>
                    <label>
                        E-mail:
                        <input
                            className="input"
                            type="text" name="lastName"
                            value={props.state.email}
                            onChange={props.emailChange}
                        />
                    </label>
                    <br/>
                    <label>
                        From:
                        <input
                            className="input"
                            type="date"
                            name="startingDate"
                            value={props.state.startingDate}
                            onChange={props.startingDateChange}
                        />
                    </label>
                    <label>
                        To:
                        <input
                            className="input"
                            type="date"
                            name="endDate"
                            value={props.state.endDate}
                            onChange={props.endDateDateChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Type:
                        <select
                            name="taskType"
                            value={props.state.taskType}
                            onChange={props.taskTypeChoose}
                        >
                            <option value="important">important</option>
                            <option value="unimportant">unimportant</option>
                        </select>
                    </label>
                    <button
                        name="showMore"
                        value={props.state.showMore}
                        onClick={props.showMoreInfo}
                    >
                        {props.state.showMore ? 'hide' : 'more'}
                    </button>
                    <div
                        className="hideZone"
                        style={props.state.showMore ? {display: "block"} : {display: "none"}}
                    >
                        <div className="check">
                            <input type="checkbox" />
                            <div className="report">make report</div>
                        </div>
                        <label className="commentsArea">
                            <div className="comment"> Comment:</div>
                            <textarea
                                name="comment"
                                ref={focusRef}
                                value={props.state.comment}
                                onChange={props.commentChange}
                            >...</textarea>
                        </label>
                    </div>
                    <button
                        name="addCard"
                        value={props.state.addCard}
                        onClick={props.sendToDoInfo}
                    >Add</button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;