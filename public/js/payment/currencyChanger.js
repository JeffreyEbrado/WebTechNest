
  async function getUserLocation() {
    // Get user's IP or location using a service like GeoIP
    let response = await fetch('https://ipinfo.io?token=YOUR_TOKEN');
    let data = await response.json();
    return data.country;
  }

  async function getExchangeRate() {
    // Use a currency conversion API to get the current PHP to USD rate
    let response = await fetch('https://api.exchangerate-api.com/v4/latest/PHP');
    let data = await response.json();
    return data.rates.USD;
  }

  async function updatePrice() {
    const userCountry = await getUserLocation();
    const phpPrice = 1000; // Example PHP price
    const exchangeRate = await getExchangeRate();
    
    let priceInUSD = phpPrice;

    if (userCountry === 'US') {
      priceInUSD = phpPrice * exchangeRate;
      document.getElementById('price').textContent = `$${priceInUSD.toFixed(2)}`;
    } else {
      document.getElementById('price').textContent = `₱${phpPrice}`;
    }
  }

  updatePrice();
  
//USING THIS!!!!!---------------------------------------
//<div id="price"></div>
