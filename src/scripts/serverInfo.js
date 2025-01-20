// @license http://www.gnu.org/licenses/agpl-3.0.html AGPL-3.0
const mcServerIp = 'based-smp.duckdns.org';
const apiUrl = `https://api.mcsrvstat.us/3/${mcServerIp}`;
console.debug(`requesting: ${apiUrl}`);

function fetchServerInfo() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('http response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      updateServerInfo(data);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
}

// i plan on adding more stuff to display on the site here in future
function updateServerInfo(data) {
  if (!data.online) {
    document.getElementById('player-count').innerHTML =
      ' - server offline <sup>(plz contact cuboid and get them to fix it)</sup>';
    return;
  }
  if (data.players.online === 0) {
    // i don't wanna show anything if there is nobody online bc that could make the server look dead
    document.getElementById('player-count').textContent = '';
  } else if (data.players.online === 1) {
    document.getElementById('player-count').textContent = ' - 1 player online';
  } else if (data.players.online > 1) {
    document.getElementById('player-count').textContent =
      ` - ${data.players.online} players online`;
  }
}

fetchServerInfo();
setInterval(fetchServerInfo, 10000);
// @license-end
