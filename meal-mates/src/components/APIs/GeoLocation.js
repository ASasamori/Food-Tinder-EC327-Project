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
            console.log(position)
        });
        // Are these not integers? Try running again
    }

}