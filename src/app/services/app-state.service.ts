import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  private jsonObject

  setValidJsonObject(object:any){
    this.jsonObject = object
  }

  getValidJsonObject(){
    return this.jsonObject
  }
}
