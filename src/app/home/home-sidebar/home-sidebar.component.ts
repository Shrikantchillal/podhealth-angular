import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css']
})
export class HomeSidebarComponent implements OnInit {
  dcs;
  pods;
  customers;

  constructor( private restAPi: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.getPods();
    this.getDcs();
    this.getCustomers();
    this.custlink();
  }

  getPods() {
    return this.restAPi.podsApi().subscribe((data) => {
      console.log('pods', data);
      data.sort(function(a, b) {
          return a.pod_id - b.pod_id;
      });
      this.pods = data;
    })
  };

  getDcs() {
    return this.restAPi.dcsApi().subscribe((data) => {
      console.log('dcs', data)
      this.dcs = data;
    })
  };

  getCustomers() {
    return this.restAPi.customerApi().subscribe((data) => {
      console.log('customers', data);
      data.sort((a,b) => {
        return a.cust_view_id - b .cust_view_id
      })
      this.customers = data;
    })
  };

  podlink(podClicked: number) {
    return this.router.navigate(['/pod', podClicked]);
  }

  custlink() {

  }



}
