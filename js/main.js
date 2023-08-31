let apiKey = "ffb418ab3472a2924cc5a2d238af4019";
$("#get").click(function(event){
    event.preventDefault();
    let location = $("#location").val();
    if(location == ""){
      $("#error").html("*Please Input A Valid Location*")
    }else{
      $.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=209b0fa8c4f1093326dcc32133b8cbe3`, function (data) {
        let temp = data.main.temp;
        let cel = temp - 273.15
        let description = data.weather[0].description;
        $('#forecast').html(
            `<p>The current temperature in ${location} <br> is ${Math.round(cel)}°C with ${description} and a humidity of ${data.main.humidity}g.kg-1.</p>`
          );
        })
        $("#location").val("");
        $("#error").html("")
    }
});