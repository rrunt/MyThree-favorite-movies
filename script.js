const movies = [
	{
		name: "Inception",
		year: 2010,
		director: "Christopher Nolan",
		poster: "https://live.staticflickr.com/1379/4733331637_b86a3dd9a7_b.jpg"
	},
	{
		name: "Interstellar",
		year: 2014,
		director: "Christopher Nolan",
		poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65425a1c-1d61-429b-bfa0-7dc046b30c9e/d7t74io-19a95829-8379-4c9f-95e1-ad7059924b58.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NDI1YTFjLTFkNjEtNDI5Yi1iZmEwLTdkYzA0NmIzMGM5ZVwvZDd0NzRpby0xOWE5NTgyOS04Mzc5LTRjOWYtOTVlMS1hZDcwNTk5MjRiNTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xy1XA21RGz4u9ajGOwUaAUHQ3UwwEZuwgEQqgBwv-BA"
	},
	{
		name: "2 Fast 2 Furious",
		year: 2003,
		director: "John Singleton",
		poster: "https://play-lh.googleusercontent.com/lRBmrMPn9xLTPsP31Ub6QdojHnhA1SlCQ0CIxtoka9Z3ZvfI-ywwEapXvNjeu751qfBNGGgrIC1NrT7Ipw"
	}
];

const movieList = document.getElementById("movie-list");

movies.map(movie => {
	const listItem = document.createElement("li");
	const movieName = document.createElement("h2");
	movieName.innerText = movie.name;
	const movieYear = document.createElement("p");
	movieYear.innerText = `Year: ${movie.year}`;
	const movieDirector = document.createElement("p");
	movieDirector.innerText = `Director: ${movie.director}`;
	const moviePoster = document.createElement("img");
	moviePoster.src = movie.poster;
	listItem.appendChild(movieName);
	listItem.appendChild(movieYear);
	listItem.appendChild(movieDirector);
	listItem.appendChild(moviePoster);
	movieList.appendChild(listItem);
});
