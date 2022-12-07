import axios from 'axios';

//inputOpenAt is if the location is open in 30 minutes or not
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
                'Bearer l5_sN8Upkix19lLgwHxpAMThs0G2RBKr0rNRPxJ7ZmlOFagJ9EMi_1vv9o0BJNsto0R0hU1enjBhinEDROi6zODQWf_Tdzk2Lhq47-Z1Xz8EP2EEmjws8MyqSp-LY3Yx'
        }
    };


    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}