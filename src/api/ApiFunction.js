
const ApiFunction =  {

    bestGames(data, nb){
        let result = [];
        if(data.length !== 0){
            for(let i = 0; i < nb; i++){
                result.push(data[i]);
            }
            return result;
        }
        return [];
    },
    desc(description, nbMax){
        let String = "";
        let alert = false;
        if(description.length > nbMax){
            for(let i = 0; i < nbMax; i++){
                if(description[i] !== '<' && description[i] !== '>' && alert === false){
                    String += description[i];
                }else{
                    if(description[i] === '<' || description[i] === '>'){
                        alert = !alert;
                    }
                    
                }
            }
            return String + "...";
        }
        return description;
    }
}

export default ApiFunction;