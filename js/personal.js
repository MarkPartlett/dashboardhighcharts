/**
 * Nextcloud - Dashboard HighChart app
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

});
 */
 
   $(window).on('load', function() {
 // $("#settings-Formio1").show();	 
   
   // show the High-Charts create Buttons.
    $("#Edit-HighChart1-button").show();
	$("#Edit-HighChart2-button").show();
	$("#Edit-HighChart3-button").show();
	$("#Edit-HighChart4-button").show();
	$("#Edit-HighChart5-button").show();
	$("#Edit-HighChart6-button").show();
	$("#Edit-HighChart7-button").show();
	$("#Edit-HighChart8-button").show();
	$("#Edit-HighChart9-button").show();
	$("#Edit-HighChart10-button").show();

    });
 


 highed.setLang('en');
 	    highed.ready(function () {
		html = 	highed.dom.get('HighChart1').value;
	//	highed.ModalEditor.editor.chart.options.setAll(html);
        highed.ModalEditor('Edit-HighChart1-button', {
           // features: 'import templates',
            allowDone: true 
        }, function (html) {
            	highed.dom.get('HighChart1').value = html;
        });
    });

   $(window).on('load', function() {
   $("#Edit-HighChart1").show();	 
   });
 
	    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart2-button', {
           // features: 'import templates',
            allowDone: true 
        }, function (html) {
            	highed.dom.get('HighChart2').value = html;
        });
    });

		    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart3-button', {
           // features: 'import templates',
            allowDone: true
			
        }, function (html) {
            	highed.dom.get('HighChart3').value = html;
        });
    });
			    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart4-button', {
           // features: 'import templates',
            allowDone: true			
        }, function (html) {
            	highed.dom.get('HighChart4').value = html;
        });
    });
			    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart5-button', {
           // features: 'import templates',
            allowDone: true
        }, function (html) {
            	highed.dom.get('HighChart5').value = html;
        });
    });			    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart6-button', {
           // features: 'import templates',
            allowDone: true
        }, function (html) {
            	highed.dom.get('HighChart6').value = html;
        });
    });
				    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart7-button', {
           // features: 'import templates',
            allowDone: true
        }, function (html) {
            	highed.dom.get('HighChart7').value = html;
        });
    });
				    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart8-button', {
           // features: 'import templates',
            allowDone: true
        }, function (html) {
            	highed.dom.get('HighChart8').value = html;
        });
    });
				    highed.ready(function () {
        highed.ModalEditor('Edit-HighChart9-button', {
           // features: 'import templates',
            allowDone: true
        }, function (html) {
            	highed.dom.get('HighChart9').value = html;
        });
    });
	
	
$(document).ready(function() {

	var urlRegex = /https?:\/\/([^\/]+)/,
		$urlInput = $('#dashboard-textChart1_0'),
		$textarea = $('#dashboard-textarea0'),
		$section = $('#dashboard-section'),
		$saveButton = $section.find('button'),
		cachebuster = parseInt($section.data('cachebuster'));
     var DivArray = $('div[class="targetDiv"]').toArray();
	 var active = 0;
	 console.log(active);
	 console.log(DivArray);
	 $(DivArray[active]).show();
		
		
	$('#dashboard-up').on('click', function(event) {
		event.preventDefault();
		if(active < DivArray.length-1){
		console.log(active++);
		$(DivArray).hide();
		$(DivArray[active]).show();
		}});
	$('#dashboard-down').on('click', function(event) {
		event.preventDefault();
		if(active >=1){
		console.log(active--);
		$(DivArray).hide();
		$(DivArray[active]).show();
		}});

	$('#dashboard-save').on('click', function(event) {
		event.preventDefault();

		var selector = '#dashboard-message',
			snippetValue = $textarea.val(),
			urlValue = $urlInput.val();
			$section.find('textarea').each(function(){
		$(this).prop('disabled', true);
		});
		OC.msg.startSaving(selector);
		
		var returnMsg = '[{';
		$section.find('textarea').each(function(){
		returnMsg += "\"widget\":\""+ $(this).attr('id')+"\",\"data\":"+ highed.dom.get(this).value +"},{";
			});
		returnMsg = returnMsg.substring(0, returnMsg.length - 3);
		returnMsg += "}]";
		
		returnMsg = 'dashboard=' + returnMsg;
		console.log(returnMsg);
		
	//	function saveSettings() {
	//	OC.msg.startSaving('#activity_notifications_msg');
	//	var post = $(returnMsg).serialize();
		var post = returnMsg;

		$.post(OC.generateUrl('/apps/dashboardhighcharts/settings'), post, function(response) {
			OC.msg.finishedSuccess('#activity_notifications_msg', response.set);
		});
	//}
			
		$section.find('textarea').each(function(){
		$(this).prop('disabled', false);
		});	
		

	//	OCP.AppConfig.setValue('dashboard', 'snippet', snippetValue, {
	//		success: function(){
	//			$textarea.prop('disabled', false);

	//			OCP.AppConfig.setValue('dashboard', 'widget', urlValue, {
	//				success: function(){
	//					$urlInput.prop('disabled', false);
	//					OC.msg.finishedSuccess(selector, t('settings', 'Saved'));
	//				},
	//				error: function(){
	//					$urlInput.prop('disabled', false);
	//					OC.msg.finishedError(selector, t('dashboard', 'Error while saving'));
	//				}
	//			});
	//		},
	//		error: function(){
	//			$textarea.prop('disabled', false);
	//			$urlInput.prop('disabled', false);
	//			OC.msg.finishedError(selector, t('dashboard', 'Error while saving'));
	//		}
	//	});

		cachebuster += 1;
		OCP.AppConfig.setValue('dashboardcharts', 'cachebuster', cachebuster);
	});

	
	$('#dashboard-load').on('click', function(event) {
		event.preventDefault();

		var returnMsg = 'dashboard=[{\"widget\":\"HighChart1\",\"data\":{\"chart\":{\"type\":\"packedbubble\",\"height\":\"100%\"},\"title\":{\"text\":\"Carbon emissions around the world (2014)\"},\"tooltip\":{\"useHTML\":true,\"pointFormat\":\"<b>{point.name}:<\\\/b> {point.y}m CO<sub>2<\\\/sub>\"},\"plotOptions\":{\"packedbubble\":{\"minSize\":\"20%\",\"maxSize\":\"100%\",\"zMin\":0,\"zMax\":1000,\"layoutAlgorithm\":{\"gravitationalConstant\":0.05,\"splitSeries\":true,\"seriesInteraction\":false,\"dragBetweenSeries\":true,\"parentNodeLimit\":true},\"dataLabels\":{\"enabled\":true,\"format\":\"{point.name}\",\"filter\":{\"property\":\"y\",\"operator\":\">\",\"value\":250},\"style\":{\"color\":\"black\",\"textOutline\":\"none\",\"fontWeight\":\"normal\"}}}},\"series\":[{\"name\":\"Europe\",\"data\":[{\"name\":\"Germany\",\"value\":767.1},{\"name\":\"Croatia\",\"value\":20.7},{\"name\":\"Belgium\",\"value\":97.2},{\"name\":\"Czech Republic\",\"value\":111.7},{\"name\":\"Netherlands\",\"value\":158.1},{\"name\":\"Spain\",\"value\":241.6},{\"name\":\"Ukraine\",\"value\":249.1},{\"name\":\"Poland\",\"value\":298.1},{\"name\":\"France\",\"value\":323.7},{\"name\":\"Romania\",\"value\":78.3},{\"name\":\"United Kingdom\",\"value\":415.4},{\"name\":\"Turkey\",\"value\":353.2},{\"name\":\"Italy\",\"value\":337.6},{\"name\":\"Greece\",\"value\":71.1},{\"name\":\"Austria\",\"value\":69.8},{\"name\":\"Belarus\",\"value\":67.7},{\"name\":\"Serbia\",\"value\":59.3},{\"name\":\"Finland\",\"value\":54.8},{\"name\":\"Bulgaria\",\"value\":51.2},{\"name\":\"Portugal\",\"value\":48.3},{\"name\":\"Norway\",\"value\":44.4},{\"name\":\"Sweden\",\"value\":44.3},{\"name\":\"Hungary\",\"value\":43.7},{\"name\":\"Switzerland\",\"value\":40.2},{\"name\":\"Denmark\",\"value\":40},{\"name\":\"Slovakia\",\"value\":34.7},{\"name\":\"Ireland\",\"value\":34.6},{\"name\":\"Croatia\",\"value\":20.7},{\"name\":\"Estonia\",\"value\":19.4},{\"name\":\"Slovenia\",\"value\":16.7},{\"name\":\"Lithuania\",\"value\":12.3},{\"name\":\"Luxembourg\",\"value\":10.4},{\"name\":\"Macedonia\",\"value\":9.5},{\"name\":\"Moldova\",\"value\":7.8},{\"name\":\"Latvia\",\"value\":7.5},{\"name\":\"Cyprus\",\"value\":7.2}]},{\"name\":\"Africa\",\"data\":[{\"name\":\"Senegal\",\"value\":8.2},{\"name\":\"Cameroon\",\"value\":9.2},{\"name\":\"Zimbabwe\",\"value\":13.1},{\"name\":\"Ghana\",\"value\":14.1},{\"name\":\"Kenya\",\"value\":14.1},{\"name\":\"Sudan\",\"value\":17.3},{\"name\":\"Tunisia\",\"value\":24.3},{\"name\":\"Angola\",\"value\":25},{\"name\":\"Libya\",\"value\":50.6},{\"name\":\"Ivory Coast\",\"value\":7.3},{\"name\":\"Morocco\",\"value\":60.7},{\"name\":\"Ethiopia\",\"value\":8.9},{\"name\":\"United Republic of Tanzania\",\"value\":9.1},{\"name\":\"Nigeria\",\"value\":93.9},{\"name\":\"South Africa\",\"value\":392.7},{\"name\":\"Egypt\",\"value\":225.1},{\"name\":\"Algeria\",\"value\":141.5}]},{\"name\":\"Oceania\",\"data\":[{\"name\":\"Australia\",\"value\":409.4},{\"name\":\"New Zealand\",\"value\":34.1},{\"name\":\"Papua New Guinea\",\"value\":7.1}]},{\"name\":\"North America\",\"data\":[{\"name\":\"Costa Rica\",\"value\":7.6},{\"name\":\"Honduras\",\"value\":8.4},{\"name\":\"Jamaica\",\"value\":8.3},{\"name\":\"Panama\",\"value\":10.2},{\"name\":\"Guatemala\",\"value\":12},{\"name\":\"Dominican Republic\",\"value\":23.4},{\"name\":\"Cuba\",\"value\":30.2},{\"name\":\"USA\",\"value\":5334.5},{\"name\":\"Canada\",\"value\":566},{\"name\":\"Mexico\",\"value\":456.3}]},{\"name\":\"South America\",\"data\":[{\"name\":\"El Salvador\",\"value\":7.2},{\"name\":\"Uruguay\",\"value\":8.1},{\"name\":\"Bolivia\",\"value\":17.8},{\"name\":\"Trinidad and Tobago\",\"value\":34},{\"name\":\"Ecuador\",\"value\":43},{\"name\":\"Chile\",\"value\":78.6},{\"name\":\"Peru\",\"value\":52},{\"name\":\"Colombia\",\"value\":74.1},{\"name\":\"Brazil\",\"value\":501.1},{\"name\":\"Argentina\",\"value\":199},{\"name\":\"Venezuela\",\"value\":195.2}]},{\"name\":\"Asia\",\"data\":[{\"name\":\"Nepal\",\"value\":6.5},{\"name\":\"Georgia\",\"value\":6.5},{\"name\":\"Brunei Darussalam\",\"value\":7.4},{\"name\":\"Kyrgyzstan\",\"value\":7.4},{\"name\":\"Afghanistan\",\"value\":7.9},{\"name\":\"Myanmar\",\"value\":9.1},{\"name\":\"Mongolia\",\"value\":14.7},{\"name\":\"Sri Lanka\",\"value\":16.6},{\"name\":\"Bahrain\",\"value\":20.5},{\"name\":\"Yemen\",\"value\":22.6},{\"name\":\"Jordan\",\"value\":22.3},{\"name\":\"Lebanon\",\"value\":21.1},{\"name\":\"Azerbaijan\",\"value\":31.7},{\"name\":\"Singapore\",\"value\":47.8},{\"name\":\"Hong Kong\",\"value\":49.9},{\"name\":\"Syria\",\"value\":52.7},{\"name\":\"DPR Korea\",\"value\":59.9},{\"name\":\"Israel\",\"value\":64.8},{\"name\":\"Turkmenistan\",\"value\":70.6},{\"name\":\"Oman\",\"value\":74.3},{\"name\":\"Qatar\",\"value\":88.8},{\"name\":\"Philippines\",\"value\":96.9},{\"name\":\"Kuwait\",\"value\":98.6},{\"name\":\"Uzbekistan\",\"value\":122.6},{\"name\":\"Iraq\",\"value\":139.9},{\"name\":\"Pakistan\",\"value\":158.1},{\"name\":\"Vietnam\",\"value\":190.2},{\"name\":\"United Arab Emirates\",\"value\":201.1},{\"name\":\"Malaysia\",\"value\":227.5},{\"name\":\"Kazakhstan\",\"value\":236.2},{\"name\":\"Thailand\",\"value\":272},{\"name\":\"Taiwan\",\"value\":276.7},{\"name\":\"Indonesia\",\"value\":453},{\"name\":\"Saudi Arabia\",\"value\":494.8},{\"name\":\"Japan\",\"value\":1278.9},{\"name\":\"China\",\"value\":10540.8},{\"name\":\"India\",\"value\":2341.9},{\"name\":\"Russia\",\"value\":1766.4},{\"name\":\"Iran\",\"value\":618.2},{\"name\":\"Korea\",\"value\":610.1}]}]} },{\"widget\":\"HighChart2\",\"data\":{\"chart\":{\"type\":\"bar\"},\"title\":{\"text\":\"Historic World Population by Region\"},\"subtitle\":{\"text\":\"Source: <a href=\\\"https:\\\/\\\/en.wikipedia.org\\\/wiki\\\/World_population\\\">Wikipedia.org<\\\/a>\"},\"xAxis\":{\"categories\":[\"Africa\",\"America\",\"Asia\",\"Europe\",\"Oceania\"],\"title\":{\"text\":null}},\"yAxis\":{\"min\":0,\"title\":{\"text\":\"Population (millions)\",\"align\":\"high\"},\"labels\":{\"overflow\":\"justify\"}},\"tooltip\":{\"valueSuffix\":\" millions\"},\"plotOptions\":{\"bar\":{\"dataLabels\":{\"enabled\":true}}},\"legend\":{\"layout\":\"vertical\",\"align\":\"right\",\"verticalAlign\":\"top\",\"x\":-40,\"y\":80,\"floating\":true,\"borderWidth\":1,\"backgroundColor\":\"#FFFFFF\",\"shadow\":true},\"credits\":{\"enabled\":false},\"series\":[{\"name\":\"Year 1800\",\"data\":[107,31,635,203,2]},{\"name\":\"Year 1900\",\"data\":[133,156,947,408,6]},{\"name\":\"Year 2000\",\"data\":[814,841,3714,727,31]},{\"name\":\"Year 2016\",\"data\":[1216,1001,4436,738,40]}]} },{\"widget\":\"HighChart3\",\"data\":{\"chart\":{\"type\":\"pie\"},\"title\":{\"text\":\"Browser market shares. January, 2018\"},\"subtitle\":{\"text\":\"Click the slices to view versions. Source: <a href=\\\"http:\\\/\\\/statcounter.com\\\" target=\\\"_blank\\\">statcounter.com<\\\/a>\"},\"plotOptions\":{\"series\":{\"dataLabels\":{\"enabled\":true,\"format\":\"{point.name}: {point.y:.1f}%\"}}},\"tooltip\":{\"headerFormat\":\"<span style=\\\"font-size:11px\\\">{series.name}<\\\/span><br>\",\"pointFormat\":\"<span style=\\\"color:{point.color}\\\">{point.name}<\\\/span>: <b>{point.y:.2f}%<\\\/b> of total<br\\\/>\"},\"series\":[{\"name\":\"Browsers\",\"colorByPoint\":true,\"data\":[{\"name\":\"Chrome\",\"y\":62.74,\"drilldown\":\"Chrome\"},{\"name\":\"Firefox\",\"y\":10.57,\"drilldown\":\"Firefox\"},{\"name\":\"Internet Explorer\",\"y\":7.23,\"drilldown\":\"Internet Explorer\"},{\"name\":\"Safari\",\"y\":5.58,\"drilldown\":\"Safari\"},{\"name\":\"Edge\",\"y\":4.02,\"drilldown\":\"Edge\"},{\"name\":\"Opera\",\"y\":1.92,\"drilldown\":\"Opera\"},{\"name\":\"Other\",\"y\":7.62,\"drilldown\":null}]}],\"drilldown\":{\"series\":[{\"name\":\"Chrome\",\"id\":\"Chrome\",\"data\":[[\"v65.0\",0.1],[\"v64.0\",1.3],[\"v63.0\",53.02],[\"v62.0\",1.4],[\"v61.0\",0.88],[\"v60.0\",0.56],[\"v59.0\",0.45],[\"v58.0\",0.49],[\"v57.0\",0.32],[\"v56.0\",0.29],[\"v55.0\",0.79],[\"v54.0\",0.18],[\"v51.0\",0.13],[\"v49.0\",2.16],[\"v48.0\",0.13],[\"v47.0\",0.11],[\"v43.0\",0.17],[\"v29.0\",0.26]]},{\"name\":\"Firefox\",\"id\":\"Firefox\",\"data\":[[\"v58.0\",1.02],[\"v57.0\",7.36],[\"v56.0\",0.35],[\"v55.0\",0.11],[\"v54.0\",0.1],[\"v52.0\",0.95],[\"v51.0\",0.15],[\"v50.0\",0.1],[\"v48.0\",0.31],[\"v47.0\",0.12]]},{\"name\":\"Internet Explorer\",\"id\":\"Internet Explorer\",\"data\":[[\"v11.0\",6.2],[\"v10.0\",0.29],[\"v9.0\",0.27],[\"v8.0\",0.47]]},{\"name\":\"Safari\",\"id\":\"Safari\",\"data\":[[\"v11.0\",3.39],[\"v10.1\",0.96],[\"v10.0\",0.36],[\"v9.1\",0.54],[\"v9.0\",0.13],[\"v5.1\",0.2]]},{\"name\":\"Edge\",\"id\":\"Edge\",\"data\":[[\"v16\",2.6],[\"v15\",0.92],[\"v14\",0.4],[\"v13\",0.1]]},{\"name\":\"Opera\",\"id\":\"Opera\",\"data\":[[\"v50.0\",0.96],[\"v49.0\",0.82],[\"v12.1\",0.14]]}]}} },{\"widget\":\"HighChart4\",\"data\":{\"chart\":{\"type\":\"waterfall\"},\"title\":{\"text\":\"Waterfall\"},\"xAxis\":{\"type\":\"category\"},\"yAxis\":{\"title\":{\"text\":\"USD\"}},\"legend\":{\"enabled\":false},\"tooltip\":{\"pointFormat\":\"<b>${point.y:,.2f}<\\\/b> USD\"},\"series\":[{\"upColor\":\"#3FFFFF\",\"color\":\"#FF1F1F\",\"data\":[{\"name\":\"Start\",\"y\":120000},{\"name\":\"Product Revenue\",\"y\":569000},{\"name\":\"Service Revenue\",\"y\":231000},{\"name\":\"Positive Balance\",\"isIntermediateSum\":true,\"color\":\"#000000\"},{\"name\":\"Fixed Costs\",\"y\":-342000},{\"name\":\"Variable Costs\",\"y\":-233000},{\"name\":\"Balance\",\"isSum\":true,\"color\":\"#1F1F1F\"}],\"dataLabels\":{\"enabled\":true,\"style\":{\"fontWeight\":\"bold\"}},\"pointPadding\":0}]} },{\"widget\":\"HighChart5\",\"data\":{\"chart\":{\"type\":\"pie\",\"options3d\":{\"enabled\":true,\"alpha\":45}},\"title\":{\"text\":\"Contents of weekly fruit delivery\"},\"subtitle\":{\"text\":\"3D donut in Highcharts\"},\"plotOptions\":{\"pie\":{\"innerSize\":100,\"depth\":45}},\"series\":[{\"name\":\"Delivered amount\",\"data\":[[\"Bananas\",8],[\"Kiwi\",3],[\"Mixed nuts\",1],[\"Oranges\",6],[\"Apples\",8],[\"Pears\",4],[\"Clementines\",4],[\"Reddish (bag)\",1],[\"Grapes (bunch)\",1]]}]} },{\"widget\":\"HighChart6\",\"data\":{"title":{"text":"Chart Title"},"subtitle":{"text":""}}},{\"widget\":\"HighChart7\",\"data\":{"title":{"text":"Chart Title"},"subtitle":{"text":""}}},{\"widget\":\"HighChart8\",\"data\":{"title":{"text":"Chart Title"},"subtitle":{"text":""}}},{\"widget\":\"HighChart9\",\"data\":{"title":{"text":"Chart Title"},"subtitle":{"text":""}}}]'
		var post = returnMsg;

		$.post(OC.generateUrl('/apps/dashboardhighcharts/settings'), post, function(response) {
			OC.msg.finishedSuccess('#activity_notifications_msg', response.set);
		});
	//}
			
		$section.find('textarea').each(function(){
		$(this).prop('disabled', false);
		});	
		

		cachebuster += 1;
		OCP.AppConfig.setValue('dashboardcharts', 'cachebuster', cachebuster);
	});
	/**
	 * try to detect an URL from the snippet input
	 */
	 /**
	 $('#Edit-HighChart1-button').on('click', function(event) {
		event.preventDefault();
		console.log('click');
		highed.ready(function () {
    		highed.ModalEditor({},
			{
           // features: 'import templates',
            allowDone: true,
			type : 'simple',
            //atures: 'import templates customize welcome '        
            }
        ).show();
			
    	})
	
	});
		*/
	 $('#Export-HighChart1-button').on('click', function(event) {
		event.preventDefault();
		window.open('data:text/json;charset=utf-8,' + escape($HighChart1));
	 });
	
});
