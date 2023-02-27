

export default async function fetchEvents(){



	const baseurl = `https://app.ticketmaster.com`;
	const apiKey = `/discovery/v2/events.json?countryCode=NO&apikey=l5FpZdDgW77wu8R3pCIacHNcTXTAA9mp`;
	const options = {
		method: "GET",
		/* headers: {
			"Accept-version" : "v2",
		} */
	}
	const endpointInfo = `${baseurl}${apiKey}`

	const response = await fetch(endpointInfo, options);


	async function handleResponse(response) {
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
	}

}
