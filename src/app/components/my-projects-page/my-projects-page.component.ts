import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects-page',
  templateUrl: './my-projects-page.component.html',
  styleUrls: ['./my-projects-page.component.css']
})
export class MyProjectsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        //@ts-ignore
        this.classList.toggle("active");
        //@ts-ignore
        var content = this.nextElementSibling;
        //@ts-ignore
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    
  }

  



}
