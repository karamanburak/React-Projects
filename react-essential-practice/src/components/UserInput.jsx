import React from "react";

const UserInput = () => {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="text" />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="text" />
            </p>
        </div>
    </section>;
};

export default UserInput;
