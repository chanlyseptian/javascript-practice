// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value != '') {
    records[id][prop] = value;
  } else if (prop == 'tracks' && !records.hasOwnProperty(prop)) {
    records[id][prop] = value; 
  }
  return records;
}

console.info(updateRecords(recordCollection, 5439, 'artist', 'ABBA')); 
console.info(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.info(updateRecords(recordCollection, 2548, "artist", ""));
console.info(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
console.info(updateRecords(recordCollection, 2468, "tracks", "Free"));