import { makeAutoObservable } from "mobx";

export default class CaseStore {
  constructor() {
    this._cases = [];
    makeAutoObservable(this);
  }

  setCases(cases) {
    this.cases = cases;
  }

  get cases() {
    return this._cases;
  }
}
