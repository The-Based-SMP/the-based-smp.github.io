// @license http://www.gnu.org/licenses/agpl-3.0.html AGPL-3.0
const timestamp = 1733011200 // smp start time

function updateCountdown() {
  const now = Math.floor(Date.now() / 1000)
  const remaining = timestamp - now

  if (remaining <= 0) {
    document.getElementById('countdown').innerText = 'SMP started!'
    clearInterval(countdownInterval)
    return
  }

  const days = Math.floor(remaining / (24 * 3600))
  const hours = Math.floor((remaining % (24 * 3600)) / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60

  let output = ''
  if (days > 0) output += `${days} days, `
  if (hours > 0 || days > 0) output += `${hours} hours, `
  if (minutes > 0 || hours > 0 || days > 0) output += `${minutes} minutes, `
  output += `${seconds} seconds.`

  document.getElementById('countdown').innerText = output
}

const countdownInterval = setInterval(updateCountdown, 1000)

updateCountdown()
// @license-end
