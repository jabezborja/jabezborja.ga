
const projectTemplate = `<div class="mx-1 xl:mx-10 mt-16 flex flex-col justify-center items-center">
<div class="flex flex-col items-start">
    <p class="mt-4 text-4xl xl:text-5xl text-[#bfbfbf] font-black">↑←↑↓→←→↓</p>
    <p class="text-4xl xl:text-5xl text-[#303030] font-black"><span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DC2424] to-[#4A569D]">%title%</span></p>
</div>
<div class="mx-auto mt-10">
    <img class="rounded-md mt-3 border border-2" width="800" height="800" id="pyfyre-image" src="images/projects/%image%" alt="PyFyre Image Example">
</div>

<div class="lg:mx-auto mt-10 xl:w-10/12 md:8/12 text-[#222222] text-xl">
    %desc%
    <br>
    <br>
    <strong>Technologies Used</strong>:<br>
    - %language%
    <br>
    <br>
    <a class="text-sky-600" href="%link%" target="_blank" rel="noreferrer noopener">
        Learn more... >
    </a>
</div>`

let projectList = [
    [
        "Koowentu",
        "Koowentu is for people to share their voice with the world by allowing them to create books on the go. I've been focusing for this Startup app. We are working for this product as a team and planning to beta release soon. You can join by clicking this Project. Thank you!",
        "0.0.3-alpha",
        "Flutter, Firebase, and Python (Server)",
        "Dec, 2020",
        "koowentu-logo.png",
        "https://koowentu.com"
    ],
    [
        "Henyo Programming Language",
        "Henyo is an esoteric programming language. The language consists of only seven simple commands with a data pointer and an instruction pointer. (The image prints \"Hello World\")",
        "0.0.1",
        "Python 3",
        "September 19, 2021",
        "henyo.PNG",
        "https://github.com/jabezborja/henyo"
    ],
    [
        "Jabsga URL Shortener",
        "Jabsga is a free URL shortening service for making URLs more shorter and more concise. Created with Python Django Web Framework, the design is not yet good, you can help me with the design and make it better time by time 😊 Feel free to open a pull request!",
        "0.3.0-dev",
        "Python Django Web Framework",
        "April 1, 2021",
        "Jabsga.JPG",
        "https://jabsga.herokuapp.com/"
    ],
    [
        "PyFyre Web Framework",
        "A Python web user interface framework for building reactive static websites. PyFyre is free and open source project. I created this framework because I love Python and I don't like JavaScript. Who use ReactJS? Let's use PyFyre.",
        "0.2.0-beta",
        "Python",
        "March 10, 2021",
        "pyfyre_exp.PNG",
        "https://github.com/pyfyre/pyfyre"
    ],
    [
        "TagaLang Programming Language",
        "TagaLang is a tagalog-based syntax programming language that Filipino Programmers can play with. I created this programming language just for making my Python skills be fluent, but it didn't. It just makes my brain explode. Btw, it is open-source project that you can contribute to.",
        "0.2.1-dev",
        "Python",
        "November, 2020",
        "Tagalang.JPG",
        "https://github.com/jabezborja/tagalang"
    ],
    [
        "Jarvan AI",
        "Jarvan AI is a non-scalable/limited virtual assistant bot for your modules or something. It can be used on Raspberry-PI and you can contribute to it to make it fly to the moon.",
        "1.0.0",
        "Python",
        "October, 2020",
        "Jarvan.jpg",
        "https://github.com/jabezborja/jarvan-ai"
    ],
    [
        "To Do Modules",
        "A Website for organizing my modules. When the modular class started, I was struggling on how do I always stay organize even though the things is getting worse and then I created this. Instead of spending my time to do my modules, I just created this. So I left behind, 3 weeks. Long story short, this is useless, for me.",
        "1.0.0",
        "Python Django Web Framework",
        "October, 2020",
        "ToDoTask_Xample.PNG",
        "https://github.com/jabezborja/to-do-modules"
    ]
];


window.addEventListener('DOMContentLoaded', () => {
    const projectListDiv = document.querySelector('.projectList');

    projectList.forEach((project) => {
        let project_item = projectTemplate
            .replace("%link%", project[6])
            .replace("%title%", project[0])
            .replace("%desc%", project[1])
            .replace("%version%", project[2])
            .replace("%language%", project[3])
            .replace("%created%", project[4])
            .replace("%image%", project[5])

        projectListDiv.innerHTML += "\n" + project_item;
    });

});