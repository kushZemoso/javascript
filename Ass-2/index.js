
async function getData(uId) {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Fetched the data!");
          resolve (uId + "@gmail.com");}, 4000);
      });
      document.getElementById("demo").innerHTML = await myPromise;}
    
    console.log("start");
    var email = getData("kushagra");
    console.log("end");