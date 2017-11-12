import { Component, OnInit }              from '@angular/core';
import { ScientistsService, Scientists }  from "../../services/scientists.service";
//Importamos el componente que nos permitirá capturar los parametros que llegan por la url
import { ActivatedRoute }                 from "@angular/router";

@Component({
    selector: 'app-scientist',
    templateUrl: './scientist.component.html'
})

export class ScientistComponent implements OnInit {


    scientist:Scientists;
    private colorClasses:string[] = [ "bg-info", "bg-success", "bg-primary","bg-danger", "bg-warning", "bg-dark" ];
    private i:number;

    constructor( private _scientistsServie:ScientistsService,
                 private _activatedRoute:ActivatedRoute) {

        this._activatedRoute.params.subscribe( params => {
            this.scientist = this._scientistsServie.getScientist(params['id']);
            this.i = params['id'];
        });

    }

    ngOnInit() { }
}