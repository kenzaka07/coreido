var url = "https://gist.githubusercontent.com/kenzaka07/2280c90d8689de175e292d667cd024ee/raw/de47fc78c234502f2affb0f440f66a52a13a788d/CountryCodes.json";



$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        $('#updateCountry1').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });

    $.each(data, function (key, entry) {
        $('#updateCountry2').append($('<option></option>').attr('value', entry.name).text(entry.name));
    });
});