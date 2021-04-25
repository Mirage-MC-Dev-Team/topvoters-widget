//based on a pen by @robinselmer
// includes a script from https://github.com/FoxInFlame/MinecraftColorCodes
var url = "https://rest.miragefactions.com/votes";
$(document).ready(function(){
$.getJSON(url, function (rest) {
  //data is the JSON string
  var pl = "";
  for (i = 0; 9 > i; i++) {
    pl = pl + "<p class='head' style='object-fit: none;margin:0;'><img class='head' src='https://crafatar.com/renders/head/"+ rest[i].uuid + "?scale=2'></img> #"+(i+1)+" "+rest[i].PlayerName+"<br>Monthly Votes: "+rest[i].MonthTotal+"</p>";
  }
  $("#rest").html(
      pl
  );
  $("#favicon").attr("src", rest.favicon);
});
});
