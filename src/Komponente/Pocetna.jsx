import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 


const slideImages = [
  'https://arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ELBFECKDMNGRXGGIMDFLUFT3CU.jpg',
  'https://c1.wallpaperflare.com/preview/755/538/407/drink-store-wine.jpg',
  'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg'
];

const Pocetna = () => {
 




    return (

      <div> 
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Pocetna;