import { Component, OnInit } from '@angular/core'
import { CalculateService } from 'src/app/service/calculate.service'
import { LoadingService } from 'src/app/service/loading.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'

interface Transaction {
  utility: string
  amount: number
}

interface ReducedData {
  [date: string]: any[]
}

interface Transactions {
  [date: string]: Transaction[]
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor (
    private calculate: CalculateService,
    private loading: LoadingService,
    private afAuth: AngularFireAuth
  ) {}
  userId!: string | undefined
  expenses: any
  //custom: any = {}
  custom: ReducedData = {}
  ngOnInit (): void {
    this.afAuth.user.subscribe(res => {
      this.userId = res?.uid
      //this.calculateService.createInitialExpenseEntry(this.userId,this.calculateService.getCurrentDate(),100);
      this.loading.showLoading()
      this.calculate.getExpensesData(this.userId).then(res => {
        this.expenses = res?.expensesData.expenses
        console.log(this.expenses)
        this.loading.stopLoading()

        for (const item of this.expenses) {
          const date = item.date
          const amount = item.amount
          if (date in this.custom) {
            this.custom[date].push(...amount)
          } else {
            this.custom[date] = amount
          }
        }
      })
    })
  }
}
