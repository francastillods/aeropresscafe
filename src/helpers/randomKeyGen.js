const randomString = (length) => {
    
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

const randomNumber = (maxNumber) => {
    return(  Math.floor((Math.random() * maxNumber) + 1) );
}

export const randomKeyGen = (prefix, counter ) => {
    return (
        prefix + '-' + randomString(3) + '-' + randomNumber(100) + '-' + counter
    )
}