import './TextInput.css';

const TextInput = (props) => {
    
    const typing = (e) =>{
        props.onChangeValue(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} type='text' placeholder={props.placeholder} required={props.required} />
            
        </div>

       
    )
};

export default TextInput;