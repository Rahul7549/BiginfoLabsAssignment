import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from "./share/service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment';
  parentData:String="Data from pairents Components";

  public Answer: String="";
  public AnsStatus:String="";
  public reciveMessageFromChild:String='';

  constructor(public srv:ServiceService,private router: Router){}

  ngOnInit(): void {

  }


  East()
  {
    console.log("East");
    this.Answer='East';
    this.AnsStatus="East ,That's right"
  }

  reciveMessage($event: String)
  {
    this.reciveMessageFromChild=$event;
  }

  West()
  {

    console.log("West");
    this.Answer='West';
    this.AnsStatus="West ,That's Wrong"
  }



}
