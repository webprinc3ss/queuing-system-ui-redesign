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
            var markup = "<tr><td>" + permitType + "</td><td class='permits'><a href='#'><img src='img/icons8-delete-64.png' alt='Remove' class='delete delete-row' /></a></td ></tr >";
            $(markup).insertBefore('#permitID');
        });

        //Find and remove selected table rows
        $("#table1").on("click", ".delete-row", function () {
            console.log("delete"); //Test delete function on dynamically and non-dynamically created rows
            $(this).closest("tr").remove(); //Use 'closest(),' not 'remove()'!
        });

        //Envelopes Table Functions
        $(document).ready(function () {
            $(".add-row").on("click", function () {
                //Add new row
                var permitType = $("#permitType").val();
                var markup = "<tr><td>" + permitType + "</td><td class='permits'><a href='#'><img src='img/icons8-delete-64.png' alt='Remove' class='delete delete-row' /></a></td ></tr >";
                $(markup).insertBefore('#permitID');
            });

            //Find and remove selected table rows
            $("#table1").on("click", ".delete-row", function () {
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