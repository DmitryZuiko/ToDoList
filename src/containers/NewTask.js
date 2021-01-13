import { connect } from 'react-redux';
import NewTask from "../Components/NewTask";

export default connect(
    state => ({
        cardsState: state.cardsState,
    }), null

)(NewTask)
