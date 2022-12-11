import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';

import { ThirtyMinFromNow } from "./components/APIs/YelpAPI";

// import {getRestInformation, ThirtyMinFromNow} from "./components/APIs/YelpAPI";
import {GeoLocation} from "./components/APIs/GeoLocation";

// for matching, iterate through the type of cousine, in the array, and if matching, hold the information of
// other type of food

function App() {
  const [dummy, setDummy] = useState(null)
  const [index, setIndex] = useState(0)
  // let myLocation = new GeoLocation()
  // let long = myLocation.componentDidMount()
  function getRestInformation(inputLocation, inputPrice) {
    const options = {
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search',
      params: {
        location: inputLocation,
        // latitude: lat,
        // longitude: long,
        price: inputPrice,
        // open_at: ThirtyMinFromNow(), // Date now is unix time of now, 1800 is unix for + 30 minutes
        sort_by: 'distance',
        radius: 8047,
        limit: '20' // randomize the limit that gets returned, min: 0, max: 50
      },
      headers: {
        accept: 'application/json',
        Authorization:
            'Bearer l5_sN8Upkix19lLgwHxpAMThs0G2RBKr0rNRPxJ7ZmlOFagJ9EMi_1vv9o0BJNsto0R0hU1enjBhinEDROi6zODQWf_Tdzk2Lhq47-Z1Xz8EP2EEmjws8MyqSp-LY3Yx'
      }
    };
    // Want to get name, distance, image_url, categories
    let myWork = []
    axios
        .request(options)
        .then(function (response) {

          console.log("success")
          myWork = response.data['businesses']
          setDummy(myWork)

        })
        .catch(function (error) {
          console.error(error);
        });
  }
  console.log('dummy that works???', dummy)
  // useEffect(() => {
  //   setTimeout(() => {
  //     getRestInformation('NYC', [1,2,3,4])
  //   },10000)
  // }, [getRestInformation])

  return (
    <div className="App">
      {dummy? <>{
        // dummy.map((shop, index) => (
        //     <div key={index}>name: { shop.id }</div>
        // ))
          dummy[`${index}`].name
      }
      <button onClick={() => setIndex(index+1)}></button>
      </> : (

          <button onClick={getRestInformation('NYC',[1,2,3,4])}>getinformation</button>
      )}

    </div>
  );
}

export default App;
