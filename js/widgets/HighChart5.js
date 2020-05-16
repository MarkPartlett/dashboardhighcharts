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
	var HighChart5  = function () {

		var highchart5 = {

			divHighChart5: null,

			init: function () {
					   highchart5.divHighChart5 = $('#widget-highchart5');
					   highchart5.getHighChart5Data();
					      },

  			getHighChart5Data: function () {
                    		var request = {
					widget: 'HighChart5',
					request: 'getHighChart5Data'
							};
		
			net.requestWidget(request, highchart5.displayHighChart5Data);
			
					},
			
			displayHighChart5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var highchart5data = result.value.highchart5;
					
					
					
				//	highchart5.renderChart(highchart5data);
					highchart5.renderChart(JSON.parse(highchart5data));
					
					
					},
					
			renderChart: function(highchartdata) {
			//	console.log(highchartdata);
				//    $('#line-highchart5').remove();
				//	$('#widget-highchart5').append('<canvas id="line-highchart5" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-highchart5").getContext('2d');
		Highcharts.chart('widget-highchart5',highchartdata);
		//console.log(highchartdata);
},		
			push: function (payload) {
				if (payload.highchart5 === undefined) {
					return;
				}
			//highchart5.renderChart(JSON.parse(payload));
				highchart5.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HighChart5.prototype, highchart5);
	};
	

	OCA.DashBoard.HighChart5 = HighChart5;
	OCA.DashBoard.highchart5 = new HighChart5();

})();
