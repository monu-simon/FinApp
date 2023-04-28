import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  status:boolean = false;
  constructor(
    public loading:LoadingService
  ) { }

  showLoadingScreen = false;

  ngOnInit() {

    this.loading.loadingStatus.subscribe(res => {
      this.status = res
    })
    
  }

}
