const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
    test("returs 0 of the bookByAuthor is not found", () => {
      expect(catalogueService.countBooksByAuthor("blabla")).toBe(0);
    });
  });
  describe("catalogueService.checkBookByTitle", () => {
    test("returns boolean if book exist in catalogue", () => {
      expect(catalogueService.checkBookByTitle("The Origin of Species")).toBe(true);
      expect(catalogueService.checkBookByTitle("The Chronicles of Narnia")).toBe(false);
      expect(catalogueService.checkBookByTitle("2666")).toBe(true);
      expect(catalogueService.checkBookByTitle(2666)).toBe(true);
      expect(catalogueService.checkBookByTitle(true)).toBe(true);
    });
  });
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns a number of book that started with given letter or number", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("2")).toBe(1);
      expect(catalogueService.countBooksByFirstLetter(2)).toBe(1);
    });
  });
  describe("catalogueService.getQuantity", () => {
    test("returns a number of quantity of that title", () => {
      expect(catalogueService.getQuantity("The Origin of Species")).toBe(50);
      expect(catalogueService.getQuantity("The Chronicles of Narnia")).toBe(0);
      expect(catalogueService.getQuantity("2666")).toBe(17);
      expect(catalogueService.getQuantity(2666)).toBe(17);
      expect(catalogueService.getQuantity(true)).toBe(1);
    });
  });
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns a array of book objects by author", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual(
        [
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]
      );
      expect(catalogueService.getBooksByAuthor("Robert Bolano")).toEqual(
        [
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]
      );
      expect(catalogueService.getBooksByAuthor("robert")).toEqual(
        [
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]
      );
      expect(catalogueService.getBooksByAuthor("sal")).toEqual(
        [
          { title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10 },
          { title: "Conversations With Friends", author: "Sally Rooney", quantity: 1 },
          { title: "Normal People", author: "Sally Rooney", quantity: 2 }
        ]
      );
      expect(catalogueService.getBooksByAuthor("blabla")).toEqual("Sorry, no author found");
    });
  });
  describe("catalogueService.checkQuantity", () => {
    test("returns boolean if enough book exist in catalogue", () => {
      expect(catalogueService.checkQuantity("The Origin of Species",20)).toBe(true);
      expect(catalogueService.checkQuantity("The Origin of Species",200)).toBe(false);
      expect(catalogueService.checkQuantity("The Chronicles of Narnia",2)).toBe(false);
      expect(catalogueService.checkQuantity("2666",2)).toBe(true);
      expect(catalogueService.checkQuantity(2666,2)).toBe(true);
      expect(catalogueService.checkQuantity(true,1)).toBe(true);
    });
  });
});