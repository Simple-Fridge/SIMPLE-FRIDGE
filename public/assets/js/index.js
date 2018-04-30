// food name will reture nutrients 
// get the food name
// send request to server
// display the results
function displaySearchResult(search) {
    window.location.replace("?=" + food +"");
}

$('#submit').on('click', function (){
    // get text from thesearch box

    var searchText = $('#searchText').text().trim();

    displaySearchResult(searchText);
})