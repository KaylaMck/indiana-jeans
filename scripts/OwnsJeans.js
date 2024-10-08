import { setOwnsBlueJeans } from "./TransientState.js"

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}

export const OwnJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let html = "<h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true' /> Yes"
    html += "<input type='radio' name='ownsJeans' value='false' /> No"
    return html
}