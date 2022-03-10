# MUSE

https://muse-rohan.herokuapp.com/

## Features
   - Randomly Browse/Search over 7000 works of art from 500 artists.
   - Created using mass data from Chicago Institute of Art

## How It Works

### Processing Data
I processed and used mass JSON data from the Chicago Institute of Art's GitHub page to create my own database of selected artists and a         limited amount of their works. Originally the project was supposed to hold over 100,000 works of art but I decided aganist that when I saw       that the free Heroku database has a 10,000 row limit. 

The data is initally bucketed into an object that holds *key/value* pairs where the *key* is the artist name and the *value* is an array of their artworks. 

That object is then converted to an array, sorted by number of artworks, then sliced to grab the top 500 artists.

That array is then iterated over and each artist is placed in the database with a maximum of 15 works of art. This ensures that we don't cross the row limit for the free Heroku database.

There exists 2 tables in the database, *artists* and *artworks*, where each artwork has a foreign key corresponding to an artist.

### Using Data
Using the database I created a simple API that allows for the following...

``` javascript
app.use('/api', getArtists);
app.use('/api', randomArtists);
app.use('/api', searchByID);
app.use('/api', searchByImageID);
```

*getArtists* allows for getting the entire list of artist names so they can be displayed in the search feature.
The others are exactly as their names describe

There are also 2 featured artists that are hard coded

