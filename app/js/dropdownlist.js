var url = "https://script.google.com/macros/s/AKfycbzy0A61JwUEK0GTVfx45ZLelHnj4pMr-ZlMQR-sbI_Vgeo2AVXf/exec?&usertype=translator&action=getDropDownList";



$.getJSON(url, function (json) {
    var dataLanguage = json.language;
    var dataSpecialization = json.specialization;
    var dataCatTools = json.cattools;
    var dataCurrency = json.currency;

    // Language Dropdown List
    $.each(dataLanguage, function (key, entry) {
        $('#updateSourceLanguage1').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    $.each(dataLanguage, function (key, entry) {
        $('#updateSourceLanguage2').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    $.each(dataLanguage, function (key, entry) {
        $('#updateTargetLanguage').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    // Specialization Dropdown List
    $.each(dataSpecialization, function (key, entry) {
        $('#updateAreaOfSpecialization1').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    $.each(dataSpecialization, function (key, entry) {
        $('#updateAreaOfSpecialization2').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    $.each(dataSpecialization, function (key, entry) {
        $('#updateAreaOfSpecialization3').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    // Cat Tools Dropdown List
    $.each(dataCatTools, function (key, entry) {
        $('#updateCatTool1').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    $.each(dataCatTools, function (key, entry) {
        $('#updateCatTool2').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    // Currency Dropdown List
    $.each(dataCurrency, function (key, entry) {
        $('#updateCurrency').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });
});

function selectGender() {
    var genderList = document.getElementById("genderList");
}