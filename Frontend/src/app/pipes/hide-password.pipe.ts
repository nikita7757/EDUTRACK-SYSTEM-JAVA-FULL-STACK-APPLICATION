import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(input:String): any {
   let inputSizes = input.length;
   let output = '';
   for(let i = 0; i<inputSizes; i++){
    output = output + "*";
   }
    return output;
  }

}
