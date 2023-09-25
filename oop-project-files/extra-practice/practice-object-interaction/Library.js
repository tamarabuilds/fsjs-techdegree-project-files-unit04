class Library {
    constructor(){
        this.books = [];
        this.patrons = [];
        this.dailyFine = 0.1;
    }
    addBook(book) {
        this.books.push(book);
    }
    addPatron(patron) {
        this.patrons.push(patron);
    }
    chargeFines(){
        const now = new Date();
        // console.log(now)
        // console.log(this.books[0].dueDate)
        // console.log(this.books[0].dueDate < now)
        // console.log(this.patrons)
        const latePatrons = this.patrons.filter( patron => {
            return (patron.currentBook !== null && patron.currentBook.dueDate < now)

        }
            // console.log(`in late patrons`)
        )
        // console.log(latePatrons)
        for (let patron of latePatrons){
            const daysLate = Math.floor( (now.getTime() - patron.currentBook.dueDate.getTime()) / (1000 * 60 * 60 * 24 ));
            console.log(daysLate)
            patron.balance += daysLate * this.dailyFine;
        }
    }
}
