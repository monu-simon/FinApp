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
  utilityType!:string;
  response: any

  constructor (
    private afAuth: AngularFireAuth,
    private calculateService: CalculateService
  ) {}

  ngOnInit (): void {
    this.afAuth.user.subscribe(res => {
      this.userId = res?.uid
      //this.calculateService.createInitialExpenseEntry(this.userId,this.calculateService.getCurrentDate(),100);
      this.calculateService.getExpensesData(this.userId).then(res => {
        this.response = res
      })
    })
  }

  create () {
    this.calculateService.isExpenseEntryExists(this.userId).then(res => {
      if (res) {
        this.calculateService.update(
          this.userId,
          this.amount,
          this.calculateService.getCurrentDate(),
          this.utilityType
        )
      } else {
        this.afAuth.user.subscribe(res => {
          this.userId = res?.uid
          this.calculateService.createInitialExpenseEntry(
            this.userId,
            this.calculateService.getCurrentDate(),
            this.amount,
            this.utilityType
          )
        })
      }
    })
  }
}
