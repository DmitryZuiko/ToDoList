import { connect } from 'react-redux';
import TaskForm from "../Components/TaskForm";

export default connect(
    state => ({
        state: state.formState,
        isFormActive: state.isFormActive,
    }),
    dispatch => ({
        firstNameChange: (e) => {
            dispatch({
                type: 'SET_FIRSTNAME',
                payload: e.target.value
            })
        },
        lastNameChange: (e) => {
            dispatch({
                type: 'SET_LASTNAME',
                payload: e.target.value
            })
        },
        emailChange: (e) => {
            dispatch({
                type: 'SET_EMAIL',
                payload: e.target.value
            })
        },
        startingDateChange: (e) => {
            dispatch({
                type: 'SET_START_DATE',
                payload: e.target.value
            })
        },
        endDateDateChange: (e) => {
            dispatch({
                type: 'SET_END_DATE',
                payload: e.target.value
            })
        },
        taskTypeChoose: (e) => {
            dispatch({
                type: 'CHOOSE_TASK_TYPE',
                payload: e.target.value
            })
        },
        showMoreInfo: () => {
            dispatch({
                type: 'SHOW_HIDDEN_INFO'
            })
        },
        commentChange: (e) => {
            dispatch({
                type: 'COMMENT_CHANGE',
                payload: e.target.value
            })
        },
        sendToDoInfo: () => {
            dispatch({
                type: 'ADD_NEW_CARD'
            })
        },
    })

)(TaskForm)
