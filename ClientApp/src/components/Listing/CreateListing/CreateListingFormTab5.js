import React, { useState } from 'react';

function CreateListingFormTab3() {
    const [bedCount, setCurrentCount] = useState(0);

    const incrementCounter = () => {
        setCurrentCount(bedCount + 1);
    };

    const decrementCounter = () => {
        setCurrentCount(bedCount - 1);
    };

    return (
        <div>

            <h3>How many beds does your apartment have?</h3>

            <div className="form-group">
                <button className="btn btn-primary" onClick={decrementCounter}>-</button>
                <input
                    type="text"
                    value={bedCount}
                    readOnly
                    className="form-control"
                    placeholder="e.g., 0176 "
                    id="ZipCode"
                />
                <button className="btn btn-primary" onClick={incrementCounter}>+</button>
            </div>
        </div>
    );
}

export default CreateListingFormTab3;
