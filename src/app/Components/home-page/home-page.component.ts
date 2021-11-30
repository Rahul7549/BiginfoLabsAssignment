import { HttpClient } from '@angular/common/http';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from "./../../share/service.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('content', { static: false })
  public content!: ModalDirective;

   @ViewChild('content1', { static: false })
  public content1!: ModalDirective;



  albums:any;
  id:number=0;
  userId:Number=0;
  title:String="";
  Searchid:number=0;

  constructor(public srv:ServiceService ,private http:HttpClient) { }

  ngOnInit(): void {
    this.getEmpliye()
  }

  getEmpliye()
  {
    this.http.get<any>('https://jsonplaceholder.typicode.com/albums').subscribe(res => {
        this.albums = res;
    })
  }

  deteteEmp(id:number)
  {
      console.log(id);

       this.http.delete<any>('https://jsonplaceholder.typicode.com/albums/delet/'+this.id).subscribe(data => {
        alert("Record Deletd");

    })

  }

  updateEmp(Id:number)
  {


    this.http.get<any>('https://jsonplaceholder.typicode.com/albums/'+Id).subscribe(res => {
        this.id = Id;
        this.userId=res.userId;
        this.title=res.title
    })
    this.content.show();

  }

  createAlbum()
  {

    this.content.show();
     const newAlbum ={
          "id":this.id,
          "userId":this.userId,
          "title":this.title
    }

      this.http.put<any>('https://jsonplaceholder.typicode.com/albums/posts/'+this.id,newAlbum ).subscribe(data => {
        alert("Record saved");

    })
  }

  searchByUserId()
  {
    this.http.get<any>('https://jsonplaceholder.typicode.com/albums/'+this.Searchid).subscribe(res => {
         this.id = this.Searchid;
        this.userId=res.userId;
        this.title=res.title
    })

    this.content1.show();

  }
  openView()
  {
    console.log("add Record");
    this.content.show();

  }


}
