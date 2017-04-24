export const greeting = (age = 0) => {
    if(age > 18){
        return "Hello!";
    }else if(age < 18){
        return "Yo!";
    }    
};



export const isTacoTuesday = (day = 'tuesday') => {
    if(day === 'tuesday'){  
        return true; 
    }
    else if(day !== 'tuesday'){
        return false;
    }
};


