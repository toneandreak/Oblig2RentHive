import React, { useState } from 'react';

function CreateListingFormTab2() {

    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');


    return (
        <div>
            <h3>Address Details</h3>

            <div className="form-group">
                <label htmlFor="Street">Street</label>
                <input value={street} onChange={(e) => setStreet(e.target.value)}
                    className="form-control" placeholder="e.g., Pilestredet 35" id="Street">
            </div>

            <div class="form-group">
                <label htmlFor="City">City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)}
                    className="form-control" id="City" placeholder="e.g., Oslo" >
            </div>

            <div class="form-group">
                <label htmlFor="Country">Country</label>
                <input value={country} onChange={(e) => setCountry(e.target.value)}
                    className="form-control" placeholder="e.g., Norway" id="Country">
            </div>
            
            <div class="form-group">
                <label htmlFor="ZipCode">Zip Code</label>
                <input value={zipCode} onChange={(e) => setZipCode(e.target.value)}
                    className="form-control" placeholder="e.g., 0176 " id="ZipCode" >
            </div>

            <div class="form-group">
                <label htmlFor="State">State (Optional)</label>
                <input value={state} onChange={(e) => setState(e.target.value)} className="form-control"
                    data-optional="true" id="State" style="margin-bottom: 5%;">
            </div>

        </div>
    );
}

export default CreateListingFormTab2;