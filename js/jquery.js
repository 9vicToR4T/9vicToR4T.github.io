jQuery(document).ready(function () {
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        allowDropdown: true,
        autoHideDialCode: false,
        preferredCountries: ["AE"],
        separateDialCode: true
    });
});