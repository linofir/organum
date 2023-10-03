import './DropDown.css';

const DropDown = (props) => {
    const defaultValue = (e) => {
        console.log(e.target.value);
        props.onChangeValue(e.target.value)

    }

    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select required={props.required} onChange={defaultValue} value={props.value}>
                <option value=""></option>
                {props.options.map(option => <option key={option}>{option}</option>)};
            </select>
        </div>
    )

};


export default DropDown;