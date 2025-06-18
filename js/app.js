var username=document.getElementById("name");
var level=document.getElementById("level");
var newgame=document.getElementById("submit");
var board=document.getElementById("board");
var status=document.getElementById("status");
var sudoku="";
var solution="";
var darkmode=document.getElementById("darkmode");
var lightmode=document.getElementById("lightmode");
darkmode.addEventListener("click",function(
){     
document.documentElement.setAttribute("theme","dark");
darkmode.id="lightmode"; 
lightmode.id="darkmode";
})
lightmode.addEventListener("click",function(
        ){    darkmode.id="darkmode"; 
        lightmode.id="lightmode";
        document.documentElement.setAttribute("theme","light");       
        })
        
newgame.addEventListener("click",function(){
        if(level.value=="Easy"){
document.getElementById("username").innerText=username.value;
document.getElementById("userlevel").innerText=level.value;
document.getElementById("content").className="game";
document.getElementById("game").className="game-play";

board.addEventListener("input",function(){
          
         sudoku=[[document.getElementById("00").value,document.getElementById("01").value,document.getElementById("02").value,document.getElementById("03").value,document.getElementById("04").value,document.getElementById("05").value,document.getElementById("06").value,document.getElementById("07").value,document.getElementById("08").value],
                 [document.getElementById("10").value,document.getElementById("11").value,document.getElementById("12").value,document.getElementById("13").value,document.getElementById("14").value,document.getElementById("15").value,document.getElementById("16").value,document.getElementById("17").value,document.getElementById("18").value],
                 [document.getElementById("20").value,document.getElementById("21").value,document.getElementById("22").value,document.getElementById("23").value,document.getElementById("24").value,document.getElementById("25").value,document.getElementById("26").value,document.getElementById("27").value,document.getElementById("28").value],
                 [document.getElementById("30").value,document.getElementById("31").value,document.getElementById("32").value,document.getElementById("33").value,document.getElementById("34").value,document.getElementById("35").value,document.getElementById("36").value,document.getElementById("37").value,document.getElementById("38").value],
                 [document.getElementById("40").value,document.getElementById("41").value,document.getElementById("42").value,document.getElementById("43").value,document.getElementById("44").value,document.getElementById("45").value,document.getElementById("46").value,document.getElementById("47").value,document.getElementById("48").value],
                 [document.getElementById("50").value,document.getElementById("51").value,document.getElementById("52").value,document.getElementById("53").value,document.getElementById("54").value,document.getElementById("55").value,document.getElementById("56").value,document.getElementById("57").value,document.getElementById("58").value],
                 [document.getElementById("60").value,document.getElementById("61").value,document.getElementById("62").value,document.getElementById("63").value,document.getElementById("64").value,document.getElementById("65").value,document.getElementById("66").value,document.getElementById("67").value,document.getElementById("68").value],
                 [document.getElementById("70").value,document.getElementById("71").value,document.getElementById("72").value,document.getElementById("73").value,document.getElementById("74").value,document.getElementById("75").value,document.getElementById("76").value,document.getElementById("77").value,document.getElementById("78").value],
                 [document.getElementById("80").value,document.getElementById("81").value,document.getElementById("82").value,document.getElementById("83").value,document.getElementById("84").value,document.getElementById("85").value,document.getElementById("86").value,document.getElementById("87").value,document.getElementById("88").value]
       ];
 solution=[
           [4,6,5,7,3,8,1,9,2],
           [3,7,8,2,9,1,5,6,4],
           [1,2,9,6,5,4,8,7,3],
           [2,4,1,3,6,9,7,5,8],
           [6,5,3,8,2,7,4,1,9],
           [9,8,7,4,1,5,2,3,6],
           [8,1,4,9,7,3,6,2,5],
           [5,3,2,1,4,6,9,8,7],
           [7,9,6,5,8,2,3,4,1]
    ] ;
    
    for(var i=0;i<sudoku.length;i++){
        for(var j=0;j<sudoku.length;j++){
                if(sudoku[i][j]==solution[i][j]){
                        document.getElementById(i+""+j).className="correct";
                }
                else{
                        document.getElementById(i+""+j).className="wrong";    
                }
        }   
    }

    if(JSON.stringify(sudoku)===JSON.stringify(solution)){ 
        document.getElementById("Status").innerText="Complete";
            document.getElementById("Status").className="correct";
    }
    else{
        document.getElementById("Status").className="wrong"; 
    }
 
})
        }
        if(level.value=="Medium"){
                document.getElementById("01").value="";document.getElementById("02").value="2";document.getElementById("03").value="8";
                document.getElementById("07").value="1";document.getElementById("06").value="";document.getElementById("08").value="";
                document.getElementById("10").value="";document.getElementById("11").value="7";document.getElementById("12").value="4";
                document.getElementById("13").value="3";document.getElementById("15").value="1";document.getElementById("17").value="8";
                document.getElementById("22").value="";document.getElementById("23").value="";document.getElementById("24").value="2";
                document.getElementById("25").value="4";document.getElementById("26").value="";document.getElementById("27").value="";
                document.getElementById("30").value="6";document.getElementById("32").value="";document.getElementById("33").value="5";
                document.getElementById("34").value="";document.getElementById("35").value="";document.getElementById("36").value="9";
                document.getElementById("38").value="";document.getElementById("37").value="";document.getElementById("41").value="";
                document.getElementById("44").value="8";document.getElementById("47").value="";document.getElementById("51").value="";
                document.getElementById("52").value="8";document.getElementById("55").value="2";document.getElementById("58").value="5";
                document.getElementById("53").value="";document.getElementById("57").value="";document.getElementById("60").value="";
                document.getElementById("61").value="";document.getElementById("62").value="";document.getElementById("63").value="7";
                document.getElementById("64").value="3";document.getElementById("65").value="";document.getElementById("67").value="";
                document.getElementById("71").value="8";document.getElementById("72").value="";document.getElementById("73").value="4";
                document.getElementById("76").value="7";document.getElementById("77").value="2";document.getElementById("81").value="4";
                document.getElementById("82").value="";document.getElementById("83").value="";document.getElementById("84").value="";
                document.getElementById("85").value="8";document.getElementById("86").value="3";document.getElementById("87").value="";
                document.getElementById("username").innerText=username.value;
                document.getElementById("userlevel").innerText=level.value;
                document.getElementById("content").className="game";
                document.getElementById("game").className="game-play";
                
                board.addEventListener("input",function(){
                          
                         sudoku=[[document.getElementById("00").value,document.getElementById("01").value,document.getElementById("02").value,document.getElementById("03").value,document.getElementById("04").value,document.getElementById("05").value,document.getElementById("06").value,document.getElementById("07").value,document.getElementById("08").value],
                                 [document.getElementById("10").value,document.getElementById("11").value,document.getElementById("12").value,document.getElementById("13").value,document.getElementById("14").value,document.getElementById("15").value,document.getElementById("16").value,document.getElementById("17").value,document.getElementById("18").value],
                                 [document.getElementById("20").value,document.getElementById("21").value,document.getElementById("22").value,document.getElementById("23").value,document.getElementById("24").value,document.getElementById("25").value,document.getElementById("26").value,document.getElementById("27").value,document.getElementById("28").value],
                                 [document.getElementById("30").value,document.getElementById("31").value,document.getElementById("32").value,document.getElementById("33").value,document.getElementById("34").value,document.getElementById("35").value,document.getElementById("36").value,document.getElementById("37").value,document.getElementById("38").value],
                                 [document.getElementById("40").value,document.getElementById("41").value,document.getElementById("42").value,document.getElementById("43").value,document.getElementById("44").value,document.getElementById("45").value,document.getElementById("46").value,document.getElementById("47").value,document.getElementById("48").value],
                                 [document.getElementById("50").value,document.getElementById("51").value,document.getElementById("52").value,document.getElementById("53").value,document.getElementById("54").value,document.getElementById("55").value,document.getElementById("56").value,document.getElementById("57").value,document.getElementById("58").value],
                                 [document.getElementById("60").value,document.getElementById("61").value,document.getElementById("62").value,document.getElementById("63").value,document.getElementById("64").value,document.getElementById("65").value,document.getElementById("66").value,document.getElementById("67").value,document.getElementById("68").value],
                                 [document.getElementById("70").value,document.getElementById("71").value,document.getElementById("72").value,document.getElementById("73").value,document.getElementById("74").value,document.getElementById("75").value,document.getElementById("76").value,document.getElementById("77").value,document.getElementById("78").value],
                                 [document.getElementById("80").value,document.getElementById("81").value,document.getElementById("82").value,document.getElementById("83").value,document.getElementById("84").value,document.getElementById("85").value,document.getElementById("86").value,document.getElementById("87").value,document.getElementById("88").value]
                       ];
                 solution=[
                           [5,6,2,8,7,9,4,1,3],
                           [9,7,4,3,5,1,6,8,2],
                           [8,1,3,6,2,4,5,9,7],
                           [6,2,1,5,4,7,9,3,8],
                           [7,5,9,1,8,3,2,6,4],
                           [4,3,8,9,6,2,1,7,5],
                           [2,9,6,7,3,5,8,4,1],
                           [3,8,5,4,1,6,7,2,9],
                           [1,4,7,2,9,8,3,5,6]
                    ] ;
                    
                    for(var i=0;i<sudoku.length;i++){
                        for(var j=0;j<sudoku.length;j++){
                                if(sudoku[i][j]==solution[i][j]){
                                        document.getElementById(i+""+j).className="correct";
                                }
                                else{
                                        document.getElementById(i+""+j).className="wrong";    
                                }
                        }   
                    }
                
                    if(JSON.stringify(sudoku)===JSON.stringify(solution)){ 
                        document.getElementById("Status").innerText="Complete";
                            document.getElementById("Status").className="correct";
                    }
                    else{
                        document.getElementById("Status").className="wrong"; 
                    }
                 
                })
                        }
                        if(level.value=="Hard"){

                                document.getElementById("00").value="9";
                                document.getElementById("01").value="";document.getElementById("02").value="";document.getElementById("03").value="";
                                document.getElementById("04").value="2";document.getElementById("05").value="5";
                                document.getElementById("07").value="";document.getElementById("06").value="";document.getElementById("08").value="8";
                                document.getElementById("10").value="";document.getElementById("11").value="";document.getElementById("12").value="1";
                                document.getElementById("13").value="8";document.getElementById("15").value="";document.getElementById("18").value="5";
                                document.getElementById("22").value="";document.getElementById("23").value="3";document.getElementById("24").value="";
                                document.getElementById("25").value="";document.getElementById("26").value="";document.getElementById("27").value="2";
                                
                                document.getElementById("30").value="5";document.getElementById("32").value="";document.getElementById("33").value="";
                                document.getElementById("34").value="1";document.getElementById("35").value="";document.getElementById("36").value="";
                                document.getElementById("38").value="3";document.getElementById("37").value="9";document.getElementById("41").value="3";
                                document.getElementById("44").value="";document.getElementById("47").value="8";
                                document.getElementById("50").value="8";document.getElementById("51").value="9";document.getElementById("54").value="3";
                                document.getElementById("52").value="";document.getElementById("55").value="";document.getElementById("58").value="4";
                                document.getElementById("53").value="";document.getElementById("57").value="";document.getElementById("60").value="";
                                document.getElementById("61").value="7";document.getElementById("62").value="";document.getElementById("63").value="";
                                document.getElementById("64").value="";document.getElementById("65").value="9";document.getElementById("67").value="";
                                document.getElementById("70").value="4";
                                document.getElementById("71").value="";document.getElementById("72").value="";document.getElementById("73").value="";
                                document.getElementById("75").value="3";
                                document.getElementById("76").value="7";document.getElementById("77").value="";
                                document.getElementById("80").value="2";document.getElementById("81").value="";
                                document.getElementById("82").value="";document.getElementById("83").value="6";document.getElementById("84").value="4";
                                document.getElementById("85").value="";document.getElementById("86").value="";document.getElementById("87").value="";
                                document.getElementById("88").value="1";
                                document.getElementById("username").innerText=username.value;
                                document.getElementById("userlevel").innerText=level.value;
                                document.getElementById("content").className="game";
                                document.getElementById("game").className="game-play";
                                
                                board.addEventListener("input",function(){
                                          
                                         sudoku=[[document.getElementById("00").value,document.getElementById("01").value,document.getElementById("02").value,document.getElementById("03").value,document.getElementById("04").value,document.getElementById("05").value,document.getElementById("06").value,document.getElementById("07").value,document.getElementById("08").value],
                                                 [document.getElementById("10").value,document.getElementById("11").value,document.getElementById("12").value,document.getElementById("13").value,document.getElementById("14").value,document.getElementById("15").value,document.getElementById("16").value,document.getElementById("17").value,document.getElementById("18").value],
                                                 [document.getElementById("20").value,document.getElementById("21").value,document.getElementById("22").value,document.getElementById("23").value,document.getElementById("24").value,document.getElementById("25").value,document.getElementById("26").value,document.getElementById("27").value,document.getElementById("28").value],
                                                 [document.getElementById("30").value,document.getElementById("31").value,document.getElementById("32").value,document.getElementById("33").value,document.getElementById("34").value,document.getElementById("35").value,document.getElementById("36").value,document.getElementById("37").value,document.getElementById("38").value],
                                                 [document.getElementById("40").value,document.getElementById("41").value,document.getElementById("42").value,document.getElementById("43").value,document.getElementById("44").value,document.getElementById("45").value,document.getElementById("46").value,document.getElementById("47").value,document.getElementById("48").value],
                                                 [document.getElementById("50").value,document.getElementById("51").value,document.getElementById("52").value,document.getElementById("53").value,document.getElementById("54").value,document.getElementById("55").value,document.getElementById("56").value,document.getElementById("57").value,document.getElementById("58").value],
                                                 [document.getElementById("60").value,document.getElementById("61").value,document.getElementById("62").value,document.getElementById("63").value,document.getElementById("64").value,document.getElementById("65").value,document.getElementById("66").value,document.getElementById("67").value,document.getElementById("68").value],
                                                 [document.getElementById("70").value,document.getElementById("71").value,document.getElementById("72").value,document.getElementById("73").value,document.getElementById("74").value,document.getElementById("75").value,document.getElementById("76").value,document.getElementById("77").value,document.getElementById("78").value],
                                                 [document.getElementById("80").value,document.getElementById("81").value,document.getElementById("82").value,document.getElementById("83").value,document.getElementById("84").value,document.getElementById("85").value,document.getElementById("86").value,document.getElementById("87").value,document.getElementById("88").value]
                                       ];
                                 solution=[
                                           [9,4,3,7,2,5,6,1,8],
                                           [7,2,1,8,6,4,9,3,5],
                                           [6,5,8,3,9,1,4,2,7],
                                           [5,6,7,4,1,8,2,9,3],
                                           [1,3,4,9,7,2,5,8,6],
                                           [8,9,2,5,3,6,1,7,4],
                                           [3,7,6,1,5,9,8,4,2],
                                           [4,1,5,2,8,3,7,6,9],
                                           [2,8,9,6,4,7,3,5,1]
                                    ] ;
                                    
                                    for(var i=0;i<sudoku.length;i++){
                                        for(var j=0;j<sudoku.length;j++){
                                                if(sudoku[i][j]==solution[i][j]){
                                                        document.getElementById(i+""+j).className="correct";
                                                }
                                                else{
                                                        document.getElementById(i+""+j).className="wrong";    
                                                }
                                        }   
                                    }
                                
                                    if(JSON.stringify(sudoku)===JSON.stringify(solution)){ 
                                        document.getElementById("Status").innerText="Complete";
                                            document.getElementById("Status").className="correct";
                                    }
                                    else{
                                        document.getElementById("Status").className="wrong"; 
                                    }
                                 
                                })
                                        }

})
        
