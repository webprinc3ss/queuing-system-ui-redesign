$(document).ready(function () {
    // alert("Doc is loaded")

    $('.add-queue').click(function () {
        document.location = 'edit.html';
    });

    $('.leave').click(function () {
        document.location = 'https://services.promiles.com/';
    });

    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".big-permits").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".big-permits").hide();
            }
        });
    }).change();


});