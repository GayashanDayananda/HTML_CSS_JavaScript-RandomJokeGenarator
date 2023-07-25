
// Method one //

const jokeContainer = document.getElementById("joke")
const btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();




// Method Two //

// const jokeContainer = document.getElementById("joke");
// const btn = document.getElementById("btn");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// let getJoke = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//     .then(response => response.json()) // Renamed the variable to "response" for clarity
//     .then(data => {
//         if (data.joke) { // Check if the "joke" property exists in the response
//             jokeContainer.textContent = `${data.joke}`;
//         } else {
//             jokeContainer.textContent = "Oops! No joke found."; // Handle the case when no joke is returned
//         }
//         jokeContainer.classList.add("fade");
//     })
//     .catch(error => {
//         jokeContainer.textContent = "Oops! Failed to fetch joke."; // Handle fetch errors
//         console.error(error); // Log the error to the console for debugging purposes
//     });
// };

// btn.addEventListener("click", getJoke);
// getJoke();

