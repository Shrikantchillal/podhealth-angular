import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-pod-page',
  templateUrl: './pod-page.component.html',
  styleUrls: ['./pod-page.component.css']
})
export class PodPageComponent implements OnInit {

  myPods;

  constructor(private restApi: ApiServiceService) { 

  }

  ngOnInit() {
    this.getGomez();
    this.getPingdom();
    this.getCriticalDb();
    this.getInternal();
    this.getInternal();
    this.getStorage();
  }

  onNavigate(feature: string) {
    this.myPods = feature;
    console.log('feature from app component - ', feature)
  }

  getGomez() {
    return this.restApi.gomezApi().subscribe((data) => {
      console.log('gomez', data);
    });
  };

  getPingdom() {
    return this.restApi.pingdomApi().subscribe((data) => {
      console.log('pingdom', data)
    });
  };

  getCriticalDb() {
    return this.restApi.criticalDbApi().subscribe((data) => {
      console.log('critical Db', data)
    });
  };

  getInternal() {
    return this.restApi.internalDnsApi().subscribe((data) => {
      console.log('internal', data);
    });
  };
  
  getStorage() {
    return this.restApi.storageApi().subscribe((data) => {
      console.log('storage', data);
    });
  };

  getAuthserver() {
    return this.restApi.authserverApi().subscribe((data) => {
      console.log('authe server', data)
    })
  }



}
