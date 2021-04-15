import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='sticky-top'>
            
            <NavLink exact to={"/"} activeClassName='btn-primary' className='btn btn-outline-primary'>Home</NavLink>
            <NavLink exact to={'/films'} activeClassName='btn-primary' className='btn btn-outline-primary'>Home</NavLink>
            <NavLink exact to={'/people'} activeClassName='btn-primary' className='btn btn-outline-primary'>Home</NavLink>

        
        
        
        </div>

    )
}

export default NavBar;