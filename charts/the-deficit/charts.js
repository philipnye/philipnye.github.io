var options_ch1_complete = {}

var options_ch1 = {
	chart: {
		type: 'line',
	},
	credits: {
		enabled: true,
		href: null,
		text: '<span class="header">Notes</span><br>Public sector net borrowing excluding public sector banks.<br>Source: Office for National Statistics // Credit: Highcharts',
		position: {
			align: 'left',
			x: 4,
			y: -40
		}
	},
	legend: {
		enabled: false,
	},
	plotOptions: {
        series: {
			label: {
				connectorAllowed: true,
			},
			marker: {
				enabled: false,
			},
        },
	},
    series: [],
    subtitle: {
		align: 'left',
        text: 'Public sector net borrowing, 2008-2020, £bn',
    },
    title: {
		align: 'left',
        text: 'The deficit, reloaded',
    },
	tooltip: {
		enabled: false,
	},
	xAxis: {
		type: "category"
	},
	yAxis: {
    	labels: {
        	formatter: function () {
                return this.value/1000;		// convert to billion
            }
        },
		plotLines: [{
			value: 0,
			width: 1,
			zIndex: 10
		}],
    },
}

document.addEventListener('DOMContentLoaded', function () {		// chart maxima and minima, and 2020 values
    $.ajax({
	    url: '/charts/the-deficit/data.json',
	    success: function(json) {		// reshaping JSON data into an array per series - the format Highcharts requires
			data_ch1 = []
			for (h = 0; h < 3; h++) {
				data_ch1.push({name: null, data: [], className: null})		// min, max and 2020
			}
			data_ch1[0].name = 'Lowest monthly totals'
			data_ch1[1].name = 'Highest monthly totals, 2008-2019'
			data_ch1[2].name = '2020'
			data_ch1[0].className = 'navy dash'
			data_ch1[1].className = 'navy dash'
			data_ch1[2].className = 'yellow'
			for (i = 0; i < json.length; i++) {
				if (Object.values(json[i])[0] != 2020) {
					for (j = 1; j < Object.keys(json[i]).length; j++) {
						if (!data_ch1[0]['data'][j-1]) {		// j-1th object in the data array (accounting for the fact the array we're creating doesn't need to hold the year)
							data_ch1[0].data.push([Object.keys(json[i])[j], Object.values(json[i])[j]])
						}
						else if (Object.values(json[i])[j] < data_ch1[0]['data'][j-1][1]) {		// value in the j-1th object in the data array
							data_ch1[0]['data'][j-1][1] = Object.values(json[i])[j]
						}
						if (!data_ch1[1]['data'][j-1]) {
							data_ch1[1].data.push([Object.keys(json[i])[j], Object.values(json[i])[j]])
						}
						else if (Object.values(json[i])[j] > data_ch1[1]['data'][j-1][1]) {
							data_ch1[1]['data'][j-1][1] = Object.values(json[i])[j]
						}
					}
				}
				else {
					for (j = 1; j < Object.keys(json[i]).length; j++) {
						data_ch1[2].data.push([Object.keys(json[i])[j], Object.values(json[i])[j]])
					}
				}
			}
			options_ch1.series=data_ch1
			_.merge(options_ch1_complete, options_all, options_line, options_ch1);		// using lodash. options_ch1 will take precedence where there are any duplicates
			new Highcharts.Chart('ch1', options_ch1_complete);
	    }
	});
});
