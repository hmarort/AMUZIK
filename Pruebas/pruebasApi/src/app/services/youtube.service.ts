import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyAZhWueVvYibl8KM8M43fiR8GW4gF8uG1I'; // Reemplaza con tu clave de API
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) { }

  searchMusic(query: string) {
    const params = {
      key: this.apiKey,
      q: `${query} music`,  // Agregamos "music" para mejorar resultados
      part: 'snippet',
      type: 'video',
      videoCategoryId: '10', // Categoría de música en YouTube
      maxResults: '10'
    };
    return this.http.get(this.apiUrl, { params });
  }

}