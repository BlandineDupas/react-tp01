const Input = ({ type, inputName, id, label, value, changeInputValue }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} name={inputName} id={id} value={value} onChange={(evt) => changeInputValue(inputName, evt.target.value)}></input>
    </div>
);

export default Input;