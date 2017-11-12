import { Component, OnInit } from "@angular/core";
import { ScientistsService, Scientists } from "../../services/scientists.service"; 
import { ActivatedRoute } from "@angular/router";

@Component({

    selector:"app-search",
    templateUrl:"./search.component.html"

})

export class SearchComponent implements OnInit{
    
    test:string = "It works";
    termino:string;

    scientist:Scientists[]=[];
    private colorClasses:string[] = [ "bg-info", "bg-success", "bg-primary","bg-danger", "bg-warning", "bg-dark" ];

    constructor( private _scientistsService:ScientistsService,
                 private _activatedRoute:ActivatedRoute ){

    }

    ngOnInit() {
        this._activatedRoute.params.subscribe( params => {
            this.scientist = this._scientistsService.searchScientist(params['text']);
            this.termino = params['text'];
        });
    }

}