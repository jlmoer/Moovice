import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (

            <nav>
                <Link to="/">Home</Link>
                <Link to="/weekly">Weekly</Link>
                <Link to="/weekly-battle">Weekly Battle</Link>
                <Link to="/popular">Popular</Link>
                <Link to="/popular-battle">Popular Battle</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>

        )
    }
}

export default Navbar;