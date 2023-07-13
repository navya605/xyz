import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService, User } from "./data.service";


@Injectable({
    providedIn : 'root'
})

export class RequestsService{

    constructor(private http : HttpClient, private dataService : DataService){}

    // storeData(){
    //     return this.http
    //         .put("https://practice-cd530-default-rtdb.firebaseio.com/users.json", this.dataService.usersData)
    //         .subscribe(responseData => {
    //             console.log(responseData)
    //         })
    // }
    

    fetchData(){
        return this.http
        .get<User[]>("https://jsonplaceholder.typicode.com/posts")
    }

}