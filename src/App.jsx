import { useState } from 'react'
import InfoItem from './assets/components/common/InfoItem.jsx'
import Badge from './assets/components/common/Badge.jsx'
import Form from './assets/components/common/Form.jsx'
import './App.css'

function App() {
  const [validationResult, setValidationResult] = useState({
          "phone": "+14152007986",
          "valid": true,
          "format": {
              "international": "+14152007986",
              "local": "(415) 200-7986"
          },
          "country": {
              "code": "US",
              "name": "United States",
              "prefix": "+1"
          },
          "location": "San Francisco, California",
          "type": "landline",
          "carrier": "O1 Communications"
    })

  return (
    <>
    <div className="container">
        <h1>Phone number verification</h1>
        <Form validationResult={validationResult} setValidationResult={setValidationResult}/>
        {validationResult && !Form.isLoading && (
        <>
        <div className="result-card" id="resultCard">
            <h2 className="result-title">
                Number: {validationResult.format.local}
                <Badge isValid={validationResult.valid}/>
            </h2>
            <div className="info-grid">
                <InfoItem label={'International format'} value={validationResult.format.international}/>
                <InfoItem label={'Local format'} value={validationResult.format.local}/>
                <InfoItem label={'Country'} value={[<img src={`https://flagcdn.com/${validationResult.country.code.toLowerCase()}.svg`} className="flag-icon" alt={validationResult.countryCodeShort} />, validationResult.country.name]}/>
                <InfoItem label={'Country code'} value={validationResult.country.prefix}/>
                <InfoItem label={'Location'} value={validationResult.location}/>
                <InfoItem label={'Number type'} value={validationResult.type}/>
                <InfoItem label={'Carrier'} value={validationResult.carrier}/>
            </div>
        </div>
        </>
        )}
    </div>
    </>
  )
}

export default App
