/**
 * Nextcloud - Dashboard Charting app
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Mark Partlett <mark@partlettconsulting.com.au>
 * @copyright 2019, Mark Partlett <mark@partlettconsulting.com.au>
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


/** global: OCA */
/** global: net */


(function () {

	/**
	 * @constructs Charts
	 */
	var HighChart1  = function () {

		var highchart1 = {

			divHighChart1: null,

			init: function () {
					   highchart1.divHighChart1 = $('#widget-highchart1');
					   highchart1.getHighChart1Data();
					      },

  			getHighChart1Data: function () {
                    		var request = {
					widget: 'HighChart1',
					request: 'getHighChart1Data'
							};
		
			net.requestWidget(request, highchart1.displayHighChart1Data);
			
					},
			
			displayHighChart1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var highchart1data = result.value.highchart1;
					
					
					
					
					highchart1.renderChart(JSON.parse(highchart1data));
					
					
					},
					
			renderChart: function(hchartdata) {
			//	console.log(hchartdata);
				//    $('#line-highchart1').remove();
				//	$('#widget-highchart1').append('<canvas id="line-highchart1" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-highchart1").getContext('2d');
		Highcharts.chart('widget-highchart1',hchartdata);
	//	console.log(hchartdata);
},		
			push: function (payload) {
				if (payload.highchart1 === undefined) {
					return;
				}
			
				highchart1.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HighChart1.prototype, highchart1);
	};
	

	OCA.DashBoard.HighChart1 = HighChart1;
	OCA.DashBoard.highchart1 = new HighChart1();

})();
