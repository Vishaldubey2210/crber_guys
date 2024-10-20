function calculateFriendshipLevel() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const resultDiv = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        resultDiv.innerHTML = "Please enter both names.";
        return;
    }

    // Generate a random friendship level between 1 and 100
    const friendshipLevel = Math.floor(Math.random() * 100) + 1;

    let message = `Your friendship level is ${friendshipLevel}. `;

    if (friendshipLevel < 25) {
        message += "Say goodbye.";
    } else if (friendshipLevel >= 25 && friendshipLevel < 50) {
        message += "Be careful.";
    } else if (friendshipLevel >= 50 && friendshipLevel < 75) {
        message += "Good.";
    } else if (friendshipLevel >= 75 && friendshipLevel < 90) {
        message += "Wow bhai sahab!";
    } else {
        message += "Rab ne bana di jodi!";
    }

    resultDiv.innerHTML = message;
}

const randomNames = [
    // ... same list of 60 random names
 "keshav chauhan", "raj aryan","raj aryan", "sushant bhardwaj", "krishna", "tanmay rajput", "khushi pandey", "aarohan shyam", "shaurya jeet singh", "bhoomika singh", "krishiv bhardwaj", "devesh malik", "snigdha srivastava", "siddharth chauhan", "prabhu ji mishra", "ajay pratap singh", "antara pandey", "chitransh srivastava", "pranjay singh mehra", "ayoniza tiwari", "kratik junwal", "arnav singh", "kritarth gupta", "vipansh vimal", "piyush bhardwaj", "nishkarsh sharma", "rajat rai", "shreya singh", "shagun sharma", "praveen raj singh", "ayush gupta", "pranjal khetwal", "abhinav sharma", "sahil kumar", "pranjal aggarwal", "bibekpreet singh chugh", "nitin sharma", "roopesh singhal", "nikunj miglani", "aditya agrahary", "gauri sharma", "shivam bhardwaj", "sarthak srivastava", "arpita singh baghel", "vishv singh", "srishti vasistha", "ayush dwivedi", "aditya mukherji", "mahi sirohi", "ujjawal sharma", "aadi jain", "nandini sharma", "gagandeep singh rathore", "vishal kumar", "utkarsh kumar srivastava", "shikha sharma", "toib fayaz", "vibhanshu mittal", "santosh", "daksh bansal"

];

function predictRandomFriend() {
    const yourName = document.getElementById("yourName").value;
    const predictionDiv = document.getElementById("prediction");

    if (yourName === "") {
        predictionDiv.innerHTML = "Please enter your name.";
        return;
    }

    let friendName = "";

    if (yourName.toLowerCase() === "vishal") {
        friendName = "Tanmay";
    } else if (yourName.toLowerCase() === "tanmay") {
        friendName = "Vishal";
    } else {
        const randomIndex = Math.floor(Math.random() * randomNames.length);
        friendName = randomNames[randomIndex];
    }

    predictionDiv.innerHTML = `Your predicted random friend is ${friendName}.`;
}

// Popup warning function
function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
