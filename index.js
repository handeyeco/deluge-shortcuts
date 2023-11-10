let search = "";
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (event) => {
  search = event.target.value;
  render();
});

const SHORTCUT_PAGE = "SHORTCUT_PAGE";
const SYNTAX_PAGE = "SYNTAX_PAGE";
let currentPage = SHORTCUT_PAGE;
const shortcutButton = document.getElementById("shortcut-page");
const syntaxButton = document.getElementById("syntax-page");

function reset() {
  search = "";
  searchInput.value = "";
}

shortcutButton.addEventListener("click", (event) => {
  if (currentPage === SHORTCUT_PAGE) return;

  reset();
  currentPage = SHORTCUT_PAGE;
  shortcutButton.classList.add("active");
  syntaxButton.classList.remove("active");
  render();
});

syntaxButton.addEventListener("click", (event) => {
  if (currentPage === SYNTAX_PAGE) return;

  reset();
  currentPage = SYNTAX_PAGE;
  syntaxButton.classList.add("active");
  shortcutButton.classList.remove("active");
  render();
});

function render() {
  if (currentPage === SYNTAX_PAGE) {
    renderSyntax();
  } else if (currentPage === SHORTCUT_PAGE) {
    renderShortcuts();
  }
}

render();
