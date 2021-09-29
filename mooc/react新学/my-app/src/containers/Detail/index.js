function Detail(props) {
    return (
        <div>
            {props.match.params.id}
        </div>
    );
}

export default Detail;