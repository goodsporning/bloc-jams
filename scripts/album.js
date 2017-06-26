

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

      if(currentlyPlayingSongNumber !== null){
        var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
		    currentlyPlayingCell.html(currentlyPlayingSongNumber);
	}
	     if (currentlyPlayingSongNumber !== songNumber) {
		        // Switch from Play -> Pause button to indicate new song is playing.
		    $(this).html(pauseButtonTemplate);
		      currentlyPlayingSongNumber = songNumber;
	     } else if (currentlyPlayingSongNumber === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		    $(this).html(playButtonTemplate);
		      currentlyPlayingSongNunber = null;
	}
};
      }
    }
    var onHover = function(event){
      var songNumberCell = $(this).find('.song-item-number');
      var songNumber = songNumberCell.att('data-song-number');

      if(songNumber !== currentlyPlayingSongNumber){
        songNumberCell.html(playButtonTemplate);
      }
    };

    var offHover = function(event){
      var songNumberCell = $(this).find('.song-item-number');
      var songNumber = songNumberCell.att('data-song-number');

      if(songNumber !== currentlyPlayingSongNumber){
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
       currentAlbum = album;
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

   var currentAlbum = null;
   var currentlyPlayingSongNumber = null;
   var currentSongFromAlbum = null;

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
