function initMap(){

    // Map option
  
    var options = {
        center: {lat: 41.716667 , lng: 44.783333 },
        zoom: 8
    }
  
    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)
  
    //listen for click on map location
  
    google.maps.event.addListener(map, "click", (event) => {
        //add Marker
        addMarker({location:event.latLng});
    })
  
  
    //Add Markers to Array
  
    let MarkerArray = [ {location:{lat:  41.7944, lng: 44.8214}, 
        // imageIcon: "https://img.icons8.com/nolan/2x/marker.png", 
        content: `<h2>გლდანი</h2>`},
  
        {location:{lat: 41.7686342, lng: 44.7403282}, content: `<h2>საბურთალო</h2>`},
  
        {location:{lat: 41.6724, lng: 44.9136},content: `<h2>ისანი</h2>` },
        {location:{lat: 41.98422, lng: 44.11578},content: `<h2>გორი</h2>` },
        {location:{lat: 41.944274, lng: 42.045809},content: `<h2>გურია</h2>` },
        {location:{lat: 42.26791, lng: 42.69459},content: `<h2>ქუთაისი</h2>` },
        {location:{lat: 41.91946000, lng: 45.47084000},content: `<h2>კახეთი</h2>` },
        {location:{lat: 41.643414, lng: 41.639900},content: `<h2>ბათუმი</h2>` }
  
  
  
    ]
  
    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);
  
    }
  
    // Add Marker
  
    function addMarker(property){
  
        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            //icon: property.imageIcon
            });
  
            // Check for custom Icon
  
            // if(property.imageIcon){
            //     // set image icon
            //     marker.setIcon(property.imageIcon)
            // }
  
            if(property.content){
  
            const detailWindow = new google.maps.InfoWindow({
            content: property.content
        });
    
        marker.addListener("mouseover", () =>{
            detailWindow.open(map, marker);
        });
    }
    }
  }
