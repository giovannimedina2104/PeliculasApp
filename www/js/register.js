var employeeData = [];
function saveData(){

    console.log("Holaaaaaaa");
    var name = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var email = document.getElementById("txtEmail").value;
    var age = document.getElementById("txtAge").value;
    var password = document.getElementById("txtPassword").value;

    var employeeObject = {
        'name': name,
        'lastName': lastName,
        'email':email,
        'age':age,
        'password':password
    }

    employeeData.push(employeeObject);
    console.log(employeeObject);

    var databaseName = 'usersDB';
    var databaseVersion = 1;
    var openRequest = window.indexedDB.open(databaseName, databaseVersion);

    openRequest.onerror = function (event) {
    console.log(openRequest.errorCode);
    };

    openRequest.onsuccess = function (event) {
    // Database is open and initialized - we're good to proceed.
    var db = openRequest.result;
    console.log("The DataBase is ready to start...");
    const transaction = db.transaction(["usuarios"], "readwrite");
    // Do something when all the data is added to the database.
  transaction.oncomplete = (event) => {
    console.log("All done!");
  };
  
  transaction.onerror = (event) => {
    // Don't forget to handle errors!
    console.log("Try again");
  };
  
  const objectStore = transaction.objectStore("usuarios");
  employeeData.forEach((usuarios) => {
    console.log(usuarios);
    const request = objectStore.add(usuarios);
    request.onsuccess = (event) => {
      // event.target.result === customer.ssn;
    };
  });
    };
}