import React from 'react';
import Card from './Card';

class PopularBattle extends React.Component {
    constructor() {
        super();
        this.state = {
            currentBattle: 0,
            movies: [],
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4cc1a3680987cfb0c255bd90ac481588")
            .then((res) => res.json())
            .then((res) => {
                this.setState({ movies: res.results })
                console.log(res.results);
            })
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Popular Battle</h1>
                <div className='d-flex flex-wrap justify-content-around'>

                    {this.state.movies.length !== 0 ? (
                        <>
                            <Card movie={this.state.movies[this.state.currentBattle]} />
                            <Card movie={this.state.movies[this.state.currentBattle + 1]} />
                        </>
                    ) : (<p>Loading...</p>
                    )}
                </div>
            </div>
        )
    }
}

export default PopularBattle;