function buat_login(){
  var elem = document.getElementById("X");
  elem.parentElement.removeChild(elem);
  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "SILAHKAN MENDAFTAR";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);
  var form = document.createElement("FORM");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.value = "";
  input_username.placeholder="Nama user..."
  form.appendChild(input_username);

  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_nomor = document.createElement("input");
  input_nomor.type = "text";
  input_nomor.name = "Nomor Handphone";
  input_nomor.className = "form_login";
  input_nomor.value = "";
  input_nomor.placeholder="Nomor Handphone";
  form.appendChild(input_nomor);


  var label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.value = "";
  input_username.placeholder="Username atau email";
  form.appendChild(input_username);

  var label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);
  var input_password = document.createElement("input");
  input_password.type = "text";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.value = "";
  input_password.placeholder="Password..";
  form.appendChild(input_password);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);

}
