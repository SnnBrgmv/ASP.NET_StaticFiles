{
    $(document).ready(function () {
        $('.navbar-nav .dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-toggle').addClass('rotate');
        }).on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-toggle').removeClass('rotate');
        });
    });

    $(document).ready(function () {
        // Initialize the modal
        $(document).ready(function () {
            // Click event for the person icon
            $("#person-icon").on("click", function () {
                // Show the modal
                $('#loginRegisterModal').modal('show');
            });

            // Click event for the close button inside the modal
            $(".close").on("click", function () {
                // Close the modal
                $('#loginRegisterModal').modal('hide');
            });
        });



    });

    $(document).ready(function () {

        // Click event for the fa-bars-staggered icon
        $("#openSidebar").on("click", function () {
            // Execute code before the modal is shown
            $('#sidebarRight').on('show.bs.modal', function () {
                // Your code to execute before the modal is shown
            });

            // Show the right sidebar modal
            $('#sidebarRight').modal('show');


        });

        $(".close").on("click", function () {
            // Close the modal
            $('#openSidebar').modal('hide');
        });
    });



    function openTab(evt, tabName) {
        // Hide all tab contents
        $(".tabcontent").hide();

        // Deactivate all tab links
        $(".tablink").removeClass("active").css("color", ""); // Reset text color

        // Show the selected tab content
        $("#" + tabName).show();

        // Activate the clicked tab link and change its text color to goldenrod
        $(evt.target).addClass("active").css("color", "goldenrod");
    }
}

{
    document.addEventListener("DOMContentLoaded", function () {
        var navbarInput = document.querySelector('.navbar__form__input');

        // Click navbar-toggle icon
        document.querySelector('.navbar-toggler').addEventListener('click', function () {
            // Toggle active class
            navbarInput.classList.toggle('active');
        });
    });

}