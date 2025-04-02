function show_menu() {
    let menu = document.getElementById("menu");
    let currentDisplay = window.getComputedStyle(menu).display;

    if (currentDisplay === "none") {
        menu.style.display = "block";
        menu.style.animation = "showMenu 0.3s forwards";
    } else {
        menu.style.animation = "hideMenu 0.3s forwards";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300); 
    }
}
function read_more1() {
    let moreElement = document.getElementById("more");
    let readMoreButton = document.querySelector(".read-more[onclick='read_more1()']");

    if (!moreElement.classList.contains("content-added")) {
        moreElement.innerHTML += 
            '&nbsp;The loss raises serious questions about the future of coach Thiago Motta, ' +
            'who has faced growing pressure after a series of underwhelming performances. ' +
            'While Motta was appointed with high hopes to rejuvenate the squad, ' +
            'this embarrassing defeat has placed his job under intense scrutiny. ' +
            'Many pundits believe that a change in leadership might be on the horizon if results don\'t improve. ' +
            '&nbsp;Juventus, a club with such a rich history, cannot afford to be out of title contention for long. ' +
            'The next few matches will be crucial for Motta, as he attempts to save his position and restore faith in the team. ' +
            'However, with tensions running high, it\'s uncertain whether the club\'s management will give him the time needed to turn things around.';

        moreElement.classList.add("content-added");

        readMoreButton.style.display = "none";

        let hideButton = document.createElement("div");
        hideButton.classList.add("hide-btn");
        hideButton.innerHTML = "Hide";
        hideButton.onclick = function() { hide_content("more", "read_more1()") };
        moreElement.appendChild(hideButton);
    }
}

function hide_content(moreId, buttonQuery) {
    let moreElement = document.getElementById(moreId);
    let readMoreButton = document.querySelector(".read-more[onclick='" + buttonQuery + "']");

    moreElement.innerHTML = "";
    moreElement.classList.remove("content-added");

    readMoreButton.style.display = "inline";
}


function read_more2() {
    let moreElement = document.getElementById("more2");
    let readMoreButton = document.querySelector(".read-more[onclick='read_more2()']");

    if (!moreElement.classList.contains("content-added")) {
        moreElement.innerHTML += 
            '&nbsp;Clubs like Real Madrid, Barcelona, and Bayern Munich have reportedly been monitoring the young star. ' +
            'With his contract situation still uncertain, Juventus fans are worried that they might lose their next big talent. ' +
            'The coming transfer window could be decisive for Yildiz and his future at the club.';

        moreElement.classList.add("content-added");

        readMoreButton.style.display = "none";

        let hideButton = document.createElement("div");
        hideButton.classList.add("hide-btn");
        hideButton.innerHTML = "Hide";
        hideButton.onclick = function() { hide_content("more2", "read_more2()") };
        moreElement.appendChild(hideButton);
    }
}

function read_more3() {
    let moreElement = document.getElementById("more3");
    let readMoreButton = document.querySelector(".read-more[onclick='read_more3()']");

    if (!moreElement.classList.contains("content-added")) {
        moreElement.innerHTML += 
            '&nbsp;This loss puts Juventus in a difficult position, as they struggle to compete with the likes of Inter and Milan for a Champions League spot. ' +
            'Fans are growing frustrated with the inconsistency of the team. Can they bounce back in the upcoming matches?';

        moreElement.classList.add("content-added");

        readMoreButton.style.display = "none";

        let hideButton = document.createElement("div");
        hideButton.classList.add("hide-btn");
        hideButton.innerHTML = "Hide";
        hideButton.onclick = function() { hide_content("more3", "read_more3()") };
        moreElement.appendChild(hideButton);
    }
}

function read_more4() {
    let moreElement = document.getElementById("more4");
    let readMoreButton = document.querySelector(".read-more[onclick='read_more4()']");

    if (!moreElement.classList.contains("content-added")) {
        moreElement.innerHTML += 
            '&nbsp;With this win, Juventus has given themselves a slight boost, but consistency remains a major concern. ' +
            'The next few games will determine if they can push for a higher finish in the league table.';

        moreElement.classList.add("content-added");

        readMoreButton.style.display = "none";

        let hideButton = document.createElement("div");
        hideButton.classList.add("hide-btn");
        hideButton.innerHTML = "Hide";
        hideButton.onclick = function() { hide_content("more4", "read_more4()") };
        moreElement.appendChild(hideButton);
    }
}
function read_more5() {
    let moreElement = document.getElementById("more5");
    let readMoreButton = document.querySelector(".read-more[onclick='read_more5()']");

    if (!moreElement.classList.contains("content-added")) {
        moreElement.innerHTML += 
            '&nbsp;Despite dominating possession and creating numerous chances, Juventus failed to capitalize. ' +
            'A lack of clinical finishing and defensive errors led to their shocking exit from the competition.';

        moreElement.classList.add("content-added");

        readMoreButton.style.display = "none";

        let hideButton = document.createElement("div");
        hideButton.classList.add("hide-btn");
        hideButton.innerHTML = "Hide";
        hideButton.onclick = function() { hide_content("more5", "read_more5()") };
        moreElement.appendChild(hideButton);
    }
}

function read_more6() {
    let moreElement = document.getElementById("more6");
    let readMoreButton = document.querySelector(".read-more[onclick='read_more6()']");

    if (!moreElement.classList.contains("content-added")) {
        moreElement.innerHTML += 
            '&nbsp;Juventus fans are growing increasingly frustrated as their team continues to struggle. ' +
            'With each passing game, it seems like their hopes of a successful season are fading away.';

        moreElement.classList.add("content-added");

        readMoreButton.style.display = "none";

        let hideButton = document.createElement("div");
        hideButton.classList.add("hide-btn");
        hideButton.innerHTML = "Hide";
        hideButton.onclick = function() { hide_content("more6", "read_more6()") };
        moreElement.appendChild(hideButton);
    }
}


function hide_content(moreId, readMoreFunction) {
    let moreElement = document.getElementById(moreId);
    let readMoreButton = document.querySelector(`.read-more[onclick='${readMoreFunction}']`);

    if (moreElement.classList.contains("content-added")) {
        moreElement.innerHTML = "";
        moreElement.classList.remove("content-added");

        readMoreButton.style.display = "block";
    }
}


function hide_content(moreId, buttonQuery) {
    let moreElement = document.getElementById(moreId);
    let readMoreButton = document.querySelector(".read-more[onclick='" + buttonQuery + "']");

    moreElement.innerHTML = "";
    moreElement.classList.remove("content-added");

    readMoreButton.style.display = "inline";
}
let articleIndex = 7;

function toggle_read_more(moreId, button) {
    let moreElement = document.getElementById(moreId);

    if (!moreElement.classList.contains("content-added")) {
        moreElement.innerHTML = moreId === "more7" ? 
            '&nbsp;Despite being favorites, Juventus failed to secure victory against a determined Empoli side. ' +
            'The match ended 1-1 after extra time, leading to a tense penalty shootout where Juve missed two crucial shots. ' +
            'Now, the pressure is on Massimiliano Allegri, with fans questioning whether he is the right man for the job.' :
            '&nbsp;Juventus has already crashed out of the Coppa Italia, lost the Supercoppa, and is now on the brink of Champions League elimination. ' +
            'Fans are beginning to wonder: is there anything left to lose this season? ' +
            'A team that once dominated Italian football now faces an identity crisis, with leadership changes and poor performances raising concerns. ' +
            'If results do not improve soon, major squad changes may be inevitable in the summer transfer window.';

        moreElement.classList.add("content-added");
        button.innerText = "Hide";
    } else {
        moreElement.innerHTML = "";
        moreElement.classList.remove("content-added");
        button.innerText = "Read more...";
    }
}

function show_more_articles() {
    let nextArticle = document.getElementById(`article${articleIndex}`);
    
    if (nextArticle) {
        nextArticle.classList.remove("hidden");
        articleIndex++;
    }

    if (!document.getElementById(`article${articleIndex}`)) {
        document.getElementById("more-articles").style.display = "none";
    }
}
function checkVisibility() {
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        const rect = article.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
            article.classList.add('visible'); 
        }
    });
}
window.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);

const ads = document.querySelectorAll(".ad");
    let currentAdIndex = 0;

    function showAd(index) {
        ads.forEach((ad, i) => {
            if (i === index) {
                ad.style.display = "flex";
                setTimeout(() => {
                    ad.classList.add("active");
                }, 10);  
            } else {
                ad.classList.remove("active");
                setTimeout(() => {
                    ad.style.display = "none";  
                }, 1000); 
            }
        });
    }

    function nextAd() {
        let previousAdIndex = currentAdIndex;
        currentAdIndex = (currentAdIndex + 1) % ads.length;
        showAd(currentAdIndex);
    }

    setInterval(nextAd, 5000);
    showAd(currentAdIndex);