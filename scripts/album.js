//example album
var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14'},
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

// My Album
var albumSporn = {
  title: 'The Sporns',
  artist: 'James Bond',
  label: 'Dudism',
  year: '1991',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
      { title: 'Dude', duration: '4:26' },
      { title: 'Where', duration: '3:14' },
      { title: 'is', duration: '5:01' },
      { title: 'My', duration: '3:21'},
      { title: 'Car', duration: '2:15'}
  ]
};

//function to generate the song row content
var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    var $row = $(template);

    var clickHandler = function(){
      var songNumber = $(this).attr('data-song-number');

      if(currentlyPlayingSong !== null){
        var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
		currentlyPlayingCell.html(currentlyPlayingSong);
	}
	     if (currentlyPlayingSong !== songNumber) {
		        // Switch from Play -> Pause button to indicate new song is playing.
		    $(this).html(pauseButtonTemplate);
		      currentlyPlayingSong = songNumber;
	     } else if (currentlyPlayingSong === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		    $(this).html(playButtonTemplate);
		      currentlyPlayingSong = null;
	}
};
      }
    }
    var onHover = function(event){
      var songNumberCell = $(this).find('.song-item-number');
      var songNumber = songNumberCell.att('data-song-number');

      if(songNumber !== currentlyPlayingSong){
        songNumberCell.html(playButtonTemplate);
      }
    };

    var offHover = function(event){
      var songNumberCell = $(this).find('.song-item-number');
      var songNumber = songNumberCell.att('data-song-number');

      if(songNumber !== currentlyPlayingSong){
        songNumberCell.html(songNumber);
      }
    };

    $row.find('.song-item.number').clock(clickHandler);

    $row.hover(onHover,offHover);

    return $row;
};

    var $albumTitle = $('.album.view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfor = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');


var setCurrentAlbum = function(album) {
     // #1
       $albumTitle = $('.album-view-title');
       $albumArtist = $('.album-view-artist');
       $albumReleaseInfo = $('.album-view-release-info');
       $albumImage = $('.album-cover-art');
       $albumSongList = $('.album-view-song-list');

     // #2
      $albumTitle.text(album.title);
      $albumArtist.text(album.artist);
      $albumReleaseInfo.text(album.year + ' ' + album.label);
      $albumImage.attr('src', album.albumArtUrl);


     // #3
     $albumSongList.empty();

     // #4
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i+1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };

   var songRows = document.getElementsByClassName('album-view-song-item');
   // album button template
   var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
   var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

   // Store state of playing songs
   var currentlyPlayingSong = null;


$(document).ready(function(){
  setCurrentAlbum(albumPicasso);
});

     var albums = [albumPicasso, albumMarconi, albumSporn];
     var index = 1;

     albumImage.addEventListener("click", function(event){
         setCurrentAlbum(albums[index]);
         index++;
         if(index == albums.length){
           index=0;
         }
     });
