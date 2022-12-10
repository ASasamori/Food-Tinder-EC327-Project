import axios from 'axios';
import {GeoLocation, wait} from "./GeoLocation";

// Have to allow cross-control open access
// Have to open terminal and use the following lines (make sure in open terminal)
// open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security

//inputOpenAt is if the location is open in 30 minutes or not; has to use the Unix time code
//inputPrice is an integer array, with options of being: 1,2,3,4; 1 is cheapest, 4 is Gordon Ramsay
export function getRestInformation(inputLocation, inputPrice) {
    const options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        params: {
            location: inputLocation,
            // latitude: lat,
            // longitude: long,
            price: inputPrice,
            open_at: ThirtyMinFromNow(), // Date now is unix time of now, 1800 is unix for + 30 minutes
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
    let ans = []
    axios
        .request(options)
        .then(function (response) {
            let e = response.data.businesses;
            ans.push(e) //is all the businesses of the list of things that you can retrieve
            //ans.push(e.name, e.distance, e.image_url, e.categories) // to retrieve these specific values
        })
        .catch(function (error) {
            console.error(error);
        });
    return ans
}
export function ThirtyMinFromNow(){
    const newDate = Date.now()
    const date = new Date(newDate)
    return (Math.floor(date.getTime()/1000) + 1800)
}