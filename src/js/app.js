console.log("let's play with scripting in JS");

// function toggleDropdown(button) {
//     const dropdown = button.nextElementSibling;
//     const caretRight = button.querySelector(".fa-caret-right");
//     const caretDown = button.querySelector(".fa-caret-down");

//     console.log(caretDown, caretRight);

//     dropdown.classList.toggle("hidden");
//     caretRight.classList.toggle("hidden");
//     caretDown.classList.toggle("hidden");
// }

document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.nextElementSibling; // the div.dropdown
      if (!dropdown) return;

      dropdown.classList.toggle('hidden');

      // update aria-expanded
      const expanded = !dropdown.classList.contains('hidden');
      button.setAttribute('aria-expanded', expanded);

      // if there are caret icons, toggle them too (optional)
      const caretRight = button.getElementsByTagName('span').querySelector('.fa-caret-right');
      const caretDown  = button.getElementsByTagName('span').querySelector('.fa-caret-down');
      if (caretRight && caretDown) {
        caretRight.classList.toggle('hidden', expanded);
        caretDown.classList.toggle('hidden', !expanded);
      }
    });
  });