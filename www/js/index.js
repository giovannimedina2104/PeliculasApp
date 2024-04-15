function login() {
    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;

    var databaseName = 'usersDB';
    var databaseVersion = 1;
    var openRequest = window.indexedDB.open(databaseName, databaseVersion);

    openRequest.onerror = function(event) {
        console.log(openRequest.errorCode);
    };

    openRequest.onsuccess = function(event) {
        var db = openRequest.result;
        var transaction = db.transaction(["usuarios"], "readonly");
        var objectStore = transaction.objectStore("usuarios");
        var index = objectStore.index("email");

        var request = index.get(email);

        request.onsuccess = function(event) {
            var user = event.target.result;
            if (user) {
                if (user.password === password) {
                    // Contraseña correcta, redirigir al usuario a la página deseada
                    window.location.href = "/www/movie.html";
                } else {
                    alert("Contraseña incorrecta");
                }
            } else {
                alert("Usuario no encontrado");
            }
        };

        request.onerror = function(event) {
            console.log("Error buscando usuario: " + request.error);
        };
    };
}