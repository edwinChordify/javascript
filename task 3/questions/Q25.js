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

library.map(i=>{
    if (i.readingStatus) {
        console.log(`Already read '${i.title}' by ${i.author}.`);
    } else {
        console.log(`You still need to read '${i.title}' by ${i.author}.`);
    }
})
