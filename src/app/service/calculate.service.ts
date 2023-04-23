import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AuthService } from './auth.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  userId!: string | any

  constructor (
    private firestore: AngularFirestore,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  createInitialExpenseEntry (
    userId: string | undefined,
    date: string,
    amount: any
  ) {
    this.firestore
      .collection('expenses')
      .doc(userId)
      .set({
        date: date,
        amount: amount
      })
      .catch(err => {
        console.log('error creating data')
      })
  }

  getCurrentDate () {
    let date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  async getExpensesData (userId: string | undefined) {
    const userUuid = userId
    const expensesRef = this.firestore.collection('expenses').doc(userUuid)

    try {
      const expensesDoc = await expensesRef.get().toPromise()

      if (expensesDoc.exists) {
        const expensesData: any = expensesDoc.data()
        const date = expensesData.date
        const expenses = expensesData.amount

        return { date, expenses }
      } else {
        console.log('No expenses data found')
        return null
      }
    } catch (error) {
      console.error('Error fetching expenses data:', error)
      return null
    }
  }

  async isExpenseEntryExists(userId:string | undefined): Promise<boolean> {
    const userUuid = userId;
    const expensesRef = this.firestore.collection('expenses').doc(userUuid);
  
    try {
      const expensesDoc = await expensesRef.get().toPromise();
  
      if (expensesDoc.exists) {
        console.log('Insisdf')
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error checking if expense entry exists:', error);
      return false;
    }
  }

}
