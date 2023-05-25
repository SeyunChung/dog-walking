import { getWalkers } from "./database.js" // getWalker -> getWalkers

//walkers data
const walkers = getWalkers()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
    
        if (whatWasClickedOn.dataset.type === "walker"){
        window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
    }
    }
)
// you can change the name of parameter. just a variable name "theClickEvent"

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                           data-city="${walker.city}"
                           data-type="walker"
                        >${walker.name}</li>` // fullName -> name
    }

    walkerHTML += "</ul>"

    return walkerHTML // add return walkerHTML
}

