function receivesAFunction (spy){
    return spy();
}

function returnsANamedFunction (){
    return function b(){};
}

function returnsAnAnonymousFunction(){
    return function (){};
}