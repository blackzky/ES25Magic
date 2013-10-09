var example = [];
$(function(){
	var out = "";
	var link = "";
	var trunk_size = 30;
	for(i in example){
		out += "<div class='panel panel-primary' id='e"+i+"'><div class='panel-heading'><h4 class='panel-title'>";
		out += "<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' id='l"+i+"' href='#p"+i+"'>";
		out += (example[i].title + ": " + ((example[i].problem).substr(0, trunk_size)) + "</a></h4></div>");
		out += "<div id='p"+i+ "' class='panel-collapse collapse'><div class='container'>";
		out += "<h3>Problem</h3><button class='prob btn btn-primary' data-id='"+i+"'>Toggle Problem</button><p id='prob"+i+"' class='well'>" + example[i].problem + "</p>";
		//out += "<h3>Solution</h3><p class='well'>" + example[i].solution+ "</p>";
		out += "</div></div></div>";

		$("#accordion").append(out);
		out = "";
	}
	$("#accordion").append("<div id='push'></div>");

	$("body").on("click", ".prob", function(){
		$("#prob" + $(this).data("id")).toggle();	
	});

	$("body").on("click", "#search", function(){
		var s = $("#search-data").val();	
		for(i in example){
			if( ((example[i].problem).toLowerCase()).indexOf(s.toLowerCase()) == -1){
				$("#e"+i).hide();	
			}else{
				$("#e"+i).show();	
			}	
		}	
	});

	$("body").on("click", "#all", function(){
		for(i in example){
				$("#e"+i).show();	
		}	
	});
});

var index = 0;

index = 0;
example.push({});
example[index].title = "Problem 10.1";
example[index].problem = "List at least three factors that affect the MARR, and discuss how each one affects it.";

index = 1;
example.push({});
example[index].title = "Problem 10.2";
example[index].problem = "State whether each of the following involves debt financing or equity financing. (a) $10,000 taken from one partner’s savings account to pay for equipment repair (b) Issuance of preferred stock worth $1.3 million (c) Short-term loan of $75,000 from a local bank (d ) Issuance of $3 million worth of 20-year bonds (e) Del Engineering buyback of $8 million of its own stock using internal funds";

index = 2;
example.push({});
example[index].title = "Problem 10.3";
example[index].problem = "Helical Products, Inc. uses an after-tax MARR of 12% per year. If the company’s effective tax rate (federal, state, and local taxes) is 40%, determine the company’s before-tax MARR.";

