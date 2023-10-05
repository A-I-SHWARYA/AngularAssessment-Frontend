import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private globalId: string;
  private name: string;


  constructor() { }


  getGlobalId(): string {
    return this.globalId;
  }
  getname(): string {
    return this.name;
  }

  setGlobalId(id: string): void {
    this.globalId = id;
  }
  setname(cname: string): void {
    this.name = cname;
  }
}
