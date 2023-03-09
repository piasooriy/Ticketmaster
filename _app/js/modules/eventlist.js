
import { ticketMasterToken } from "../env.js";

export default async function event() {
	const baseurl = `https://app.ticketmaster.com/discovery/v2`;
	const options = {
		method: "GET",
		headers: {
			'Accept': 'image/jpeg, text'
		}, 
		mode:'cors'
	}
	const endpointInfo = `${baseurl}/events.json?${ticketMasterToken}&locale=*&size=200&city=oslo&countryCode=NO`
	const response = await fetch(endpointInfo, options);
	const eventData = await response.json();
	const events = eventData._embedded.events;
	renderEvents(events);
}

function renderEvents(events) {
	const imageContainer = document.querySelector('.event__section-events');
	imageContainer.innerHTML = '';
	for (const event of events) {
		const image = event.images[1].url;
		const eventName = event.name;
		const eventDate = event.dates.start.localDate;
		const eventTime = event.dates.start.localTime;
		const venueName = event._embedded.venues[0].name;
		const city = event._embedded.venues[0].city.name;

		// Creating the HTML elements
		const imageElement = document.createElement('figure');
		const imageUrl = `${event.images[0].url}`;
		imageElement.innerHTML = `
			<img src="${imageUrl}" alt="${eventName}">
			<figcaption>
				<p>${eventName}</p>
				<p>Date: ${eventDate}</p>
				<p>Time: ${eventTime}</p>
				<p>Venue: ${venueName}</p>
				<p>City: ${city}</p>
			</figcaption>
		`;

		// Appending the HTML elements to the container
		imageContainer.appendChild(imageElement);
	}
}

