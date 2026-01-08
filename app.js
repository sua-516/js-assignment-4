//chapter 14-16 Q1//
var student_name1 = [];

 //==== Q2 ====//
 var student_name2 = new Array ();

 //==== Q3 ====//
 var names = ["jiya", "minahil","muskan","zainab"];

 //==== Q4 ====//
 var numbers = [1,4,2,8];

 //==== Q5 ====//
 var boolean =[false, true, true ];

 //==== Q6 ====//
 var mixed= [1,"flower",true];

 //==== Q7 ====//
 var edu_quali = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD" ];
document.write("<h1>Qualifications: </h1>");
for (var a = 0; a < edu_quali.length; a++) {
 document.write((a + 1) + ") " + edu_quali[a] + "<br><br>")};

    //==== Q8 ====//
var std_names=["Michael", "jhon", "tony"];
var scr =[320,230,480];
var ttl_marks=[500]
document.write("Score of " + std_names[0] + " is " + scr[0] + ". Percentage: " + (scr[0]/ttl_marks*100) + "%<br>");
document.write("Score of " + std_names[1] + " is " + scr[1] + ". Percentage: " + (scr[1]/ttl_marks*100) + "%<br>");
document.write("Score of " + std_names[2] + " is " + scr[2] + ". Percentage: " + (scr[2]/ttl_marks*100) + "%<br><br>");

//==== Q9 ====//
var clr_names=["voilet", "salmon", "rosegold"];
document.write("Initial colors: " + clr_names + "<br><br>");
 var clr = prompt("what color d'you want to add at the beginning?");
clr_names.unshift(clr);
document.write("After adding in the beginning: " + clr_names + "<br>");
var clr_duos = prompt("what color d'you want to add at the end?");
clr_names.push(clr_duos);
document.write("After adding at the end:" + clr_names + "<br>");
 clr_names.unshift("","");
var clr_treas= prompt("what two more colors d'you want to add at the beginning?");
 clr_names.shift();
document.write("After deleting the first:" + clr_treas+ clr_names+ "<br>");
 clr_names.pop();
document.write("After deleting the last:" + clr_names + "<br><br>");

//==== Q10 ====// 
var score = [320,230,480,120];
document.write("Score of Student " + score + "<br>");
score.sort();
document.write("Ordered Scores of Students: " + score + "<br><br>");

//==== Q11 ====//
var cities= ["karachi", "lahore", "islamabad", "peshawar","multan"];
document.write("cities list: <br>" + cities + "<br>");
document.write("selected cities list: <br>" + cities.slice(0,2) + "<br><br>");

//==== Q12 ====//
var arr = ["This ","is " ,"my ", "cat "];
 document.write("array: <br>" + arr + "<br>");
document.write("string: <br>" + arr.join("") + "<br><br>");

//==== Q13 ====//
var devices= [];
devices.push("Keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices:" + devices + "<br>");
document.write("Out: <br>" + devices.pop() + "<br>");
document.write("Out: <br>" + devices.pop() + "<br>");
document.write("Out: <br> " + devices.pop() + "<br>");
document.write("Out: <br> " + devices.pop() + "<br><br>");

//==== Q14 ====//
var devices = [];
devices.push("Keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices:" + devices + "<br>");
document.write("Out: <br>" + devices.shift() + "<br>");
document.write("Out: <br>" + devices.shift() + "<br>");
document.write("Out: <br> " + devices.shift() + "<br>");
document.write("Out: <br> " + devices.shift() + "<br><br>");

//==== Q15 ====//
var phones =["Apple ","Samsung ","Motorola ","Nokia ","Sony ","Haier"];
  document.write("<h2>15) Phone Manufacturers</h2>");
  document.write("<select>");
  for (var i = 0; i < phones.length; i++) {
    document.write("<option>" + phones[i] + "</option>");
  }
  document.write("</select>");

