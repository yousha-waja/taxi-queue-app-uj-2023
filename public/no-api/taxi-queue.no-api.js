document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			queueCount:0,
			taxiCount:0,
			error:'',
			showError:false,
			leave(){
				if(this.queueCount)
				this.queueCount--;
			},
			depart() {
                if (this.taxiCount >= 1 && this.queueCount >= 12) {
                    this.queueCount -= 12;
                    this.taxiCount--;
                } else if (this.taxiCount <= 0) {
                    this.showError=true;
					this.error="There are no taxi's available!";
					setTimeout(()=>{
						this.showError=false;
					    this.error="";
					},5000);
                } else if (this.queueCount < 12) {
                    this.showError=true;
					this.error="There are not enough passengers in the queue!";
					setTimeout(()=>{
						this.showError=false;
					    this.error="";
					},5000);
                }
            }
		}

	});
});