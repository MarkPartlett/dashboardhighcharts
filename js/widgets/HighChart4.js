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
	var HighChart4  = function () {

		var highchart4 = {

			divHighChart4: null,

			init: function () {
					   highchart4.divHighChart4 = $('#widget-highchart4');
					   highchart4.getHighChart4Data();
					      },

  			getHighChart4Data: function () {
                    		var request = {
					widget: 'HighChart4',
					request: 'getHighChart4Data'
							};
		
			net.requestWidget(request, highchart4.displayHighChart4Data);
			
					},
			
			displayHighChart4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var highchart4data = result.value.highchart4;
					
					
					
				//	highchart4.renderChart(highchart4data);
					highchart4.renderChart(JSON.parse(highchart4data));
					
					
					},
					
			renderChart: function(highchartdata) {
			//	console.log(highchartdata);
				//    $('#line-highchart4').remove();
				//	$('#widget-highchart4').append('<canvas id="line-highchart4" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-highchart4").getContext('2d');
		Highcharts.chart('widget-highchart4',highchartdata);
		//console.log(highchartdata);
},		
			push: function (payload) {
				if (payload.highchart4 === undefined) {
					return;
				}
			//highchart4.renderChart(JSON.parse(payload));
				highchart4.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HighChart4.prototype, highchart4);
	};
	

	OCA.DashBoard.HighChart4 = HighChart4;
	OCA.DashBoard.highchart4 = new HighChart4();

})();
