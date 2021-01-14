import React from 'react';

import './NewTask.css'

function NewTask ({cardsState}) {

    if (cardsState.length === 0) {
        return (
            <div className="emptyCont"><div className="empty">No cards yet</div></div>
        )
    }
    return (
        <div className="gridContain">
            {
                cardsState.map((card, index) => {
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