import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todaysDate: Object = new Date().toLocaleString().replace('at ', '');
  pods;
  selectedPod: string;

  constructor(private restApi: ApiServiceService, private router: Router) {
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1);
   }

  ngOnInit() {
    this.getPods();
    this.selectedPod = this.router.url.split('/').splice(-1)[0];
    console.log('selected Pod ', this.selectedPod);
  }


  getPods() {
    return this.restApi.podsApi().subscribe((data) => {
      console.log('pods', data);
      data.sort(function(a, b) {
          return a.pod_id - b.pod_id;
      });
      this.pods = data;
    });
  };

  podLink(selectedPod) {
    this.router.navigate(['/pod/'+this.selectedPod]);
  }


}
