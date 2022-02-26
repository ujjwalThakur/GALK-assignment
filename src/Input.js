import { useState } from "react"
import './Input.css'

const Input = ({onSubmit}) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false)

    const onChangeHandler = (event) => {
        if(event.target.value.length >= 5 && error) setError(false)
        setValue(event.target.value)
    }

    const onClickHandler = (event) => {
        event.preventDefault()
        
        if (value.length >= 5) {
            const id = Date.now()
            onSubmit(value, id)
            setValue('')
        }
        else setError(true)
    }

    return <form className='task-input-form'>
        <input
            type='text'
            className={error ? 'input-error' : ''}
            placeholder='New task ...'
            value={value}
            onChange={onChangeHandler} />
        {
            error && <span className='error-text'>Input cannot be less than 5 letters</span>
        }
        <button type='submit' onClick={onClickHandler}>ADD TASK</button>
    </form>
}

export default Input