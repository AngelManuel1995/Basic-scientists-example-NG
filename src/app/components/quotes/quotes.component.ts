import { Component, OnInit } from "@angular/core";
import { QuotesService, Quotes } from "../../services/quotes.service";

@Component({

    selector:"app-quotes",
    templateUrl:"./quotes.component.html"

})


export class QuotesComponent implements OnInit{

    title:string = "Quotes";
    
    quotes:Quotes[] = [];

    private colorClasses:string[] = [ "bg-info", "bg-success", "bg-primary","bg-danger", "bg-warning", "bg-dark" ];
   
    constructor( private _quotesService:QuotesService ){

    }

    ngOnInit() {
        this.quotes =this._quotesService.getQuotes();
    }

}