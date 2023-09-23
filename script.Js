const toggle = document.getElementById('toggle')
const container = document.querySelector('main')

toggle.addEventListener('change', () => {
        container.classList.toggle('showMonthly')

})