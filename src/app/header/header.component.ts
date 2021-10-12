import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: any;

  mute: boolean = true;

  constructor(public auth: AuthService, private db: AngularFirestore) {
    // const things = db.collection('users').valueChanges();
    // things.subscribe(console.log);
  }

  ngOnInit(): void {  }

  onClick() {
    this.mute = !this.mute;

    if (this.mute) {
      console.log('mute')
      this.audioPlayerRef.nativeElement.pause();
    } else {
      console.log('play')
      this.audioPlayerRef.nativeElement.play();
    }
  }
}
