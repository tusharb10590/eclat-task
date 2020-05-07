import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private serviceAppState: AppStateService
  ) { }

  inputJson = ""
  jsonObject = null
  isObjectValid = false
  message = ""
  

  ngOnInit() {
  }

  validate(){
    try{
      this.jsonObject = JSON.parse(this.inputJson)
      let isArray = Array.isArray(this.jsonObject)
      if(!isArray)
      {
        throw Error("Not an array");
        
      }
      else{
        if(this.jsonObject.length <= 0){
          throw Error('Array is empty')
        }
      }
      console.log(this.jsonObject,isArray);
      this.isObjectValid  = true
      this.message = "Validation Success"
      
    }
    catch(err){
      console.log(err)
      this.message = err.message
    }
    

  }

  submit(){
    if(this.isObjectValid){
      this.serviceAppState.setValidJsonObject(this.jsonObject);
      this.router.navigateByUrl('/forms')
    }
    else{

    }
    
  }

}
