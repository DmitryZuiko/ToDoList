import { connect } from 'react-redux';
import App from "../Components/App";

export default connect(
    state => ({
        state: state
    }),
    dispatch => ({
        setFormActive: () => {
            dispatch({
                type: 'SET_FORM_ACTIVE'
            })
        }
    })
)(App)
