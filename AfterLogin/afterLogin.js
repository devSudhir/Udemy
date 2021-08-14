/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}

let arrFirst = [
    ["#", "Web development"],
    ["#", "Mobile Development"],
    ["#", "Game Development"],
    ["#", "Entrepreneurship"],
    ["#", "Business Analytics & Intelligence"],
    ["#", "Digital Marketing"],
    ["#", "Graphic Design & lllustration"],
    ["#", "IT Certification"],
    ["#", "Personal Transformation"],
    ["#", "All categories"],
];

function showfirst(e) {
    showOverlay();
    let subfirst2 = document.getElementById("subfirst2");
    let closebtn = document.getElementById("closebtn");
    let first = document.getElementById("first");
    closebtn.style.display = "block";
    first.style.display = "block";
    subfirst2.innerHTML = null;
    for (let i = 0; i < arrFirst.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `<a href=${arrFirst[i][0]}>${arrFirst[i][1]}</a><button onclick="showSecond(${i})">&#8250;</button>`;
        subfirst2.appendChild(div);
    }
}

let arrSecond = [
    [
        ["#", "Web development"],
        ["#", "JavaScript"],
        ["#", "React"],
        ["#", "CSS"],
        ["#", "Angular"],
        ["#", "Django"],
        ["#", "PHP"],
        ["#", "Node.js"],
        ["#", "Wordpress"],
    ],
    [],
];

function showSecond(i) {
    let second = document.getElementById("second");
    second.style.display = "block";
    let first = document.getElementById("first");
    first.style.display = "none";
    second.innerHTML = null;
    second.setAttribute("class", "setZ");
    let menu = document.createElement("div");
    menu.innerHTML = `<button onclick="moveBack()">&#8249;</button><p>Menu</p>`;
    second.appendChild(menu);
    for (let j = 0; j < arrSecond[i].length; j++) {
        let div = document.createElement("div");
        div.innerHTML = `<a href=${arrSecond[i][j][0]}>${arrSecond[i][j][1]}</a>`;
        second.appendChild(div);
    }
}

function moveBack() {
    let second = document.getElementById("second");
    second.style.display = "none";
    let first = document.getElementById("first");
    first.style.display = "block";
}
// Close the dropdown if the user clicks outside of it


window.onclick = function (event) {
    console.log(event.target);
    var closebtn = document.getElementById("closebtn");
    var dropdown1 = document.getElementById("first");
    var dropdown2 = document.getElementById("second");

    if (
        event.target.matches("#overlay") ||
        event.target.matches("SVG") ||
        event.target.matches("path")
    ) {
        closebtn.style.display = "none";
        dropdown1.style.display = "none";
        dropdown2.style.display = "none";
        overlay.style.display = "none";
    }

    var black_overlay = document.getElementById("black_overlay");
    var close_black_overlay = document.getElementById("close_black_overlay");
    if (event.target.matches("#close_black_overlay") || event.target.matches("#black_overlay")) {
        black_overlay.style.display = "none";
    }
};
var slideCourses = document.getElementsByClassName("slideCourses")
var j = 0;
function showPython() {
    slideCourses[0].innerHTML = null;
    var pythonSlider = document.createElement("div");
    pythonSlider.setAttribute("class", 'pythonSlider');
    var upperContentSlider = document.createElement("div")
    upperContentSlider.setAttribute("class", "upperContentSlider");
    var upperContentSlider_div1 = document.createElement("div");
    var upperContentSlider_div1_h1 = document.createElement("h1");
    upperContentSlider_div1_h1.innerText = "Expand your career opportunities with python";
    var upperContentSlider_div1_p1 = document.createElement("p");
    upperContentSlider_div1_p1.innerText = "Whether you work in machine learning or finance, or are  pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's  simple syntax is especially suited for desktop, web, and business application"
    var upperContentSlider_div1_button1 = document.createElement("button");
    upperContentSlider_div1_button1.innerText = "Explore Python";
    upperContentSlider_div1.append(upperContentSlider_div1_h1, upperContentSlider_div1_p1, upperContentSlider_div1_button1);
    upperContentSlider.appendChild(upperContentSlider_div1);
    var upperContentSlider_div2 = document.createElement("div");
    var upperContentSlider_div1_img1 = document.createElement("img");
    upperContentSlider_div1_img1.src = "https://s.udemycdn.com/topic-images/lohp-topic-banners/GettyImages-1166389425_opt.jpg";
    upperContentSlider_div1_img1.alt = "womenLogo"
    upperContentSlider.appendChild(upperContentSlider_div2);
    upperContentSlider_div2.appendChild(upperContentSlider_div1_img1)
    pythonSlider.appendChild(upperContentSlider)
    var main = document.createElement("div");
    main.setAttribute("id", "main");
    var main_button1 = document.createElement("button");
    main_button1.setAttribute("class", "previous round");
    main_button1.innerHTML = "&#8249;"
    main_button1.onclick = function () {
        plusSlides(-1);
    };
    main.appendChild(main_button1);
    var main_div1 = document.createElement("div");
    main_div1.setAttribute("class", "slides fade");
    main_div1.onmouseover = function () {
        popupAddToCArt(0);
    };
    var main_div2 = document.createElement("div");
    main_div2.setAttribute("class", "slides fade");
    main_div2.onmouseover = function () {
        popupAddToCArt(1);
    };
    var main_div3 = document.createElement("div");
    main_div3.setAttribute("class", "slides fade");
    main_div3.onmouseover = function () {
        popupAddToCArt(2);
    };
    var main_div4 = document.createElement("div");
    main_div4.setAttribute("class", "slides fade");
    main_div4.onmouseover = function () {
        popupAddToCArt(3);
    };
    var main_div5 = document.createElement("div");
    main_div5.setAttribute("class", "slides fade");
    main_div5.onmouseover = function () {
        popupAddToCArt(4);
    };
    main.append(main_div1, main_div2, main_div3, main_div4, main_div5);

    var main_button2 = document.createElement("button");
    main_button2.setAttribute("class", "next round");
    main_button2.innerHTML = "&#8250;"
    main_button2.onclick = function () {
        plusSlides(1);
    };
    var pythonSlider_div_3 = document.createElement("div");
    pythonSlider_div_3.setAttribute("class", "popup-div-addtocart")
    var pythonSlider_div_4 = document.createElement("div");
    pythonSlider_div_4.setAttribute("class", "big-popup-before-addtocart")
    main.appendChild(main_button2);
    pythonSlider.appendChild(main);
    pythonSlider.append(pythonSlider_div_3, pythonSlider_div_4);
    slideCourses[0].appendChild(pythonSlider);
    var educationContent = [
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg?Expires=1623204287&Signature=MisbPLc6WMpTtx5pGkcVzlglm9yyaSNhqhlVRvYvAmCK7GbxdiHPa5uQZNVVw8NW9zEe76pAJCAkPnAPGYauW57bOG4G9kNqvyPcYuFQYNiO-bKd5mO1BPz5yLs9Z4j9hF1~N-jXMzzt2Ml5bSXG~naNiw57wkvjusMXfbhJlh5iEyHvp7ZxCkLJTGh~dHeLTF7qQeFq6Uk5U0jjiEoAc2jtBmVP6HrahTNwW81q2DdHlIAWwKjYaIXB~hUZWXcFIlGZ4B2Qih17BE20VSAXrhHyu2lTls4uvXH1AbTJPqKWRfTBd58wKUdQMF9Mi~OCTkhxC3hmNkpU2rKpTnZRag__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "2021 Complete Python Bootcamp From Zero to Hero in Python",
            Author: "Jos Portilla",
            rating: 4.6,
            people: 144000,
            price: 455,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-b.udemycdn.com/course/240x135/950390_270f_3.jpg?secure=-BvfNab4X_3v9C_B3CNtow%3D%3D%2C1623204286",
            course_name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
            Author: "Kiril Eremenko,Hadelen De Ponteves kjkdf kjndkfjskdnfkj",
            rating: 4.5,
            price: 445,
            people: 146559,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg?Expires=1623204291&Signature=Hv8tA769HhSOPvmIiaXfdGbGCiKqrhwaB9TOGOvOs5G8pRB9BRXj3H3WRZC8CN-b-8ug~rE7Yl5QqZgsw4OYvtt6nij6S8hTDWJV8R010KU7QxsL76fYA3Ds4HifUcaDbi~189288sClkurzZiuA~jc3XQwEX2bvHVbLVwzp0ozjAT~mKZ5F2B0xREPxbQJ5fHRzsx61h8OEb88aXB16kWjbf62s8UmDa-oRHQZgtX6vt288jFyD5qnvPNx7XKKu3E5oPJlIb-0~UX6Q8yhdmbtlNtwuMtGCokx7tTpXIowCjRwC5HLRbrfABsjpMfWLg2vAA7C17nYDGJYoIW14Gw__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Python for Data Science and Free Machine Learning Bootcamp",
            Author: "Jose Portilla",
            rating: 4.6,
            price: 455,
            people: 100777,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg?Expires=1623247476&Signature=Oka46u0QNEXCjKQQ0q1Ei6YNxzu529XVILGu3nbjsqLGZ3YQv7yUQZSd4yDWCb96X3CS0VU0eF8-~WNhdE3zCnkYEyGCg7AEJFu3QhcqzDo0~Iei0kTKgy2v8DyZNe2-~D5cwPuUkmdWM~RFcsQawrck078i7tl9uVVCSEW0miQazPqOxXttd2rkFjPtT5vebDIQLMuGfvy-ji75G7aKQvwsUA30yBDoe1jlIKjwcpcaSkFD1fMZO1A0-AhnNxD~9z-Goa6Nwya7~C2YlPlyadIVG40DWGGC0XhbLeawapQQJpMyl-o12UEnCTKlazMcDSdIlHYpRl6h0uLFprK~vA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Learn Python Programming Masterclass",
            Author: "Tim Buchalka,Jean-Paul Roberts,Tim Buchalka Learn Programming Academy",
            rating: 4.5,
            price: 455,
            people: 76088,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/692188_9da7_21.jpg?Expires=1623250678&Signature=GgisOkvuiIUXmXv3ylF6F4IpY7VUpIJmnCwVYS0lpoD5Mki-zVY5o6YTEzPnFYNVm6o1CYpUOd3OuhX0931BmGn9Xw4B7chsMSA-S63h3wazZvYrqzgwQt-hs4lBVzDQhmHnbnRlXtYRJ1DirmgQX2K9ukLhFNEMHgPNYE01mTzdMH0SS1xsNWU3zzZAGn2-hJRrIz~vy9XPRx-5qZjJ43oQV54kk7F09YKYycplBrhgSTIJLsWCrSGgHiqJXpi67kRCt15J~p6oZvUX~pondCAvJALs4XRq~mTjkFe~MSJx8QBNniUK15PNtO2jCuZyYELECzNBS9tthv8tERFA5A__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Python Mega Course: Build 10 Real World Applications",
            Author: "Ardit Sulce",
            rating: 4.6,
            price: 455,
            people: 48960,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg?Expires=1623250678&Signature=INKyryMyXA42AR0TmQT46ZMa55Roo~CX9ryzICBQ3Av9mmohsYrV3eqh3sI4YbpDiok4pnI6yMrVtX04ARcGU43r8A83EcgVnBP0ZZ-nSO64W4czYAJyLlNNW2k-EDjQ3IHaVDXJM2KaM5lG6rDBMnH8ASph5vtEcglxooMF8tkNzbdSuS1nk4gqjb99ZfsMAsZswyu8J-mV3m171w-CBf0lhb-jhJERqpKNWWwoaz4yTG~3eFVsAuxqL1qlKmque2f5VGlYXlZxP9a9rWX7iX09n0L9TpbTMd0esY08xd4yWRL4Dj4J3GWxcwNK0fTJ5Q4enAy9gfdxvTrQ2zihBA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Learning Python for Data Analysis and Visualization",
            Author: "Jose Portilla",
            rating: 4.4,
            price: 455,
            people: 16300,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-b.udemycdn.com/course/240x135/2776760_f176_5.jpg?secure=JdcWiK_8ql_e-xH4yJzSrQ%3D%3D%2C1623250678",
            course_name: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
            Author: "Dr. Angela Yu",
            rating: 4.7,
            price: 455,
            people: 32611,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg?Expires=1623252068&Signature=kWkAC2QEO1V0m2vyRFx~ssR774y3FGOpJWNmr0EyvkeWd6UTbOcdnpmYQA6~WK1wJDpULcr1aH2TAEdUNMdEof03MspT6N~VzMIBv~fp7VlnvYn~SZ3zS3z0qKQsuQwNjsNLGimehilHmeSyEEN1KXwZulxeSK8DIzRqaUfIxS9x5asGkpjyPCIXCa6tBcVPVARf-a54bB7ABo7~KTJY9Np-nFYUuFsDexPz34GYfzsqLV0Qn40T5gjlJEtqh5kLERSWef0~H29GmWXtQTN7sQhSk5wbpdOw1S46gKlpW4GGFHJ14MCBKDE0vaY0RMPqUdg4YGoy2JjJNrpp1L7ogg__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Automate the Boring Stuff with Python Programming",
            Author: "Al Sweigart",
            rating: 4.6,
            price: 455,
            people: 87866,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg?Expires=1623252068&Signature=hCt6ZPpcC0HV17a23HAo-a7RxDJOVpk1e468fHgoof7I3QbI5rlNAf92MY5w5BLomePAFVQCEwlcV2m5YEyqheC51DNJ6fr27kJfs9vh-01Nahv~XkXRc3kzRQQp86DuyYsPekAPGxlHvsJHYdkW36-Cv6oyDEsHRe7RZVTQm9Ws5y7EBd8JLUmj4S5QSDYrYO~abAQJhZ5QI8lVrXpbQH-YAli5v50Rxq1jhIFg2Oacjf~7irqa6XQNWolA7K3mtyXdRxOE96K68ApEc7heIIXfntMrfScHStruB321jvC~-NPCJaTSz1CFyx7VMVuqfoNRVK4VEtX66h~lzl2nRA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Python and Django Full Stack Web Developer Bootcamp",
            Author: "Jose Portilla",
            rating: 4.6,
            price: 455,
            people: 38905,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/1212032_b7e8.jpg?Expires=1623252068&Signature=P~6JabDqANIkd0blDygZR4o0wH254AUhvU4udEytGFLUjT28VxrlsfGWxEp5rUZyDJTFrx2zi2iAozMyGR91UVpziglMbi6Xu2JUitJOJReARb7UCWJD4Lji3JdBkS9vC40SubX0rWH1mW6a-cMLadhDt~7idW8dqVS7fbBwXgFvJ9ZdZbW4mHCMTmQU8nT5~wzB2Q9Bz-ay21QNnMiRwjajkwaO7zQZ38Y1pJvXPFhgtJ754IumO9huBkaM8jPsMyIKJB3qP~H7c51JNaW9y6h0DKr3q3mzPJfj82-zYSYH3lahYU5L73vW2HbDieYm4YxFqwKWYQcvr~GqMd5TYQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Python for Financial Analysis and Algorithmic Trading",
            Author: "Jose Portilla",
            rating: 4.5,
            price: 455,
            people: 15555,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/1035472_23ce_5.jpg?Expires=1623252068&Signature=izWNw73UjGmcNxuMiDjt5PGWSWb~e6Qjp6MltGA8loe6qSV~pMszkw04KDVFU8e~1UZAHwqKEODLxd7dKygyDrWBE5KqlP8g4ql0ayM7nuxc4jMT4TfSJHS89~fdRXEX6j6n95AFRVjJtandSr6zgFceOP0z6G~FZs33GKmoh0Uhs90YYNjzynT2c1DglohTRok5QsRvSUZOkKQn48VmpLt-t~SADT6WtC8DHTTqS6HhD~0Gzur4BoKcVhbsefgBfZBpY16-eCqkYg~JQar1xjVtKQuMb6ooHi4dNEYRC-SclUrS10-J43ut-30BzVdW7f6B3zM3mKK965swueIvGA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Python for Finance: Investment Fundamentals & Data Analytics",
            Author: "365 careers",
            rating: 4.5,
            price: 455,
            people: 21854,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg?Expires=1623252068&Signature=YCIf8tPLGeuSN0RpPJdogZgv1y5vYSmgiBXmJ7XBJozfsWS2gGnz7hywXt8PGbeeltC2eQ0q6Ei-8lRa2CS4j2cGKMUwCmx7RcKbwh9doslzRfudwDK8aQw3C-3K8E7QsyZBD5MWZ7IUtT9vBFazXw2S3wrxFwyG1CrzcVD1BAYkuZGnSI1JPIEyBknqiX8tpSKRy9GJe-6eFSXeQYyHWL32tQQ-~qrjKu-OXJSRF0--B-EwXWMF~025A~uYQ1skDXpnMMToebw-8hWAZCyJzjsIbkCuDumHJwiwWUbbqlRf-y9UlXfVxP7JUKY89b7U~WXJ0Y714KfIz8K624sjJQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Complete Python Developer in 2021: Zero to Mastery",
            Author: "Andrei Neagoi",
            rating: 4.7,
            price: 455,
            people: 27911,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },

    ];
    var slides = document.getElementsByClassName("slides");
    var numberOfdivs = slides.length;
    var a1 = document.getElementsByClassName("previous");
    var slideIndex = 0;
    showSlides(slideIndex);
    function plusSlides(n) {
        slideIndex += numberOfdivs * n - 1;
        if (slideIndex > 1) {
            showSlides(slideIndex);
        } else {
            slideIndex = 0;
            showSlides(slideIndex);
        }
    }
    function showSlides(a) {
        // for (let i = 0; i < numberOfdivs; i++) {
        //   slides[i].innerHTML = "";
        // }
        if (a + numberOfdivs - 1 > educationContent.length) {
            slideIndex = 0;
            a = 0;
        }
        let divNumber = 0;
        for (let i = a; i < a + numberOfdivs; i++) {
            slides[divNumber].style.display = "block";
            slides[
                divNumber
            ].innerHTML = `<img src=${educationContent[i].img_source}><div class="description"><h3>${educationContent[i].course_name}</h3><p>${educationContent[i].Author}</p><div class="star"><span>${educationContent[i].rating}</span><p class="Stars" style="--rating: ${educationContent[i].rating};"></p><span>&#40;${educationContent[i].people}&#41;</span></div><div class="slide-price"><h3>&#x20B9 ${educationContent[i].price}</h3><span>&#x20B9 ${educationContent[i].mainPrice}</span></div></div>`;
            divNumber++;
        }
    }
    function popupAddToCArt(i) {
        let indexOfContent = i + slideIndex;
        let popupAddToCArt = document.getElementsByClassName("popup-div-addtocart")[0];
        popupAddToCArt.style.display = "inline-block";
        popupAddToCArt.innerHTML = `<h3>${educationContent[indexOfContent].course_name}</h3>
                <p><span style="background-color:#ffe799;padding:3px;border-radius:5px;font-weight:600"> BestSeller </span><span style="margin-left:15px;color:green;">Updated <strong>${educationContent[indexOfContent].updatedDate}</strong></span></p>
                <span>${educationContent[indexOfContent].totalHoursOfVideo} total hours <ul><li>Beginers Level</li><li>Subtitles</li></ul></span>
                 <p>${educationContent[indexOfContent].courseHeading}</p>
                <ul>
                  <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
                  <li>Create games with Python, like Tic Tac Toe and Blackjack!</li>
                  <li>Learn advanced Python features, like the collections module and how to work with timestamps!</li>
                </ul>
                <a href="#black_overlay"onclick="showbigpopup(${indexOfContent})" >Add to cart</a><span class="wishlistButton" onclick="addToWishlist()"><i class="far fa-heart fa-2x" style="color: #107d90;"></i></span>`;

        popupAddToCArt.style.top = "-280px";
        if (i < 3) {
            popupAddToCArt.style.left = (i + 1) * 20 + "%";
        } else if (i == 3) {
            popupAddToCArt.style.left = "27%";
        } else {
            popupAddToCArt.style.left = "47%";
        }
    }
    function disablepopupAddToCart() {
        document.getElementsByClassName("popup-div-addtocart")[0].style = "none";
    }
}
window.onload = showPython();
function showWebdevelopment() {
    var slideCourses = document.getElementsByClassName("slideCourses");
    slideCourses[0].innerHTML = null;
    var pythonSlider = document.createElement("div");
    pythonSlider.setAttribute("class", 'pythonSlider');
    var upperContentSlider = document.createElement("div")
    upperContentSlider.setAttribute("class", "upperContentSlider");
    var upperContentSlider_div1 = document.createElement("div");
    var upperContentSlider_div1_h1 = document.createElement("h1");
    upperContentSlider_div1_h1.innerText = "Build websites and applications with Web Development";
    var upperContentSlider_div1_p1 = document.createElement("p");
    upperContentSlider_div1_p1.innerText = "Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business application"
    var upperContentSlider_div1_button1 = document.createElement("button");
    upperContentSlider_div1_button1.innerText = "Explore Webdevelopment";
    upperContentSlider_div1.append(upperContentSlider_div1_h1, upperContentSlider_div1_p1, upperContentSlider_div1_button1);
    upperContentSlider.appendChild(upperContentSlider_div1);
    var upperContentSlider_div2 = document.createElement("div");
    var upperContentSlider_div1_img1 = document.createElement("img");
    upperContentSlider_div1_img1.src = "https://s.udemycdn.com/topic-images/lohp-topic-banners/GettyImages-1175266254_opt.jpg";
    upperContentSlider_div1_img1.alt = "manLogo"
    upperContentSlider.appendChild(upperContentSlider_div2);
    upperContentSlider_div2.appendChild(upperContentSlider_div1_img1)
    pythonSlider.appendChild(upperContentSlider)
    var main = document.createElement("div");
    main.setAttribute("id", "main");
    var main_button1 = document.createElement("button");
    main_button1.innerHTML = "&#8249;"
    main_button1.setAttribute("class", "previous round");
    main_button1.onclick = function () {
        plusSlides(-1);
    };
    main.appendChild(main_button1);
    var main_div1 = document.createElement("div");
    main_div1.setAttribute("class", "slides fade");
    main_div1.onmouseover = function () {
        popupAddToCArt(0);
    };
    var main_div2 = document.createElement("div");
    main_div2.setAttribute("class", "slides fade");
    main_div2.onmouseover = function () {
        popupAddToCArt(1);
    };
    var main_div3 = document.createElement("div");
    main_div3.setAttribute("class", "slides fade");
    main_div3.onmouseover = function () {
        popupAddToCArt(2);
    };
    var main_div4 = document.createElement("div");
    main_div4.setAttribute("class", "slides fade");
    main_div4.onmouseover = function () {
        popupAddToCArt(3);
    };
    var main_div5 = document.createElement("div");
    main_div5.setAttribute("class", "slides fade");
    main_div5.onmouseover = function () {
        popupAddToCArt(4);
    };
    main.append(main_div1, main_div2, main_div3, main_div4, main_div5);

    var main_button2 = document.createElement("button");
    main_button2.setAttribute("class", "next round");
    main_button2.innerHTML = "&#8250;"
    main_button2.onclick = function () {
        plusSlides(1);
    };
    var pythonSlider_div_3 = document.createElement("div");
    pythonSlider_div_3.setAttribute("class", "popup-div-addtocart")
    var pythonSlider_div_4 = document.createElement("div");
    pythonSlider_div_4.setAttribute("class", "big-popup-before-addtocart")
    main.appendChild(main_button2);
    pythonSlider.appendChild(main);
    pythonSlider.append(pythonSlider_div_3, pythonSlider_div_4);
    slideCourses[0].appendChild(pythonSlider);
    var educationContent = [
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg?Expires=1623330024&Signature=WSXABDa3Q1qQa-RNJlwy1rzgwc9ga7kgleASPGCP7Bnt160wrGACjUIQAEd1FBZOWZeqGqq6Lx1IyqusgVYgwxKh4YlWJPh0f~0gqzaswUxbV08cduWWbY4qS~uW7KmKDMZW3QV0e5GKBnXeyrNlp9Qa8r0jEHUtscldhrQAOvqVuCAvvIqZE4P8moKm3T8MZuCf~ibqWtU9S0WXUNR9Mw~t6gmRU0dYuqmCNthJqaQzMudkt9dKQGwgDlUvo5LVGPkgAPA6kPtB3yTOACw98yjChBtAExqpt01EGyR6EMxDQkJ-zyvyv4aplqUJ7npn-Rq-F4CkLpaqDgbv5GAsAw__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Web Developer Bootcamp 2021",
            Author: "Colt Steele",
            rating: 4.7,
            people: 206624,
            price: 455,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg?Expires=1623333211&Signature=FTHGsXyjGYYUMgLJ0Kz8NVypdZUiUqH4rvXeyfqOGlQSK0Rhc6aFxArH66CMOrXJIkmOMKnDne1Ka101rkN1Fxkvse5kIYPwCu8exJU9TH~nve4DQh4o2QrTxFnfTU8AKHiAcm5xpGsxWQF0uVAspogH74Um3EcgjvGnTejeF8hW3QY1vokGuTerc6gw5q7pBkBTVRyg9iIRJ7DhArVC-UZwZWyMEg2Prs~sl83J56~j2~uWdbkBCAb53kX2B4FiyhSwmralgWAt1OtkugB5~0KIBt-B0G2f9ME9IPpyMUPTQthbSOlhpmJ4px5ohUgM3UVdn90Kwt6L2eC3UObE3A__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Complete 2021 Web Development Bootcamp",
            Author: "Dr. Angela Yu",
            rating: 4.7,
            price: 455,
            people: 134749,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/764164_de03_2.jpg?Expires=1623333177&Signature=U18Z19fn93U0V1~XJbaO4ce561ph2RR~szb-A51WyseBeHxPG5qZRPQgfOMM8B1pCZ2C67mn43qQ-PTbbAKFDKRbNGoHWA~Ssi0mIuM~290W2S3LxM5VlJCwbqhA-okpRnbDpvzfstuRi8n-Q8YycMgoieLiKeKHw6CCNs8Z~bTbMymRVE9nIxN9uA9p8J938QgN0Y0wiMXOIpz0o93vDwTk4E4arKIx4MN0D6rxUt6Tk7paBwMw~DQc2Ym9419d5wDvDoBl2M4Fw1yGe1EA7Qsew6iFckCHKHOY5loQWFU6Zf5PdackUN3eFXfFVUB8e5KYB27F4OXhrusmkfcIrA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Complete Web Developer Course 2.0",
            Author: "Rob Percival,Codestars by Rob Percival",
            rating: 4.5,
            price: 455,
            people: 67088,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/1430746_2f43_10.jpg?Expires=1623333178&Signature=AzXh5oJkK21dkiGoYHVQ6dyDaVjEUWg3dF~Iq~74L6ZPikwU47yMRv1Ph3-i6H1BXgJWgmhCATvbGG~sS8CnJWFsOjEzsHasKAcNIQ7R5djSdzUPXcjXDQis~3z18s69ZDjLp3Ofx9TnDepuHizmgqpu09IS5XERSVViOpxqNRYwJZow5N5tmc6tKVMV9krucbDzID4ztb4ZvGrv9kpcz0y8hr6sOlXuQ5l2laUx5iXVp-dAgZzYzVUGUK0OE77khpMLjLMCraJFv89fqexNXRABQwqong6GaFBOpmZt1vC58YltdWWZDalOSrU4IQrSefRSFs0QLlHaxAPESpX7QQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Complete Web Developer in 2021: Zero to Mastery",
            Author: "Andrei Neagoi",
            rating: 4.7,
            price: 455,
            people: 47481,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/1218586_9f86.jpg?Expires=1623333177&Signature=PHcv51yHBIclNwaxyHqEP5iH4c6IOwMZqq4KvXv3v7dRslKtWO9yIJcYBUR2-oDVYpwIzttFIdwrZa56Zpvt-6i5dB~AEOKEYCPzlQT~mc4nXAwYtf1UBcpPDIbsTf3zZEBHcNaU3gHS8fbn1lxLjpxaZFJD9gqKTm2DJT7od9CycqHnyWkANmVu3hjG~KDDhoNoDvVDbtc2Z4d9DGi7l0tJMw3xOjZ0ZGp5HnMYTm1Int-qgixZbYqwnqdD9RJ8cT0KI2a7GoJ38Es9Qzyn8QcbvsBtWmv57rvh5AVxfUaPQsp0zYMeJpvA4ewFuuvsVf5lUTOMnoNZpAxPyN~xtQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Advanced Web Developer Bootcamp",
            Author: "Colt Steele,Elie Schoppik,Tim Garcia,Matt Lane",
            rating: 4.5,
            price: 455,
            people: 8648,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/446134_383c_3.jpg?Expires=1623333178&Signature=hHqEktjNglK9btgK7H8eOFRVFAvw~0q9urTEluOjr0XAbuZwnlJAED-~Em3cLsdr97zjaHP69CmEaA-X5lIUiSZ3nlfhWLT9UlgpYfkRJh27CYyv2BBL9kpgo4kMbBlYI6MJbYtGu04qhI7EWRUaBZhd8niCvWumULAygabExYdsCsXpTaO06Ib~vLW2CF3ThQ1r2OpzTCc9ytohg4DVpbPWj7i8HNwLRtstFoLb90FbP2Yhql5b9qe3lWTU5x0DZkMA8u60Han0oOg4oFpY0~Z45WwDEFwjc-fG47~yJsu8dELyehNSdSz2YUPzOgqJvl5sES79U8~dAOFEzjaheQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Ultimate Web Designer & Web Developer Course for 2021",
            Author: "Brad Hussey",
            rating: 4.6,
            price: 455,
            people: 12088,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/1650610_2673_6.jpg?Expires=1623333178&Signature=Iie-LVNTLrpt7tprN1pcYF1JMeIs2vqLk5fyKKuEXnWRTwFAlx~8-YzrRDc2q9na54mJc-1laVZ85deu5Qb03yePtO6BnXe7eT1oSitPdE3Up6KpoGuKxFfIpBKAnVQuKOPlRb-c1Y91y2vPMs0lI2ohGlnqTQ2gpLPovybVFU1ORK4swrL43IV2ZkCVLZJKjdxWKDgPqOyyudd5nef~QXK2tuOYFwglq0np5cl0DD5x2DK6HGA6edx4Ypfm-PKF807JUWiFZDk2Pjx3ouHj6aduaGE5SpEcTQ-Q0WTHwKI6Jk0~UfxKvW5yqsv5CpfztvekLoZDNVEiFNNvbQrm4A__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Complete Junior to Senior Web Developer Roadmap (2021)",
            Author: "Andrei Neagoi",
            rating: 4.8,
            price: 455,
            people: 6400,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/818990_57c0_3.jpg?Expires=1623333177&Signature=CzTBlHbg8mavb3SIqjVCjHu7-Kx5ZutwLGtLVIB4CfXelxbDCfTOIdDcZTqJAWQndPsPDbNKt0SY5IoLrIc6gxNp5fEoWwtFt8lsi2RKfxBiv8nE9NLfKenhXKd2XWehcAVRg6ODgSPNg2legd~YbLdNj4t6eUWiDdtM5HWEJrW9SphBMcjtDS2OWc0RH6B0mKcwmjdxgpBSTdD2MCAFjNUctNt2Fj5yiMv~EP6j-Ux4RecCjcyQrGa0pOOt9nfdjhb7yE021rYmu2fJoeHW7ZvNvMBmG6P-nrgeybjK-AUD9THz77aXdvh8BLlqLDiYuwhIqqJXsHWWVWPfOjBBNw__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Git a Web Developer Job: Mastering the Modern Workflow",
            Author: "Bradd Schiff",
            rating: 4.7,
            price: 455,
            people: 6629,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/11475_9dac_14.jpg?Expires=1623333178&Signature=kE8q~lCWA2DonJWYOXH74mbWvIaDG-el1J4RkZbYmYYDdIsUImEMLD7pxyLrJRx5Ggfnyl9W0xOtFtWpjAkZ3XgHFSPzPoQZA-j4KVdCXwA7~YU2FnwOrnfjnx5a5px9dfhsl5TKmbCGiDZZBVhqIN9SN-D36jM~tZtRIKizbXnzCsAJlNS1fnROw31W1M30WjH4tCi8dweJEhVIWY~S4lCk95xkMSxMa-bIUWomE~YSZwzaYOtVteuvPSzzNfIjvas3sIvD0VW03VTQdMNFwMqmPKe-9aKj5in3Feu-nuoa4xxPGhsVcA9ZZHqsyiPulZW8sbE543Cs92k16qxVlA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Become a Certified HTML, CSS, JavaScript Web Developer",
            Author: "Framework Television Inc.,Mark Lasoff",
            rating: 4.5,
            price: 455,
            people: 2234,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/548278_b005_9.jpg?Expires=1623333178&Signature=JCO7y72abeNXwUjokYtrVQDlxTYYE~9M~LoEsS~t8TFV2BLrDo8W1HCYNBoSc49QXhQzP-kyL29Aj5gCPBIMgvg8slbdjbaPKTErozsjKcyIEPkkBpEyxT~lOUTWzr6fOj9ebTZ0PAmOrTkUdvpEpNfL~hHsJ9HFiwwhbpaQzQ5j2n6EKM9uYbfaMDvU5H9PhK3mfmJu9ehnucftvECwD7UwiLN3EqxWYZQ--OrpsbY5Tz24GO9MTHyL1VRCtETUYW9t0iLik9~fkNgA1VZRp2FAIY0eCJH5qzBTNmSQS~Yh37eNmNofJZ-f7~Zr--3k4hOuhk0mxvwNOTKCiskC6w__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "The Complete 2021 Web Development Course - Build 15 Projects",
            Author: "Development Island (UK)",
            rating: 4.6,
            price: 455,
            people: 5768,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/11174_cbb1_116.jpg?Expires=1623333178&Signature=jnLDNEUue1coa12u3l8Hz5lT3NxEbq2yuMlZQ~h-jrsGZ4l~ryRp4YI117b2TCyTwfYS0qwUvhB06keITyjK~in0yCxrMzmDaBB77ZAXKpQy9esm-6XMvEdQPYMYeQvUMfpDp8jF071i9kz53g6v4QCCCn1eNq7cUoDivs3XEnqAnh1wpVXQjtYzvm9yNB569149fqCcl2M4NGM7GO-UwRIp8W6Zzy3Z2pbUf7ESbvxpuU5~vPkevlDZvYF6lZcTrnY7RV31HIyFyBM-mzOFWMTjNluGqcdckWcu897CiLARlkfGeHGVTdh04EClBAyv2ALv0zckGi0WoSGrK9nHfQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Become a Web Developer from Scratch",
            Author: "Victor Bostos",
            rating: 4.5,
            price: 455,
            people: 3166,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

        },
        {
            img_source: "https://img-c.udemycdn.com/course/240x135/881980_fc8f.jpg?Expires=1623333178&Signature=k~J8JjsJeLfOq8J8O7ppHxGSZvkchWGv1s2yHuWonQQgdABUCG1Vt61EkhytLEcCaqGpKd6L88Z3gojtJOBafIEP2CtSrW1q5c~ZOYb4TEoiCNEeBN3z1BZfhoZxXjcyYmhJGEHRtuR~pkiPUYj5JVL0HUHX5QJG5aEnODB78BuYBbAmyZLB6~sZ3-pJ2Yt3Xhi7WyD-ZUpT-njLZZ4DoATzEs9VjRa67PRiBRP8hkGdXwo-v1DWzgb1gxyy7icmYoBAh9zlIq1054fKVLWtJ1982q2ZBFnwma8QgkAt0P~BOsrD79vThe0WNjKWcyBL3NPoQbEkLWFGG0cawM91AQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
            course_name: "Pre-Programming: Everything you need to know before you code",
            Author: "Evan Kimbrell",
            rating: 4.7,
            price: 455,
            people: 8161,
            mainPrice: 4480,
            updatedDate: "November 2021",
            totalHoursOfVideo: 10,
            courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
        },

    ];
    var slides = document.getElementsByClassName("slides");
    var numberOfdivs = slides.length;
    var a1 = document.getElementsByClassName("previous");
    var slideIndex = 0;
    showSlides(slideIndex);
    function plusSlides(n) {
        slideIndex += numberOfdivs * n - 1;
        if (slideIndex > 1) {
            showSlides(slideIndex);
        } else {
            slideIndex = 0;
            showSlides(slideIndex);
        }
    }
    function showSlides(a) {
        // for (let i = 0; i < numberOfdivs; i++) {
        //   slides[i].innerHTML = "";
        // }
        if (a + numberOfdivs - 1 > educationContent.length) {
            slideIndex = 0;
            a = 0;
        }
        let divNumber = 0;
        for (let i = a; i < a + numberOfdivs; i++) {
            slides[divNumber].style.display = "block";
            slides[
                divNumber
            ].innerHTML = `<img src=${educationContent[i].img_source}><div class="description"><h3>${educationContent[i].course_name}</h3><p>${educationContent[i].Author}</p><div class="star"><span>${educationContent[i].rating}</span><p class="Stars" style="--rating: ${educationContent[i].rating};"></p><span>&#40;${educationContent[i].people}&#41;</span></div><div class="slide-price"><h3>&#x20B9 ${educationContent[i].price}</h3><span>&#x20B9 ${educationContent[i].mainPrice}</span></div></div>`;
            divNumber++;
        }
    }
    function popupAddToCArt(i) {
        let indexOfContent = i + slideIndex;
        let popupAddToCArt = document.getElementsByClassName("popup-div-addtocart")[0];
        popupAddToCArt.style.display = "inline-block";
        popupAddToCArt.innerHTML = `<h3>${educationContent[indexOfContent].course_name}</h3>
                <p><span style="background-color:#ffe799;padding:3px;border-radius:5px;font-weight:600"> BestSeller </span><span style="margin-left:15px;color:green;">Updated <strong>${educationContent[indexOfContent].updatedDate}</strong></span></p>
                <span>${educationContent[indexOfContent].totalHoursOfVideo} total hours <ul><li>Beginers Level</li><li>Subtitles</li></ul></span>
                 <p>${educationContent[indexOfContent].courseHeading}</p>
                <ul>
                  <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
                  <li>Create games with Python, like Tic Tac Toe and Blackjack!</li>
                  <li>Learn advanced Python features, like the collections module and how to work with timestamps!</li>
                </ul>
                <button onclick="showbigpopup(${indexOfContent})" >Add to cart</button><span class="wishlistButton" onclick="addToWishlist()"><i class="far fa-heart fa-2x" style="color: #107d90;"></i></span>`;

        popupAddToCArt.style.top = "-280px";
        if (i < 3) {
            popupAddToCArt.style.left = (i + 1) * 20 + "%";
        } else if (i == 3) {
            popupAddToCArt.style.left = "27%";
        } else {
            popupAddToCArt.style.left = "47%";
        }
    }
    function disablepopupAddToCart() {
        document.getElementsByClassName("popup-div-addtocart")[0].style = "none";
    }
}

var studentContent = [
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg?Expires=1623204287&Signature=MisbPLc6WMpTtx5pGkcVzlglm9yyaSNhqhlVRvYvAmCK7GbxdiHPa5uQZNVVw8NW9zEe76pAJCAkPnAPGYauW57bOG4G9kNqvyPcYuFQYNiO-bKd5mO1BPz5yLs9Z4j9hF1~N-jXMzzt2Ml5bSXG~naNiw57wkvjusMXfbhJlh5iEyHvp7ZxCkLJTGh~dHeLTF7qQeFq6Uk5U0jjiEoAc2jtBmVP6HrahTNwW81q2DdHlIAWwKjYaIXB~hUZWXcFIlGZ4B2Qih17BE20VSAXrhHyu2lTls4uvXH1AbTJPqKWRfTBd58wKUdQMF9Mi~OCTkhxC3hmNkpU2rKpTnZRag__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "2021 Complete Python Bootcamp From Zero to Hero in Python",
        Author: "Jos Portilla",
        rating: 4.6,
        people: 144000,
        price: 455,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-b.udemycdn.com/course/240x135/950390_270f_3.jpg?secure=-BvfNab4X_3v9C_B3CNtow%3D%3D%2C1623204286",
        course_name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        Author: "Kiril Eremenko,Hadelen De Ponteves kjkdf kjndkfjskdnfkj",
        rating: 4.5,
        price: 445,
        people: 146559,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg?Expires=1623204291&Signature=Hv8tA769HhSOPvmIiaXfdGbGCiKqrhwaB9TOGOvOs5G8pRB9BRXj3H3WRZC8CN-b-8ug~rE7Yl5QqZgsw4OYvtt6nij6S8hTDWJV8R010KU7QxsL76fYA3Ds4HifUcaDbi~189288sClkurzZiuA~jc3XQwEX2bvHVbLVwzp0ozjAT~mKZ5F2B0xREPxbQJ5fHRzsx61h8OEb88aXB16kWjbf62s8UmDa-oRHQZgtX6vt288jFyD5qnvPNx7XKKu3E5oPJlIb-0~UX6Q8yhdmbtlNtwuMtGCokx7tTpXIowCjRwC5HLRbrfABsjpMfWLg2vAA7C17nYDGJYoIW14Gw__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python for Data Science and Free Machine Learning Bootcamp",
        Author: "Jose Portilla",
        rating: 4.6,
        price: 455,
        people: 100777,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg?Expires=1623247476&Signature=Oka46u0QNEXCjKQQ0q1Ei6YNxzu529XVILGu3nbjsqLGZ3YQv7yUQZSd4yDWCb96X3CS0VU0eF8-~WNhdE3zCnkYEyGCg7AEJFu3QhcqzDo0~Iei0kTKgy2v8DyZNe2-~D5cwPuUkmdWM~RFcsQawrck078i7tl9uVVCSEW0miQazPqOxXttd2rkFjPtT5vebDIQLMuGfvy-ji75G7aKQvwsUA30yBDoe1jlIKjwcpcaSkFD1fMZO1A0-AhnNxD~9z-Goa6Nwya7~C2YlPlyadIVG40DWGGC0XhbLeawapQQJpMyl-o12UEnCTKlazMcDSdIlHYpRl6h0uLFprK~vA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Learn Python Programming Masterclass",
        Author: "Tim Buchalka,Jean-Paul Roberts,Tim Buchalka Learn Programming Academy",
        rating: 4.5,
        price: 455,
        people: 76088,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/692188_9da7_21.jpg?Expires=1623250678&Signature=GgisOkvuiIUXmXv3ylF6F4IpY7VUpIJmnCwVYS0lpoD5Mki-zVY5o6YTEzPnFYNVm6o1CYpUOd3OuhX0931BmGn9Xw4B7chsMSA-S63h3wazZvYrqzgwQt-hs4lBVzDQhmHnbnRlXtYRJ1DirmgQX2K9ukLhFNEMHgPNYE01mTzdMH0SS1xsNWU3zzZAGn2-hJRrIz~vy9XPRx-5qZjJ43oQV54kk7F09YKYycplBrhgSTIJLsWCrSGgHiqJXpi67kRCt15J~p6oZvUX~pondCAvJALs4XRq~mTjkFe~MSJx8QBNniUK15PNtO2jCuZyYELECzNBS9tthv8tERFA5A__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "The Python Mega Course: Build 10 Real World Applications",
        Author: "Ardit Sulce",
        rating: 4.6,
        price: 455,
        people: 48960,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg?Expires=1623250678&Signature=INKyryMyXA42AR0TmQT46ZMa55Roo~CX9ryzICBQ3Av9mmohsYrV3eqh3sI4YbpDiok4pnI6yMrVtX04ARcGU43r8A83EcgVnBP0ZZ-nSO64W4czYAJyLlNNW2k-EDjQ3IHaVDXJM2KaM5lG6rDBMnH8ASph5vtEcglxooMF8tkNzbdSuS1nk4gqjb99ZfsMAsZswyu8J-mV3m171w-CBf0lhb-jhJERqpKNWWwoaz4yTG~3eFVsAuxqL1qlKmque2f5VGlYXlZxP9a9rWX7iX09n0L9TpbTMd0esY08xd4yWRL4Dj4J3GWxcwNK0fTJ5Q4enAy9gfdxvTrQ2zihBA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Learning Python for Data Analysis and Visualization",
        Author: "Jose Portilla",
        rating: 4.4,
        price: 455,
        people: 16300,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-b.udemycdn.com/course/240x135/2776760_f176_5.jpg?secure=JdcWiK_8ql_e-xH4yJzSrQ%3D%3D%2C1623250678",
        course_name: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
        Author: "Dr. Angela Yu",
        rating: 4.7,
        price: 455,
        people: 32611,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg?Expires=1623252068&Signature=kWkAC2QEO1V0m2vyRFx~ssR774y3FGOpJWNmr0EyvkeWd6UTbOcdnpmYQA6~WK1wJDpULcr1aH2TAEdUNMdEof03MspT6N~VzMIBv~fp7VlnvYn~SZ3zS3z0qKQsuQwNjsNLGimehilHmeSyEEN1KXwZulxeSK8DIzRqaUfIxS9x5asGkpjyPCIXCa6tBcVPVARf-a54bB7ABo7~KTJY9Np-nFYUuFsDexPz34GYfzsqLV0Qn40T5gjlJEtqh5kLERSWef0~H29GmWXtQTN7sQhSk5wbpdOw1S46gKlpW4GGFHJ14MCBKDE0vaY0RMPqUdg4YGoy2JjJNrpp1L7ogg__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Automate the Boring Stuff with Python Programming",
        Author: "Al Sweigart",
        rating: 4.6,
        price: 455,
        people: 87866,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg?Expires=1623252068&Signature=hCt6ZPpcC0HV17a23HAo-a7RxDJOVpk1e468fHgoof7I3QbI5rlNAf92MY5w5BLomePAFVQCEwlcV2m5YEyqheC51DNJ6fr27kJfs9vh-01Nahv~XkXRc3kzRQQp86DuyYsPekAPGxlHvsJHYdkW36-Cv6oyDEsHRe7RZVTQm9Ws5y7EBd8JLUmj4S5QSDYrYO~abAQJhZ5QI8lVrXpbQH-YAli5v50Rxq1jhIFg2Oacjf~7irqa6XQNWolA7K3mtyXdRxOE96K68ApEc7heIIXfntMrfScHStruB321jvC~-NPCJaTSz1CFyx7VMVuqfoNRVK4VEtX66h~lzl2nRA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python and Django Full Stack Web Developer Bootcamp",
        Author: "Jose Portilla",
        rating: 4.6,
        price: 455,
        people: 38905,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/1212032_b7e8.jpg?Expires=1623252068&Signature=P~6JabDqANIkd0blDygZR4o0wH254AUhvU4udEytGFLUjT28VxrlsfGWxEp5rUZyDJTFrx2zi2iAozMyGR91UVpziglMbi6Xu2JUitJOJReARb7UCWJD4Lji3JdBkS9vC40SubX0rWH1mW6a-cMLadhDt~7idW8dqVS7fbBwXgFvJ9ZdZbW4mHCMTmQU8nT5~wzB2Q9Bz-ay21QNnMiRwjajkwaO7zQZ38Y1pJvXPFhgtJ754IumO9huBkaM8jPsMyIKJB3qP~H7c51JNaW9y6h0DKr3q3mzPJfj82-zYSYH3lahYU5L73vW2HbDieYm4YxFqwKWYQcvr~GqMd5TYQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python for Financial Analysis and Algorithmic Trading",
        Author: "Jose Portilla",
        rating: 4.5,
        price: 455,
        people: 15555,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/1035472_23ce_5.jpg?Expires=1623252068&Signature=izWNw73UjGmcNxuMiDjt5PGWSWb~e6Qjp6MltGA8loe6qSV~pMszkw04KDVFU8e~1UZAHwqKEODLxd7dKygyDrWBE5KqlP8g4ql0ayM7nuxc4jMT4TfSJHS89~fdRXEX6j6n95AFRVjJtandSr6zgFceOP0z6G~FZs33GKmoh0Uhs90YYNjzynT2c1DglohTRok5QsRvSUZOkKQn48VmpLt-t~SADT6WtC8DHTTqS6HhD~0Gzur4BoKcVhbsefgBfZBpY16-eCqkYg~JQar1xjVtKQuMb6ooHi4dNEYRC-SclUrS10-J43ut-30BzVdW7f6B3zM3mKK965swueIvGA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python for Finance: Investment Fundamentals & Data Analytics",
        Author: "365 careers",
        rating: 4.5,
        price: 455,
        people: 21854,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg?Expires=1623252068&Signature=YCIf8tPLGeuSN0RpPJdogZgv1y5vYSmgiBXmJ7XBJozfsWS2gGnz7hywXt8PGbeeltC2eQ0q6Ei-8lRa2CS4j2cGKMUwCmx7RcKbwh9doslzRfudwDK8aQw3C-3K8E7QsyZBD5MWZ7IUtT9vBFazXw2S3wrxFwyG1CrzcVD1BAYkuZGnSI1JPIEyBknqiX8tpSKRy9GJe-6eFSXeQYyHWL32tQQ-~qrjKu-OXJSRF0--B-EwXWMF~025A~uYQ1skDXpnMMToebw-8hWAZCyJzjsIbkCuDumHJwiwWUbbqlRf-y9UlXfVxP7JUKY89b7U~WXJ0Y714KfIz8K624sjJQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Complete Python Developer in 2021: Zero to Mastery",
        Author: "Andrei Neagoi",
        rating: 4.7,
        price: 455,
        people: 27911,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },

];
var studentSlides = document.getElementsByClassName("slides-2");
var noOfDivs = studentSlides.length;
// var a1 = document.getElementsByClassName("previous");
var studentSlideIndex = 0;
showStudSlides(studentSlideIndex);
function plusSlideStud(n) {
    studentSlideIndex += noOfDivs * n - 1;
    if (studentSlideIndex > 1) {
        showStudSlides(studentSlideIndex);
    } else {
        studentSlideIndex = 0;
        showStudSlides(studentSlideIndex);
    }
}

function showStudSlides(a) {
    // for (let i = 0; i < numberOfdivs; i++) {
    //   slides[i].innerHTML = "";
    // }
    if (a + noOfDivs - 1 > studentContent.length) {
        studentSlideIndex = 0;
        a = 0;
    }
    let divNo = 0;
    for (let i = a; i < a + noOfDivs; i++) {
        studentSlides[divNo].style.display = "block";
        studentSlides[
            divNo
        ].innerHTML = `<img src=${studentContent[i].img_source}><div class="description"><h3>${studentContent[i].course_name}</h3><p>${studentContent[i].Author}</p><div class="star"><span>${studentContent[i].rating}</span><p class="Stars" style="--rating: ${studentContent[i].rating};"></p><span>&#40;${studentContent[i].people}&#41;</span></div><div class="slide-price"><h3>&#x20B9 ${studentContent[i].price}</h3><span>&#x20B9 ${studentContent[i].mainPrice}</span></div><span id="student-view-bestseller">Bestseller</span></div>`;
        divNo++;
    }
}
function popupAddToCArtBelow(i) {
    let indexOfContent = i + studentSlideIndex;
    let popupAddToCArt = document.getElementsByClassName("popup-div-addtocart")[0];
    popupAddToCArt.style.display = "inline-block";
    popupAddToCArt.innerHTML = `<h3>${studentContent[indexOfContent].course_name}</h3>
                <p><span style="background-color:#ffe799;padding:3px;border-radius:5px;font-weight:600"> BestSeller </span><span style="margin-left:15px;color:green;">Updated <strong>${studentContent[indexOfContent].updatedDate}</strong></span></p>
                <span>${studentContent[indexOfContent].totalHoursOfVideo} total hours <ul><li>Beginers Level</li><li>Subtitles</li></ul></span>
                 <p>${studentContent[indexOfContent].courseHeading}</p>
                <ul>
                  <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
                  <li>Create games with Python, like Tic Tac Toe and Blackjack!</li>
                  <li>Learn advanced Python features, like the collections module and how to work with timestamps!</li>
                </ul>
                <a href="#black_overlay" onclick="showbigpopup(${indexOfContent})" >Add to cart</a><span class="wishlistButton" onclick="addToWishlist()"><i class="far fa-heart fa-2x" style="color: #107d90;"></i></span>`;

    popupAddToCArt.style.top = "67px";
    if (i < 3) {
        popupAddToCArt.style.left = (i + 1) * 20 + "%";
    } else if (i == 3) {
        popupAddToCArt.style.left = "27%";
    } else {
        popupAddToCArt.style.left = "47%";
    }
}

var recommendContent = [
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg?Expires=1623204287&Signature=MisbPLc6WMpTtx5pGkcVzlglm9yyaSNhqhlVRvYvAmCK7GbxdiHPa5uQZNVVw8NW9zEe76pAJCAkPnAPGYauW57bOG4G9kNqvyPcYuFQYNiO-bKd5mO1BPz5yLs9Z4j9hF1~N-jXMzzt2Ml5bSXG~naNiw57wkvjusMXfbhJlh5iEyHvp7ZxCkLJTGh~dHeLTF7qQeFq6Uk5U0jjiEoAc2jtBmVP6HrahTNwW81q2DdHlIAWwKjYaIXB~hUZWXcFIlGZ4B2Qih17BE20VSAXrhHyu2lTls4uvXH1AbTJPqKWRfTBd58wKUdQMF9Mi~OCTkhxC3hmNkpU2rKpTnZRag__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "2021 Complete Python Bootcamp From Zero to Hero in Python",
        Author: "Jos Portilla",
        rating: 4.6,
        people: 144000,
        price: 455,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-b.udemycdn.com/course/240x135/950390_270f_3.jpg?secure=-BvfNab4X_3v9C_B3CNtow%3D%3D%2C1623204286",
        course_name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        Author: "Kiril Eremenko,Hadelen De Ponteves kjkdf kjndkfjskdnfkj",
        rating: 4.5,
        price: 445,
        people: 146559,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg?Expires=1623204291&Signature=Hv8tA769HhSOPvmIiaXfdGbGCiKqrhwaB9TOGOvOs5G8pRB9BRXj3H3WRZC8CN-b-8ug~rE7Yl5QqZgsw4OYvtt6nij6S8hTDWJV8R010KU7QxsL76fYA3Ds4HifUcaDbi~189288sClkurzZiuA~jc3XQwEX2bvHVbLVwzp0ozjAT~mKZ5F2B0xREPxbQJ5fHRzsx61h8OEb88aXB16kWjbf62s8UmDa-oRHQZgtX6vt288jFyD5qnvPNx7XKKu3E5oPJlIb-0~UX6Q8yhdmbtlNtwuMtGCokx7tTpXIowCjRwC5HLRbrfABsjpMfWLg2vAA7C17nYDGJYoIW14Gw__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python for Data Science and Free Machine Learning Bootcamp",
        Author: "Jose Portilla",
        rating: 4.6,
        price: 455,
        people: 100777,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg?Expires=1623247476&Signature=Oka46u0QNEXCjKQQ0q1Ei6YNxzu529XVILGu3nbjsqLGZ3YQv7yUQZSd4yDWCb96X3CS0VU0eF8-~WNhdE3zCnkYEyGCg7AEJFu3QhcqzDo0~Iei0kTKgy2v8DyZNe2-~D5cwPuUkmdWM~RFcsQawrck078i7tl9uVVCSEW0miQazPqOxXttd2rkFjPtT5vebDIQLMuGfvy-ji75G7aKQvwsUA30yBDoe1jlIKjwcpcaSkFD1fMZO1A0-AhnNxD~9z-Goa6Nwya7~C2YlPlyadIVG40DWGGC0XhbLeawapQQJpMyl-o12UEnCTKlazMcDSdIlHYpRl6h0uLFprK~vA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Learn Python Programming Masterclass",
        Author: "Tim Buchalka,Jean-Paul Roberts,Tim Buchalka Learn Programming Academy",
        rating: 4.5,
        price: 455,
        people: 76088,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/692188_9da7_21.jpg?Expires=1623250678&Signature=GgisOkvuiIUXmXv3ylF6F4IpY7VUpIJmnCwVYS0lpoD5Mki-zVY5o6YTEzPnFYNVm6o1CYpUOd3OuhX0931BmGn9Xw4B7chsMSA-S63h3wazZvYrqzgwQt-hs4lBVzDQhmHnbnRlXtYRJ1DirmgQX2K9ukLhFNEMHgPNYE01mTzdMH0SS1xsNWU3zzZAGn2-hJRrIz~vy9XPRx-5qZjJ43oQV54kk7F09YKYycplBrhgSTIJLsWCrSGgHiqJXpi67kRCt15J~p6oZvUX~pondCAvJALs4XRq~mTjkFe~MSJx8QBNniUK15PNtO2jCuZyYELECzNBS9tthv8tERFA5A__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "The Python Mega Course: Build 10 Real World Applications",
        Author: "Ardit Sulce",
        rating: 4.6,
        price: 455,
        people: 48960,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg?Expires=1623250678&Signature=INKyryMyXA42AR0TmQT46ZMa55Roo~CX9ryzICBQ3Av9mmohsYrV3eqh3sI4YbpDiok4pnI6yMrVtX04ARcGU43r8A83EcgVnBP0ZZ-nSO64W4czYAJyLlNNW2k-EDjQ3IHaVDXJM2KaM5lG6rDBMnH8ASph5vtEcglxooMF8tkNzbdSuS1nk4gqjb99ZfsMAsZswyu8J-mV3m171w-CBf0lhb-jhJERqpKNWWwoaz4yTG~3eFVsAuxqL1qlKmque2f5VGlYXlZxP9a9rWX7iX09n0L9TpbTMd0esY08xd4yWRL4Dj4J3GWxcwNK0fTJ5Q4enAy9gfdxvTrQ2zihBA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Learning Python for Data Analysis and Visualization",
        Author: "Jose Portilla",
        rating: 4.4,
        price: 455,
        people: 16300,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-b.udemycdn.com/course/240x135/2776760_f176_5.jpg?secure=JdcWiK_8ql_e-xH4yJzSrQ%3D%3D%2C1623250678",
        course_name: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
        Author: "Dr. Angela Yu",
        rating: 4.7,
        price: 455,
        people: 32611,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg?Expires=1623252068&Signature=kWkAC2QEO1V0m2vyRFx~ssR774y3FGOpJWNmr0EyvkeWd6UTbOcdnpmYQA6~WK1wJDpULcr1aH2TAEdUNMdEof03MspT6N~VzMIBv~fp7VlnvYn~SZ3zS3z0qKQsuQwNjsNLGimehilHmeSyEEN1KXwZulxeSK8DIzRqaUfIxS9x5asGkpjyPCIXCa6tBcVPVARf-a54bB7ABo7~KTJY9Np-nFYUuFsDexPz34GYfzsqLV0Qn40T5gjlJEtqh5kLERSWef0~H29GmWXtQTN7sQhSk5wbpdOw1S46gKlpW4GGFHJ14MCBKDE0vaY0RMPqUdg4YGoy2JjJNrpp1L7ogg__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Automate the Boring Stuff with Python Programming",
        Author: "Al Sweigart",
        rating: 4.6,
        price: 455,
        people: 87866,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg?Expires=1623252068&Signature=hCt6ZPpcC0HV17a23HAo-a7RxDJOVpk1e468fHgoof7I3QbI5rlNAf92MY5w5BLomePAFVQCEwlcV2m5YEyqheC51DNJ6fr27kJfs9vh-01Nahv~XkXRc3kzRQQp86DuyYsPekAPGxlHvsJHYdkW36-Cv6oyDEsHRe7RZVTQm9Ws5y7EBd8JLUmj4S5QSDYrYO~abAQJhZ5QI8lVrXpbQH-YAli5v50Rxq1jhIFg2Oacjf~7irqa6XQNWolA7K3mtyXdRxOE96K68ApEc7heIIXfntMrfScHStruB321jvC~-NPCJaTSz1CFyx7VMVuqfoNRVK4VEtX66h~lzl2nRA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python and Django Full Stack Web Developer Bootcamp",
        Author: "Jose Portilla",
        rating: 4.6,
        price: 455,
        people: 38905,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/1212032_b7e8.jpg?Expires=1623252068&Signature=P~6JabDqANIkd0blDygZR4o0wH254AUhvU4udEytGFLUjT28VxrlsfGWxEp5rUZyDJTFrx2zi2iAozMyGR91UVpziglMbi6Xu2JUitJOJReARb7UCWJD4Lji3JdBkS9vC40SubX0rWH1mW6a-cMLadhDt~7idW8dqVS7fbBwXgFvJ9ZdZbW4mHCMTmQU8nT5~wzB2Q9Bz-ay21QNnMiRwjajkwaO7zQZ38Y1pJvXPFhgtJ754IumO9huBkaM8jPsMyIKJB3qP~H7c51JNaW9y6h0DKr3q3mzPJfj82-zYSYH3lahYU5L73vW2HbDieYm4YxFqwKWYQcvr~GqMd5TYQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python for Financial Analysis and Algorithmic Trading",
        Author: "Jose Portilla",
        rating: 4.5,
        price: 455,
        people: 15555,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/1035472_23ce_5.jpg?Expires=1623252068&Signature=izWNw73UjGmcNxuMiDjt5PGWSWb~e6Qjp6MltGA8loe6qSV~pMszkw04KDVFU8e~1UZAHwqKEODLxd7dKygyDrWBE5KqlP8g4ql0ayM7nuxc4jMT4TfSJHS89~fdRXEX6j6n95AFRVjJtandSr6zgFceOP0z6G~FZs33GKmoh0Uhs90YYNjzynT2c1DglohTRok5QsRvSUZOkKQn48VmpLt-t~SADT6WtC8DHTTqS6HhD~0Gzur4BoKcVhbsefgBfZBpY16-eCqkYg~JQar1xjVtKQuMb6ooHi4dNEYRC-SclUrS10-J43ut-30BzVdW7f6B3zM3mKK965swueIvGA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Python for Finance: Investment Fundamentals & Data Analytics",
        Author: "365 careers",
        rating: 4.5,
        price: 455,
        people: 21854,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"

    },
    {
        img_source: "https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg?Expires=1623252068&Signature=YCIf8tPLGeuSN0RpPJdogZgv1y5vYSmgiBXmJ7XBJozfsWS2gGnz7hywXt8PGbeeltC2eQ0q6Ei-8lRa2CS4j2cGKMUwCmx7RcKbwh9doslzRfudwDK8aQw3C-3K8E7QsyZBD5MWZ7IUtT9vBFazXw2S3wrxFwyG1CrzcVD1BAYkuZGnSI1JPIEyBknqiX8tpSKRy9GJe-6eFSXeQYyHWL32tQQ-~qrjKu-OXJSRF0--B-EwXWMF~025A~uYQ1skDXpnMMToebw-8hWAZCyJzjsIbkCuDumHJwiwWUbbqlRf-y9UlXfVxP7JUKY89b7U~WXJ0Y714KfIz8K624sjJQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        course_name: "Complete Python Developer in 2021: Zero to Mastery",
        Author: "Andrei Neagoi",
        rating: 4.7,
        price: 455,
        people: 27911,
        mainPrice: 4480,
        updatedDate: "November 2021",
        totalHoursOfVideo: 10,
        courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },

];
var recommendSlides = document.getElementsByClassName("slides-3");
var noOfRecommDivs = recommendSlides.length;
// var a1 = document.getElementsByClassName("previous");
var recommendSlideIndex = 0;
showRecommSlides(recommendSlideIndex);
function plusSlideRecomm(n) {
    recommendSlideIndex += noOfRecommDivs * n - 1;
    if (recommendSlideIndex > 1) {
        showRecommSlides(recommendSlideIndex);
    } else {
        recommendSlideIndex = 0;
        showRecommSlides(recommendSlideIndex);
    }
}

function showRecommSlides(a) {
    // for (let i = 0; i < numberOfdivs; i++) {
    //   slides[i].innerHTML = "";
    // }
    if (a + noOfRecommDivs - 1 > recommendContent.length) {
        recommendSlideIndex = 0;
        a = 0;
    }
    let divNum = 0;
    for (let i = a; i < a + noOfRecommDivs; i++) {
        recommendSlides[divNum].style.display = "block";
        recommendSlides[
            divNum
        ].innerHTML = `<img src=${recommendContent[i].img_source}><div class="description"><h3>${recommendContent[i].course_name}</h3><p>${recommendContent[i].Author}</p><div class="star"><span>${recommendContent[i].rating}</span><p class="Stars" style="--rating: ${recommendContent[i].rating};"></p><span>&#40;${recommendContent[i].people}&#41;</span></div><div class="slide-price"><h3>&#x20B9 ${recommendContent[i].price}</h3><span>&#x20B9 ${recommendContent[i].mainPrice}</span></div></div>`;
        divNum++;
    }
}
function popupAddToCartRecomm(i) {
    let indexOfContent = i + recommendSlideIndex;
    let popupAddToCArt = document.getElementsByClassName("popup-div-addtocart")[0];
    popupAddToCArt.style.display = "inline-block";
    popupAddToCArt.innerHTML = `<h3>${recommendContent[indexOfContent].course_name}</h3>
                <p><span style="background-color:#ffe799;padding:3px;border-radius:5px;font-weight:600"> BestSeller </span><span style="margin-left:15px;color:green;">Updated <strong>${recommendContent[indexOfContent].updatedDate}</strong></span></p>
                <span>${recommendContent[indexOfContent].totalHoursOfVideo} total hours <ul><li>Beginers Level</li><li>Subtitles</li></ul></span>
                 <p>${recommendContent[indexOfContent].courseHeading}</p>
                <ul>
                  <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
                  <li>Create games with Python, like Tic Tac Toe and Blackjack!</li>
                  <li>Learn advanced Python features, like the collections module and how to work with timestamps!</li>
                </ul>
                <a href="#black_overlay" onclick="showbigpopup(${indexOfContent})" >Add to cart</a><span class="wishlistButton" onclick="addToWishlist()"><i class="far fa-heart fa-2x" style="color: #107d90;"></i></span>`;

    popupAddToCArt.style.top = "350px";
    if (i < 3) {
        popupAddToCArt.style.left = (i + 1) * 20 + "%";
    } else if (i == 3) {
        popupAddToCArt.style.left = "27%";
    } else {
        popupAddToCArt.style.left = "47%";
    }
}

var udemyForBusiness = document.getElementById("div1");
function checkSpaces(data) {
    var count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] == " ") {
            count++;
        }
    }
    return count;
}
function modifyFullname(data) {
    if (checkSpaces(data) == 1) {

        var res = data[0].toUpperCase();
        for (let i = 1; i < data.length; i++) {
            if (data[i] == " ") {
                res += data[i + 1].toUpperCase()
                break;
            }
        }
        return res;
    } else {
        res = data[0].toUpperCase();
        for (let j = data.length - 1; j >= 1; j--) {
            if (data[j] == " ") {
                res += data[j + 1].toUpperCase()
                break;
            }
        }
        return res;
    }
}
let loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
let udemyUsers = JSON.parse(localStorage.getItem('udemyUsers'));
let btnUser = document.getElementById('btnUser');
for (let i = 0; i < loginDetails.length; i++) {
    for (let j = 0; j < udemyUsers.length; j++) {
        if (loginDetails[i].loginEmail == udemyUsers[j].signupEmail) {
            btnUser.innerText = `${modifyFullname(udemyUsers[j].signupFullname)}`
        }
    }

}
// This is newly added script for showing no of items present in cart
let noOfCartItems = document.getElementById('noOfCartItems');
let cartItem = JSON.parse(localStorage.getItem('cartItem'));
noOfCartItems.innerHTML = `${cartItem.length}`
function showCart() {
    window.location.href = "../Cart/after_cart.html"
}
function mainPage() {
    window.location.href = "../Landing page/index.html"
}