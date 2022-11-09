import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public countActive:number = 0
  public countInactive:number = 0
  constructor() {}

  countAddActiveUser(){
    this.countActive++
    console.log(this.countActive)
  }

  countAddInactiveUser(){
    this.countInactive++
    console.log(this.countInactive)
  }
}
