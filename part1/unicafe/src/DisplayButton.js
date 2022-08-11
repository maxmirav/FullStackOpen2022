const DisplayButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
}

export default DisplayButton;