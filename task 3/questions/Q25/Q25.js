var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for (i = 0; i <library.length; i++) {
    if (library[i].readingStatus) {
        console.log(`Already read ${library[i].title} by ${library[i].author}`);
    } else {
        console.log(`You still need to read ${library[i].title} by ${library.auhor}`)

    }

}