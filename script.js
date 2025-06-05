function showLogin() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("infoContent").classList.add("hidden");
}

function showRegister() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("infoContent").classList.add("hidden");
}

function login() {
  const user = document.getElementById("loginUser").value.trim();
  const dni = document.getElementById("loginDni").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (user && dni && pass) {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("infoContent").classList.remove("hidden");
  } else {
    alert("Por favor completá todos los campos.");
  }
}

function register() {
  const user = document.getElementById("regUser").value.trim();
  const dni = document.getElementById("regDni").value.trim();
  const pass = document.getElementById("regPass").value.trim();

  if (user && dni && pass) {
    alert("Cuenta creada correctamente. Ahora podés ingresar.");
    showLogin();
  } else {
    alert("Por favor completá todos los campos.");
  }
}

function solicitarTurno() {
  const especialidad = document.getElementById("especialidad").value;
  const fecha = document.getElementById("fechaTurno").value;
  const mensaje = document.getElementById("turnoMensaje");

  if (especialidad && fecha) {
    mensaje.textContent = `Turno solicitado para ${especialidad} el día ${fecha}`;
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Por favor completá todos los campos.";
    mensaje.style.color = "red";
  }
}

function logout() {
  // Oculta todo menos la pantalla principal
  document.getElementById("infoContent").classList.add("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.querySelector(".container").classList.remove("hidden");

  // Limpiar campos
  document.getElementById("especialidad").value = "";
  document.getElementById("fechaTurno").value = "";
  document.getElementById("turnoMensaje").textContent = "";

  // Limpiar login
  document.getElementById("loginUser").value = "";
  document.getElementById("loginDni").value = "";
  document.getElementById("loginPass").value = "";

  // Limpiar registro
  document.getElementById("regUser").value = "";
  document.getElementById("regDni").value = "";
  document.getElementById("regPass").value = "";
}
