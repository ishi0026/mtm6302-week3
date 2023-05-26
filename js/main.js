// accessing document property
console.log(document.title)

// finding an element by Id
const infoPara = document.getElementById("info")
console.log(infoPara)
console.dir(infoPara)// if console.log shows you the string version of the object we can use console.dir() method


//concatenation of words, addition assignment to the textContent property of infoPara
infoPara.textContent += "Yuka"

//finding an element using CSS selector
let container = document.querySelector(".container")
console.log(container)

//updating style object of an element, max-width should change into maxWidth
container.style.maxWidth = "880px"
container.style.margin = "0 auto"

//finding all the elements using CSS
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)//we can use this if we want to know the place of elements?

//accessing the element on second position and setting its style.
allNodes[1].style.background = "cyan"

for(let eachNode of allNodes){
    eachNode.style.border = "1px solid black"
}

//違い
//variable 変数 is the box we can put numbers or strings 下の2つとは全然違うもの

//property　hrefやaなどルールで決まっている名前のもののみ、なのでたまにattributeと同じものがpropertyと呼ばれる
//attribute everything  in < > in HTML, hrefやaなどルールで決まっている名前のもの + 自分で決めた名前のクラスなど

// traversing the DOM
const mainNodes = document.getElementById("threeNodes")
console.log(mainNodes)

//accessing the children property of the mainNodes variable
const listOfNodes = mainNodes.children

//selecting the second item and setting its styles
listOfNodes[1].style.margin = "10px 0"

const firstNode = mainNodes.firstElementChild
console.log(firstNode.textContent)

/* attribute method */
const learnMore = document.getElementById("learn")

//getting attribute value
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

//getting attribute value that is a property like id by using the property name
console.log(learnMore.id)

//setting attribute value
learnMore.setAttribute("target", "_blank")

//adding the class using class lists
learnMore.classList.add("btn")

//``を使うと複数行で書ける
const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style",`
background-color: powderblue;
padding: 10px;
border: 1px solid black;`)
