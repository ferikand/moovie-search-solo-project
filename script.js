const inputEl = document.querySelector("#search-inp");
const searchBtnEl = document.querySelector("#search-btn");
const resultsArea = document.querySelector("#results");

searchBtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(`http://www.omdbapi.com/?t=${inputEl.value}&apikey=5a80a0bc&plot=full`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.Poster);

      resultsArea.innerHTML =
        `
        <div class="movie">
          <div class="poster">
            <img src="${data.Poster}" alt="movie poster" />
          </div>
          <div class="movie-info">
            <p>${data.Title}</p>
          </div>
        </div>
              ` + resultsArea.innerHTML;
    });
});
