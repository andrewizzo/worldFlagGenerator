import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AllFlagService{
    apiFlags = 'https://restcountries.com/v3.1/all'
    constructor(private http:HttpClient){}

    getAllFlags():Observable<any>{
        const url = `${this.apiFlags}`
        return this.http.get<any>(url)
    }
    
}