function solve() {
   let searchText = document.getElementById("searchText").value;
   let townsUl = document.querySelectorAll("ul li");

   let matches = 0;

   for (let town of townsUl) {
      if (town.textContent.includes(searchText)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         town.style.color = "black";
         matches++;
      }
   }

   let resultOutput = document.getElementById("result");
   resultOutput.textContent = `${matches} matches found`

}