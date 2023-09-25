const surpriseSection = document.getElementById('surprise');

// function showSurprise() {
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }

const randomTime = Math.ceil(Math.random() * 4) + 1

setTimeout(() => surpriseSection.textContent = '🎉 Surprise! 🎉', 1000 * randomTime);