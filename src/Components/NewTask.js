import React from 'react';
import './NewTask.css'

function NewTask (props) {
    return (
        <div className="gridContain">
            {
                props.state.map((card, index) => {
                    return (
                        <div className="newCard" key={index}>
                            <div className="container">
                                <h4>{card.firstName} {card.lastName}</h4>
                                <p>From: {card.startingDate} to: {card.endDate}</p>
                                <p>Type: {card.taskType}</p>
                                <p className="text">{card.comment}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default NewTask;