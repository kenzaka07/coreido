var script_url = "https://script.google.com/macros/s/AKfycbzy0A61JwUEK0GTVfx45ZLelHnj4pMr-ZlMQR-sbI_Vgeo2AVXf/exec";


  // Make an AJAX call to Google Script
function insert_value() {
    
	$("#re").css("visibility","hidden");
	document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
	
	var usertype = $("#usertype").val();

	var id1 =	$("#emailID").val();
	var firstName = $("#firstName").val();
	
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&usertype="+usertype+"&action=insert";
    console.log(usertype);

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

}


  
  
 
  
  
  function update_value(){
	$("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
	
	var usertype = $("#usertype").val();
	
	var id1=	$("#id").val();
	var firstName= $("#firstName").val();
	
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&usertype="+usertype+"&action=update";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

	
  }

  
 
  
  
  function delete_value(){
	$("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
	
	var usertype = $("#usertype").val();
	
    var id1=	$("#id").val();
	var firstName= $("#firstName").val();
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&usertype="+usertype+"&action=delete";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }


  
  
  // print the returned data
  function ctrlq(e) {
     //ctrlq({"result": Sorry, the id does not exist!})
	
	$("#re").html(e.result);
	$("#re").css("visibility","visible");
	read_value();
	
  }
  
  

  
function read_value() {

$("#re").css("visibility","hidden");
document.getElementById("loader").style.visibility = "visible";


var usertype = 'translator';//$("#usertype").val();
var emailID= $("#emailID").val();
var firstName= $("#firstName").val();
var url = script_url+"?&usertype="+usertype+"&firstName="+firstName+"&action=read2";
let googleUserName = $("#lname").val();

$.getJSON(url, function (json) {

    // Set the variables from the results array							
        let appUser = json.records.filter(filterEmail)
			
			function filterEmail(x){
			  return x.emailAddress == 'herberth@mizutrade.com';
			}
   
  
		
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

		

        var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
	
		cell1.innerHTML = "<b>Name</b>";
		cell2.innerHTML = "<b>Email ID</b>";
		cell3.innerHTML = "<b>Target Language</b>";
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < appUser.length; i++) {
            
			var x = appUser[i];
            tr = table.insertRow(-1);
				var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = x.firstName + ' ' + x.lastName;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = x.emailAddress;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = x.targetLanguage;
            }
        console.log(appUser[0]);
		console.log(json.records)
		
		
		//Account Name Template
		
			document.getElementById('main').innerHTML = `
		
				${appUser.map(function(user) {
					return `
						<div id="accounts${user.firstName}" class="accounts" data-name="${user.firstname}">
							<section class="account-balance" data-name="${user.accountType}">
								<h2 id="accountname" class="accountname" data-name="${user.firstName}">${user.firstName} ${user.lastName}</h2>
								<h1 data-name="${user.firstName}"><strong data-name="${user.firstName}">${user.emailAddress}</strong></h1>
							</section>
							<span id="account-holdings-data" data-name="${user.accountType}">
							
							</span>
							
						</div>
						


						
					`
					
					
				}).join('')}			
				
			`
		
		
		
		
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		$("#re").css("visibility","visible");
    });
	}