$(function(){
    Chart.defaults.global.defaultFontFamily = "Roboto";
	
	// Pie Chart
	
	var ctx = document.getElementById('pieChart').getContext('2d');
	var pieChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['Applied Jobs', 'Posted Jobs', 'Active Bids', 'Favourite Jobs'],
			datasets: [{
				label: '# of Votes',
				data: [30, 20, 10, 20],
				backgroundColor: [
					'#ff4500',
					'#49d086',
					'#b81b7f',
					'#efa80f'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			legend: {
				display: false
			}
		}
	});
	
});