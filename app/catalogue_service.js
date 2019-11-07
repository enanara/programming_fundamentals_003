// eslint-disable-next-line no-unused-vars
const catalogue = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    quantity: 10
  }, 
  {
    title: "Dracula",
    author: "Bram Stoker",
    quantity: 0
  }, {
    title: "Between the Assassinations",
    author: "Aravind Adiga",
    quantity: 9
  }, {
    title: "Wolf Hal",
    author: "Hilary Mantel",
    quantity: 33
  }, {
    title: "Bring Up The Bodies",
    author: "Hilary Mantel",
    quantity: 31
  }, {
    title: "A Place of Greater Safety",
    author: "Hilary Mantel",
    quantity: 11
  }, {
    title: "Giving Up the Ghost",
    author: "Hilary Mantel",
    quantity: 8
  }, {
    title: "The Assassination of Margaret Thatcher",
    author: "Hilary Mantel",
    quantity: 43
  }, {
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    quantity: 12
  }, {
    title: "Conversations With Friends",
    author: "Sally Rooney",
    quantity: 1
  }, {
    title: "Normal People",
    author: "Sally Rooney",
    quantity: 2
  }, {
    title: "Everything I Never Told You",
    author: "Celeste Ng",
    quantity: 6
  }, {
    title: "2666",
    author: "Robert Bolaño",
    quantity: 17
  }, {
    title: "By Night In Chile",
    author: "Robert Bolaño",
    quantity: 8
  }, {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    quantity: 3
  }, {
    title: "Oliver Twist",
    author: "Charles Dickens",
    quantity: 7
  }, {
    title: "Great Expectations",
    author: "Charles Dickens",
    quantity: 1
  }, {
    title: "The Blind Assassin",
    author: "Margaret Atwood",
    quantity: 8
  }, {
    title: "Why Be Happy When You Could Be Normal?",
    author: "Jeanette Winterson",
    quantity: 19
  }, {
    title: "The Origin of Species",
    author: "Charles Darwin",
    quantity: 50
  }, {
    title: "True",
    author: "Ena",
    quantity: 1
  }
];

function countBooksByAuthor(author) {
  var numberOfBooks=0;
  for ( let i=0; i<catalogue.length;i++){
    if (((catalogue[i].author).toUpperCase()).includes(author.toUpperCase())){
      numberOfBooks ++;
    }
  } return numberOfBooks;
}

function checkBookByTitle(title) {
  for ( let i=0; i<catalogue.length;i++){
    var nameOfbook = (catalogue[i].title).toLowerCase();
    var givenTitle = (title.toString()).toLowerCase();
    if (nameOfbook===givenTitle) {
      return true;
    } 
    }
  return false;
}

function countBooksByFirstLetter(letter) {
  var numOfBooks = 0
  var givenLetter = (letter.toString()).toLowerCase();
  for ( let i=0; i<catalogue.length;i++){
    var firstLetter = ((catalogue[i].title)[0]).toLowerCase();
    if (firstLetter===givenLetter) {
      numOfBooks ++;
    } 
  }
  return numOfBooks;
}

function getQuantity(title) {
  for ( let i=0; i<catalogue.length;i++){
    var nameOfbook = (catalogue[i].title).toLowerCase();
    var givenTitle = (title.toString()).toLowerCase();
    if (nameOfbook===givenTitle) {
      return catalogue[i].quantity ;
    } 
  }
  return 0;
}

function getBooksByAuthor(author) {
    var list = [];
    for ( let book of catalogue){
      var authorName = ((book.author).toLowerCase()).replace("ñ","n");
      var givenAuthor = (author.toLowerCase()).replace("ñ","n");
        if (authorName.includes(givenAuthor)){
          list.push(book);
        } 
    }
    if (list.length > 0){
      return list;
    } else {
      return "Sorry, no author found";
  }
}

function checkQuantity(title, quantity) {
  for ( let i=0; i<catalogue.length;i++){
    var nameOfbook = (catalogue[i].title).toLowerCase();
    var givenTitle = (title.toString()).toLowerCase();
    if ((nameOfbook===givenTitle)&&(catalogue[i].quantity>=quantity)) {
       return true;
    } 
  }
  return false;
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
}