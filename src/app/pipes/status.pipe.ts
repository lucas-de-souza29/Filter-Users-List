import { Pipe, PipeTransform } from '@angular/core';
import { InterfaceStatus } from '../interfaces/user/status.interface';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = status === null || status === undefined;

    if(INVALID_STATUS) {
      return 'Status indisponível ou inválido';
    }

    return status ? 'Ativo' : 'Inativo';
  }
}
