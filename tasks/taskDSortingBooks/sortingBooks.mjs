import test from "../../tools/test.mjs";
const tests = test("Sorting Books Test");
const filepath = 'C:/Users/david/Documents/School Work/Year 2.2/Programming 2/Exam2/moduleSkillSummaryAssignment/example_files/books.json';
const stringRead = 'utf8';
import fs from 'fs';

function startWithThe() {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchStartWithThe = books
        .filter(book => book.title && book.title.toLowerCase().startsWith("the"))
        .map(book => book.title)

        console.log('Books starting with "The":', searchStartWithThe);
    });
}

function authorsWithT() {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchAuthorsWithT = books
        .filter(book => book.author && book.author.toLowerCase().includes("t"))
        .map(book => book.title)

        console.log('Books by authors with names containing "t":', searchAuthorsWithT);
    });
}

function booksAfter1992() {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchBooksAfter1992 = books
        .filter(book => book.publication_year > 1992)
        .map(book => book.title)

        console.log('Books publicized after 1992:', searchBooksAfter1992);
    });
}

function booksBefore2004() {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchBooksBefore2004 = books
        .filter(book => book.publication_year < 2004)
        .map(book => book.title)

        console.log('Books publicized before 2004:', searchBooksBefore2004);
    });
}

function isbnByAuthor(nameOfAuthor) {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchIsbnByAuthor = books
        .filter(book => book.author && book.author.toLowerCase() === nameOfAuthor.toLowerCase())
        .map(book => book.isbn);

        console.log('ISBNs of books by ' + nameOfAuthor + ': ', searchIsbnByAuthor);
    });
}

function alphabetizeBooks(order = 'ascending') {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchAlphabetizeBooks = books.sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();

            if (order.toLowerCase() === 'ascending') {
                return titleA.localeCompare(titleB);
            } else if (order.toLowerCase() === 'descending') {
                return titleB.localeCompare(titleA);
            }
        });

        console.log('Books sorted alphabetically in ', order.toLowerCase() + ' order:');
        searchAlphabetizeBooks.forEach(book => console.log(book.title));
    });
}

function chronologizeBooks(order = 'ascending') {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchChronologizeBooks = books.sort((a, b) => {
            const yearA = a.publication_year;
            const yearB = b.publication_year;

            if (order.toLowerCase() === 'ascending') {
                return yearA - yearB;
            } else if (order.toLowerCase() === 'descending') {
                return yearB - yearA;
            }
        });

        console.log('Books sorted chronologically in', order.toLowerCase() + ' order:');
        searchChronologizeBooks.forEach(book => console.log(book.title));
    });
}

function groupByAuthorFirstName() {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchGroupByAuthorFirstName = books

    });
}

function groupByAuthorLastName() {
    fs.readFile(filepath, stringRead, (error, content) => {
        if (error) {
            console.log('Error trying to read:', error);
            return;
        }

        const books = JSON.parse(content)

        const searchGroupByAuthorLastName = books

    });
}

startWithThe();
authorsWithT();
booksAfter1992();
booksBefore2004();
isbnByAuthor('Terry Pratchett');
alphabetizeBooks('ascending');
chronologizeBooks('ascending')