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
	var HighChart3  = function () {

		var highchart3 = {

			divHighChart3: null,

			init: function () {
					   highchart3.divHighChart3 = $('#widget-highchart3');
					   highchart3.getHighChart3Data();
					      },

  			getHighChart3Data: function () {
                    		var request = {
					widget: 'HighChart3',
					request: 'getHighChart3Data'
							};
		
			net.requestWidget(request, highchart3.displayHighChart3Data);
			
					},
			
			displayHighChart3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var highchart3data = result.value.highchart3;
					
					
					
				//	highchart3.renderChart(highchart3data);
					highchart3.renderChart(JSON.parse(highchart3data));
					
					
					},
					
			renderChart: function(highchartdata) {
			//	console.log(highchartdata);
				//    $('#line-highchart3').remove();
				//	$('#widget-highchart3').append('<canvas id="line-highchart3" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-highchart3").getContext('2d');
		Highcharts.chart('widget-highchart3',highchartdata);
		//console.log(highchartdata);
},		
			push: function (payload) {
				if (payload.highchart3 === undefined) {
					return;
				}
			//highchart3.renderChart(JSON.parse(payload));
				highchart3.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HighChart3.prototype, highchart3);
	};
	

	OCA.DashBoard.HighChart3 = HighChart3;
	OCA.DashBoard.highchart3 = new HighChart3();

})();
