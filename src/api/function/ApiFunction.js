
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
        if(description.length > nbMax){
            for(let i = 0; i < nbMax; i++){
                    String += description[i];
            }
            return String + "...";
        }
        return description;
    },
    rating(nb){
        if(nb >= 80){
            return <span style={{color: `#50d150`}}>{(nb/10).toFixed(1)}</span>
        }else if(nb < 80 && nb > 50){
            return <span style={{color: `orange`}}>{(nb/10).toFixed(1)}</span>
        }
        return <span style={{color: `red`}}>{(nb/10).toFixed(1)}</span>
    }
}

export default ApiFunction;