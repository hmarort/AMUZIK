import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket!: WebSocket;
  private observer?: Observer<any>;

  constructor() {}

  public connect(url: string): Observable<any> {
    this.socket = new WebSocket(url);

    return new Observable((observer) => {
      this.observer = observer;

      this.socket.onmessage = (event) => {
        // Si el mensaje es un Blob, lo convertimos a texto
        if (event.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => {
            observer.next(reader.result as string);
          };
          reader.readAsText(event.data);
        } else {
          // Si el mensaje ya es texto, lo enviamos directamente
          observer.next(event.data);
        }
      };

      this.socket.onerror = (event) => {
        observer.error(event);
      };

      this.socket.onclose = () => {
        observer.complete();
      };
    });
  }

  public send(message: string): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    }
  }

  public close(): void {
    this.socket.close();
  }
}