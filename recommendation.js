export function getClothingRecommendation(temperature, humidity, conditionText, isCelsius) {
    let recommendation = "<p><strong>Recommendation:</strong>";

    // Specific conditions
    if (conditionText.includes("Rain") || conditionText.includes("Snow")) {
        recommendation += " Carry an umbrella or wear waterproof clothing.";
    }
    if (conditionText.includes("Sunny")) {
        recommendation += " Wear sunglasses or a hat.";
    }
    //  console.log(temperature)
     console.log('Temperature in recommendation function:', temperature);
     console.log('isCelsius in recommendation function:', isCelsius);
    // Temperature-based clothing
    if (isCelsius) {
        if (temperature <= 0) recommendation += " Dress in heavy winter clothing, with gloves and a scarf.";
        else if (temperature <= 10) recommendation += " Wear a heavy jacket and warm layers.";
        else if (temperature <= 20) recommendation += " Wear a jacket or a sweater.";
        else if (temperature <= 30) recommendation += " Wear a long sleeve shirt and light pants.";
        else recommendation += " Wear a short sleeve shirt and shorts.";
    } else { // Fahrenheit
        if (temperature <= 32) recommendation += " Dress in heavy winter clothing, with gloves and a scarf.";
        else if (temperature <= 50) recommendation += " Wear a heavy jacket and warm layers.";
        else if (temperature <= 68) recommendation += " Wear a jacket or a sweater.";
        else if (temperature <= 86) recommendation += " Wear a long sleeve shirt and light pants.";
        else recommendation += " Wear a short sleeve shirt and shorts.";
    }

    // Humidity-based recommendations
    if (humidity > 80) {
        recommendation += " Wear breathable fabrics, as it's very humid.";
    }

    recommendation += "</p>";
    return recommendation;
}
