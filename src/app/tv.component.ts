import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErpService } from '../erp.service';
import { Orderstable } from '../orderstable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  constructor(private route: ActivatedRoute, private erpService: ErpService) {}

  erporders!: Orderstable;
  docid!: string;
  orderdataSubscription?: Subscription;
  isloaded: boolean = false;
  interval: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.docid = params['storeid'];
      this.getData();
    });
    this.interval = setInterval(() => {
      this.getData();
    }, 30000);
  }

  getData() {
    this.orderdataSubscription = this.erpService
      .localData(this.docid)
      .subscribe((data) => {
        this.erporders = data;
        this.isloaded = true;
      });
  }
}
