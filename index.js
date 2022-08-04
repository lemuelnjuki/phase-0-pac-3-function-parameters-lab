function introduction(Lemuel){
    return `Hi, my name is ${Lemuel}.`
}

function introductionWithLanguage(Lemuel, Ruby){
    return `Hi, my name is ${Lemuel} and I am learning to program in ${Ruby}.`
};

function introductionWithLanguageOptional(Lemuel, Ruby){
    return `Hi, my name is ${Lemuel} and I am learning to program in ${Ruby}.`
};

function introductionWithLanguageOptional(Lemuel,language="JavaScript"){
    return `Hi, my name is ${Lemuel} and I am learning to program in ${language}.`
}