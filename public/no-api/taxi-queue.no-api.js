document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0'
		}

	});


	function TaxiQueue() {


		function joinQueue() {
	
		}
	
		function leaveQueue() {
	
		}
	
		function joinTaxiQueue() {
	
		}
	
		function queueLength() {
	
		}
	
		function taxiQueueLength() {
	
		}
	
		function taxiDepart(){
	
		}
	
		return {
			joinQueue,
			leaveQueue,
			joinTaxiQueue,
			queueLength,
			taxiQueueLength,
			taxiDepart
		}
	}

});


