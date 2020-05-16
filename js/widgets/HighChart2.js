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
	var HighChart2  = function () {

		var highchart2 = {

			divHighChart2: null,

			init: function () {
					   highchart2.divHighChart2 = $('#widget-highchart2');
					   highchart2.getHighChart2Data();
					      },

  			getHighChart2Data: function () {
                    		var request = {
					widget: 'HighChart2',
					request: 'getHighChart2Data'
							};
		
			net.requestWidget(request, highchart2.displayHighChart2Data);
			
					},
			
			displayHighChart2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var highchart2data = result.value.highchart2;
					
					
					
				//	highchart2.renderChart(highchart2data);
					highchart2.renderChart(JSON.parse(highchart2data));
					
					
					},
					
			renderChart: function(highchartdata) {
			//	console.log(highchartdata);
				//    $('#line-highchart2').remove();
				//	$('#widget-highchart2').append('<canvas id="line-highchart2" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-highchart2").getContext('2d');
		Highcharts.chart('widget-highchart2',highchartdata);
		//console.log(highchartdata);
},		
			push: function (payload) {
				if (payload.highchart2 === undefined) {
					return;
				}
			//highchart2.renderChart(JSON.parse(payload));
				highchart2.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HighChart2.prototype, highchart2);
	};
	

	OCA.DashBoard.HighChart2 = HighChart2;
	OCA.DashBoard.highchart2 = new HighChart2();

})();
