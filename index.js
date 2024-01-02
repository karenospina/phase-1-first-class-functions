function receivesAFunction(callback){
    callback();
}

function callbackFunction() {
    console.log("I am a callback function!");
}

receivesAFunction(callbackFunction);



function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Named Function");
    };
  }



function returnsAnAnonymousFunction(callback) {
    return function() {
      callback();
    };
  }
  
  const anonymousFunction = returnsAnAnonymousFunction(() => console.log("Anonymous function"));
  anonymousFunction();


