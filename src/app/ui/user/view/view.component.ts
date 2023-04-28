import { Component, OnInit } from '@angular/core'
import { CalculateService } from 'src/app/service/calculate.service'
import { LoadingService } from 'src/app/service/loading.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'

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

  ngOnInit (): void {
    this.afAuth.user.subscribe(res => {
      this.userId = res?.uid
      //this.calculateService.createInitialExpenseEntry(this.userId,this.calculateService.getCurrentDate(),100);
      this.loading.showLoading()
      this.calculate.getExpensesData(this.userId).then(res => {
        this.expenses = res?.expensesData.expenses
        this.loading.stopLoading()
      })
    })
  }
}
