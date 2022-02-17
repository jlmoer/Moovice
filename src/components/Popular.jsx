import React from 'react';
import Card from './Card';

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
                console.log(res.results);
            });
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Popular</h1>
                <div className='d-flex flex-wrap justify-content-around'>
                    {this.state.movies.map((data) => (

                        <Card movie={data} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Popular;