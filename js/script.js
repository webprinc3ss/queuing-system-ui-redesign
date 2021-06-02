$(document).ready(function () {
    // alert("Doc is loaded")

    //Link to Edit page
    $('.add-queue').click(function () {
        document.location = 'edit.html';
    });



    //Exit Page
    $('.leave').click(function () {
        document.location = 'https://services.promiles.com/';
    });

    //Back to Index
    $('.index').click(function () {
        document.location = 'index.html';
    });


    //Toggle Between column content -- Just the begining.  Can be done as a feature taking all layouts in to consideration
    // $("select").change(function () {
    //     $(this).find("option:selected").each(function () {
    //         var optionValue = $(this).attr("value");
    //         if (optionValue) {
    //             $(".big-permits").not("." + optionValue).hide();
    //             $("." + optionValue).show();
    //         } else {
    //             $(".big-permits").hide();
    //         }
    //     });
    // }).change();


});