fetch('https://ghibliapi.herokuapp.com/films')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);

		// console.log(movie.title);
		// console.log(movie.description);

		// Data manipulation here
		data.forEach((movie) => {
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			const movieTitle = document.createElement('h1');
			movieTitle.textContent = movie.title;

			const movieDesc = document.createElement('p');
			movie.description = movie.description.substring(0, 300);
			movieDesc.textContent = `${movie.description}...`;

			container.appendChild(card);

			card.appendChild(movieTitle);
			card.appendChild(movieDesc);
		});
	})
	.catch((err) => {
		const errorMessage = document.createElement('errorMsg');
		errorMessage.textContent = `Error: ${err}`;
		app.appendChild(errorMessage);
	});

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
