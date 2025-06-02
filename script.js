
function calculateAH() {
    const T = parseFloat(document.getElementById("temp").value);
    const RH = parseFloat(document.getElementById("rh").value);
    if (isNaN(T) || isNaN(RH)) return;

    const AH = (6.112 * Math.exp((17.67 * T)/(T + 243.5)) * RH * 2.1674) / (273.15 + T);
    document.getElementById("result").innerText = `Absolute Humidity: ${AH.toFixed(2)} g/m³`;

    const iconDiv = document.getElementById("icon");
    if (AH < 9.5) {
        iconDiv.innerText = "✅ PASS";
        iconDiv.style.color = "#00ff00";
    } else if (AH >= 9.5 && AH <= 10.0) {
        iconDiv.innerText = "⚠️ PASS (Near Limit)";
        iconDiv.style.color = "#ffd700";
    } else {
        iconDiv.innerText = "❌ FAIL";
        iconDiv.style.color = "#ff3333";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("temp").addEventListener("input", calculateAH);
    document.getElementById("rh").addEventListener("input", calculateAH);
    calculateAH();
});
