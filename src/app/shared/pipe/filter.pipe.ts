import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: any): any {
   if(value.length === 0 ){
     return value
   }
   else{
     return value.filter((el:any)=>{
       return el.name.toLowerCase().indexOf(search.toLowerCase()) > -1
     })
   }
  }

}
