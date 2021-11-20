import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';

  public Answer: String="";
  public AnsStatus:String="";

  East()
  {
    console.log("East");
    this.Answer='East';
    this.AnsStatus="East ,That's right "
  }

  West()
  {

    console.log("West");
    this.Answer='West';
    this.AnsStatus="West ,That's Wrong"
  }
}
