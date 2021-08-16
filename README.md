<a href="https://leo-jsproject.herokuapp.com/" target="_blank">Click HERE to visit live website</a>

# 2016 Rio Olympic games medals information app

## Background
* Olympic games is happening in Tokyo at the moment, I am a big volleyball fan and like watching olympic games, especially volleyball. So I want to make a data visualization of 2016 Rio Olympic games medals information.


## Functionality & MVPs

In Olympic games medals, users will be able to:

* Users can view medals data,by total medals ranking.
* Users can choose to view medals data by gold, silver, bronze medals.
* Users can view medals data by different countries, with all the medalist information.
* Users can view data in different sports categories and medalists.

In addition, this project will include:

* An About modal describing the background.
* A production README.


## Wireframes

<img src="https://app-leel-pro.s3.us-west-1.amazonaws.com/Homepage.png"/>

* Top left side shows the title of this project.
* Top right drop down menu bar.
* Main data content in the center.
* My information will be presented at the bottom of the page.

Technologies, Libraries, APIs
* Using HTML, CSS, Javascipt.
* Webpack and Babel to bundle and transpile the source JavaScript code.
* Using npm to manage project dependencies.
* Using online Medals csv file to fetch olympics data.
* Using D3 library to render data. 

## Implementation Timeline

* Friday `Afternoon & Weekend: Final proposal and setup.`
* Monday: `D3 library study and API data manipulation.` 
* Tuesday: `Data implemetation and setup.`
* Wednesday: `D3 charts and correctly render data information.`
* Thursday: `Finish implementing data and css.`
* Friday: `Deploy to GitHub pages. Bug fixing.`

## Code Snippets

* JavaScript(D3 Library used)

    For this project, I self taught D3 library and used it for making my code easy and complete a lot of cool features.
    
```JavaScript
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
```

