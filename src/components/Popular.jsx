import React from 'react';

class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4cc1a3680987cfb0c255bd90ac481588")
            .then((res) => res.json())
            .then((res) => {
                this.setState({ movies: res.results })
            });
    }

    render() {
        return (
            <div>
                <h1>Popular</h1>
            </div>
        )
    }
}

export default Popular;