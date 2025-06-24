function Badge({ isValid }) {
    return (
        <>
            <span className={isValid ? 'valid-badge' : 'invalid-badge'}>{isValid ? 'Valid' : 'Invalid'}</span>
        </>
    )
}

export default Badge