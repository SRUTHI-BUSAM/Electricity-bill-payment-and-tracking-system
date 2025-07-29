document.addEventListener("DOMContentLoaded", function () {
    function toggleSidebar(event) {
        event.stopPropagation();
        document.getElementById("sidebar").classList.toggle("active");
    }

    function toggleSettings(event) {
        event.stopPropagation();
        document.getElementById("settings-menu").classList.toggle("active");
    }

    function closeMenus() {
        document.getElementById("sidebar").classList.remove("active");
        document.getElementById("settings-menu").classList.remove("active");
    }

    document.body.addEventListener("click", closeMenus);
    document.querySelector(".menu-icon").addEventListener("click", toggleSidebar);
    document.querySelector(".settings-icon").addEventListener("click", toggleSettings);
});