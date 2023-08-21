document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'api-1.0',
			queueLength : 0,
			taxiQueueLength: 0,
			error:'',
			showError:false,
			init() {
				axios
					.get('https://taxi-queue-app-uj-2023.onrender.com/api/passenger/queue')
					.then(result => {
						// an example API call
						this.queueLength = result.data.queueCount.passenger_queue_count;
					});
				axios
				    .get('https://taxi-queue-app-uj-2023.onrender.com/api/taxi/queue')
				    .then((result)=>{
			     	 	this.taxiQueueLength = result.data.queueCount.taxi_queue_count;
				    });
			},
			join(){
				axios.post('https://taxi-queue-app-uj-2023.onrender.com/api/passenger/join').then((result)=>{
					this.queueLength = result.data.queue.passenger_queue_count;
				})
			},
			leave(){
				if(this.queueLength>0){
				axios.post('https://taxi-queue-app-uj-2023.onrender.com/api/passenger/leave').then((result)=>{
					this.queueLength = result.data.queue.passenger_queue_count;
				})}
			},
			taxiJoin(){
				axios.post('https://taxi-queue-app-uj-2023.onrender.com/api/taxi/join').then((result)=>{
					this.taxiQueueLength = result.data.queue.taxi_queue_count;
				})
			},
			taxiDepart(){
				if(this.queueLength > 11 ){
					axios.post('https://taxi-queue-app-uj-2023.onrender.com/api/taxi/depart').then((result)=>{
						this.taxiQueueLength = result.data.queue.taxi_queue_count;
						this.queueLength = result.data.queue.passenger_queue_count;
					})
				}
				else if (this.queueLength <= 11) {
					// This block will be executed if queueLength is less than or equal to 11
					this.error = "Not enough passengers in the queue";
					this.showError = true;
					setTimeout(() => {
						this.error = '';
						this.showError = false;
					}, 5000);
				}
			}

		}

	});
})