// Sidebar functions to show and hide sidebar
function showSidebar() {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display ="flex"
}

function hideSidebar() {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display ="none"
}