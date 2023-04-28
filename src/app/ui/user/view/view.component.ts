import { Component, OnInit } from '@angular/core'
import { CalculateService } from 'src/app/service/calculate.service'
import { LoadingService } from 'src/app/service/loading.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'

interface Transaction {
  utility: string;
  amount: number;
}

interface Transactions {
  [date: string]: Transaction[];
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
  custom: any = {};
  ngOnInit (): void {
    this.afAuth.user.subscribe(res => {
      this.userId = res?.uid
      //this.calculateService.createInitialExpenseEntry(this.userId,this.calculateService.getCurrentDate(),100);
      this.loading.showLoading()
      this.calculate.getExpensesData(this.userId).then(res => {
        this.expenses = res?.expensesData.expenses
        this.loading.stopLoading()
        this.expenses.forEach((expense:any) => {
          if(Object.keys(this.custom).includes(expense.date)) {
            console.log(typeof(expense.date))
            console.log((expense.amount[0]))
            //this.custom[expense.date].push(JSON.parse(expense.amount[0]))
          }else {
            this.custom[expense.date] = Array.from([1,2]);
            //this.custom[expense.date].push(JSON.parse(expense.amount[0]))
          }
        });
        console.log(this.custom)
        console.log(Object.entries(this.custom))
      })
    })
  }
}
