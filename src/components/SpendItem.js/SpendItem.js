const SpendItem = (props) => {
    return (
        <div className="spend-list__element" key={props.spend.id}>
            <strong>{props.spend.name}</strong> - €{props.spend.amount}
        </div>
    );
}

export default SpendItem;