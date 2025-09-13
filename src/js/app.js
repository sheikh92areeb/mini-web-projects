// console.log("let's play with scripting in JS");

// // Variables
// const componentList = document.getElementById('list');

// // Dropdown
// document.querySelectorAll('.dropdown-toggle').forEach(button => {
//     button.addEventListener('click', () => {
//       const dropdown = button.nextElementSibling; // the div.dropdown
//       if (!dropdown) return;

//       dropdown.classList.toggle('hidden');

//       // update aria-expanded
//       const expanded = !dropdown.classList.contains('hidden');
//       button.setAttribute('aria-expanded', expanded);

//       // if there are caret icons, toggle them too (optional)
//       const icon = button.querySelector('.fa-solid');      
//       if (icon) {
//         icon.classList.toggle('fa-caret-down', expanded);
//         icon.classList.toggle('fa-caret-right', !expanded);
//       }
//     });
//   });

// // Fetch Components List
// async function fetchList() {
//     componentList.innerHTML = '';
//     const data = await fetch('/components/info.json');
//     const response = await data.json();

//     console.log(response);


//     response.forEach((item) => {
//         const li = document.createElement('li');
//         li.className = "bg-gray-300 mb-3 rounded-md";
//         li.innerHTML = `<button type="button" class="dropdown-toggle w-full text-gray-800 text-lg font-medium flex items-center justify-between px-4 py-2 cursor-pointer hover:shadow-md transition-shadow duration-300" aria-expanded="false">
//                             ${item}
//                             <span class="ml-2">
//                                 <i class="fa-solid fa-caret-right"></i>                    
//                             </span>
//                         </button>
                    
//                         <div class="dropdown w-full bg-gray-200 px-4 py-3 hidden">                  
//                             <ul class="dropdown-list w-full list-none p-0 m-0">
//                                 <li class="dropdown-item w-full px-2 py-2 rounded hover:bg-gray-300">
//                                     <a href="" class="w-full block">Button 1</a>
//                                 </li>                    
//                             </ul>
//                         </div>`
    
//         componentList.appendChild(li);

//     })

// }

// fetchList();


// console.log("let's play with scripting in JS");

// // Variables
// const componentList = document.getElementById('list');

// if (!componentList) {
//   console.error('#list not found — make sure this script runs after the DOM is ready');
// }

// // 1) Event delegation: handles existing and future .dropdown-toggle buttons
// componentList.addEventListener('click', (e) => {
//   const button = e.target.closest('.dropdown-toggle');
//   if (!button || !componentList.contains(button)) return;

//   const dropdown = button.nextElementSibling; // expects <button> followed by .dropdown
//   if (!dropdown) return;

//   // Toggle dropdown visibility
//   dropdown.classList.toggle('hidden');

//   // Update aria-expanded to the new state
//   const expanded = !dropdown.classList.contains('hidden');
//   button.setAttribute('aria-expanded', expanded);

//   // Swap caret icon (single <i class="fa-solid ...">)
//   const icon = button.querySelector('.fa-solid');
//   if (icon) {
//     if (expanded) {
//       icon.classList.remove('fa-caret-right');
//       icon.classList.add('fa-caret-down');
//     } else {
//       icon.classList.remove('fa-caret-down');
//       icon.classList.add('fa-caret-right');
//     }
//   }
// });

// // 3) Fetch Components List (dynamic content)
// async function fetchList() {
//   componentList.innerHTML = '';
//   try {
//     const res = await fetch('/components/info.json');
//     if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
//     const response = await res.json();

//     console.log(response);

//     response.forEach((item) => {
//       // support array of strings or objects like { name: "..." }
//       const label = typeof item === 'string' ? item : (item.name || JSON.stringify(item));

//       const li = document.createElement('li');
//       li.className = "bg-gray-300 mb-3 rounded-md";

//       li.innerHTML = `
//         <button type="button"
//             class="dropdown-toggle w-full text-gray-800 text-lg font-medium flex items-center justify-between px-4 py-2 cursor-pointer hover:shadow-md transition-shadow duration-300"
//             aria-expanded="false">
//           ${label}
//           <span class="ml-2"><i class="fa-solid fa-caret-right"></i></span>
//         </button>

//         <div class="dropdown w-full bg-gray-200 px-4 py-3 hidden">
//           <ul class="dropdown-list w-full list-none p-0 m-0 grid grid-cols-2 gap-2">
//             <li class="dropdown-item w-full px-2 py-2 rounded hover:bg-gray-300">
//               <a href="#" class="w-full block">Button 1</a>
//             </li>
//           </ul>
//         </div>`;

//       componentList.appendChild(li);
//     });

//   } catch (err) {
//     console.error(err);
//     componentList.innerHTML = '<li class="text-red-500 px-4 py-2">Failed to load components.</li>';
//   }
// }

// fetchList();


const componentList = document.getElementById('list');

// Render dropdowns from JSON data
function renderList(components) {
  componentList.innerHTML = '';
  components.forEach(category => {
    const li = document.createElement('li');
    li.className = "bg-gray-300 mb-3 rounded-md";

    li.innerHTML = `
      <button type="button"
        class="dropdown-toggle w-full text-gray-800 text-lg font-medium flex items-center justify-between px-4 py-2 cursor-pointer hover:shadow-md transition-shadow duration-300"
        aria-expanded="false">
        ${category.name}
        <span class="ml-2"><i class="fa-solid fa-caret-right"></i></span>
      </button>

      <div class="dropdown w-full bg-gray-200 px-4 py-3 hidden">
        <ul class="dropdown-list w-full list-none p-0 m-0 grid grid-cols-2 gap-2">
          ${category.items.map(item => `
            <li class="dropdown-item w-full px-2 py-2 rounded hover:bg-gray-300">
              <a href="/components/${category.name}/${item}" class="block">${item}</a>
            </li>`).join('')}
        </ul>
      </div>
    `;

    componentList.appendChild(li);
  });
}

// Fetch JSON data and call render
async function fetchData() {
  try {
    const res = await fetch('/components/info.json');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    console.log("Fetched Data:", data);
    renderList(data);

  } catch (err) {
    console.error("Failed to fetch data:", err);
    componentList.innerHTML = `<li class="text-red-500 px-4 py-2">⚠ Failed to load components.</li>`;
  }
}

// Dropdown toggle logic (event delegation)
componentList.addEventListener('click', (e) => {
  const button = e.target.closest('.dropdown-toggle');
  if (!button) return;

  const dropdown = button.nextElementSibling;
  if (!dropdown) return;

  dropdown.classList.toggle('hidden');
  const expanded = !dropdown.classList.contains('hidden');
  button.setAttribute('aria-expanded', expanded);

  const icon = button.querySelector('.fa-solid');
  if (icon) {
    icon.classList.toggle('fa-caret-right', !expanded);
    icon.classList.toggle('fa-caret-down', expanded);
  }
});

// 2) Optional: close open dropdowns when clicking outside the componentList
document.addEventListener('click', (e) => {
  if (componentList.contains(e.target)) return; // click was inside the list -> ignore

  componentList.querySelectorAll('.dropdown:not(.hidden)').forEach(dd => {
    dd.classList.add('hidden');
    const btn = dd.previousElementSibling;
    if (btn && btn.classList.contains('dropdown-toggle')) {
      btn.setAttribute('aria-expanded', false);
      const icon = btn.querySelector('.fa-solid');
      if (icon) {
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-right');
      }
    }
  });
});


// Call fetch
fetchData();

