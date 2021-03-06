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



    //Add and Remove Table Rows on Edit page

    //Permits Table Functions
    $(document).ready(function () {
        $(".add-row").on("click", function () {
            //Add new row
            var permitType = $("#permitType").val();
            var markup = "<tr><td>" + permitType + "</td><td class='permits'><img src='img/icons8-delete-64.png' alt='Remove' class='delete delete-row' /></td ></tr >";
            $(markup).insertBefore('#permitID');
        });

        //Find and remove selected table rows
        $("#table1").on("click", ".delete-row", function () {
            console.log("delete"); //Test delete function on dynamically and non-dynamically created rows
            $(this).closest("tr").remove(); //Use 'closest(),' not 'remove()'!
        });

        //Envelopes Table Functions

        $(".add-row2").on("click", function () {
            //Add new row
            var envelopeType = $("#envelopeType").val();
            var envelopeMin = $("#envelopeMin").val();
            var envelopeMax = $("#envelopeMax").val();
            var markup = "<tr><td>" + envelopeType +
                "</td><td>" + envelopeMin + "</td><td>" + envelopeMax + "</td><td class='envelopes'><img src='img/icons8-delete-64.png' alt='Remove' class='delete delete-row2' /></td ></tr >";
            $(markup).insertBefore('#envelopeID');
        });

        //Find and remove selected table rows
        $("#table2").on("click", ".delete-row2", function () {
            console.log("delete"); //Test delete function on dynamically and non-dynamically created rows

            $(this).closest("tr").remove(); //Use 'closest(),' not 'remove()'!
        });

        // Status Table functions
        $(".add-row3").on("click", function () {
            //Add new row
            var statusType = $("#statusType").val();
            var markup = "<tr><td>" + statusType + "</td><td class='statuses'><img src='img/icons8-delete-64.png' alt='Remove' class='delete delete-row3' /></td ></tr >";
            $(markup).insertBefore('#statusID');
        });

        //Find and remove selected table rows
        $("#table3").on("click", ".delete-row3", function () {
            console.log("delete"); //Test delete function on dynamically and non-dynamically created rows
            $(this).closest("tr").remove(); //Use 'closest(),' not 'remove()'!
        });
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