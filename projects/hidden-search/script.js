const search = document.getElementById('search');
const searchBtn = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

const handleSearch = () => {
  alert(`Searching for ${searchInput.value}`);
  searchInput.blur();
  search.classList.remove('active');
};

searchInput.addEventListener('blur', (e) => {
  if (!searchBtn.contains(e.relatedTarget)) {
    search.classList.remove('active');
  }
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

searchBtn.addEventListener('click', () => {
  if (search.classList.contains('active')) {
    handleSearch();
  } else {
    search.classList.add('active');
    searchInput.focus();
  }
});
