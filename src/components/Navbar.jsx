import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-evenly'>
                <nav>
                    <Link className='p-3' to="/">Home</Link>
                    <Link className='p-3' to="/weekly">Weekly</Link>
                    <Link className='p-3' to="/weekly-battle">Weekly Battle</Link>
                    <Link className='p-3' to="/popular">Popular</Link>
                    <Link className='p-3' to="/popular-battle">Popular Battle</Link>
                    <Link className='p-3' to="/favorites">Favorites</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;