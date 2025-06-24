import InfoLabel from "./InfoLabel"
import InfoValue from "./InfoValue"

function InfoItem({label, value}) {
    return (
        <>
            <div className="info-item">
                <InfoLabel text={label} />
                <InfoValue text={value}/>
            </div>
        </>
    )
}

export default InfoItem