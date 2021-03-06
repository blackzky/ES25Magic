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

	$("body").on("click", "#clear", function(){
		$("#search-data").val("");	
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
example[index].problem = "State whether each of the following involves debt financing or equity financing. (a) $10,000 taken from one partner�s savings account to pay for equipment repair (b) Issuance of preferred stock worth $1.3 million (c) Short-term loan of $75,000 from a local bank (d ) Issuance of $3 million worth of 20-year bonds (e) Del Engineering buyback of $8 million of its own stock using internal funds";

index = 2;
example.push({});
example[index].title = "Problem 10.3";
example[index].problem = "Helical Products, Inc. uses an after-tax MARR of 12% per year. If the company�s effective tax rate (federal, state, and local taxes) is 40%, determine the company�s before-tax MARR.";

index = 3;
example.push({});
example[index].title = "Problem 10.4";
example[index].problem = " The owner of a small pipeline construction com- pany is trying to ? gure out how much he should bid in his attempt to win his ? rst �big� contract. He estimates that his cost to complete the project will be $7.2 million. He wants to bid an amount that will give him an after-tax rate of return of 15% per year if he gets the job, but he doesn�t know how much he should bid on a before-tax basis. He told you that his effective state tax rate is 7% and his effective federal tax rate is 22%.   ( a)   The expression for determining the overall effective tax rate is  state rate  (1  state rate)(federal rate)  W hat should his before-tax MARR be in order for him to make an after-tax MARR of 15% per year?    ( b)   How much should he bid on the job?  ";

index = 4;
example.push({});
example[index].title = "Problem 10.5";
example[index].problem = " A group of private equity investors provided $16 million to a start-up company involved in making high-technology detection systems for drugs and other types of contraband. Immediately after the investment was made, another invest- ment opportunity came up for which the investors didn�t have enough capital. That project would have yielded an estimated rate of return of 29% per year before taxes. If the group�s effective tax rate is 32%, what after-tax rate of return would the forgone project have yielded?  ";

index = 5;
example.push({});
example[index].title = "Problem 10.6";
example[index].problem = " Five projects were ranked in decreasing order by two measures�rate of return (ROR) and present worth (PW)�to determine which ones should be funded, with the total initial investment not to  exceed $18 million. Use the results below to deter- mine the opportunity cost for each measure.";

index = 6;
example.push({});
example[index].title = "Problem 10.7";
example[index].problem = "Tom, the owner of Burger Palace, determined that his weighted average cost of capital is 8%. He ex- pects a return of 4% per year on all of his invest- ments. A proposal presented by the owner of the Dairy Choice next door seems quite risky to Tom, but is an intriguing partnership opportunity. Tom has determined that the proposal�s �risk factor� will require an additional 3% per year return for him to accept it.   ( a)   Use the recommended approach to determine the MARR that Tom should use, and explain how the 3% risk factor is compensated for in this MARR.    ( b)   Determine the effective MARR for his busi- ness if Tom turns down the proposal.       ";
index = 7;
example.push({});
example[index].title = "Problem 10.8";
example[index].problem = " Electrical generators produce not only electricity, but also heat from conductor resistance and from friction losses in bearings. A company that manu- factures generator coolers for nuclear and gas tur- bine power plants undertook a plant expansion through ? nancing that had a debt-equity mix of 45�55. If $18 million came from mortgages and bond sales, what was the total amount of the  ? nancing?  ";

index = 8;
example.push({});
example[index].title = "Problem 10.9";
example[index].problem = " Determine the debt-to-equity mix when Applied Technology bought out Southwest Semiconductor using ? nancing as follows: $12 million from mort- gages, $5 million from retained earnings, $10 mil- lion from cash on hand, and $20 million from bonds.  ";

index = 9;
example.push({});
example[index].title = "Problem 10.10";
example[index].problem = " Business and engineering seniors are comparing methods of ? nancing their college education dur- ing their senior year. The business student has $30,000 in student loans that come due at gradu- ation. Interest is an effective 4% per year. The engineering senior owes $50,000, 50% from his parents with no interest due and 50% from a credit union loan. This latter amount is also due at graduation with an effective rate of 7% per year.   ( a)   What is the D-E mix for each student?    ( b)   If their grandparents pay the loans in full at graduation, what are the amounts on the checks they write for each graduate?    ( c)   When grandparents pay the full amount at graduation, what percent of the principal does the interest represent?     ";

        
index = 10;
example.push({});
example[index].title = "Problem 10.11";
example[index].problem = " Two public corporations, First Engineering and Midwest Development, each show capitalization of $175 million in their annual reports. The bal- ance sheet for First Engineering indicates a total debt of $87 million, and that of Midwest Develop- ment indicates a net worth of $62 million. Deter- mine the D-E mix for each company.  ";

index = 11;
example.push({});
example[index].title = "Problem 10.12";
example[index].problem = " Forest Products, Inc. invested $50 million. The company�s overall D-E mix is 60�40.What is the return on the company�s equity, if the net income is $5 million on a revenue base of $6 million";

index = 12;
example.push({});
example[index].title = "Problem 10.13";
example[index].problem = "Determine the weighted average cost of capital for a company that manufactures miniature triaxial ac- celerometers for space-restricted applications. The ? nancing pro? le, with interest rates, is as follows: $3 million in stock sales at 15% per year, $4 mil- lion in bonds at 9%, and $6 million in retained earnings at 7% per year.  ";

index = 13;
example.push({});
example[index].title = "Problem 10.14";
example[index].problem = " Growth Transgenics Enterprises (GTE) is contem- plating the purchase of its rival. One of GTE�s ge- netics engineers got interested in the ? nancing strategy of the buyout. He learned there are two plans being considered. Plan 1 requires 50% eq- uity funds from GTE�s retained earnings that cur- rently earn 9% per year, with the balance borrowed externally at 6%, based on the company�s excel- lent stock rating. Plan 2 requires only 20% equity funds with the balance borrowed at a higher rate of 8% per year.   ( a) W  hich plan has the lower average cost of capital?    ( b)   If GTE�s owners decide that the current cor- porate WACC of 8.2% will not be exceeded, what is the maximum cost of debt capital al- lowed for each plan? Are these rates higher or lower than the current estimates?     ";

index = 14;
example.push({});
example[index].title = "Problem 10.15";
example[index].problem = " Midac Corporation wants to arrange for $50 mil- lion in capital to ? nance the manufacturing of a new consumer product. The current plan is 60% equity capital and 40% debt ? nancing. Calculate the WACC for the following scenario: Equity capital:  60%, or $35 million, via common stock sales for 40% of this amount that will pay dividends at a rate of 5% per year, and the remain- ing 60% from retained earnings, which currently earn 9% per year.     Debt capital:  40%, or $15 million, obtained through two sources�bank loans for $10 million borrowed at 8% per year, and the remainder in convertible bonds at an estimated 10% per year bond dividend rate.  ";

index = 15;
example.push({});
example[index].title = "Problem 10.16";
example[index].problem = "A public corporation in which you own common stock reported a WACC of 11.1% for the year in its report to stockholders. The common stock that you own has averaged a total return of 7% per year over the last 3 years. The annual report also men- tions that projects within the corporation are 75% funded by its own capital. Estimate the company�s cost of debt capital.  ";

index = 16;
example.push({});
example[index].title = "Problem 10.17";
example[index].problem = " BASF will invest $14 million this year to upgrade its ethylene glycol processes. This chemical is used to produce polyester resins to manufacture products varying from construction materials to aircraft, and from luggage to home appliances. Eq- uity capital costs 14.5% per year and will supply 65% of the capital funds. Debt capital costs 10% per year before taxes. The effective tax rate for BASF is 36%.   ( a) D  etermine the amount of annual revenue after taxes that is consumed in covering the interest on the project�s initial cost.    ( b)   If the corporation does not want to use 65% of its own funds, the ? nancing plan may in- clude 75% debt capital. Determine the amount of annual revenue needed to cover the interest with this plan, and explain the ef- fect it may have on the corporation�s ability to borrow in the future.     ";

index = 17;
example.push({});
example[index].title = "Problem 10.18";
example[index].problem = "A couple planning for their child�s college educa- tion can fund part of or all the expected $100,000 tuition cost from their own funds (through an edu- cation IRA) or borrow all or part of it. The average return for their own funds is 7% per year, but the loan is expected to have a higher interest rate as the loan amount increases. Use a spreadsheet to generate a plot of the WACC curve with the esti- mated loan interest rates below and determine the best D-E mix for the couple.Loan Amount, $  Interest Rate, % per year 10,000  5.0    30,000  6.0    50,000  8.0    60,000  9.0    75,000  11.0    100,000  13.0 ";

index = 18;
example.push({});
example[index].title = "Problem 10.19";
example[index].problem = " 10.19 Over the last few years, Carol�s Fashion Store, a statewide franchise, has experienced the D-E mixes and costs of debt and equity capital on sev- eral projects summarized below.   ( a)   Plot debt, equity, and weighted average cost of capital.    ( b)   Determine what mix of debt and equity capi- tal provided the lowest WACC.D ebt capital     E quity capital Project  Percent R ate  Percent  Rate A  100 % 14.5%        B  70  13.0  30%  7.8%    C  65  12.0  35  7.8    D  50  11.5  50  7.9    E  35  9.9  65  9.8    F  20  12.4  80  12.5    G      100  12.5 ";

index = 19;
example.push({});
example[index].title = "Problem 10.20";
example[index].problem = "For Problem 10.19, use a spreadsheet to ( a ) deter- mine the best D-E mix and ( b ) determine the best D-E mix if the cost of debt capital increases by 10% per year, for example, 13.0% increases to 14.3%.";

index = 20;
example.push({});
example[index].title = "Problem 10.21";
example[index].problem = " The cash ? ow plan associated with a debt ? nanc- ing transaction allowed a company to receive $2,800,000 now in lieu of future interest payments of $196,000 per year for 10 years plus a lump sum of $2,800,000 in year 10. If the company�s effec- tive tax rate is 33%, determine the company�s cost of debt capital ( a ) before taxes and ( b ) after taxes.  ";

index = 21;
example.push({});
example[index].title = "Problem 10.22";
example[index].problem = " A company that makes several different types of skateboards, Jennings Outdoors, incurred interest expenses of $1,200,000 per year from various types of debt ? nancing. The company borrowed $19,000,000 in year 0 and repaid the principal of the loans in year 15 in a lump-sum payment of $20,000,000. If the company�s effective tax rate is 29%, what was the company�s cost of debt capital ( a ) before taxes and ( b ) after taxes?  ";

index = 22;
example.push({});
example[index].title = "Problem 10.23";
example[index].problem = " Molex Inc., a manufacturer of cable assemblies for polycrystalline photovoltaic solar modules, re- quires $3.1 million in debt capital. The company plans to sell 15-year bonds that carry a dividend of 6% per year, payable semiannually. Molex has an effective tax rate of 32% per year. Determine ( a)  the nominal annual after-tax cost of debt capi- tal and ( b)  the effective annual after-tax cost of debt capital.  ";

index = 23;
example.push({});
example[index].title = "Problem 10.24";
example[index].problem = "Tri-States Gas Producers expects to borrow $800,000 for ? eld engineering improvements. Two methods of debt ? nancing are possible�borrow it all from a bank or issue debenture bonds. The com- pany will pay an effective 8% per year to the bank for 8 years. The principal on the loan will be reduced uniformly over the 8 years, with the remainder of each annual payment going toward interest. The bond issue will be for 800 10-year bonds of $1000 each that require a 6% per year dividend payment.   ( a)   Which method of ? nancing is cheaper after an effective tax rate of 40% is considered?    ( b)   Which is the cheaper method using a before- tax analysis?     ";

index = 24;
example.push({});
example[index].title = "Problem 10.25";
example[index].problem = " The Sullivan Family Partnership plans to purchase a refurbished condo in their hometown for invest- ment purposes. The negotiated $200,000 purchase price will be ? nanced with 20% of savings (re- tained earnings) which consistently makes 6.5% per year after all relevant income taxes are paid. Eighty percent will be borrowed at a before-tax rate of 9% per year for 15 years with the principal repaid in equal annual installments. If the effective tax rate is 22% per year, based only on these data, answer the following.   ( a)   What is the partnership�s annual loan pay- ment for each of the 15 years?    ( b) W  hat is the net present worth difference be- tween the $200,000 now and the PW of the cost of the 80�20 D-E mix series of cash ? ows necessary to ? nance the purchase? What does this PW value mean?    ( c) W  hat is the after-tax WACC for this  purchase?       ";

index = 25;
example.push({});
example[index].title = "Problem 10.26";
example[index].problem = " Determine the cost of equity capital to Hy-Lok USA if the company sells 500,000 shares of its preferred stock at a 5% discount from its price of $130. The stock carries a $10 per year dividend.  ";

index = 26;
example.push({});
example[index].title = "Problem 10.27";
example[index].problem = " The initial public offering price for the common stock of SW Re? ning is $23 per share, and it will pay a ? rst-year dividend of $0.92 per share. If the appreciation rate in dividends is anticipated to be 3.2% per year, determine the cost of equity capital for the stock offering.  ";

index = 27;
example.push({});
example[index].title = "Problem 10.28";
example[index].problem = " The cost of debt capital is lower after taxes than before taxes. The cost of equity capital is more dif- ? cult to estimate using the dividend method or the CAPM model, for example, yet the after-tax and before-tax cost of equity capital is the same. Why are the after-tax rates not the same for both types of ? nancing?  ";

index = 28;
example.push({});
example[index].title = "Problem 10.29";
example[index].problem = "H2W Technologies is considering raising capital to expand its offerings of 2-phase and 4-phase  inear stepper motors. The beta value for its stock is 1.41. Use the capital asset pricing model and a 3.8% premium above the risk-free return to deter- mine the cost of equity capital if the risk-free re- turn is 3.2%. ";

index = 29;
example.push({});
example[index].title = "Problem 10.30";
example[index].problem = " Management at Hirschman Engineering has asked you to determine the cost of equity capital based on the company�s common stock. The company wants you to use two methods: the dividend method and the CAPM. Last year, the ? rst year for dividends, the stock paid $0.75 per share on the average of $11.50 on the New York Stock Ex- change. Management hopes to grow the dividend rate at 3% per year. Hirschman Engineering stock has a volatility that is higher than the norm at 1.3. If safe investments are returning 5.5% and the 3% growth on common stocks is also the premium above the risk-free investments that Hirschman Engineering plans to pay, calculate the cost of eq- uity capital using the two methods.  ";

index = 30;
example.push({});
example[index].title = "Problem 10.31";
example[index].problem = " Common stocks issued by Meggitt Sensing Sys- tems paid stockholders $0.93 per share on an aver- age price of $18.80 last year. The company expects to grow the dividend rate at a maximum of 1.5% per year. The stock volatility is 1.19, and other stocks in the same industry are paying an average of 4.95% per year dividend. U.S Treasury bills are returning 4.5%. Determine the company�s cost of equity capital last year using ( a)  the dividend method and ( b ) the CAPM.";

index = 31;
example.push({});
example[index].title = "Problem 10.32";
example[index].problem = "Last year a Japanese engineering materials corpo- ration, Yamachi Inc., purchased some U.S. Trea- sury bonds that return an average of 4% per year. Now, Euro bonds are being purchased with a real- ized average return of 3.9% per year. The volatility factor of Yamachi stock last year was 1.10 and has increased this year to 1.18. Other publicly traded stocks in this same business are paying an average of 5.1% dividends per year. Determine the cost of equity capital for each year, and explain why the increase or decrease seems to have occurred.  ";

index = 32;
example.push({});
example[index].title = "Problem 10.33";
example[index].problem = " The engineering manager at FXO Plastics wants to complete an alternative evaluation study. She asked the ? nance manager for the corporate MARR. The ? nance manager gave her some data on the project and stated that all projects must clear their average (pooled) cost by at least 4%.Funds Source  Amount, $  Average Cost, % Retained earnings  4,000,000  7.4    Stock sales  6,000,000  4.8    Long-term loans  5,000,000  9.8 ( a) U  se the data to determine the minimum MARR.    ( b)   The study is after taxes and part ( a ) provided the before-tax MARR. Determine the correct MARR to use if the tax rate was 32% last year and the ? nance manager meant that the 4% above the cost is for after-tax evaluations.       ";

index = 33;
example.push({});
example[index].title = "Problem 10.34";
example[index].problem = " Why is it ? nancially unhealthy for an individual to maintain a large percentage of debt ? nancing over a long time, that is, to be highly leveraged?  ";

index = 34;
example.push({});
example[index].title = "Problem 10.35";
example[index].problem = " In a leveraged buyout of one company by another, the purchasing company usually obtains borrowed money and inserts as little of its own equity as pos- sible into the purchase. Explain some circum- stances under which such a buyout may put the purchasing company at economic risk.  ";

index = 35;
example.push({});
example[index].title = "Problem 10.36";
example[index].problem = " Grainger and Company has an opportunity to in- vest $500,000 in a new line of direct-drive rotary screw compressors. Financing will be equally split between common stock ($250,000) and a loan with an 8% after-tax interest rate. The estimated annual NCF after taxes is $48,000 for the next 7 years. The effective tax rate is 50%. Grainger uses the capital asset pricing model for evaluation of its common stock. Recent analysis shows that it has a volatility rating of 0.95 and is paying a pre- mium of 5% above a safe return on its common stock. Nationally, the safest investment is cur- rently paying 3% per year. Is the investment ? nan- cially attractive if Grainger uses as the MARR its ( a ) equity cost of capital and ( b ) WACC?  ";

index = 36;
example.push({});
example[index].title = "Problem 10.37";
example[index].problem = " Fairmont Industries primarily relies on 100% eq- uity ? nancing to fund projects. A good opportunity is available that will require $250,000 in capital. The Fairmont owner can supply the money from personal investments that currently earn an aver- age of 7.5% per year. The annual net cash ? ow from the project is estimated at $30,000 for the next 15 years. Alternatively, 60% of the required amount can be borrowed for 15 years at 7% per year. If the MARR is the WACC, determine which plan, if either, should be undertaken. This is a  before-tax analysis.  ";
index = 37;
example.push({});
example[index].title = "Problem 10.38";
example[index].problem = " Omega Engineering Inc. has an opportunity to in- vest $10,000,000 in a new engineering remote control system for offshore drilling platforms. Fi- nancing will be split between common stock sales ($5,000,000) and a loan with an 8% per year inter- est rate. Omega�s share of the annual net cash ? ow is estimated to be $1.35 million for each of the next 5 years. Omega is about to initiate CAPM as ";
index = 38;
example.push({});
example[index].title = "Problem 10.39";
example[index].problem = " A new annular die process is to be installed for ex- truding pipes, tubes, and tubular ? lms. The phase I installed price for the dies and machinery is $2,000,000. The manufacturer has not decided how to ? nance the system. The WACC over the last 5 years has averaged 10% per year. ";
index = 39;
example.push({});
example[index].title = "Problem 10.40";
example[index].problem = "Shadowland, a manufacturer of air-freightable pet crates, has identi? ed two projects that, though hav- ing a relatively high risk, are expected to move the company into new revenue markets. Utilize a spreadsheet solution to ( a)  select any combination of the projects if the MARR is equal to the after- ";
index = 40;
example.push({});
example[index].title = "Problem 10.41";
example[index].problem = " Two friends each invested $20,000 of their own (equity) funds. Stan, being more conservative, pur- chased utility and manufacturing corporation stocks. Theresa, being a risk taker,  leveraged  the $20,000 and purchased a $100,000 condo for renta";
index = 41;
example.push({});
example[index].title = "Problem 10.42";
example[index].problem = "In multiple attribute analysis, if three different al- ternatives are to be evaluated on the basis of eight attributes that are considered of equal importance, what is the weight of each attribute?  ";
index = 42;
example.push({});
example[index].title = "Problem 10.43";
example[index].problem = " A consulting engineer asked a company manager to assign importance values (0 to 100) to ? ve attri- butes that will be included in an alternative evalua- tion process. Determine the weight of each  attribute using the importance scores.";
index = 43;
example.push({});
example[index].title = "Problem 10.44";
example[index].problem = " Ten attributes were rank-ordered in terms of in- creasing importance and were identi? ed as A, B, C, . . . , and J. Determine the weight of ( a ) attri- bute C and ( b ) attribute J.  ";
index = 44;
example.push({});
example[index].title = "Problem 10.45";
example[index].problem = " A team of three people submitted the following statements about the attributes to be used in a weighted attribute evaluation. Use the statements to determine the normalized weights if assigned scores are between 0 and 100.";
index = 45;
example.push({});
example[index].title = "Problem 10.46";
example[index].problem = "Different types and capacities of crawler hoes are being considered for use in a major excavation on a pipe-laying project. Several supervisors who served on similar projects in the past have identi- ? ed some of the attributes and their view of rela- tive importance. For the information that follows, determine the weighted rank order, using a 0-to-10 scale and the normalized weights.";
index = 46;
example.push({});
example[index].title = "Problem 10.47";
example[index].problem = " John, who works at Swatch, has decided to use the weighted attribute method to compare three sys- tems for manufacturing a watchband. The vice president and her assistant VP have evaluated each of three attributes in terms of importance to them, and John has placed an evaluation from 0 to 100 on each alternative for the three attributes. John�s  ";
index = 47;
example.push({});
example[index].title = "Problem 11.3";
example[index].problem = " An asset that was purchased 3 years ago for $100,000 is becoming obsolete faster than ex- pected. The company thought the asset would last 5 years and that its book value would decrease by $20,000 each year and, therefore, be worthless at the end of year 5. In considering a more versatile, more reliable high-tech replacement, the company discovered that the presently owned as";
index = 48;
example.push({});
example[index].title = "Problem 11.2";
example[index].problem = "As a muscle car a? cionado, a friend of yours likes to restore cars of the 60s and 70s and sell them for a pro? t. He started his latest project (a 1965 Shelby GT350) four months ago and has a total of $126,000 invested so far. Another opportunity has come up (a 1969 Dodge Charger) that he is think- ing of buying because he believes he could sell it for a pro? t of $60,000 after it is completely re- stored. To do so, however, he";
index = 49;
example.push({});
example[index].title = "Problem 11.1";
example[index].problem = "In a replacement study, what is meant by �taking the nonowner�s viewpoint�?  ";
index = 50;
example.push({});
example[index].title = "Problem 11.4";
example[index].problem = " A civil engineer who owns his own designbuild operate company purchased a small crane 3 years ago at a cost of $60,000. At that time, it was ex- pected to be used for 10 years and then traded in for its salvage value of $10,000. Due to increased construction activities, the company would prefer to trade for a new, larger crane now that will cost $80,000. The company estimates that the old crane can be used, if necessary, for another 3 years, at which time it would have a $23,000 estimated market value. Its current market value is estimated to be $39,000, and if it is used for another 3 years, it will have M&O costs (exclusive of operator costs) of $17,000 per year. Determine the values of  P ,  n ,  S , and AOC that should be used for the exist- ing crane in a replacement analysis. ";
index = 51;
example.push({});
example[index].title = "Problem 11.5";
example[index].problem = " In conducting a replacement study wherein the planning horizon is unspeci? ed, list three assump- tions that are inherent in an annual worth analysis of the defender and challenger. ";


/* --------------------------12 -----------------------------------*/
index = 52;
example.push({});
example[index].title = "Problem 12.1";
example[index].problem = "Define the following terms: bundle, contingent project, dependent project.";

index = 53;
example.push({});
example[index].title = "Problem 12.2";
example[index].problem = "State two assumptions made when doing capital rationing using a PW analysis for unequal-life projects."

index = 54;
example.push({});
example[index].title = "Problem 12.3";
example[index].problem = "For independent projects identified as A, B, C, D, E, F, and G, how many mutually exclusive bundles can be formed?";

index = 55;
example.push({});
example[index].title = "Problem 12.4";
example[index].problem = "For independent projects identified as W, X, Y, and Z, develop all of the mutually exclusive bundles.  Projects X and Y perform the same function with different processes; both should not be selected.";

index = 56;
example.push({});
example[index].title = "Problem 12.5";
example[index].problem = "Five projects have been identified for possible implementation by a company that makes dry ice blasters�machines that propel tiny dry ice pellets at supersonic speeds so they fl ash-freeze and then lift grime, paint, rust, mold, asphalt, and other contaminants off in-place machines and a wide range of surfaces. The total present worth of the initial investment for each project is shown. Determine which bundles are possible, provided the budget limitation is ( a ) $34,000 and ( b ) $45,000.";


/* --------------------------13 -----------------------------------*/
index = 57;
example.push({});
example[index].title = "Problem 13.1";
example[index].problem = "A design-to-cost approach to product pricing involves determining the selling price of the product and then fi guring out if it can be made at a cost lower than that. Banner Engineering�s QT50R radar-based sensor features frequency-modulated technology to accurately monitor or detect objects up to 15 miles away while resisting rain, wind, humidity, and extreme temperatures. It has a list price of $589, and the variable cost of manufacturing the unit is $340.  (a) What could the company�s fi xed cost per year be in order for Banner to break even with sales of 9000 units per year?  (b) If Banner�s fi xed cost is actually $750,000 per year, what is the profi t at a sales level of 7000 units per year?";

index = 58;
example.push({});
example[index].title = "Problem 13.2";
example[index].problem = "Handheld fiber-optic meters with white light polarization interferometry are useful for measuring temperature, pressure, and strain in electrically noisy environments. The fi xed costs associated with manufacturing are $800,000 per year. If a base unit sells for $2950 and its variable cost is $2075, ( a ) how many units must be sold each year for breakeven and ( b ) what will the profi t be for sales of 3000 units per year?";

index = 59;
example.push({});
example[index].title = "Problem 13.3";
example[index].problem = "A metallurgical engineer has estimated that the capital investment cost for recovering valuable metals (nickel, silver, platinum, gold, etc.) from the copper refi nery�s wastewater stream will be $12 million. The equipment will have a useful life of 15 years with no salvage value. Its operating cost is represented by the relation ($2,600,000) E1.9 , where E is the effi ciency of the metal recovery operation (in decimal form). The amount of metal currently discharged is 2880 pounds per year prior to recovery operations, and the effi ciency of recovery is estimated at 71%. What must the average selling price per pound be for the precious metals that are recovered and sold in order for the company to break even at its MARR of 15% per year?";

index = 60;
example.push({});
example[index].title = "Problem 13.4";
example[index].problem = "Determine the breakeven point for each plant.";

index = 61;
example.push({});
example[index].title = "Problem 13.5";
example[index].problem = "Estimate the minimum revenue per hundredweight required for next year if breakeven values and variable costs remain constant, but fi xed costs increase by 10%.";





/* --------------------------14 -----------------------------------*/
index = 62;
example.push({});
example[index].title = "Problem 14.1";
example[index].problem = "What is the difference between today�s dollars and constant-value dollars ( a ) when using today as the reference point in time and ( b ) when using 2 years ago as the reference point?";

index = 63;
example.push({});
example[index].title = "Problem 14.2";
example[index].problem = "State the conditions under which the market interest rate is ( a ) higher than, ( b ) lower than, and ( c ) the same as the real interest rate.";  

index = 64;
example.push({});
example[index].title = "Problem 14.3";
example[index].problem = "What annual infl ation rate is implied from an inflation-adjusted interest rate of 10% per year, when the real interest rate is 4% per year?";  

index = 65;
example.push({});
example[index].title = "Problem 14.4";
example[index].problem = "Determine the infl ation-adjusted interest rate for a growth company that wants to earn a real rate of return of 20% per year when the infl ation rate is 5% per year.";

index = 66;
example.push({});
example[index].title = "Problem 14.5";
example[index].problem = "For a high-growth company that wants to make a real rate of return of 30% per year, compounded monthly, determine the infl ation-adjusted nominal interest rate per year. Assume the infl ation rate is 1.5% per month.";

index = 67;
example.push({});
example[index].title = "Problem 14.6";
example[index].problem = "A high-tech company whose stock trades on the NASDAQ stock exchange uses a MARR of 35% per year. If the chief fi nancial offi cer (CFO) said the company expects to make a real rate of return of 25% per year on its investments over the next 3-year period, what is the company expecting the infl ation rate per year to be over that time period?";  

index = 68;
example.push({});
example[index].title = "Problem 14.7";
example[index].problem = "Calculate the infl ation-adjusted interest rate per quarter when the real interest rate is 4% per quarter and the infl ation rate is 1% per quarter.";  

index = 69;
example.push({});
example[index].title = "Problem 14.8";
example[index].problem = "Calculate the real interest rate per month if the nominal infl ation-adjusted interest rate per year, compounded monthly, is 18% and the infl ation rate per month is 0.5%.";

index = 70;
example.push({});
example[index].title = "Problem 14.9";
example[index].problem = "A southwestern city has a contract with Firestone Vehicle Fleet Maintenance to provide maintenance services on its fl eet of city-owned vehicles such as street sweepers, garbage trucks, backhoes, and carpool vehicles. The contract price is fi xed at $45,000 per year for 4 years. If you were asked to convert the future amounts into constant-value amounts per today�s dollars, what would the respective amounts be? Assume the current market interest rate of 10% per year and infl ation rate of 5% per year are expected to remain the same over the next 4-year period.";

index = 71;
example.push({});
example[index].title = "Problem 14.10";
example[index].problem = "When the inflation rate is 5% per year, how many inflated dollars will be required 10 years from now to buy the same things that $10,000 buys now?";  

index = 72;
example.push({});
example[index].title = "Problem 14.11";
example[index].problem = "Assume that you want to retire 30 years from now with an amount of money that will have the same value (same purchasing power) as $1.5 million today. If you estimate the infl ation rate will be 4% per year, how many future (then-current) dollars will you need?";

index = 73;
example.push({});
example[index].title = "Problem 14.12";
example[index].problem = " If the inflation rate is 7% per year, how many years will it take for the cost of something to double when prices increase at exactly the same rate as infl ation?";  

index = 74;
example.push({});
example[index].title = "Problem 14.13";
example[index].problem = "The inflation rate in a Central American country is 6% per year. What real rate of return will an investor make on a $100,000 investment in a copper mine stock that yields an overall internal rate of return of 28% per year?";

index = 75;
example.push({});
example[index].title = "Problem 14.14";
example[index].problem = "During periods of hyperinflation, prices increase rapidly over short periods of time. In 1993, the Consumer Price Index (CPI) in Brazil was 113.6 billion. In 1994, the CPI was 2472.4 billion.  (a) What was the infl ation rate per year between 1993 and 1994?  (b) Assuming the infl ation rate calculated in part ( a ) occurred uniformly throughout the year and represented a nominal rate, what were the monthly and daily infl ation rates over that time period?";

index = 76;
example.push({});
example[index].title = "Problem 14.15";
example[index].problem = "A trust was set up by your grandfather that states you are to receive $250,000 exactly 5 years from today. Determine the buying power of the $250,000 in terms of today�s dollars if the market interest rate is 10% per year and the infl ation rate is 4% per year. "; 

index = 77;
example.push({});
example[index].title = "Problem 14.16";
example[index].problem = " Assume the inflation rate is 4% per year and the market interest rate is 5% above the infl ation rate.  Determine ( a ) the number of constant-value dollars 5 years in the future that is equivalent to $30,000 now and ( b ) the number of future dollars that will be equivalent to $30,000 now. " 

index = 78;
example.push({});
example[index].title = "Problem 14.17";
example[index].problem = " The Pell Grant program of the federal government provides fi nancial aid to needy college students. If the average grant is slated to increase from $4050 to $5400 over the next 5 years �to keep up with inflation,� what is the average infl ation rate per year expected to be?";

index = 79;
example.push({});
example[index].title = "Problem 14.18";
example[index].problem = " Ford Motor Company announced that the price of its F-150 pickup trucks is going to increase by only the infl ation rate for the next 3 years. If the current price of a well-equipped truck is $28,000 and the inflation rate averages 2.1% per year, what is the expected price of a comparably equipped truck next year? 3 years from now?";  

index = 80;
example.push({});
example[index].title = "Problem 14.19";
example[index].problem = "In an effort to reduce pipe breakage, water hammer, and product agitation, a chemical company plans to install several chemically resistant pulsation dampeners.  The cost of the dampeners today is $120,000, but the company has to wait until a permit is approved for its bidirectional port-to-plant product pipeline. The permit approval process will take at least 2 years because of the time required for preparation of an environmental impact statement.  Because of intense foreign competition, the manufacturer plans to increase the price only by the infl ation rate each year. If the infl ation rate is 2.8% per year and the company�s MARR is 20% per year, estimate the cost of the dampeners in 2 years in terms of ( a ) today�s dollars and ( b ) future dollars.";

index = 81;
example.push({});
example[index].title = "Problem 14.20";
example[index].problem = " A machine currently under consideration by Holzmann Industries has a cost of $45,000. When the purchasing manager complained that a similar machine the company purchased 5 years ago was much cheaper, the salesman responded that the cost of the machine has increased solely in accordance with the infl ation rate, which has averaged 3% per year. When the purchasing manager checked the invoice for the machine he purchased 5 years ago, he saw that the price was $29,000.  Was the salesman telling the truth about the increase in the cost of the machine? If not, what should the machine cost now, provided the price increased by only the infl ation rate?";  

index = 82;
example.push({});
example[index].title = "Problem 14.21";
example[index].problem = " A report by the National Center for Public Policy and Higher Education stated that tuition and fees (T&F) at public colleges and universities increased by 439% over the last 25 years. During this same time period, the median family income (MFI) rose 147%. When the report was written, T&F at a 4-year public university constituted 28% of the MFI of $52,000 (tuition and fees at a private university constituted 76% of MFI).  (a) What was the tuition and fee cost per year when the report was written?  (b) What was the T&F cost 25 years ago?  (c) What percentage was T&F of the MFI 25 years ago?";

index = 83;
example.push({});
example[index].title = "Problem 14.22";
example[index].problem = "The headline on a Chronicle of Higher Education article reads �College Costs Rise Faster than Infl ation.� The article states that tuition at public colleges and universities increased by 58% over the past 5 years. ( a ) What was the average annual percentage increase over that period of time? (b) If the real increase in tuition (i.e., without infl ation) was 5% per year, what was the infl ation rate per year?";

index = 84;
example.push({});
example[index].title = "Problem 14.23";
example[index].problem = "Stadium Capital Financing Group helps cashstrapped sports programs through the marketing of its �sports mortgage.� At the University of Kansas, Jayhawks fans can sign up to pay $105,000 over 10 years for the right to buy top seats for football during the next 30 years. In return, the season tickets will stay locked in at current-year prices. Season tickets in tier 1 are currently selling for $350.  A fan plans to purchase the sports mortgage along with season tickets now and each year for the next 30 years (31 seasons). What is the dollar amount of the savings on the tickets (with no interest considered), if ticket prices rise at a rate of 3% per year for the next 30 years?";  

index = 85;
example.push({});
example[index].title = "Problem 14.24";
example[index].problem = "There are two ways to account for infl ation in present worth calculations. What are they?";

index = 86;
example.push({});
example[index].title = "Problem 14.25";
example[index].problem = " An environmental testing company needs to purchase equipment 2 years from now and expects to pay $50,000 at that time . At a real interest rate of 10% per year and infl ation rate of 4% per year, what is the present worth of the cost of the equipment?";

index = 87;
example.push({});
example[index].title = "Problem 14.26";
example[index].problem = "Carlsbad Gas and Electric is planning to purchase a degassing tower for removing CO 2 from acidifi ed saltwater. The supplier quoted a price of $125,000 if the unit is purchased within the next 3 years. Your supervisor has asked you to calculate the present worth of the tower when considering infl ation. Assuming the tower will not be purchased for 3 years, calculate the present worth at an interest rate of 10% per year and an infl ation rate of 4% per year."

index = 88;
example.push({});
example[index].title = "Problem 14.27";
example[index].problem = "How much can the manufacturer of superconducting magnetic energy storage systems afford to spend now on new equipment in lieu of spending $75,000 four years from now? The company�s real MARR is 12% per year, and the infl ation rate is 3% per year.";


index = 89;
example.push({});
example[index].title = "Problem 14.28";
example[index].problem = "Find the present worth of the cash flows shown.  Some are expressed as constant-value (CV) dollars, and others are infl ated dollars. Assume a real interest rate of 8% per year and an infl ation rate of 6% per year.";

index = 90;
example.push({});
example[index].title = "Problem 14.29";
example[index].problem = "A doctor is on contract to a medium-sized oil company to provide medical services at remotely located, widely separated refi neries. The doctor is considering the purchase of a private plane to reduce the total travel time between refi neries. The doctor can buy a used Lear jet now or wait for a new very light jet (VLJ) that will be available 3 years from now. The cost of the VLJ will be $1.9 million, payable when the plane is delivered in 3 years. The doctor has asked you, his friend, to determine the present worth of the VLJ so that he can decide whether to buy the used Lear now or wait for the VLJ. If the MARR is 15% per year and the infl ation rate is projected to be 3% per year, what is the present worth of the VLJ with infl ation considered?";

index = 91;
example.push({});
example[index].title = "Problem 14.30";
example[index].problem = " A regional infrastructure building and maintenance contractor is trying to decide whether to buy a new compact horizontal directional drilling (HDD) machine now or wait to buy it 2 years from now (when a large pipeline contract will require the new equipment). The HDD machine will include an innovative pipe loader design and maneuverable undercarriage system. The cost of the system is $68,000 if purchased now or $81,000 if purchased 2 years from now. At a real MARR of 10% per year and an infl ation rate of 5% per year, determine if the company should buy now or later ( a ) without any adjustment for infl ation and ( b ) with infl ation considered. "; 

index = 92;
example.push({});
example[index].title = "Problem 14.31";
example[index].problem = "An engineer must recommend one of two rapidprototyping machines for integration into an upgraded manufacturing line. She obtained estimates from salespeople from two companies. Salesman A gave her the estimates in constant-value (today�s) dollars, while saleswoman B provided the estimates in future (then-current) dollars. The company�s MARR is equal to the real rate of return of 20% per year, and infl ation is estimated at 4% per year. Use PW analysis to determine which machine the engineer should recommend.";



/*
index = 0;
example.push({});
example[index].title = "Problem 12.1";
example[index].problem = "";
*/
