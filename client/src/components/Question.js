import React, { useState } from 'react';

const Question = ({ question }) => {
    const [checkedId, setCheckedId] = useState(null);

    return (
        <div>
            <p className="ceph__text md">{question.text}</p>

            {
                question.options.map(option => {
                    return (
                        <p className="ceph__radio-container" key={option.id} onClick={() => setCheckedId(option.id)}>
                            <input type="radio" checked={checkedId === option.id} />
                            <label>{option.text}</label>
                        </p>
                    );
                })
            }
        </div>
    );
};

export default Question;
