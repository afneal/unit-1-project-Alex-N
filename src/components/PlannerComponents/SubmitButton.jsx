

function SubmitButton ({ onClick, label, className}) {
    return (
        <button type="button" onClick={onClick} className={className}>
            {label}
        </button>
    );
}

export default SubmitButton;