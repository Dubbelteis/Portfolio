function toggleAnswer(iconId, answerId) {
    if (iconId.src.includes("assets-portfolio/images/icon-plus.svg")) {
        iconId.src = "assets-portfolio/images/icon-minus.svg";
    } else {
        iconId.src = "assets-portfolio/images/icon-plus.svg";
    }

    if (answerId.classList.contains("hidden")) {   
        answerId.classList.remove("hidden");
    } else {
        answerId.classList.add("hidden");
    }
}