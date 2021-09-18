import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService, private db: AngularFirestore) {
    // const things = db.collection('users').valueChanges();
    // things.subscribe(console.log);
  }

  ngOnInit(): void { }
}
