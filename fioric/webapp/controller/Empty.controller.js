sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/integration/widgets/Card",
	"sap/ui/model/json/JSONModel"
], function (Controller,Card,JSONModel) {
	"use strict";

	

	return Controller.extend("anubhav.app.controller.Empty", {

		onInit:function(){

			// var oJSONModel = new JSONModel("https://api.coindesk.com/v1/bpi/currentprice.json");

			var oJSONModel = new JSONModel (
				[
				{
				  country: "India",
				   county : null,
				   stats : {
					confirmed : 10342,
					deaths : 10076,
					recovered : 81409
				   },
				   province:"A"
				},
				{
					country: "India",
					 county : null,
					 stats : {
					  confirmed : 103424143412,
					  deaths : 10076,
					  recovered : 81409
					 },
					 province:"A"
				  },
				  {
					country: "India",
					 county : null,
					 stats : {
					  confirmed : 103424143412,
					  deaths : 10076,
					  recovered : 81409
					 },
					 province:"A"
				  },
				{
					country: "India",
					 county : null,
					 stats : {
					  confirmed : 10,
					  deaths : 10076,
					  recovered : 81409
					 },
					 province:"B"

				  },
				  {
					country: "India",
					 county : null,
					 stats : {
					  confirmed : 10,
					  deaths : 10076,
					  recovered : 81409
					 },
					 province:"C"
				  },
				  {
					country: "Australia",
					 county : null,
					 stats : {
					  confirmed : 10,
					  deaths : 10076,
					  recovered : 81409
					 },
					 province:"D"
				  },
			]
			)
					
            
            this.getView().setModel(oJSONModel)

          

		},

		groupCountryData: function(aData){
			var groupedData = [];
			debugger;
			for (let i = 0; i < aData.length; i++) {
				const element = aData[i];
				if(groupedData[element.country]){
					groupedData[element.country] = {
						country: element.country,
						confirmed : element.stats.confirmed + groupedData[element.country].confirmed,
						deaths : element.stats.deaths + groupedData[element.country].deaths, 
						recovered : element.stats.recovered + groupedData[element.country].recovered,
						stateCount : 1 + groupedData[element.country].stateCount
					};
				}else{
					groupedData[element.country] = {
						country: element.country,
						confirmed : element.stats.confirmed,
						deaths : element.stats.deaths,
						recovered : element.stats.recovered,
						stateCount : 1
					};
				}
			}
			console.log(groupedData);
			return groupedData;
		},

		
		getTop5IndiaCases: function (aData) {
			var allIndia = [];
			var total = 0;
			for (let i = 0; i < aData.length; i++) {
			  const element = aData[i];
			  if(element.country === "India"){
				allIndia.push(element);
				total = total + element.stats.confirmed;
			  }
			  
			}
			allIndia.sort(function(a,b){
			  return parseFloat(b.stats.confirmed) - parseFloat(a.stats.confirmed);
			});
			allIndia.splice(5, allIndia.length - 1);
			return {
			  number: total ,
			  unit: "K",
			  trend: "Down",
			  state: "Error",
			  target: {
				number: 0,
				unit: "K",
			  },
			  deviation: {
				number: 1,
			  },
			  details: "Q3, 2021",
			  allTop5: allIndia
			};
	
		},
	

		onSelect: function (oEvent) {

			var covidData = JSON.parse(this.getView().getModel().getJSON());
		//Create a group by country arrary with key as Country
		var groupedData = this.groupCountryData(JSON.parse(JSON.stringify(covidData)));
		var covidIndexedData = [];
		//convert country wise data to to Index based array
    var totalcases = 0;
		Object.keys(groupedData).map((key) => {
			covidIndexedData.push(groupedData[key]);
      totalcases = totalcases + groupedData[key].recovered;
		});
    var recoveryCases = {
      "total": totalcases ,
      "data": covidIndexedData
    };
    var indiaTop5 = this.getTop5IndiaCases(JSON.parse(JSON.stringify(covidData)));
    
        var sKey = oEvent.getSource().getSelectedKey();
        console.log(sKey);
        var configuration = {};

			switch (sKey) {


				case "Indiacase":
					// object card
					configuration = {

						"sap.app":{
							"id" : "anubhav.app"
						},
						"sap.card": {                          
						 
						"type": "Object",
						"data": {
							"json": groupeddata["India"]
						},
						"header": {
							"icon": {
								"src": "https://th.bing.com/th/id/R.991533392ba7c0b7e815c5cd7bae0140?rik=h8xJafscVsjrGA&riu=http%3a%2f%2fmediaindia.eu%2fwp-content%2fuploads%2f2016%2f08%2fFlag_of_India_New_Delhi.jpg&ehk=jNKpYi6dgk%2fIn6cnfA%2bvgZuafrVNmHMbvCzjU6tsu1A%3d&risl=&pid=ImgRaw&r=0"
							},
							"title": "India",
							"subTitle": " Total confirmed cases{confirmed} ; Deaths {deaths}"
						},
						"content": {
							"groups": [
								{
									"title": "Case details",
									"items": [
										{
											"label": "Confirmed cases",
											"value": "{confirmed}"
										},
										{
											"label": "Recoverd cases",
											"value": "{recovered}"
										},
										{
											"label": "Website",
											"value": "https://www.anubhavtrainings.com",
											"tooltip":  "{phoneTooltip}",
											"actions": [
												{
													"type": "Navigation",
													"parameters": {
														"url": "tel:{phone}"
													}
												}
											]
										},
										{
											"label": "Email",
											"value": "{email}",
											"tooltip":  "{emailTooltip}",
											"actions": [
												{
													"type": "Navigation",
													"parameters": {
														"url": "mailto:{email}"
													}
												}
											]
										}
										
									]
								},
								{
									"title": "More Details",
									"items": [
										{
											"label": "Deaths Name",
											"value": "{Deaths}"
										},
										{
											"label": "statecountry",
											"value": "{statecount}"
										}
										
									]
								}
								
							]
						}
					}
					}
					break;
				case "all country":
					configuration = {
						"sap.app":{
							"id" : "anubhav.app"
						},

						"sap.card":{   
						"type": "Table",
						"data": {
							"json": covidIndexedData
						},
						"header": {
							"title": "Sales Orders for Key Accounts",
							"subTitle": "Today"
						},
						"content": {
							"maxItems": 9,
							"row": {
								"columns": [{
										"title": "Country",
										"value": "{country}",
										"additionalText": "{salesOrder}",
										"identifier": true
									},
									{
										"title": "Confirmedcased",
										"value": "{confirmed}"
									},
									{
										"title": "Deaths",
										"value": "{deaths}",
										"hAlign": "End"
									},
									{
										"title": "Recovered",
										"value": "{recovered}",
										"state": "{statusState}"
									},
									{
										"title": "Delivery Progress",
										"progressIndicator": {
											"percent": "{deliveryProgress}",
											"text": "{= format.percent(${deliveryProgress} / 100)}",
											"state": "{statusState}"
										}
									}
								]
							}
						}
					}
				}
					// table card
					break;
				case "recover all country":
					// list card
					configuration = {
					"sap.app":{
						"id" : "anubhav.app"
					},
					"sap.card": {   
						
							"type": "List",
							"header": {
								"title": "{parameters>/title/value}",
								"subTitle": "{parameters>/subTitle/value}",
								"icon": {
									"src": "sap-icon://desktop-mobile"
								},
								"status": {
									"text": "{parameters>/maxItems/value} of 20"
								}
							},
							"configuration": {
								"editor": "dt/Configuration",
								"parameters": {
									"title" : {
										"value": "List Card with Top {recoverycases/totalcases} Products"
									},
									"subTitle": {
										"value": "These are the top sellers this month"
									},
									"maxItems": {
										"value": 4
									}
								}
							},
							"content": {
								"data": {
									"json":   
									  recoverycases.data
								},
								"maxItems": "{parameters>/maxItems/value}",
								"item": {
									"title": "{country}",
									"description": "{recovered}",
									"highlight": "Success"
								}
							}
						
					}
				}
					break;
				   
					case "Top5India":
					// analytical card
					configuration = {
						"sap.app": {
						  id: "anubhav.app",
						},
						"sap.card": {
						  type: "Analytical",
						  header: {
							type: "Numeric",
							data: {
							  json: indiaTop5,
							},
							title: "India Top 5 States Cases",
							subTitle: "Confirmed Cases",
							unitOfMeasurement: "M",
							mainIndicator: {
							  number: "{number}",
							  unit: "{unit}",
							  trend: "{trend}",
							  state: "{state}",
							},
							details: "{details}",
							sideIndicators: [
							  {
								title: "Target",
								number: "{target/number}",
								unit: "{target/unit}",
							  },
							  {
								title: "Deviation",
								number: "{deviation/number}",
								unit: "%",
							  },
							],
						  },
						  content: {
							chartType: "column",
							legend: {
							  visible: "{legend/visible}",
							  position: "{legend/position}",
							  alignment: "{legend/alignment}",
							},
							plotArea: {
							  dataLabel: {
								visible: true,
							  },
							  categoryAxisText: {
								visible: false,
							  },
							  valueAxisText: {
								visible: false,
							  },
							},
							title: {
							  text: "Line chart",
							  visible: true,
							  alignment: "Left",
							},
							measureAxis: "valueAxis",
							dimensionAxis: "categoryAxis",
							data: {
							  json: {
								dimensions: {
								  weekLabel: "States",
								},
								measures: {
								  revenueLabel: "Confirmed Cases"
								},
								legend: {
								  visible: true,
								  position: "Bottom",
								  alignment: "TopLeft",
								},
								list: indiaTop5.allTop5,
							  },
							  path: "/list",
							},
							dimensions: [
							  {
								label: "{dimensions/weekLabel}",
								value: "{province}",
							  },
							],
							measures: [
							  {
								label: "{measures/revenueLabel}",
								value: "{stats/confirmed}",
							  },
							],
						  },
						},
					  };
		  

				break;
				
				
				
			}
			
				
			var myCard = new Card

			myCard.setManifest(configuration);

			var oContainer = this.getView().byId("vbox")

			try {
				oContainer.removeItem(oContainer.getItems()[2])
			} catch (error) {
				
			}

			oContainer.addAggregation("items",myCard)	

			
             
		}

		

		

       

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf anubhav.app.view.Empty
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf anubhav.app.view.Empty
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf anubhav.app.view.Empty
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf anubhav.app.view.Empty
		 */
		//	onExit: function() {
		//
		//	}

	});

});