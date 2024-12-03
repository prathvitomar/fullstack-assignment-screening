function handleRadioClick(radio) {
  const cards = document.querySelectorAll('.card');
  
  // Loop through all cards and hide the dropdowns
  cards.forEach(card => {
    const dropdownContainer = card.querySelector('.dropdown-container');
    if (dropdownContainer) {
      dropdownContainer.style.display = 'none'; // Hide all dropdowns
    }
  });

  // Show the dropdown for the card where the radio is clicked
  const parentCard = radio.closest('.card');
  const dropdownContainer = parentCard.querySelector('.dropdown-container');
  if (dropdownContainer) {
    dropdownContainer.style.display = 'grid'; // Show dropdown for the selected card
  }
}
