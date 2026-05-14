const navlink = document.getElementById("navlink");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById('harmbuger')

openBtn.addEventListener("click", async () => {
    menu.classList.add('show');
    navlink.classList.add('hidden');
})

closeBtn.addEventListener("click", () => {
  navlink.classList.remove("hidden");
  menu.classList.remove('show')
})