import React from "react";
import Geolocation from "react-geolocation";
import axios from "axios";

export default () => {
    return (
        <Geolocation
            onSuccess={console.log}
            render={({
                fetchingPosition,
                position: { coords: { latitude, longitude } = {} } = {},
                error,
                getCurrentPosition
            }) =>
                <div style={{ height: "200px", width: "100%", marginTop: "12px", backgroundColor: "#94A6BA" }}>
                    <button onClick={() => {
                        axios.get(`https://api.yelp.com/v3/businesses/search?term=vegan&latitude=${latitude}2&longitude=${longitude}`, {headers:{'Authorization': 'Bearer MMYJ3yJdo4wjuOyww4tJ8ypf4_S_kkZJRmPjsKu1dxVOnbs0Fw1Nw9cVeDUc52VsbER9Zq-ZioDKf-C0Wz5qzaRooTOHIb-WoJCLfmB8S9mxu5UuU9uJZV6Z2xhWW3Yx'}}).then(res => {
                            console.log(res.body)
                        })
                    }}>SHOW ME FOOD</button>
                </div>}
        />
    );
};



