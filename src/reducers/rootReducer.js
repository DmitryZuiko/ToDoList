const INITIAL_STATE = {
    formState: {
        firstName: '',
        lastName: '',
        email: '',
        startingDate: '',
        endDate: '',
        taskType: '',
        showMore: false,
        comment: '',
        addCard: false,
    },
    cardsState: [],
    isFormActive: false,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_FORM_ACTIVE':
            return {
                ...state,
                isFormActive: !state.isFormActive
            }
        case 'SET_FIRSTNAME':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    firstName: action.payload
                }
            }
        case 'SET_LASTNAME':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    lastName: action.payload
                }
            }
        case 'SET_EMAIL':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    email: action.payload
                }
            }
        case 'SET_START_DATE':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    startingDate: action.payload
                }
            }
        case 'SET_END_DATE':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    endDate: action.payload
                }
            }
        case 'CHOOSE_TASK_TYPE':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    taskType: action.payload
                }
            }
        case 'SHOW_HIDDEN_INFO':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    showMore: !state.formState.showMore
                }
            }
        case 'COMMENT_CHANGE':
            return {
                ...state,
                formState: {
                    ...state.formState,
                    comment: action.payload
                }
            }
        case 'ADD_NEW_CARD':
            const arr = [...state.cardsState, {...state.formState, id: null}]
            return {
                ...state,
                cardsState: arr
            }
        default:
            return state
    }
}