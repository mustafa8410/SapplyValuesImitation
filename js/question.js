questions =  [
    {"id": 0, "question": "Freedom of business is the best practical way a society can prosper.", "effects": {"right": 1}},
    {"id": 1, "question": "Charity is a better way of helping those in need than social welfare.", "effects": {"right": 1}},
    {"id": 2, "question": "Wages are always fair, as employers know best what a worker's labour is worth.", "effects": {"right": 1}},
    {"id": 3, "question": "It is human nature to be greedy.", "effects": {"right": 1}},
    {"id": 4, "question": "Exploitation is an outdated term, as the struggles of 1800s capitalism don't exist anymore.", "effects": {"right": 1}},
    {"id": 5, "question": "Communism is an ideal that can never work in practice.", "effects": {"right": 1}},
    {"id": 6, "question": "Taxation of the wealthy is a bad idea, society would be better off without it.", "effects": {"right": 1}},
    {"id": 7, "question": "The harder you work, the more you progress up the social ladder.", "effects": {"right": 1}},
    {"id": 8, "question": "Organisations and corporations cannot be trusted and need to be regulated by the government.", "effects": {"right": -1}},
    {"id": 9, "question": "A government that provides for everyone is an inherently good idea.", "effects": {"right": -1}},
    {"id": 10, "question": "The current welfare system should be expanded to further combat inequality.", "effects": {"right": -1}},
    {"id": 11, "question": "Land should not be a commodity to be bought and sold.", "effects": {"right": -1}},
    {"id": 12, "question": "All industry and the bank should be nationalised.", "effects": {"right": -1}},
    {"id": 13, "question": "Class is the primary division of society.", "effects": {"right": -1}},
    {"id": 14, "question": "Economic inequality is too high in the world.", "effects": {"right": -1}},
    {"id": 15, "question": "Sometimes it is right that the government may spy on its citizens to combat extremists and terrorists.", "effects": {"auth": 1}},
    {"id": 16, "question": "Authority figures, if morally correct, are a good thing for society.", "effects": {"auth": 1}},
    {"id": 17, "question": "Strength is necessary for any government to succeed.", "effects": {"auth": 1}},
    {"id": 18, "question": "Only the government can fairly and effectively regulate organisations.", "effects": {"auth": 1}},
    {"id": 19, "question": "Society requires structure and bureaucracy in order to function.", "effects": {"auth": 1}},
    {"id": 20, "question": "Mandatory IDs should be used to ensure public safety.", "effects": {"auth": 1}},
    {"id": 21, "question": "In times of crisis, safety becomes more important than civil liberties.", "effects": {"auth": 1}},
    {"id": 22, "question": "If you have nothing to hide, you have nothing to fear.", "effects": {"auth": 1}},
    {"id": 23, "question": "The government should be less involved in the day to day life of its citizens.", "effects": {"auth": -1}},
    {"id": 24, "question": "Without democracy, a society is nothing.", "effects": {"auth": -1}},
    {"id": 25, "question": "Jury nullification should be legal.", "effects": {"auth": -1}},
    {"id": 26, "question": "The smaller the government, the freer the people.", "effects": {"auth": -1}},
    {"id": 27, "question": "The government should, at most, provide emergency services and law enforcement.", "effects": {"auth": -1}},
    {"id": 28, "question": "The police were not created to protect the people, but to uphold the status quo by force.", "effects": {"auth": -1}},
    {"id": 29, "question": "State schools are a bad idea because our state shouldn't be influencing our children.", "effects": {"auth": -1}},
    {"id": 30, "question": "Two consenting individuals should be able to do whatever they want with each other, even if it makes me uncomfortable.", "effects": {"prog": 1}},
    {"id": 31, "question": "An individual's body is their own property, and they should be able to do anything they desire to it.", "effects": {"prog": 1}},
    {"id": 32, "question": "A person should be able to worship whomever or whatever they want.", "effects": {"prog": 1}},
    {"id": 33, "question": "Nudism is perfectly natural.", "effects": {"prog": 1}},
    {"id": 34, "question": "Animals deserve certain universal rights.", "effects": {"prog": 1}},
    {"id": 35, "question": "Gender is a social construct, not a natural state of affairs.", "effects": {"prog": 1}},
    {"id": 36, "question": "Laws based on cultural values, rather than ethical ones, aren't justice.", "effects": {"prog": 1}},
    {"id": 37, "question": "Autonomy of body extends even to minors, the mentally ill, and serious criminals.", "effects": {"prog": 1}},
    {"id": 38, "question": "Homosexuality is against my values.", "effects": {"prog": -1}},
    {"id": 39, "question": "Transgender individuals should not be able to adopt children.", "effects": {"prog": -1}},
    {"id": 40, "question": "Drugs are harmful and should be banned.", "effects": {"prog": -1}},
    {"id": 41, "question": "The death penalty should exist for certain crimes.", "effects": {"prog": -1}},
    {"id": 42, "question": "Victimless crimes should still be punished.", "effects": {"prog": -1}},
    {"id": 43, "question": "One cannot be moral without religion.", "effects": {"prog": -1}},
    {"id": 44, "question": "Parents should hold absolute power over their children, as they are older and more experienced.", "effects": {"prog": -1}},
    {"id": 45, "question": "Multiculturalism is bad.", "effects": {"prog": -1}}
];

const shuffle = (array) => {
    let arrayLength = array.length, i, random;
    for(i=0;i<arrayLength;i++){
        random = Math.floor(Math.random() * arrayLength);
        let temp = array[random];
        array[random] = array[i];
        array[i] = temp;
    }
}

const showQuestion = () => {
    if(counter < questions.length){
        let currentQuestion = questions[counter];
        questionNumber.innerText = `${counter + 1}`;
        questionTag.innerText = currentQuestion.question;
        return true;
    }
    else
        return false;
}

const nextQuestion = (buttonValue) => {
    const currentQuestion = questions[counter];
    const keyName = Object.keys(currentQuestion.effects)[0];
    switch (keyName){
        case "right":
            right += buttonValue * currentQuestion.effects.right;
            console.log("right: " + right);
            break;
        case "auth":
            auth += buttonValue * currentQuestion.effects.auth;
            console.log("auth: " + auth);
            break;
        case "prog":
            prog += buttonValue * currentQuestion.effects.prog;
            console.log("prog: " + prog);
            break;
    }
    answerValues.set(currentQuestion.id,buttonValue);
    if(counter == 0)
        prevButton.classList.remove("disabled");
    counter++;
    const showQuestionCheck = showQuestion();
    if(!showQuestionCheck){
        testEnd();
    }
}

const previousQuestion = () => {
    if(counter == 1)
        prevButton.classList.add("disabled");
    counter--;
    const currentQuestion = questions[counter];
    const keyName = Object.keys(currentQuestion.effects)[0];
    switch (keyName){
        case "right":
            right -= answerValues.get(currentQuestion.id) * currentQuestion.effects.right;
            console.log("right: " + right);
            break;
        case "auth":
            auth -= answerValues.get(currentQuestion.id) * currentQuestion.effects.auth;
            console.log("auth: " + auth);
            break;
        case "prog":
            prog -= answerValues.get(currentQuestion.id) * currentQuestion.effects.prog;
            console.log("prog: " + prog);
            break;
    }
    showQuestion();
}

const testEnd = () => {
    let resultButton = `
        <button class="btn btn-outline-info btn-lg col-md-6" id="result">Show Results</button>
    `
    prevButton.classList.add("col-md-6");
    lastButtonRow.insertAdjacentHTML("beforeend", resultButton);
    for(let answer of answerButton){
        answer.classList.add("disabled");
        console.log(answer.classList);
    }
}















const showResults = () => console.log("Not completed yet.");