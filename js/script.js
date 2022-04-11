function showItem(){
    document.querySelector("#headerLinks").classList.toggle("active");
}
document.querySelector(".btn-hem").addEventListener("click", showItem);

// search heading start
function searchItem(){
    document.querySelector(".search-any").classList.toggle("active");
}
document.querySelector(".header-search-heading").addEventListener("click", searchItem);
// search heading end 
// books item start
function booksItems(){
    document.querySelector(".books-items").classList.toggle("active");
}
document.querySelector(".header-books").addEventListener("click", booksItems);
// books item end
$(document).ready(function(){
    // scrollTop start
    $(".btnScrollTop").click(function(){
        $("html").scrollTop(0);
    });
    // scrollTop end
});