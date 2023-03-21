function insertar() {
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var pasillo = document.getElementById("pasillo").value;
    var id = document.getElementById("id").value;

    var fila = "<tr><td>" + nombre + "</td><td>" + precio + "</td><td>" + pasillo + "</td><td>" + id + "</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tabla").appendChild(btn);

}