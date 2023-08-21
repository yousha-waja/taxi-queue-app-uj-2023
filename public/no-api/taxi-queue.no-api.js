document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			queueCount:0,
			taxiCount:0,
			leave(){
				if(this.queueCount)
				this.queueCount--;

			}
		}

	});
});