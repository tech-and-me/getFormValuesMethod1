

const handleOnSubmit = () => {
    // select myForm 
    let myForm = document.getElementById("myForm");
    //create a new form data object and pass myForm as argument
    const formObjects = new FormData(myForm); 
    //access value of each form element via name
    const email = formObjects.get("email");
    const password = formObjects.get("password");

    //Note: DataForm can only get value from input field but not any other field.
    //Below, we select a label field named hello.
    const hello = formObjects.get("hello");
    

    console.log("Email entered is : " , email);
    console.log("Password entered is : " , password);

    //below code will display null even though we have already set value of a label.
    console.log("Caption is  : " , hello);

}
