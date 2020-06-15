import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public array: number[] = [];

  constructor() {
    this.addArray();
    this.addArray();
    this.addArray();
    console.log(this.array);
    // [1, 2, 3]ではなく、[empty, 1, empty, 3, empty, 5]と表示されてしまう
  }

  /**
   * 配列に1〜呼び出された回数の数字を代入する
   *
   * @memberof AppComponent
   */
  public addArray() {
    let item = ++this.array.length;
    this.array.push(item);
  }
}
