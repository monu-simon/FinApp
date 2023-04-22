import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<any>
  constructor (public afAuth: AngularFireAuth) {this.user$ = this.afAuth.user}
  name!:string;
  ngOnInit (): void {
    this.user$.subscribe(res => {
      console.log(res)
    })
  }
}
