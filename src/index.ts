//Code Written by Milton Amaya - ShipNetwork 2023
window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('your savings with sn');

  const form = document.querySelector('[fs-element="form"]');
  const savings = document.querySelector('[fs-element="total-savings"]');
  if (!form || !savings) return;

  form.addEventListener('submit', (e) => {
    //Prevents Form Submission
    e.preventDefault();
    //Prevents Webflow Javascript to do anything else
    e.stopPropagation();
    //Gets data from the form
    const formData = new FormData(form);
    const volume = Number(formData.get('volume'));

    if (!volume) return;

    //Math or whatever
    if (volume >= 0 && volume <= 8000) {
      savings.textContent = '$6,000 to $10,000';
    } else if (volume >= 8001 && volume <= 24999) {
      savings.textContent = '$56,000 to $93,000';
    } else if (volume >= 25000) {
      savings.textContent = '$205,000 to $342,000';
    } else {
      savings.textContent = 'Invalid volume input';
    }
  });
});
