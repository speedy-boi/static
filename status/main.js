let setValues = (inputDict) => {
    document.querySelector("#emoji").innerHTML = inputDict.emoji;
    document.querySelector("#title").innerHTML = inputDict.title;
    document.querySelector("#description").innerHTML = inputDict.description;
}

let statusDict = {
    "burnt": {
        emoji: "🔥",
        title: "Burnt",
        description: "Data successfully burnt"
    },
    "error": {
        emoji: "⚠️",
        title: "Error",
        description: "An error occurred"
    },
    "unknown": {
        emoji: "🤷‍♂️",
        title: "Unknown",
        description: "An unknown message was provided"
    }
}

const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('msg');

if (status in statusDict) {
    setValues(statusDict[status])
} else {
    setValues(statusDict["unknown"])
}