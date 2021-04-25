import { Component,OnInit } from '@angular/core';
import { HelloWorldService } from 'common/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '';
  private service:HelloWorldService;

  constructor(param_service:HelloWorldService){
    this.service = param_service;
  }

  public ngOnInit():void{
    this.service.getHelloworld().subscribe(
      (param_msg:string)=>{
        this.title = param_msg;
      }
    );
  }
}
