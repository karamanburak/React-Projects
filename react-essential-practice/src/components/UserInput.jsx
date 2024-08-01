

const UserInput = ({ handleChange, userInput }) => {


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(e) => handleChange('initialInvestment', e.target.value)} />
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(e) => handleChange('annualInvestment', e.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(e) => handleChange('expectedReturn', e.target.value)} />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required value={userInput.duration} onChange={(e) => handleChange('duration', e.target.value)} />
            </p>
        </div>
    </section>;
};

export default UserInput;
