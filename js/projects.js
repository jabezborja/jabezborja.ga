
const projectTemplate = `<div class="d-flex justify-content-center">
                    <a href="https://github.com/jabezborja/PyNani" style="color: black; text-decoration: none;">
                        <div class="card m-4 project-view project-card">
                            <div class="card-header project-title-card">
                                %title%
                            </div>
                            <div class="d-flex --main-div-container">
                                <div>
                                    <div class="card-body">
                                        %desc%
                                    </div>
                                    <div class="ml-3">
                                        Version Number: %version%
                                        <br>
                                        Language: %language%
                                        <br>
                                        Created on: %created%
                                    </div>
                                </div>
                                <div class="w-25 float-right proj-img">
                                    <img src="/images/projects/%image%" id="project-logo">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>`

let projectList = [
    [
        "PyFyre Web Framework",
        "A Python web user interface framework for building reactive static websites. PyFyre is free and open source project. I created this framework because I love Python and I don't like JavaScript. Who use ReactJS? Let's use PyFyre.",
        "0.2.0",
        "Python",
        "Just this March 10, 2021",
        "PyNani_Xample.PNG"
    ],
    [
        "TagaLang Programming Language",
        "TagaLang is a tagalog-based syntax programming language that Filipino Programmers can play with. I created this programming language just for making my Python skills be fluent, but it didn't. It just makes my brain explode. Btw, it is open-source project that you can contribute to.",
        "0.2.1a",
        "Python",
        "Just November, 2020",
        "TagaLag_Xample.PNG"
    ],
    [
        "Jarvan AI",
        "Jarvan AI is a non-scalable/limited virtual assistant bot for your modules or something. It can be used on Raspberry-PI and you can contribute to it to make it fly to the moon.",
        "1.0.0",
        "Python",
        "Just October, 2020",
        "Jarvan.jpg"
    ],
    [
        "To Do Modules",
        "A Website for organizing my modules. When the modular class started, I was struggling on how do I always stay organize even though the things is getting worse and then I created this. Instead of spending my time to do my modules, I just created this. So I left behind, 3 weeks. Long story short, this is useless, for me.",
        "1.0.0",
        "Python Django Web Framework",
        "Just October, 2020",
        "ToDoTask_Xample.PNG"
    ]
];


window.addEventListener('DOMContentLoaded', () => {
    const projectListDiv = document.querySelector('.projectList');

    projectList.forEach((project) => {
        let project_item = projectTemplate
            .replace("%title%", project[0])
            .replace("%desc%", project[1])
            .replace("%version%", project[2])
            .replace("%language%", project[3])
            .replace("%created%", project[4])
            .replace("%image%", project[5])

        projectListDiv.innerHTML += "\n" + project_item;
    });

});