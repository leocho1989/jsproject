export default (sport) => {
    

       d3.text("./data/summer16.json").then(function (text) {
            const obj = JSON.parse(text);
            
            const countryObj = obj[2016].filter(item=> item["Sport"]=== sport );

            const ele = document.getElementById(sport);

ele.onclick = function() {
    d3.select(svg).selectAll("*").remove();
    d3.select(".medal_color").selectAll("*").remove();
    d3.select("#title").text(sport.toUpperCase() +" MEDALISTS");
     
    countryObj.reverse().forEach((item,i) => {
         var list = [item["Athlete"], item["Country"], item["Gender"], item["Medal"]];
    	var ul = d3.select('#svg').append('ul');

	ul.selectAll('li')
	.data(list)
	.enter()
	.append('li')
	.html(String);
    });

 

};
             
        });

 
   };