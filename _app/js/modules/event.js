import { ticketMasterToken } from "../env.js";
import renderEvent from "./eventlist.js";

export default async function event() {

	const baseurl = `https://app.ticketmaster.com/discovery/v2`;
	const options = {
		method: "GET",
		headers: {
			'Accept': 'image/jpeg, text'
		}, 
		mode:'cors'
	}
	const endpointInfo = `${baseurl}/events.json?countryCode=NO&${ticketMasterToken}`
	const response = await fetch(endpointInfo, options);
	const events = await(response.json());

	console.log(events);
	return events;
	
}	


	





