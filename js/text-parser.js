function generateQuestions() {
  const text = document.getElementById('textInput').value;
  const num = parseInt(document.getElementById('numQuestions').value);
  const output = document.getElementById('output');
  output.innerHTML = '';

  if (!text || text.split(' ').length > 5000) {
    alert('Text must be under 5000 words');
    return;
  }

  for (let i = 0; i < num; i++) {
    const question = `Q${i + 1}: What is a random fact from your text?`;
    const options = ['Option A', 'Option B', 'Option C', 'Option D'];
    const correct = 'Option B';

    output.innerHTML += `
      <div class="p-4 bg-gray-100 rounded shadow">
        <p class="font-bold">${question}</p>
        <ul class="list-disc ml-6">
          ${options.map(o => `<li>${o}</li>`).join('')}
        </ul>
        <p class="text-green-600">Answer: ${correct}</p>
      </div>
    `;
  }
}
