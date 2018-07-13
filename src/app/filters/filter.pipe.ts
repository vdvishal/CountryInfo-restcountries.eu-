import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (searchText == null) return items;
    searchText = searchText.toLowerCase();
    return items.filter(function (f) {
      return f.name.toLowerCase().includes(searchText);
    });
  }
}