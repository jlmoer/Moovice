import React from 'react';

class Card extends React.Component {

    render() {
        console.log(this.props);
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movie.title}</h5>
                        <p className="card-text overflow-auto" style={{ height: "10rem" }}>{this.props.movie.overview}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.movie.release_date}</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Card;