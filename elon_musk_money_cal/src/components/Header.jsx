
function Header() {
    const headerStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#427703',
        textAlign: 'center',
        margin: '25px 0',
        padding: '15px',
        border: '2px solid #427703',
        borderRadius: '8px',
        backgroundColor: '#f3f3f3',
    };
    return (
        <div className={'text-center'}>
            <div style={headerStyle}>
                Spend ELON MUSKS' Money
            </div>
            <div></div>
            <img src={'src/assets/elon-musk-smokes.jpg'} alt="Elon Musk Smoking" style={{
                maxWidth: '250px',
                height: '150px',
                margin: '30px auto 25px',
                borderRadius: '125px'
            }} />
        </div>
    );
}

export default Header;
