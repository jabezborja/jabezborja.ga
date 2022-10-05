var previouslySelected = "frontend"

const techs = {
    "frontend": [
        {
            title: "HTML",
            image: "/images/techs/html.webp",
            desc: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
        },
        {
            title: "CSS",
            image: "/images/techs/css.webp",
            desc: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
        },
        {
            title: "JavaScript",
            image: "/images/techs/javascript.png",
            desc: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
        },
        {
            title: "PyFyre",
            image: "/images/techs/pyfyre.jfif",
            desc: "PyFyre is a framework that I built myself along at the top of Python and Brython. PyFyre is a web frontend framework for building reactive static user interfaces on the web using Python."
        },
        {
            title: "React",
            image: "/images/techs/react.png",
            desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
        },
        {
            title: "NextJS",
            image: "/images/techs/next-js.svg",
            desc: "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites."
        },
        {
            title: "Vue",
            image: "/images/techs/vue.png",
            desc: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
        },
        {
            title: "Svelte",
            image: "/images/techs/svelte.png",
            desc: "Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members."
        },
        {
            title: "TailwindCSS",
            image: "/images/techs/tailwind.png",
            desc: "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables."
        }
    ],
    "backend": [
        {
            title: "Nodejs",
            image: "/images/techs/nodejs.webp",
            desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications."
        },
        {
            title: "Django",
            image: "/images/techs/django.png",
            desc: "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit."
        },
        {
            title: "Flask",
            image: "/images/techs/flask.png",
            desc: "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions."
        },
        {
            title: "MongoDB",
            image: "/images/techs/mongod.png",
            desc: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc."
        },
        {
            title: "Firebase",
            image: "/images/techs/firebase.png",
            desc: "Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server."
        },
        {
            title: "Expressjs",
            image: "/images/techs/express.png",
            desc: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License."
        },
    ],
    "mobiledev": [
        {
            title: "Flutter",
            image: "/images/techs/flutter.png",
            desc: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase."
        },
        {
            title: "React Native",
            image: "/images/techs/react.png",
            desc: "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities."
        },
    ],
    "languages": [
        {
            title: "Python"
        },
        {
            title: "JavaScript"
        },
        {
            title: "TypeScript"
        },
        {
            title: "Dart"
        },
        {
            title: "Lua"
        },
        {
            title: "Java"
        },
        {
            title: "C#"
        }
    ]
};

const tech_template = `<div class="flex flex-col items-center text-center bg-white px-5 py-4 rounded-md">
<img class="h-16 " src="%image%" alt="logo">
<p class="mt-3 text-3xl font-medium">%title%</p>
<p>%desc%</p>
</div>`;

const loadSection = (section) => {
    const techListDiv = document.querySelector('.techList');

    techListDiv.innerHTML = "";

    section.forEach((tech) => {
        let tech_item = tech_template
            .replace('%image%', tech.image)
            .replace('%title%', tech.title)
            .replace('%desc%', tech.desc);

        techListDiv.innerHTML += "\n" + tech_item;
    });
};

window.addEventListener('DOMContentLoaded', () => {
    loadSection(techs.frontend);
});

const frontendBtn = document.querySelector('.frontend');
const backendBtn = document.querySelector('.backend');
const mobileDevBtn = document.querySelector('.mobiledev');

const addColors = (el) => {
    el.classList.remove("bg-slate-200");
    el.classList.remove("text-black");
    el.classList.add("bg-sky-500");
    el.classList.add("text-white");
};

const removeColors = (el) => {
    el.classList.remove("bg-sky-500");
    el.classList.remove("text-white");
    el.classList.add("bg-slate-200");
    el.classList.add("text-black");
};

frontendBtn.addEventListener('click', () => {
    loadSection(techs.frontend);

    if (previouslySelected == "backend") removeColors(backendBtn)
    else if (previouslySelected == "mobiledev") removeColors(mobileDevBtn)

    addColors(frontendBtn)

    previouslySelected = "frontend";
});

backendBtn.addEventListener('click', () => {
    loadSection(techs.backend);

    if (previouslySelected == "frontend") removeColors(frontendBtn)
    else if (previouslySelected == "mobiledev") removeColors(mobileDevBtn)

    addColors(backendBtn)

    previouslySelected = "backend";
});

mobileDevBtn.addEventListener('click', () => {
    loadSection(techs.mobiledev);

    if (previouslySelected == "frontend") removeColors(frontendBtn)
    else if (previouslySelected == "backend") removeColors(backendBtn)

    addColors(mobileDevBtn)

    previouslySelected = "mobiledev";
});