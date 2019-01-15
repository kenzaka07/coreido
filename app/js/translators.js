
var script_url = "https://script.google.com/macros/s/AKfycbzy0A61JwUEK0GTVfx45ZLelHnj4pMr-ZlMQR-sbI_Vgeo2AVXf/exec";
var userData;

var webIcon = "images/web_icon.png";
var prozIcon = "images/proz_profile_icon.jpg";
var linkedInIcon = "images/linkedin_icon.png";


// Make an AJAX call to Google Script
function insert_value() {

    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');

    var usertype = $("#usertype").val();

    var id1 = $("#emailID").val();
    var firstName = $("#firstName").val();



    var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&usertype=" + usertype + "&action=insert";
    console.log(usertype);

    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });

}



function delete_value() {
    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');

    var usertype = $("#usertype").val();

    var id1 = $("#id").val();
    var firstName = $("#firstName").val();


    var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&usertype=" + usertype + "&action=delete";


    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });

}





function updateUserProfile() {
    document.getElementById("callbackResult").style.display = "none";
    document.getElementById("modalLoaderBG").style.display = "block";
    document.getElementById("modalLoader").style.visibility = "visible";


    var callback = "ctrlq";
    var usertype = "translator";//userData.usertype;
    var translatorID = userData.translatorID;
    var action = "updateUserProfile";

    //Personal Details:
    var firstName = $("#updateFirstName").val();
    var lastName = $("#updateLastName").val();
    var gender = $("#updateGender").val();

    //Contact Details:
    var phoneNumber = encodeURIComponent($("#updatePhoneNumber").val());
    var cellNumber = encodeURIComponent($("#updateCellNumber").val());
    var emailAddress = encodeURIComponent($("#updateEmailAddress").val());
    var personalWebsite = encodeURIComponent($("#updatePersonalWebsite").val());
    var ProzProfileURL = encodeURIComponent($("#updateProzProfileURL").val());
    var linkedInProfileURL = encodeURIComponent($("#updateLinkedInProfileURL").val());

    //Address Details:
    var address1 = encodeURIComponent($("#updateAddress1").val());
    var country1 = encodeURIComponent($("#updateCountry1").val());
    var city1 = encodeURIComponent($("#updateCity1").val());
    var zipCode1 = encodeURIComponent($("#updateZipCode1").val());
    var address2 = encodeURIComponent($("#updateAddress2").val());
    var country2 = encodeURIComponent($("#updateCountry2").val());
    var city2 = encodeURIComponent($("#updateCity2").val());
    var zipCode2 = encodeURIComponent($("#updateZipCode2").val());

    //Financial Details:
    var bankName = encodeURIComponent($("#updateBankName").val());
    var bankCode = encodeURIComponent($("#updateBankCode").val());
    var branchName = encodeURIComponent($("#updateBranchName").val());
    var branchCode = encodeURIComponent($("#updateBranchCode").val());
    var bankAddress = encodeURIComponent($("#updateBankAddress").val());
    var beneficiaryName = encodeURIComponent($("#updateBeneficiaryName").val());
    var accountNumber = encodeURIComponent($("#updateAccountNumber").val());
    var swiftCode = encodeURIComponent($("#updateSwiftCode").val());
    var iban = encodeURIComponent($("#updateIban").val());
    var currency = encodeURIComponent($("#updateCurrency").val());
    var paypalAccount = encodeURIComponent($("#updatePaypalAccount").val());

    //Translation Details:
    var sourceLanguage1 = encodeURIComponent($("#updateSourceLanguage1").val());
    var sourceLanguage2 = encodeURIComponent($("#updateSourceLanguage2").val());
    var targetLanguage = encodeURIComponent($("#updateTargetLanguage").val());
    var areaOfSpecialization1 = encodeURIComponent($("#updateAreaOfSpecialization1").val());
    var areaOfSpecialization2 = encodeURIComponent($("#updateAreaOfSpecialization2").val());
    var areaOfSpecialization3 = encodeURIComponent($("#updateAreaOfSpecialization3").val());
    var translationRate_SL1toMT = encodeURIComponent($("#updateTranslationRate_SL1toMT").val());
    var translationRate_SL2toMT = encodeURIComponent($("#updateTranslationRate_SL2toMT").val());
    var editingRate_SL1toMT = encodeURIComponent($("#updateEditingRate_SL1toMT").val());
    var editingRate_SL2toMT = encodeURIComponent($("#updateEditingRate_SL2toMT").val());
    var catTool1 = encodeURIComponent($("#updateCatTool1").val());
    var catTool2 = encodeURIComponent($("#updateCatTool2").val());
    var catTool_other = encodeURIComponent($("#updateCatTool_other").val());

    //var url = script_url + "?callback=ctrlq&translatorID=" + translatorID + "&firstName=" + firstName + "&lastName=" + lastName + "&gender=" + gender + "&linkedInProfileURL=" + linkedInProfileURL + "&usertype=" + usertype + "&action=updateUserProfile";
    var url = script_url + "?callback=" + callback +
        "&translatorID=" + translatorID +
        "&firstName=" + firstName +
        "&lastName=" + lastName +
        "&phoneNumber=" + phoneNumber +
        "&cellNumber=" + cellNumber +
        "&emailAddress=" + emailAddress +
        "&personalWebsite=" + personalWebsite +
        "&ProzProfileURL=" + ProzProfileURL +
        "&linkedInProfileURL=" + linkedInProfileURL +
        "&address1=" + address1 +
        "&country1=" + country1 +
        "&city1=" + city1 +
        "&zipCode1=" + zipCode1 +
        "&address2=" + address2 +
        "&country2=" + country2 +
        "&city2=" + city2 +
        "&zipCode2=" + zipCode2 +
        "&bankName=" + bankName +
        "&bankCode=" + bankCode +
        "&branchName=" + branchName +
        "&branchCode=" + branchCode +
        "&bankAddress=" + bankAddress +
        "&beneficiaryName=" + beneficiaryName +
        "&accountNumber=" + accountNumber +
        "&swiftCode=" + swiftCode +
        "&iban=" + iban +
        "&currency=" + currency +
        "&paypalAccount=" + paypalAccount +
        "&sourceLanguage1=" + sourceLanguage1 +
        "&sourceLanguage2=" + sourceLanguage2 +
        "&targetLanguage=" + targetLanguage +
        "&areaOfSpecialization1=" + areaOfSpecialization1 +
        "&areaOfSpecialization2=" + areaOfSpecialization2 +
        "&areaOfSpecialization3=" + areaOfSpecialization3 +
        "&translationRate_SL1toMT=" + translationRate_SL1toMT +
        "&translationRate_SL2toMT=" + translationRate_SL2toMT +
        "&editingRate_SL1toMT=" + editingRate_SL1toMT +
        "&editingRate_SL2toMT=" + editingRate_SL2toMT +
        "&catTool1=" + catTool1 +
        "&catTool2=" + catTool2 +
        "&catTool_other=" + catTool_other +
        "&gender=" + gender +
        "&usertype=" + usertype +
        "&action=" + action;


    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });


}


// print the returned data
function ctrlq(e) {
    //ctrlq({"result": Sorry, the id does not exist!})
    document.getElementById("modalLoader").style.visibility = "hidden";
    document.getElementById("modalLoaderBG").style.display = "none";
    $("#result").css("visibility", "visible");
    $("#result").html(e.result);

    document.getElementById('callbackResult').style.display = "block";
    //alert(e.result);
    readUserDetails();

}




function readUserDetails() {

    //$("#result").css("visibility","hidden");
    document.getElementById("loader").style.visibility = "visible";


    var usertype = 'translator';//$("#usertype").val();
    //var emailAddress = firebaseUser.email;
    var firstName = $("#firstName").val();
    var url = script_url + "?&usertype=" + usertype +
        "& firstName=" + firstName +
        "&action=getUserProfile";
    userData;
    //let googleUserName = $("#lname").val();
    $.getJSON(url, function (json) {

        // Set the variables from the results array							
        let appUser = json.records.filter(filterEmail)

        function filterEmail(x) {
            return x.emailAddress == firebaseUser.email;
        }

        userData = appUser[0];


        console.log(appUser[0].gender);
        console.log(appUser[0].country);

        


        document.getElementById("welcomeSection").innerHTML = `
                <div id="welcomeUser" class="welcome-message-user-data">${userData.firstName} ${userData.lastName}
                <button onclick="logout()">Logout</button></div>
        `


        var gender = userData.gender;
        var avatar;

        if (gender == "Female") {
            avatar = "images/img_avatar_female.png";
        } else {
            avatar = "images/img_avatar_male.png";
        }

        //My Profile Template
        document.getElementById('main').innerHTML = `
		
		    ${appUser.map(function (user) {
                return `
				    <div class="flex-container">
					    <div id="personalDetailsCard" class="personal-details-card">
						    <div class="profile-picture">
							    
								    <img class="profile-picture" src="${avatar}" alt="Avatar">
                                
						    </div>
						    <div class="personal-details">
							    <section id="display-name" class="display-name" data-name="${user.firstName}">
								    <h2 class="display-name">${user.firstName} ${user.lastName}</h2>								
							    </section>
							    <span id="account-holdings-data" data-name="${user.emailAddress}">${user.emailAddress}
							    </span>
						    </div>
						    <div class="contact-details">
							    <span id="phoneNumber" data-name="${user.phoneNumber}">${user.phoneNumber}</span>
							    </br>
							    <span id="cellNumber" data-name="${user.cellNumber}">${user.cellNumber}</span>
						    </div>
						    <div class="url-profile">
                                <div id="website_icon" class="url-icon-holder">
                                    <a href="${user.personalWebsite}" target="_blank">
								        <img class="url-icon" src="${webIcon}" alt="MyWeb" href>
                                    </a>
						        </div>
                                <div id="proz_icon" class="url-icon-holder">
                                    <a href="${user.ProzProfileURL}" target="_blank">
								        <img class="url-icon" src="${prozIcon}" alt="ProzProfile">
                                    </a>
						        </div>
                                <div id="linkedin_icon" class="url-icon-holder">
                                    <a href="${user.linkedInProfileURL}" target="_blank">
								        <img class="url-icon" src="${linkedInIcon}" alt="LinkedIn">
                                    </a>
						        </div>
                            </div>
					    </div>
							
							
					    <div id="addressDetailsCard" class="address-details-card">
						    <div class="address-details">
							    <h2 id="titleAddress" class="title-address"">Address Details</h2>
							    <section>
							    <span id="address1" data-name="address1">Address 1: ${user.address1}</span></section></br>
							    <section>
							    <span id="address2" data-name="address2">Address 2: ${user.address2}</span></section>
							    <section>
							    <span id="city" data-name="city1">City: ${user.city1}</span></section>
							    <section>
							    <span id="country" data-name="country1">Country: ${user.country1}</span></section>
							    <section>
							    <span id="zipCode" data-name="zipCode1">Zip Code: ${user.zipCode1}</span></section>
						    </div>
					    </div>
							
					    <div id="financialDetailsCard" class="financial-details-card">
						    <div class="financial-details">
							    <h2 id="titleFinancial" class="title-financial"">Financial Details</h2>
							    <section>
							    <span id="bankName">Bank Name: ${user.bankName}</span></section></br>
							    <section>
							    <span id="bankCode">Bank Code: ${user.bankCode}</span></section>
							    <section>
							    <span id="bankBranch">Bank Branch: ${user.branchName}</span></section>
							    <section>
							    <span id="bankAddress">Bank Address: ${user.bankAddress}</span></section>
							    <section>
							    <span id="beneficiaryName">Beneficiary Name: ${user.beneficiaryName}</span></section>
							    <section>
							    <span id="beneficiaryName">Account No.: ${user.accountNumber}</span></section>
							    <section>
							    <span id="beneficiaryName">Swift Code: ${user.swiftCode}</span></section>
							    <section>
							    <span id="beneficiaryName">IBAN: ${user.iban}</span></section>
							    <section>
							    <span id="beneficiaryName">Paypal: ${user.paypalAccount}</span></section>
							    <section>
							    <span id="beneficiaryName">Currency: ${user.currency}</span></section>
						    </div>
					    </div>
						
					    <div id="translationDetailsCard" class="translation-details-card">
						    <div class="translation-details">
							    <h2 id="titleTranslation" class="title-translation"">Translation Details</h2>
							    <div class="language">
                                    <div><h4>Source Language:</h4>   
                                    <section>
								    <span id="sourceLanguage1">${user.sourceLanguage1}, ${user.sourceLanguage2}</span></section></br>
								    <section>
                                    <div><h4>Target Language:</h4> 
								    <span id="targetLanguage">${user.targetLanguage}</span></section>
							    </div>
							    <div class"specialization-area">
                                    <div><h4>Area of Specialization:</h4>
                                    <section>
                                    <span id="areaOfSpecialization1 ">${user.areaOfSpecialization1}, ${user.areaOfSpecialization2}, ${user.areaOfSpecialization3}</span></section>
							    </div>
							    <div class"tools-area">
                                    <div><h4>Cat Tools:</h4>
                                    <div>
                                    <span id="catTools">${user.catTool1}, ${user.catTool2}</span></div>
                                    <div><h4>Other Tools:</h4>
                                    <div>
                                    <span id="otherTools ">${user.catTool_other}</span></div>
							    </div>
                                <div class="translation-rate">
                                        <div><h4>Translation Rate:</h4>
                                        </div>
                                        <div>
                                            <div class="primary-rate">
                                                <span>Primary Source Language to Mother Tongue</span>
                                                </br>
									            <span id="translationRate_SL1toMT">${user.currency} ${user.translationRate_SL1toMT}</span>
                                            </div>
                                            <div class="secondary-rate">
                                                <span>Secondary Source Language to Mother Tongue</span>
                                                </br>
									            <span id="translationRate_SL2toMT">${user.currency} ${user.translationRate_SL2toMT}</span>
                                            </div>
                                        </div>
							    </div>
                                <div class="editing-rate">
                                        <div><h4>Editing Rate:</h4>
                                        </div>
                                        <div>
                                            <div class="primary-rate">
                                                <span>Primary Source Language to Mother Tongue</span>
                                                </br>
									            <span id="translationRate_SL1toMT">${user.currency} ${user.editingRate_SL1toMT}</span>
                                            </div>
                                            <div class="secondary-rate">
                                                <span>Secondary Source Language to Mother Tongue</span>
                                                </br>
									            <span id="translationRate_SL2toMT">${user.currency} ${user.editingRate_SL2toMT}</span>
                                            </div>
                                        </div>
							    </div>
                            </div>
					    </div>					

						

				    </div>
						
			    `


            }).join('')}			
				
	    `




        //Personal Details:
        document.getElementById("updateFirstName").value = userData.firstName;
        document.getElementById("updateLastName").value = userData.lastName;
        document.getElementById("updateGender").value = userData.gender;

        //Contact Details:
        document.getElementById("updatePhoneNumber").value = userData.phoneNumber;
        document.getElementById("updateCellNumber").value = userData.cellNumber;
        document.getElementById("updateEmailAddress").value = userData.emailAddress;
        document.getElementById("updatePersonalWebsite").value = userData.personalWebsite;
        document.getElementById("updateProzProfileURL").value = userData.ProzProfileURL;
        document.getElementById("updateLinkedInProfileURL").value = userData.linkedInProfileURL;

        //Address Details:
        document.getElementById("updateAddress1").value = userData.address1;
        //document.getElementById("country").value = userData.country;
        document.getElementById("updateCountry1").value = userData.country1;
        document.getElementById("updateCity1").value = userData.city1;
        document.getElementById("updateZipCode1").value = userData.zipCode1;
        document.getElementById("updateAddress2").value = userData.address2;
        document.getElementById("updateCountry2").value = userData.country2;
        document.getElementById("updateCity2").value = userData.city2;
        document.getElementById("updateZipCode2").value = userData.zipCode2;

        //Financial Details:
        document.getElementById("updateBankName").value = userData.bankName;
        document.getElementById("updateBankCode").value = userData.bankCode;
        document.getElementById("updateBranchName").value = userData.branchName;
        document.getElementById("updateBranchCode").value = userData.branchCode;
        document.getElementById("updateBankAddress").value = userData.bankAddress;
        document.getElementById("updateBeneficiaryName").value = userData.beneficiaryName;
        document.getElementById("updateAccountNumber").value = userData.accountNumber;
        document.getElementById("updateSwiftCode").value = userData.swiftCode;
        document.getElementById("updateIban").value = userData.iban;
        document.getElementById("updateCurrency").value = userData.currency;
        document.getElementById("updatePaypalAccount").value = userData.paypalAccount;

        //Translation Details:
        document.getElementById("updateSourceLanguage1").value = userData.sourceLanguage1;
        document.getElementById("updateSourceLanguage2").value = userData.sourceLanguage2;
        document.getElementById("updateTargetLanguage").value = userData.targetLanguage;
        document.getElementById("updateAreaOfSpecialization1").value = userData.areaOfSpecialization1;
        document.getElementById("updateAreaOfSpecialization2").value = userData.areaOfSpecialization2;
        document.getElementById("updateAreaOfSpecialization3").value = userData.areaOfSpecialization3;
        document.getElementById("updateTranslationRate_SL1toMT").value = userData.translationRate_SL1toMT;
        document.getElementById("updateTranslationRate_SL2toMT").value = userData.translationRate_SL2toMT;
        document.getElementById("updateEditingRate_SL1toMT").value = userData.editingRate_SL1toMT;
        document.getElementById("updateEditingRate_SL2toMT").value = userData.editingRate_SL2toMT;
        document.getElementById("updateCatTool1").value = userData.catTool1;
        document.getElementById("updateCatTool2").value = userData.catTool2;
        document.getElementById("updateCatTool_other").value = userData.catTool_other;


        document.getElementById("welcomeSection").innerHTML = `
                    <div id="welcomeUser" class="welcome-message-user-data">${userData.firstName} ${userData.lastName}
                    <button onclick="logout()">Logout</button></div>
            `
        //document.getElementById("welcomeUser").innerHTML = userData.firstName + ' ' + userData.lastName;
        document.getElementById("currencyEditRate1").innerHTML = userData.currency;
        document.getElementById("currencyEditRate2").innerHTML = userData.currency;
        document.getElementById("currencyTranslationRate1").innerHTML = userData.currency;
        document.getElementById("currencyTranslationRate2").innerHTML = userData.currency;
        document.getElementById("loader").style.visibility = "hidden";
        //$("#result").css("visibility", "visible");

    });

}




function changeCurrency(getValue) {
    document.getElementById("currencyEditRate1").innerHTML = getValue;
    document.getElementById("currencyEditRate2").innerHTML = getValue;
    document.getElementById("currencyTranslationRate1").innerHTML = getValue;
    document.getElementById("currencyTranslationRate2").innerHTML = getValue;
}


//window.addEventListener('load', readUserDetails);