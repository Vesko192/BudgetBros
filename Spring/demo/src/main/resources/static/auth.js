const scriptURL = "https://script.google.com/macros/s/AKfycbxFi51XTbJK7ExDe8DsvfSTOBhUNXsOlvWeOR5ZqiN2BlfIBKTr6gycjZHzjo4GtlFA/exec";

// 🟩 LOGIN FUNCTION
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",   // changed from 'type'
      username: username,
      password: password
    })
  });

  const data = await response.json();
  console.log(data); // for debugging

  // backend returns { ok: true/false, message: "..." }
  document.getElementById("message").textContent = data.message || "";

  if (data.ok) {
    // Save login state and redirect to dashboard
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index";
  } else {
    document.getElementById("message").textContent = data.message || "Invalid credentials";
  }
}

// 🟦 SIGN-UP FUNCTION
async function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    document.getElementById("message").textContent = "Please fill in all fields";
    return;
  }

  const response = await fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({
      action: "signup",  // changed from 'type'
      username: username,
      password: password
    })
  });
  
  const data = await response.json();
  console.log(data);

  document.getElementById("message").textContent = data.message;

  if (data.ok) {
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }
}
