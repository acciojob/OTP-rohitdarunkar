//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Focus first input on load
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    // Allow only digits and Backspace
    if (e.key >= '0' && e.key <= '9') {
      code.value = '';
      setTimeout(() => {
        if (codes[idx + 1]) {
          codes[idx + 1].focus();
        }
      }, 10);
    } 
    else if (e.key === 'Backspace') {
      setTimeout(() => {
        if (codes[idx - 1]) {
          codes[idx - 1].focus();
        }
      }, 10);
    }
  });
});
