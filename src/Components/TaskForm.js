import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form >
                <label>
                    First name:
                    <input type="text" name="firstName" value={this.props.state.firstName} onChange={this.props.firstNameChange} />
                </label>
                <br/>
                <label>
                    Last name:
                    <input type="text" name="lastName" value={this.props.state.lastName} onChange={this.props.lastNameChange} />
                </label>
                <br/>
                <label>
                    E-mail:
                    <input type="text" name="lastName" value={this.props.state.email} onChange={this.props.emailChange} />
                </label>
                <br/>
                <label>
                    From:
                    <input type="date" name="startingDate" value={this.props.state.startingDate} onChange={this.props.startingDateChange} />
                </label>
                <label>
                    To:
                    <input type="date" name="endDate" value={this.props.state.endDate} onChange={this.props.endDateDateChange} />
                </label>
                <br/>
                <button name="showMore" value={this.props.state.showMore} onClick={this.props.showMoreInfo}>
                    {this.props.state.showMore ? 'hide' : 'more'}
                </button>
                <br/>
                <label>
                    Type:
                    <select name="taskType" value={this.props.state.taskType} onChange={this.props.taskTypeChoose}>
                        <option value="important">important</option>
                        <option value="unimportant">unimportant</option>
                    </select>
                </label>
                <br/>
                <div style={this.props.state.showMore ? {display: "block"} : {display: "none"}}>
                    <label>
                        <input type="checkbox" />
                        make report
                    </label>
                    <br/>
                    <label>
                        Comment:
                        <br/>
                        <textarea name="comment" value={this.props.state.comment} onChange={this.props.commentChange}>...</textarea>
                    </label>
                </div>
                <br/>
                <button name="addCard" value={this.props.state.addCard} onClick={this.props.sendToDoInfo}>Add</button>
            </form>
        );
    }
}

export default TaskForm;