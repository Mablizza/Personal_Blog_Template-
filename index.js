import { blogData } from "./blogData.js"; 

function updateHero(){
    const heroDate = document.getElementById("hero-date")
    const heroHeader = document.getElementById("hero-header")
    const heroText = document.getElementById("hero-text")

    heroDate.innerText = blogData[0].date
    heroHeader.innerText = blogData[0].heading
    heroText.innerText = blogData[0].text

    console.log(blogData[0].date)
}

updateHero()



const viewMoreBtn = document.getElementById("view-more")

viewMoreBtn.addEventListener("click", function(){
const showMoreDiv = document.getElementById("big-screen-six-blogs")
showMoreDiv.style.display = "grid"
viewMoreBtn.style.display = "none"

})
