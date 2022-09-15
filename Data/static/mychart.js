var bardata;
var lgalist = 
['All',
 'Alpine',
 'Ararat',
 'Ballarat',
 'Banyule',
 'Bass Coast',
 'Baw Baw',
 'Bayside',
 'Benalla',
 'Boroondara',
 'Brimbank',
 'Buloke',
 'Campaspe',
 'Cardinia',
 'Casey',
 'Central Goldfields',
 'Colac-Otway',
 'Corangamite',
 'Darebin',
 'East Gippsland',
 'Frankston',
 'Gannawarra',
 'Glen Eira',
 'Glenelg',
 'Golden Plains',
 'Greater Bendigo',
 'Greater Dandenong',
 'Greater Geelong',
 'Greater Shepparton',
 'Hepburn',
 'Hindmarsh',
 'Hobsons Bay',
 'Horsham',
 'Hume',
 'Indigo',
 'Kingston',
 'Knox',
 'Latrobe',
 'Loddon',
 'Macedon Ranges',
 'Manningham',
 'Mansfield',
 'Maribyrnong',
 'Maroondah',
 'Melbourne',
 'Melton',
 'Mildura',
 'Mitchell',
 'Moira',
 'Monash',
 'Moonee Valley',
 'Moorabool',
 'Moreland',
 'Mornington Peninsula',
 'Mount Alexander',
 'Moyne',
 'Murrindindi',
 'Nillumbik',
 'Northern Grampians',
 'Port Phillip',
 'Pyrenees',
 'Queenscliffe',
 'South Gippsland',
 'Southern Grampians',
 'Stonnington',
 'Strathbogie',
 'Surf Coast',
 'Swan Hill',
 'Towong',
 'Wangaratta',
 'Warrnambool',
 'Wellington',
 'West Wimmera',
 'Whitehorse',
 'Whittlesea',
 'Wodonga',
 'Wyndham',
 'Yarra',
 'Yarra Ranges',
 'Yarriambiack']



   // build bubble chart 

   

   var dataBubble = [
    {
        x: ids,
        y: values,
        text: labels,
        mode: "markers",
        marker: {
            color: ids,
            size: values,
        }
    }
];

var layoutBubble = {
    margin: { t: 0 },
    xaxis: { title: "OTU (Operational Taxonomic Unit)ID from Sample" },
    hovermode: "closest",
};
Plotly.newPlot("bubble", dataBubble, layoutBubble);


 var lgaselect = document.getElementById('selLGA');

for (i=0; i< lgalist.length; i++)
{
var opt = document.createElement("option");
  opt.text = lgalist[i];
  lgaselect.add(opt); //[i].text = lgalist[i];
}

bardata = barData;
d3.json('../Data/bardata.json').then((barData) => {
  var myChart = new Chart(d3.select('#myChart')

  var ctx = document.getElementById('myChart').getContext('2d');

  })
    
// d3.json("data/samples.json").then((sampleData) => {
//   var names = sampleData.names
//   console.log(names);
//   var selecttag = d3.select("selDataset")
//   // create drop down list 
//   for (var i = 0; i < names.length; i++) {
//       selecttag.append("option").text(names[i]).property("value", names[i])
//   };
// })


  
  //.datasets;
//  console.log('Getting barData');
//     console.log(bardata);
//     console.log('Got barData');
// var selecttag = d3.select("selLGA")
//   // create drop down list 
//   // for (var i = 0; i < names.length; i++) {
//       // selecttag.append("option").text(names[i]).property("value", names[i])


//   // console.log(data);

  //  lga = d3.select('#selLGA');

   //bardata = barData.filter(d => d === lga);


//d3.select('#myChart').getContext('2d')


  type:'bar',
  'data'; 'bardata',
  'scales'; {
    xAxes:[{
      stacked:true
    }],
    'yAxes';[{
      stacked:true
    }]
  };
  responseive:true


// function optionChanged(sender)
// {
//   alert(myChart.data);
//   alert('Hello we are ghere');
//   console.log(myChart);
// }


 

//         const config = {
//             type: 'bar',
//             data: data,
//             type: string;
//     data: barData;
//             options: {
//               plugins: {
//                 title: { "offence Divisions by Year"
//                   display: true,
//                   text: 'Chart.js Bar Chart - Stacked'
//                 },
//               },
//               responsive: true,
//               scales: {
//                 x: {
//                   stacked: true,
//                 },
//                 y: {
//                   stacked: true
//                 }
//               }
//             }
//           };




// const actions = [
//     {
//       name: 'Randomize',
//       handler(chart) {
//         chart.data.datasets.forEach(dataset => {
//           dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
//         });
//         chart.update();
//       }
//     },
//   ];

//   var toolTip = d3.tip()
//   .attr("class", "tooltip")
//   .offset([85, -90])
//   .html(function(d) {
//       return (`${d.OffenceDivision}<br>${OffenceSubdivision}: ${offenceSubcategory}<br>${LGARateper100,000population}: ${XXXX}`);
//   });

// circlesGroup.call(toolTip);

// circlesGroup.on("mouseover", (d, i, n) => toolTip.show(d, n[i]));
// circlesGroup.on("mouseout", (d, i, n) => toolTip.hide(d, n[i]));

// return circlesGroup;
// }


// Offence_Divisions {
//   A: A Crimes against the person,
//   B: B Property and deception offences,
//   C: C Drug offences,
//   D: D Public order and security offences,
//   E: E Justice procedures offences,
//   F: F Other offences
// }

// Offence_Sub_Divisions_A_Crimes_against_the_person{
//   A10: A10 Homicide and related offences,
//   A20: A20 Assault and related offences,
//   A30: A30 Sexual offences,
//   A40: A40 Abduction and related offences,
//   A50: A50 Robbery,
//   A60: A60 Blackmail and extortion
//   A70: A70 Stalking, harassment and threatening behaviour
//   A80: A80 Dangerous and negligent acts endangering people
// }


// Offence_Sub_Divisions_B Property_and_deception_offences{
//   B10: B10 Arson,
//   B20: B20 Property damage,
//   B30: B30 Burglary/Break and enter,
//   B40: B40 Theft,
//   B50: B50 Deception,
//   B60: A60 B60 Bribery
// }

// Offence_Sub_Divisions_C_Drug_offences{
//   C10: C10 Drug dealing and trafficking
//   C20: C20 Cultivate or manufacture drugs,
//   C30: C30 Drug use and possession,
//   C90: C90 Other drug offences,
// }

// Offence_Sub_Divisions_D_Public_order_and _security_offences{
//   D10: D10 Weapons and explosives offences,
//   D20: D20 Disorderly and offensive conduct,
//   D30: D30 Public nuisance offences
//   D40: D40 Public security offences,
// }

// Offence_Sub_Divisions_E Justice procedures offences{
//   E10: E10 Justice procedures,
//   E20: E20 Breaches of orders,
//   D30: D30 Public nuisance offences
//   D40: D40 Public security offences,
// }
