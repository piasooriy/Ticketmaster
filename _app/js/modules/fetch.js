import {ticketMasterToken} from '../env'
export default async function fetchEvents(){

	const baseurl = `https://app.ticketmaster.com/discovery/v2`;
	const options = {
		method: "GET",
		/* headers: {
			"Accept-version" : "v2",
		} */
		/* Don't think I need these, since it is already added to the baseURL */
	}
	const endpointInfo = `${baseurl}/events.json?countryCode=NO&${ticketMasterToken}`

	const response = await fetch(endpointInfo/* , options */);

	console.log(endpointInfo);


/* 	async function handleResponse(response) {
		if(response.ok) {
			const output = await response.json();	
			renderImage(output.urls.regular, output.alt_description);
		console.log(output)	
		} else if (response.status === 404) {
			throw new Error('URL does not exist');
		} else if ( response.status === 401) {
				throw new Error('Not authorized user');
		} else if ( response.status >= 500){
			throw new Error ('Server nor responding');
		} else {
			throw new Error('Something went wrong');
		}
		console.log(response); 
	} */

}
