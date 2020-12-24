import React from 'react';
import TaskForm from "./TaskForm";
import NewTask from "./NewTask"

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            startingDate: '',
            endDate: '',
            taskType: '',
            showMore: false,
            comment: '',
            addCard: false
        }
    }

    firstNameChange = (e) => {
        this.setState({firstName: e.target.value});
    }

    lastNameChange = (e) => {
        this.setState({lastName: e.target.value});
    }

    emailChange = (e) => {
        this.setState({email: e.target.value});
    }

    startingDateChange = (e) => {
        this.setState({startingDate: e.target.value});
    }

    endDateDateChange = (e) => {
        this.setState({endDate: e.target.value});
    }

    taskTypeChoose = (e) => {
        this.setState({taskType: e.target.value});
    }

    showMoreInfo = (e) => {
        e.preventDefault();
        this.setState(state => ({
            showMore: !state.showMore
        }))
    }

    commentChange = (e) => {
        this.setState({comment: e.target.value})
    }

    sendToDoInfo = (e) => {
        e.preventDefault();
        this.setState(state => ({
            addCard: !state.addCard
        }))
        console.log(this.state);
    }

    render() {
        return (
            <div className="card">
                <div className="userInfo">
                    <TaskForm
                        state={this.state}
                        firstNameChange={this.firstNameChange}
                        lastNameChange={this.lastNameChange}
                        emailChange={this.emailChange}
                        startingDateChange={this.startingDateChange}
                        endDateDateChange={this.endDateDateChange}
                        taskTypeChoose={this.taskTypeChoose}
                        showMoreInfo={this.showMoreInfo}
                        commentChange={this.commentChange}
                        sendToDoInfo={this.sendToDoInfo}
                    />
                </div>
                <NewTask state={this.state} add={this.state.addCard}/>
            </div>
        )
    }
}

export default App;