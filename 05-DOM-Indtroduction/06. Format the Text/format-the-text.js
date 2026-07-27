function solve() {
  const button = document.querySelector('button');
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  button.addEventListener('click', () => {
    output.innerHTML = '';

    const sentences = input.value
      .split('.')
      .filter(sentence => sentence.trim() !== '');

      // Create paragraphs with up to 3 sentences each
    for (let i = 0; i < sentences.length; i += 3) {
      const paragraphText =
        sentences
        .slice(i, i + 3)
        .map(s => s.trim() + '.')
        .join('');

      output.innerHTML += `<p>${paragraphText}</p>`;
    }
  });
}
