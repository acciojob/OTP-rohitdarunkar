const codes = document.querySelectorAll('.code');

// Focus first input on page load
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
      code.value = '';
      setTimeout(() => {
        if (codes[idx + 1]) {
          codes[idx + 1].focus();
        }
      }, 10);
    }

    if (e.key === 'Backspace') {
      setTimeout(() => {
        if (codes[idx - 1]) {
          codes[idx - 1].focus();
        }
      }, 10);
    }
  });
});
