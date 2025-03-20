import { Component } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  musicResults: any[] = [];
  searchQuery = '';
  player: any;
  currentVideoId: string = '';

  constructor(private youtubeService: YoutubeService) {}

  search() {
    this.youtubeService.searchMusic(this.searchQuery).subscribe((data: any) => {
      this.musicResults = data.items;
    });
  }

  playAudio(videoId: string) {
    this.currentVideoId = videoId;
    if (!this.player) {
      this.player = new (window as any).YT.Player('youtube-player', {
        height: '0', // Ocultamos el video
        width: '0',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          rel: 0
        }
      });
    } else {
      this.player.loadVideoById(videoId);
    }
  }

  pauseAudio() {
    if (this.player) {
      this.player.pauseVideo();
    }
  }

}