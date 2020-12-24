import React from 'react';

class NewTask extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.state.addCard ? {display: "block"} : {display: "none"}}>
                <p>{this.props.state.firstName} {this.props.state.lastName}</p>
                <p>From {this.props.state.startingDate} to {this.props.state.endDate}</p>
                <p>Type {this.props.state.taskType}</p>
                <p>Comment: {this.props.state.comment}</p>
            </div>
        );
    }
}

export default NewTask;