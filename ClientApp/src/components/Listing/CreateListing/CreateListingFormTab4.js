import React, { useState } from 'react';

function CreateListingFormTab3() {
    const [bathroomCount, setCurrentCount] = useState(0);

    const incrementCounter = () => {
        setCurrentCount(bathroomCount+ 1);
    };

    const decrementCounter = () => {
        setCurrentCount(bathroomCount - 1);
    };

    return (
        <div>

            <h3>How many bedrooms does your apartment have?</h3>

            <div className="form-group">
                <button className="btn btn-primary" onClick={decrementCounter}>-</button>
                <input
                    type="text"
                    value={bathroomCount}
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
