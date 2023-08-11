export function getClothingRecommendation(temperature, humidity, conditionText, isCelsius) {
    let recommendation = "<p><strong>Recommendation:</strong>";

    // Specific conditions
    if (conditionText.includes("Rain") || conditionText.includes("Snow")) {
        recommendation += " Carry an umbrella or wear waterproof clothing.";
    }
    if (conditionText.includes("Sunny")) {
        recommendation += " Wear sunglasses or a hat.";
    }

    // Convert temperature to Celsius if it's in Fahrenheit
    if (!isCelsius) {
        temperature = (temperature - 32) * (5 / 9);
    }

    // Temperature-based clothing
    if (temperature <= 0) recommendation += " Dress in heavy winter clothing, with gloves and a scarf.";
    else if (temperature <= 10) recommendation += " Wear a heavy jacket and warm layers.";
    else if (temperature <= 20) recommendation += " Wear a jacket or a sweater.";
    else if (temperature <= 30) recommendation += " Wear a long sleeve shirt and light pants.";
    else recommendation += " Wear a short sleeve shirt and shorts.";

    // Humidity-based recommendations
    if (humidity > 80) recommendation += " Wear breathable fabrics, as it's very humid.";

    recommendation += "</p>";
    return recommendation;
}
