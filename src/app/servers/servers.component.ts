import { Component, OnInit } from "@angular/core";

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  usernameCreationStatus = "";
  serverName = "";
  username = "";
  serverCreated = false;
  servers = ["Testserver", "Testserver 2"];
  displayDetails = false;
  displayDetailsButtonClicksCounter = 0;
  displayDetailsButtonClicksArray = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server ${this.serverName} was created`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onSetUsername() {
    this.usernameCreationStatus = `${this.username} created`;
    this.username = "";
  }

  onToggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.displayDetailsButtonClicksCounter += 1;
    this.displayDetailsButtonClicksArray.push(
      this.displayDetailsButtonClicksCounter
    );
  }
}
