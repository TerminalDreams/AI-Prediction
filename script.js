async function predict() {
  const index = document.getElementById("index").value;
  const expiry = document.getElementById("expiry").value;

  const res = await fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index, expiry })
  });

  const data = await res.json();
  document.getElementById("result").innerHTML =
    `📊 Prediction: ${data.direction}<br>🎯 Suggested Option: ${data.suggestion}`;
}
