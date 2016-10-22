var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Data
var d0 = [
		  [
			//{axis:"Ace",value:9.48},
			{axis:"Break",value:0.468},
			{axis:"Return",value:0.45},
			{axis:"Net",value:0.70},
			
		  ],[
		
			//{axis:"Ace",value:7.24},
			{axis:"Break",value:0.52},
			{axis:"Return",value:0.45},
			{axis:"Net",value:0.47},
						
		  ]
		];
var d1 = [
		  [
			//{axis:"Ace",value:9.48},
			{axis:"Break",value:0.52},
			{axis:"Return",value:0.45},
			{axis:"Net",value:0.69},
			
		  ],[
		
			//{axis:"Ace",value:7.24},
			{axis:"Break",value:0.36},
			{axis:"Return",value:0.32},
			{axis:"Net",value:0.58},
						
		  ]
		];
var d2 = [
		  [
			//{axis:"Ace",value:9.48},
			{axis:"Break",value:0.47},
			{axis:"Return",value:0.4},
			{axis:"Net",value:0.70},
			
		  ],[
		
			//{axis:"Ace",value:7.24},
			{axis:"Break",value:0.41},
			{axis:"Return",value:0.33},
			{axis:"Net",value:0.69},
						
		  ]
		];
var d4 = [
		  [
			//{axis:"Ace",value:9.48},
			{axis:"Break",value:0.47},
			{axis:"Return",value:0.43},
			{axis:"Net",value:0.78},
			
		  ],[
		
			//{axis:"Ace",value:7.24},
			{axis:"Break",value:0.32},
			{axis:"Return",value:0.26},
			{axis:"Net",value:0.59},
						
		  ]
		];		
function myfunction() {
	var x=document.getElementById('body');
	document.getElementById('b').style.display = 'none';
	document.getElementById('c').style.display = 'none';
	document.getElementById('d').style.display = 'none';
	document.getElementById('e').style.display = 'none';
	x.onchange=function(){
		var y=document.myform.a;
        if (y.value == 'Andy Murray') {
            RadarChart.draw("#chart", d0, mycfg);
            document.getElementById('e').style.display = 'block';
        }
        else if (y.value == 'Novak Djokovic') {
            RadarChart.draw("#chart", d1, mycfg);
         document.getElementById('b').style.display = 'block';
        }
        else if (y.value == 'Rodger Federer') {
            RadarChart.draw("#chart", d2, mycfg);
            document.getElementById('c').style.display = 'block';
        }
        else if (y.value == 'Rafal Nadal') {
            RadarChart.draw("#chart", d4, mycfg);
            document.getElementById('d').style.display = 'block';
        }
    }
    }	

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
document.getElementById('b').style.display = 'none';
document.getElementById('c').style.display = 'none';
document.getElementById('d').style.display = 'none';
//document.getElementById('e').style.display = 'none';
RadarChart.draw("#chart", d0, mycfg);

