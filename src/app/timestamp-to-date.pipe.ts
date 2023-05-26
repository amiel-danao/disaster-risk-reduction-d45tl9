import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from 'firebase/firestore';

@Pipe({
    name: 'timestampToDate'
  })
  export class TimestampToDatePipe implements PipeTransform {
    transform(timestamp: Timestamp): string {
        const date = timestamp.toDate();
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        };
        return date.toLocaleString('en-US', options);
      }
}