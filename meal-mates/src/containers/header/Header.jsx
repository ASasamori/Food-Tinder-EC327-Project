import React from 'react';
import './header.css';
import logo from '../../assets/MealMe_LOGO.jpg';

const Header=({nextPage}) => {

    const handleClick = (ref) => {
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }


    return (
        <div className="home__header section__padding" id="home">
            <div className= "home__header-content"> 
                <img 
                    src={logo}
                    alt="logo" 
                    width="300" height="300"
                    style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}/>

                    <h1>Let the Feast Begin!</h1>
                    <p>Get ready to be matched!</p>
                
                    <button type="button" onClick={() => handleClick(nextPage)}>
                        <a>GET STARTED</a>
                    </button>
            </div>
        </div>
    
       
    )
}

export default Header;
