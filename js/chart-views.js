Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontColor = '#757575';
Chart.defaults.global.defaultFontSize = '12';

		var ctx = document.getElementById('chart').getContext('2d');

		var chart = new Chart(ctx, {
			type: 'line',

			// The data for our dataset
			data: {
				labels: ["January", "February", "March", "April", "May", "June"],
				// Information about the dataset
				datasets: [{
					label: "Views",
					backgroundColor: 'rgba(255,69,0,0.08)',
					borderColor: '#ff4500',
					borderWidth: "3",
					data: [194,134,212,370,214,250],
					pointRadius: 5,
					pointHoverRadius:5,
					pointHitRadius: 10,
					pointBackgroundColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointBorderWidth: "2",
				}]
			},

			// Configuration options
			options: {

				layout: {
				  padding: 10,
				},

				legend: { display: false },
				title:  { display: false },

				scales: {
					yAxes: [{
						scaleLabel: {
							display: false
						},
						gridLines: {
							 border: [1],
							 color: "rgba(225,225,225,0.5)",
							 lineWidth: 1,
						},
					}],
					xAxes: [{
						scaleLabel: { display: false },  
						gridLines:  { display: false },
					}],
				},

				tooltips: {
				  backgroundColor: '#242424',
				  titleFontSize: 13,
				  titleFontColor: '#fff',
				  bodyFontColor: '#fff',
				  bodyFontSize: 13,
				  displayColors: false,
				  xPadding: 10,
				  yPadding: 10,
				  intersect: false
				}
			},


	});
