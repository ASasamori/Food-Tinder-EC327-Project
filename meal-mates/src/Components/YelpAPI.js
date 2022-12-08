import axios from 'axios';

// Have to allow cross-control open access
// Have to open terminal and use the following lines (make sure in open terminal)
// open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security

//inputOpenAt is if the location is open in 30 minutes or not; has to use the Unix time code
//inputPrice is an integer array, with options of being: 1,2,3,4; 1 is cheapest, 4 is Gordon Ramsay
export function getRestInformation(inputLocation, inputPrice, inputOpenAt) {
    const options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        params: {
            location: inputLocation,
            price: inputPrice,
            open_at: inputOpenAt,
            sort_by: 'distance',
            radius: 8047,
            limit: '1'
        },
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer <insert Yelp Fusion API key here>'
        }
    };
    // Want to get name, distance, image_url, categories
    let ans = []
    axios
        .request(options)
        .then(function (response) {
            let e = response.data.businesses[0];
            ans.push(e) //is all the businesses of the list of things that you can retrieve
            //ans.push(e.name, e.distance, e.image_url, e.categories) // to retrieve these specific values
        })
        .catch(function (error) {
            console.error(error);
        });
    return ans
}