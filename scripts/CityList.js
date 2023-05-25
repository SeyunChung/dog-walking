import { getWalkers } from "./database.js"

const walkers = getWalkers() // getWalker -> getWalkers

document.addEventListener(
    "click",
    (clickEvt) => {
    const cityTarget = clickEvt.target
    if (cityTarget.dataset.type === "city") {
    window.alert(`${cityTarget.dataset.walkername} is servicing the city`)
    }
    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>` // currentWalker -> walker
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

/*
1. write attribute first. (data-walkername="${walker.name}")
2. write document.addEventListener
3. add data-type="city"
4. add if (cityTarget.dataset.type === "city") {}
*/