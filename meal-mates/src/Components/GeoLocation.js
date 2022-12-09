import React, { Component } from "react";

// Takes around 10-15 seconds to make this call

export class GeoLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // I have no idea how to make this function public...
    componentDidMount() {
        let lat, long
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude
            long = position.coords.longitude
        });
        console.log(lat)
        console.log(long)
        return [lat,long] // Are these not integers? Try running again
    }

}
export function wait(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}