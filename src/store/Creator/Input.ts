import {makeAutoObservable} from "mobx";

class Input {
  constructor() {
    makeAutoObservable(this)
  }
}