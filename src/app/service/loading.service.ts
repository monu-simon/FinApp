import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingStatus= new BehaviorSubject<boolean>(false);

  constructor() { }

  showLoading() {
    this.loadingStatus.next(true)
  }

  stopLoading() {
    this.loadingStatus.next(false)
  }
}
