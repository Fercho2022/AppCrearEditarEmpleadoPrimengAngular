import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class ListEmpleadoComponent {
  listEmpleado: Empleado[] = [];
  mensaje = false;
  changeText!:boolean;


  constructor(
    private empleadoService: EmpleadoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.listEmpleado = this.empleadoService.getEmpleado();
    console.log(this.listEmpleado);
  }

  eliminarEmpleado(index: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Esta seguro que desea eliminar el Empleado',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

          this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Has eliminado al empleado' });
          this.empleadoService.delete(index);
          this.cargarEmpleados();
        },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Has cancelado la eliminación' });
      }
  });




  }




}
