/**
 * Closures - Closuers are the function bundled together with its parents states
 */

const createGetNameClosure = () => {
    const name = "Ved Prakash";

    // closures function
    function getName(){
        console.log("Name :", name.toUpperCase())
    }

    return getName;
}

const getName = createGetNameClosure();

getName();