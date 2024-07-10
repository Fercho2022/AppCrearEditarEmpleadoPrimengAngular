import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class AddEditEmpleadoComponent {

  myForm: FormGroup;
  genero: any[] = ['Masculino', 'Femenino'];
  idEmpleado!:number;
  accion='Crear';

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private route: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', Validators.required],
      telefono: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      sexo: ['', Validators.required],
    });
    this.idEmpleado=this.aRoute.snapshot.params['id'];
  }
  estadosCiviles!: any[];

  ngOnInit() {
    this.estadosCiviles = ['Soltero','Casado','Divorciado','Unión Convivencial','Casada','Casada','Divorciada','Soltera'];
if (this.idEmpleado!==undefined){
  this.accion='Editar';
  this.esEmpleado();


}
  }

  esEmpleado(){
    const empleado:Empleado=this.empleadoService.getEmploye(this.idEmpleado)
    console.log(empleado);
 this.myForm.patchValue({
  nombreCompleto:empleado.nombreCompleto,
  correo:empleado.correo,
  fechaIngreso:empleado.fechaIngreso,
  telefono:empleado.telefono,
  sexo:empleado.sexo,
  estadoCivil:empleado.estadoCivil
 })
  }


  guardarEmpleado(event: Event) {
    console.log(this.myForm);
    const empleado: Empleado = {
      nombreCompleto: this.myForm.value.nombreCompleto,
      correo: this.myForm.value.correo,
      fechaIngreso: this.myForm.value.fechaIngreso,
      telefono: this.myForm.value.telefono,
      estadoCivil: this.myForm.value.estadoCivil,
      sexo: this.myForm.value.sexo,
    };

    if(this.idEmpleado!==undefined){

      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Esta seguro que desea actualizar este empleado',
        icon: 'pi pi-user',
        accept: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: ' el empleado fue actualizado con exito!',
          });
          setTimeout(() => {
            this.empleadoService.editarEmpleado(empleado, this.idEmpleado);
            this.route.navigate(['/']);
          }, 3000);
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Rechazado',
            detail: 'Has cancelado la actualización',
          });
          setTimeout(() => {
            this.route.navigate(['/']);
          }, 3000);

        },
      });

      return;

    } else{

      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Esta seguro que desea agregar un nuevo empleado',
        icon: 'pi pi-upload',
        accept: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Has agregado un nuevo empleado',
          });
          setTimeout(() => {
            this.empleadoService.agregarEmpleado(empleado);
            this.route.navigate(['/']);
          }, 3000);
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Rechazado',
            detail: 'Has cancelado el agregado',
          });
          setTimeout(() => {
            this.route.navigate(['/']);
          }, 3000);
        },
      });
    }


    }



    }


