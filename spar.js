function renderView(){
    const path = window.location.pathname;
    console.log("Current path:", path);

    const routes = {
        "/SPA_Router/spar.html" : renderDashboard,
        "/SPA_Router/spar.html/posts": renderPosts,
        "/SPA_Router/spar.html/settings": renderSettings
    }
    const routeHandler = routes[path] || renderNotFound

    routeHandler();
}

function renderDashboard() {
    document.getElementById("sparApp").innerHTML = "<h1>Dashboard</h1>";
}

function renderPosts() {
    document.getElementById("sparApp").innerHTML = "<h1>Posts</h1> <p>You are currently viewing posts.</p>";
}

function renderSettings() {
    document.getElementById("sparApp").innerHTML = "<h1>Settings</h1>";
}

function renderNotFound() {
    document.getElementById("sparApp").innerHTML = "<h1>404 - Not Found</h1>";
}


document.addEventListener("DOMContentLoaded", () => {
    renderView();
    
    // Listen for clicks on links and handle navigation
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            const url = e.target.getAttribute("href");
            history.pushState(null, null, url); // Update URL without page reload
            renderView(); // Render view corresponding to the new URL
        }
    });
});

// Listen for popstate event (e.g., back/forward buttons) and render corresponding view
window.addEventListener("popstate", renderView);
