
aboutProject.onclick = () => {
    var aboutProjectSection = document.createElement("div");
    pageBody[0].appendChild(aboutProjectSection);
    aboutProjectSection.setAttribute("id", "about_project_section");
    aboutProjectSection.setAttribute("class", "modal_bg");
    aboutProjectSection.innerHTML = `
        <div class="modal_container">
            <header class="modal_header">
                <b>About project</b>
                <i class="close_btn">&#xe8bb;</i>
            </header>
            <div class="line_dividerX"></div>
            <main class="modal_body">
                <h1>Life Manager</h1>
                <p>This is an elementary todo-list application created by team "sdh_cscs" containing members Anirban RoyChowdhury, Dwaipayan Bose, Soumyajit Ghosh for the IIC Hackathon September 2024.
                   <br><br>
                   This stores data to the browser's local storage to keep it persistent through sessions. However, clearing your browser's data will also delete the saved to-do list.
                </p>
            </main>
            <div class="line_dividerX"></div>
            <footer class="form_footer" id="about_project_footer">
                <a href="https://github.com/anir-baaaan/todo-list-web-app" target="_blank" rel="noopener noreferrer">Visit Github for more info.</a>
            </footer>
        </div>
    `;
    

    var logo = document.getElementById("logo");

    closeMenu("about_project_section");
};
