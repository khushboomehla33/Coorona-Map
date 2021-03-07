function updateMap()
{
    // console.log("updating data");
    // fetch("data.json")
    const jsondata=  fetch('https://api.covid19api.com/summary');
    const jsdata= jsondata.json()
    .then(response=>response.json())
    .then(rsp=>{
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;

            cases= element.infected;
            if(cases>255)
                color= "rgb(255,0,0)";
            else
                color= `rgb(${cases},0,0)`;
            //mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);

        });
    })
}

// let interval=2000;
// setInterval(updateMap,interval);

updateMap();