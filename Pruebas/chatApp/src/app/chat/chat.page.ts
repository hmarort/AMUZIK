import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false
})
export class ChatPage implements OnInit, OnDestroy {
  messages: string[] = [];
  message: string = '';
  private socketSubscription: any;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.socketSubscription = this.websocketService.connect('ws://localhost:8080').subscribe(
      (message: string) => {
        this.messages.push(message);
      },
      (error) => {
        console.error('WebSocket error:', error);
      },
      () => {
        console.log('WebSocket connection closed');
      }
    );
  }

  ngOnDestroy() {
    this.socketSubscription.unsubscribe();
    this.websocketService.close();
  }

  sendMessage() {
    if (this.message) {
      this.websocketService.send(this.message);
      this.message = '';
    }
  }
}