import { useState } from 'react'
import { validatePhoneNumber } from '../../features/phoneValidation/api/phoneValidation'

function Form({validationResult, setValidationResult}) {
    const [phoneNumber, setPhoneNumber] = useState('+14152007986')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        validatePhoneNumber(phoneNumber)
        .then(result => {
            setValidationResult(result)
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <>
        <form className="search-form" id="phoneValidationForm" onSubmit={handleSubmit}>
            <input type="text" className="search-input" id="phoneInput" placeholder="Enter your phone number (eg +14152007986)" value={phoneNumber} onChange={handleChange}/>
            <button type="submit" disabled={isLoading || !phoneNumber} className="search-button">{isLoading ? 'Verification...' : 'Verificate'}</button>
        </form>

        {isLoading && <p>Loading...</p>}

        {error && (
            <div className="error">
                <p>Error: {error}</p>
            </div>
        )}
        </>
    )
}
export default Form