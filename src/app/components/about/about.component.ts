import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html" 
})

export class AboutComponent implements OnInit{

    i:number = 0;
    
    playList:string[]=
        ['NvuCZJyoing',
        'LBEq1rhRbC4',
        'hJZot45Qo5s',
        'iOfovFgHHbw',
        '_O9-OriXwA4',
        '_6oWoAzF68Y'];


    constructor(){
    }

    previousVideo(){
        if(this.i == 0){
            this.i = this.playList.length;
        }else{
            this.i = this.i + 1;
        }
    }

    nextVideo(){
        if(this.i == this.playList.length){
            this.i = 0;
        }else{
            this.i = this.i + 1;
        } 
    }

    ngOnInit(){
    }
}