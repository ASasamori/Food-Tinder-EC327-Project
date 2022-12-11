import axios from 'axios';
import {GeoLocation, wait} from "./GeoLocation";
import {useState} from "@types/react";

// Have to allow cross-control open access
// Have to open terminal and use the following lines (make sure in open terminal)
// open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security

//inputOpenAt is if the location is open in 30 minutes or not; has to use the Unix time code
//inputPrice is an integer array, with options of being: 1,2,3,4; 1 is cheapest, 4 is Gordon Ramsay

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

export function ThirtyMinFromNow(){
    const newDate = Date.now()
    const date = new Date(newDate)
    return (Math.floor(date.getTime()/1000) + 1800)
}