document.addEventListener('DOMContentLoaded', () => {
  const $promptInput = document.getElementById('promptInput');
  const $transformBtn = document.getElementById('transformBtn');
  const $poetryOutput = document.getElementById('poetryOutput');
  const $copyBtn = document.getElementById('copyBtn');
  
  let isGenerating = false;

  $transformBtn.addEventListener('click', handleTransform);
  $copyBtn.addEventListener('click', handleCopy);

  // Auto-resize textarea
  $promptInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  async function handleTransform() {
    const text = $promptInput.value.trim();
    if (!text) {
      $promptInput.focus();
      return;
    }

    if (isGenerating) return;

    // Get selected style
    const styleRadios = document.getElementsByName('poeticStyle');
    let selectedStyle = 'romantic';
    for (const radio of styleRadios) {
      if (radio.checked) {
        selectedStyle = radio.value;
        break;
      }
    }

    // Set UI state to loading
    isGenerating = true;
    $transformBtn.classList.add('loading');
    $transformBtn.disabled = true;
    $copyBtn.disabled = true;
    
    // Clear output and add placeholder
    $poetryOutput.classList.remove('placeholder');
    $poetryOutput.innerHTML = '<span class="cursor"></span>';

    try {
      const response = await fetch('/poetify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text,
          style: selectedStyle
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const generatedPoem = data.result || 'The muses are silent today...';
      
      // Animate typing effect
      await typeWriterEffect(generatedPoem, $poetryOutput);
      
      $copyBtn.disabled = false;

    } catch (error) {
      console.error('Error generating poetry:', error);
      $poetryOutput.innerHTML = 'An ink spill occurred... Please try again later.';
      $poetryOutput.classList.add('placeholder');
    } finally {
      isGenerating = false;
      $transformBtn.classList.remove('loading');
      $transformBtn.disabled = false;
    }
  }

  function typeWriterEffect(text, element) {
    return new Promise(resolve => {
      element.innerHTML = '';
      
      let i = 0;
      // Add cursor element
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      
      // Node for text
      const textNode = document.createTextNode('');
      element.appendChild(textNode);
      element.appendChild(cursor);

      // We want to simulate realistic typing, slightly varying speed, but fast
      const typeNextChar = () => {
        if (i < text.length) {
          textNode.nodeValue += text.charAt(i);
          i++;
          
          // Add a slight pause for newlines or punctuation for effect
          let delay = 15 + Math.random() * 20; 
          const char = text.charAt(i - 1);
          if (char === '\n') delay += 100;
          if (['.', ',', '?', '!'].includes(char)) delay += 80;

          setTimeout(typeNextChar, delay);
        } else {
          // Finished typing, keep cursor but stop animation eventually if desired
          resolve();
        }
      };

      typeNextChar();
    });
  }

  async function handleCopy() {
    // Get text excluding cursor
    const outputText = $poetryOutput.textContent;
    if (!outputText) return;

    try {
      await navigator.clipboard.writeText(outputText);
      
      // Visual feedback
      const originalHtml = $copyBtn.innerHTML;
      $copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Copied!
      `;
      
      setTimeout(() => {
        $copyBtn.innerHTML = originalHtml;
      }, 2000);
      
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
});