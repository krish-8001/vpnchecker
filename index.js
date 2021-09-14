


fetch('https://ipapi.co/json/')
.then(function(response) {
  response.json().then(jsonData => {
    console.log(jsonData);


         const data= jsonData;
        console.log(data);
          document.getElementById("query").innerHTML = data.ip;
        document.getElementById("isp").innerHTML = data.isp;
         document.getElementById("org").innerHTML = data.org;
         document.getElementById("timezone").innerHTML = data.timezone;

         document.getElementById("country").innerHTML = data.country_name;
         document.getElementById("countryCode").innerHTML = data.country;
         document.getElementById("regionName").innerHTML = data.region;
          document.getElementById("region").innerHTML = data.region_code;
        document.getElementById("city").innerHTML = data.city;

         
         
         document.getElementById("zip").innerHTML = data.postal;
        
          document.getElementById("lat").innerHTML = data.latitude;
         document.getElementById("lon").innerHTML = data.longitude;
       document.getElementById("currency").innerHTML = data.currency;

       latitudee=data.latitude;
       longitudee=data.longitude;
       console.log(latitudee);
       new mapboxgl.Marker({
        draggable: false,
        color:"#EA320A",
        center:[longitudee, latitudee]
    }).setLngLat([longitudee, latitudee])
    .addTo(map)

  });
})
.catch(function(error) {
  console.log(error)
});