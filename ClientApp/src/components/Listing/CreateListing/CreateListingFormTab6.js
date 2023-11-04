import React, { useState } from 'react';

function CreateListingFormTab2() {

    const [pricePerNight, setPricePerNight] = useState('');


    return (
        <div>
            <h3>Finally, how much would you charge for a stay in your house?</h3>

            <div class="form-group">
                <input value={PrisPerNatt} className="form-control" placeholder="Enter price per night"
                    title="It might be a good idea to check what other renters are charging for similar properties."
                    id="PrisPerNatt" style="margin-bottom: 5%;">
            </div>

        </div>
    );
}

export default CreateListingFormTab2;