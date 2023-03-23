const randomFolks = document.querySelector(".random-peeps");

//Pull 5 users from the random user API:
const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    //console.log(data);

    //userResults are plucked from the "results" array found in the "data" JSON object:
    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);

};

getData();

//Display the users on the page:
const displayUsers = function (userResults) {
    //clear the contents of the element, if any
    randomFolks.innerHTML = "";
    //grab the country location, first name, and med-sized pic from the data returned by API
    for (let user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imgUrl = user.picture.medium;

        //create a div in the HTML doc and populate with the random user info 
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imgUrl} alt="User avatar" />
        `;
        //append the element in the randomFolks variable so the requested info in the for..of loop appears on the page (div class "random-peeps" in the provided HTML and CSS style sheet)
        randomFolks.append(userDiv);
    };
};