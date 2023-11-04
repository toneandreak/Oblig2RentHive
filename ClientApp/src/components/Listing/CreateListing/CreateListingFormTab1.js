import React, { useState } from 'react';

function CreateListingFormTab1() {

    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 


    return (
        <div>
            <h3>Introduce your beehive</h3>

            <div className="form-group">
                <label htmlFor="Title">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    className="form-control" id="Title" placeholder="Enter a catchy title here"
                    title="Your title will be displayed along with the picture and serves as a first impression.">
            </div>


            <div className="form-group">
                <label htmlFor="Description">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    id="Description"
                    placeholder="Describe your apartment"
                    title="The description provides potential renters with more details about your apartment."
                    rows="6" cols="7" style={{ marginBottom: '5%' }}
                ></textarea>
            </div>
        </div>
    );
}

export default CreateListingFormTab1;