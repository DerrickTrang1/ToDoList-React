function Card(props) {
    return (
        <div className="mainbodycard">
            <h1>{props.name}</h1>
            <p>{props.cardinformation}</p>
        </div>
    );
}

Card.defaultProps = {
    name: "sadfsfadadsf",
    cardinformation: "DefasProp",
};

export default Card