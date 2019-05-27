const axios = require('axios');
const express = require('express');
const app = express();
const port = 4000

/*const books = {
    '1984' : 'George Orwell',
    'The Hobbit' : 'J. R. R. Tolkien',
    'Pride and Prejudice' : 'Jane Austen',
    'To Kill a Mockingbird' : 'Harper Lee',
    'The Da Vinci Code' : 'Dan Brown',
    'The Catcher in the Rye' : 'J. D. Salinger',
    'The Great Gatsby' : 'F. Scott Fitzgerald',
    'Twilight' : 'Stephenie Meyer',
    'The Hunger Games' : 'Suzanne Collins',
    'Brave New World' : 'Aldous Huxley',

}*/


app.get('/', function(req, res, next) {
    res.send('API is working');
});

app.get('/:title', function(req, res, next) {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + req.params.title)
    .then(response =>{
        const data = response.data;
        const books = [];
        var ret = '';
        if(data.items[0].volumeInfo.title == req.params.title){
            ret = data.items[0].volumeInfo.authors[0];
        }
        else{
            ret = "No results";
        }
        res.send(ret);
    }).catch(err => console.log(err));

    /*
    const ans = books[req.params.title];
    res.send(ans);
    */
});



app.get('/getGeocode:address', (req,res)=>{
    //access google api with req.params.address
    //axios.get(google api url).then(
      //  res.send(response from google)
    //)
})
app.listen(port, () => console.log('Listening on port ' + port));

module.exports = app;