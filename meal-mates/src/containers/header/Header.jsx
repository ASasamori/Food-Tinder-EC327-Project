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
            <br/>
        <img 
            src={logo}
            alt="logo" 
            width="300" height="300"
            style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}/>
        <br/><br/>
                 <h1 className="gradient__text">Let the Feast Begin!</h1>
                    <p style={{ textAlign: 'center' }}>Get ready to be matched!</p>
        
        <div className= "home__header-start">
             <button type="button" >GET STARTED</button>
             <button type="button" onClick={() => handleClick(nextPage)}>GET STARTED</button>
             
        </div>

            
        
        </div>
        </div>
    
       
    )
}

export default Header;