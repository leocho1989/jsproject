import * as d3 from "d3";


export default (data, name, color1, color2) => {
    
 let margin = 30;
 const width = 700;
    const height = 500;

    let svg = d3.select('.svg').append("svg").attr("width", width).attr("height", height);

   
    let g = svg.append('g').attr('transform','translate('+ margin +','+ margin +')');

   
    let scaleX = d3.scaleBand()
        .domain(name)
        .range([0,width - margin*2]);
    let scaleY = d3.scaleLinear()
        .domain([0,d3.max(data)])
        .range([height - margin*2,0]);

  
    let axisX = d3.axisBottom(scaleX);
    let axisY = d3.axisLeft(scaleY);
    g.append('g').attr('transform','translate(0,'+ (height - margin*2) +')').call(axisX);
    g.append('g').attr('transform','translate(0,0)').call(axisY);

   
    let gs = g.selectAll('rect').data(data).enter().append('g');


    
    let rectP = 10;
    gs.append('rect')
        .attr('x',function (d,i) {
            return scaleX(name[i]) + rectP/2;
        })
        .attr('y',function (d,i) {
            return scaleY(d);
        })
        .attr('width',function (d,i) {
            return scaleX.step() - rectP;
        })
        .attr('height',function (d,i) {
            return height - margin*2 - scaleY(d);

        })
        .attr('fill',color1)

       
        .on('mouseover',function () {
            d3.select(this)

                .transition()
                .duration(1000)
                .delay(200)
                .attr('fill',color2);
        })
        .on('mouseout',function () {
            d3.select(this)
                
                .transition()
                .duration(1000)
                .delay(200)
                .attr('fill',color1);
        });


    gs.append('text')
        .attr('x',function (d,i) {
            return scaleX(name[i]) + rectP/2;
        })
        .attr('y',function (d,i) {
            return height;
        })
        .attr('dx',function (d,i) {
            return -2;
        })
        .attr('dy',function (d,i) {
            return 20;
        })
        .text(function (d,i) {
            return d;
        })
        .transition()
        .duration(2000)
        .delay(function (d,i) {
            return i*300;
        })
        .attr('y',function (d,i) {
            return scaleY(d);
        });

   };

 

        