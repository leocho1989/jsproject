

import * as d3 from 'd3';
import Modal from './scripts/modal';
import chartMaking from './scripts/cubechart';
import countryList from './scripts/countrylist';
import sportsList from './scripts/sportslist';



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
chartMaking([38,26,21,20,17,15,15,14,10,10,10,9,8,7,7],["USA", "CHN","JPN","RUS","GBR", "GER","CAN","FRA","AUS","KAZ","AZE", "KOR", "ITA", "UZB","DEN"], "brown", "pink");

};

countryList("USA", "usa");
countryList("GBR", "gbr");
countryList("RUS", "rus");
countryList("CHN", "chn");
countryList("FRA", "fra");
countryList("AUS", "aus");
countryList("JPN", "jpn");
countryList("ITA", "ita");
countryList("KOR", "kor");
countryList("GER", "ger");
countryList("NED", "ned");
countryList("CAN", "can");
countryList("BRA", "bra");

sportsList("athletics");
sportsList("basketball");
sportsList("football");
sportsList("volleyball");
sportsList("archery");
sportsList("badminton");
sportsList("boxing");
sportsList("cycling");
sportsList("gymnastics");
sportsList("taekwondo");
sportsList("tennis");
sportsList("weightlifting");
sportsList("wrestling");




