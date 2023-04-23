import { Component, OnInit } from '@angular/core'
import { CalculateService } from 'src/app/service/calculate.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId!: string | undefined
  currentDate!: string
  amount!: number
  response: any;

  constructor (
    private afAuth: AngularFireAuth,
    private calculateService: CalculateService
  ) {}

  ngOnInit (): void {
    this.afAuth.user.subscribe(res => {
      this.userId = res?.uid
      //this.calculateService.createInitialExpenseEntry(this.userId,this.calculateService.getCurrentDate(),100);
      this.calculateService.getExpensesData(this.userId).then(res => {
        this.response = res;
      })
      this.calculateService
        .isExpenseEntryExists(this.userId)
        .then(res => console.log(res))
    })
    console.log(this.calculateService.getCurrentDate())
  }

  create () {
    console.log(this.amount);
    this.afAuth.user.subscribe(res => {
      this.userId = res?.uid;
      this.calculateService.createInitialExpenseEntry(this.userId,this.calculateService.getCurrentDate(),this.amount);
    })
    
  }
}
