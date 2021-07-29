export default (str_upper, str_lower) => {
    

       d3.text("./data/summer16.json").then(function (text) {
            const obj = JSON.parse(text);
            
            const countryObj = obj[2016].filter(item=> item["Country"]=== str_upper );

            const country = document.getElementById(str_lower);

country.onclick = function() {
    d3.select(svg).selectAll("*").remove();
    d3.select(".medal_color").selectAll("*").remove();
    d3.select("#title").text("TEAM "+ str_upper +" MEDALISTS");
     
    countryObj.forEach((item,i) => {
         var list = [item["Athlete"], item["Sport"], item["Gender"], item["Medal"]];
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