function updateTimeLondon() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    "h:mm:ss [<small>] A [</small>]"
  )}`;
}

updateTimeLondon();
setInterval(updateTimeLondon, 1000);

function updateTimeSydney() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTimeSydney();
setInterval(updateTimeSydney, 1000);

function updateTimeRio() {
  let rioElement = document.querySelector("#rio");
  let rioDateElement = rioElement.querySelector(".date");
  let rioTimeElement = rioElement.querySelector(".time");
  let rioTime = moment().tz("Brazil/East");

  rioDateElement.innerHTML = rioTime.format("MMMM Do YYYY");
  rioTimeElement.innerHTML = `${rioTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTimeRio();
setInterval(updateTimeRio, 1000);
