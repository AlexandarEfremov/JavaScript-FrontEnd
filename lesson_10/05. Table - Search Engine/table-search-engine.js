function solve() {
   let allRows = document.querySelectorAll('tbody tr');
   let searchText = document.getElementById('searchField').value;

   for (let row of allRows) {
      if (row.textContent.includes(searchText) & searchText != '') {
         row.style.backgroundColor = "yellow";
         row.className = 'select';
      }
   }
}