import { PipeTransform } from "@angular/core";

export class TestPipe implements PipeTransform {
  transform(value: any) {
    return value.substr(0, 10);
  }
}
