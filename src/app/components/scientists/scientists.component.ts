import { Component, OnInit } from "@angular/core";
import { ScientistsService, Scientists}  from "../../services/scientists.service";

@Component({

    selector:"app-scientists",
    templateUrl:"./scientists.component.html"

})

export class ScientistsComponent implements OnInit{
    
    scientists:Scientists[] = [];
    private colorClasses:string[] = [ "bg-info", "bg-success", "bg-primary","bg-danger", "bg-warning", "bg-dark" ];
    constructor( private _scientistsService:ScientistsService){

    }

    ngOnInit(){
        this.scientists = this._scientistsService.getScientists();
    }
}

