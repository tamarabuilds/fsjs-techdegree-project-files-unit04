function executeCallBack (callback ) {
    callback();
}

// print hello
executeCallBack( () =>  console.log('Hello'));

// print goodbye

executeCallBack(() => console.log('Goodbye'));