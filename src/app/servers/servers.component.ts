import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
    // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName =''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = `Server ${this.serverName} was created`
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
