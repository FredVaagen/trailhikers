export default function logoutButton() {
    const button = document.querySelector("#logout");

    if (button) {
        button.onclick = function () {
            const doLogout = confirm("Are you sure?");

            if (doLogout) {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                location.href = "/";
            }
        };
    }
}