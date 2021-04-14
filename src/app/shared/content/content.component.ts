import { Component, OnInit } from '@angular/core';

import ProgressBar from 'progressbar.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  public actualWidth:number = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
    this.progressBar("angular", "#B52E31", "fab fa-angular", 0.65);
    this.progressBar("node", "#6CC24A", "fab fa-node-js", 0.60);
    this.progressBar("javascript", "#F7DF1E", "fab fa-js-square", 0.70);
    this.progressBar("bootstrap", "#7952B3", "fab fa-bootstrap", 0.80);
    this.progressBar("php", "#8892BE", "fab fa-php", 0.50);
    this.progressBar("html", "#E34F26", "fab fa-html5", 0.90);
    this.progressBar("sass", "#BF4080", "fab fa-sass", 0.80);
  }

  progressBar(skillName:string , barColor:string, icon:string, percentage:number){
      let textSize:string = "";
      let iconSize:string = "";

      if(this.actualWidth < 500){
        textSize = '1.3rem';
        iconSize = "3rem";
      }else{
        textSize = '1.56rem';
        iconSize = "5.31rem";
      }


      let bar = new ProgressBar.SemiCircle(`#${skillName}`, {
        strokeWidth: 2,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: barColor},
        to: {color: barColor},
        // Set default step function for all animate calls
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
          var value = Math.round(bar.value() * 100);
          if (value === 0) {
            bar.setText('');
          } else {
            bar.setText(
              `
              <span>${value}</span>
              </br>
              <i class="${icon}" style="font-size: ${iconSize};"></i>
              `
            );
          }
      
          bar.text.style.color = state.color;
        }
      });

      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = textSize;
      
      bar.animate(percentage);  // Number from 0.0 to 1.0
  }

}
