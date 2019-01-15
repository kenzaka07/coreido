// Get the modal
var modal = document.getElementById('modalEditProfile');
var body = document.getElementById('main_container');

// Get the button that opens the modal
var btn = document.getElementById("btnEditProfile");

// Get the button that opens the modal
var btnCancel = document.getElementById("btnCancel");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

btn.onclick = function editProfile() {
    modal.style.display = "block";
    //body.style.overflow = "hidden";
    document.getElementById('callbackResult').style.display = "none";
    refreshEditProfileData();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    //body.style.overflow = "auto";
    refreshEditProfileData();
}

btnCancel.onclick = function () {
    modal.style.display = "none";
    //body.style.overflow = "auto";
    refreshEditProfileData();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        //body.style.overflow = "auto";
        refreshEditProfileData();
    }
}


function refreshEditProfileData() {
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
}


