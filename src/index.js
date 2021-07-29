
import './styles/main.css';
import * as d3 from 'd3';
import Modal from './scripts/modal';
import chartMaking from './scripts/cubechart';


    //    d3.text("./data/summer16.json").then(function (text) {
    //         const obj = JSON.parse(text);
    //         // console.log(obj);
            
    //         const usa = obj[2016].filter(item=> item["Country"]=== "USA" ).length;
    //         const chn = obj[2016].filter(item=> item["Country"]=== "CHN" ).length;
    //         const gbr = obj[2016].filter(item=> item["Country"]=== "GBR" ).length;
    //         const rus = obj[2016].filter(item=> item["Country"]=== "RUS" ).length;

            
    //     });

chartMaking([121,70,67,56,42,42,41,29,28,22,21,19,19,18,18],["USA", "CHN","GBR", "RUS","GER", "FRA","JPN", "AUS","ITA","CAN","KOR", "NED", "BRA" , "NZL","AZE" ],"lightblue", "pink");

const gold = document.getElementById("gold");
const silver = document.getElementById("silver");
const bronze = document.getElementById("bronze");

gold.onclick = function() {
    d3.select(svg).selectAll("*").remove();
    // d3.select(".medal_color").selectAll("*").remove();
    d3.select("#title").text("Gold Medals Ranking(Top 15)");
chartMaking([46,27,26,19,17,12,10,9,8,8,8,8,7,7,6],["USA", "GBR","CHN", "RUS","GER","JPN","FRA", "KOR","ITA", "AUS", "NED", "HUN", "BRA", "ESP","KEN"],"orange", "pink");

};

silver.onclick = function() {
    d3.select(svg).selectAll("*").remove();
    // d3.select(".medal_color").selectAll("*").remove();
    d3.select("#title").text("Silver Medals Ranking(Top 15)");
chartMaking([37,23,18,18,17,12,11,10,9,8,7,7,6,6,6],["USA", "GBR","CHN", "FRA","RUS","ITA","AUS","GER","NZL","JPN", "NED", "AZE", "BRA","KEN", "DEN"], "lightgray", "pink");


};

bronze.onclick = function() {
    d3.select(svg).selectAll("*").remove();
    // d3.select(".medal_color").selectAll("*").remove();
    d3.select("#title").text("Bronze Medals Ranking(Top 15)");
chartMaking([38,26,21,20,17,15,15,14,10,10,10,9,8,7,7],["USA", "CHN","JPN","RUS","GBR", "GER","CAN","FRA","AUS","KAZ","AZE", "KOR", "ITA", "UZB","DEN"], "hotpink", "lightgreen");

};



const sport1 = document.getElementById("sport1");

sport1.onclick = function() {
    d3.select(svg).selectAll("*").remove();
    d3.select(".medal_color").selectAll("*").remove();
    d3.select("#title").text("new");
chartMaking([1,2,],["USA", "GBR"]);

};
