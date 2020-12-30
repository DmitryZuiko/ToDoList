import React, { useState } from 'react';
import TaskForm from "./TaskForm";
import NewTask from "./NewTask";
import "./App.css";

function App () {

    const [state, setState] = useState({
        formState: {
            firstName: '',
            lastName: '',
            email: '',
            startingDate: '',
            endDate: '',
            taskType: '',
            showMore: false,
            comment: '',
            addCard: false
        },
        cardsState: [],
        isFormActive: false
    })

    const firstNameChange = (e) => {
        setState({
            ...state, formState: {
                ...state.formState, firstName: e.target.value
            }
        });
    }

    const lastNameChange = (e) => {
        setState({
            ...state, formState: {
                ...state.formState, lastName: e.target.value
            }
        });
    }

    const emailChange = (e) => {
        setState({
            ...state, formState: {
                ...state.formState, email: e.target.value
            }
        });
    }

    const startingDateChange = (e) => {
        setState({
            ...state, formState: {
                ...state.formState, startingDate: e.target.value
            }
        });
    }

    const endDateDateChange = (e) => {
        setState({
            ...state, formState: {
                ...state.formState, endDate: e.target.value
            }
        });
    }

    const taskTypeChoose = (e) => {
        setState({
            ...state, formState: {
                ...state.formState, taskType: e.target.value
            }
        });
    }

    const showMoreInfo = (e) => {
        e.preventDefault();
        setState({
            ...state, formState: {
                ...state.formState, showMore: !state.formState.showMore
            }
        })
    }

    const commentChange = (e) => {
        setState({
            ...state, formState: {
                ...state.formState, comment: e.target.value
            }
        })
    }

    const sendToDoInfo = (e) => {
        e.preventDefault();
        const arr = [...state.cardsState, {...state.formState, id: null}]
        setState({
            ...state, cardsState: arr
        })
        console.log(state.cardsState);
    }

    const openForm = (e) => {
        e.preventDefault();
        setState({
            ...state,
            isFormActive: !state.isFormActive
        })
    }


        return (
            <div className="card">
                <div className="userInfo">
                    <button onClick={openForm} className="openForm">+</button>
                    <TaskForm
                        state={state.formState}
                        firstNameChange={firstNameChange}
                        lastNameChange={lastNameChange}
                        emailChange={emailChange}
                        startingDateChange={startingDateChange}
                        endDateDateChange={endDateDateChange}
                        taskTypeChoose={taskTypeChoose}
                        showMoreInfo={showMoreInfo}
                        commentChange={commentChange}
                        sendToDoInfo={sendToDoInfo}
                        isFormActive={state.isFormActive}
                    />
                </div>
                <NewTask state={state.cardsState}/>
            </div>
        )

}

export default App;