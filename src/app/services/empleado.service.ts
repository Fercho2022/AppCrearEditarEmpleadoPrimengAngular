import { ListEmpleadoComponent } from './../components/list-empleado/list-empleado.component';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez',
      correo: 'lmartinez@gmail.com',
      telefono: 34567877,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },

    {
      nombreCompleto: 'Rodrigo Aliaga',
      correo: 'raliag@gmail.com',
      telefono: 3456755877,
      sexo: 'Masculino',
      fechaIngreso: new Date('2019-05-25'),
      estadoCivil: 'Soltero',
    },

    {
      nombreCompleto: 'Maria Funes',
      correo: 'mfunes@gmail.com',
      telefono: 34567877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2020-04-27'),
      estadoCivil: 'Casada',
    },

    {
      nombreCompleto: 'Lucrecia Juarez',
      correo: 'ljuarez@gmail.com',
      telefono: 3334567877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2020-07-25'),
      estadoCivil: 'Soltera',
    },

    {
      nombreCompleto: 'Federico Gonzalez',
      correo: 'fgonzalez@gmail.com',
      telefono: 1134567877,
      sexo: 'Masculino',
      fechaIngreso: new Date('2020-02-31'),
      estadoCivil: 'Casado',
    },

    {
      nombreCompleto: 'Estefania Schults',
      correo: 'eschults@gmail.com',
      telefono: 7734567877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2020-01-31'),
      estadoCivil: 'Soltera',
    },

    {
      nombreCompleto: 'Maria Belen Arzu',
      correo: 'mbarzu@gmail.com',
      telefono: 5432567877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2020-01-31'),
      estadoCivil: 'Soltera',
    },

    {
      nombreCompleto: 'Jorge Martinez',
      correo: 'jmartinez@gmail.com',
      telefono: 3411567877,
      sexo: 'Masculino',
      fechaIngreso: new Date('2021-02-17'),
      estadoCivil: 'Casado',
    },

    {
      nombreCompleto: 'Fernando Alino',
      correo: 'falino@gmail.com',
      telefono: 663456755877,
      sexo: 'Masculino',
      fechaIngreso: new Date('2018-09-25'),
      estadoCivil: 'Casado',
    },

    {
      nombreCompleto: 'Ortencia Milon',
      correo: 'omilon@gmail.com',
      telefono: 9934567877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2022-04-15'),
      estadoCivil: 'Casada',
    },

    {
      nombreCompleto: 'Silvina Barragan',
      correo: 'sbarragan@gmail.com',
      telefono: 2344567877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2017-08-14'),
      estadoCivil: 'Soltera',
    },

    {
      nombreCompleto: 'Eduardo Gonzalez',
      correo: 'egonzalez@gmail.com',
      telefono: 6544567877,
      sexo: 'Masculino',
      fechaIngreso: new Date('2019-07-22'),
      estadoCivil: 'Casado',
    },

    {
      nombreCompleto: 'Monica Arredo',
      correo: 'marredo@gmail.com',
      telefono: 8765567877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2019-05-23'),
      estadoCivil: 'Soltera',
    },

    {
      nombreCompleto: 'Fernanda Chita',
      correo: 'fchita@gmail.com',
      telefono: 934754667877,
      sexo: 'Femenino',
      fechaIngreso: new Date('2029-04-29'),
      estadoCivil: 'Soltera',
    },
  ];

  constructor() {}

  getEmpleado() {
    return this.listEmpleado.slice();
  }

  delete(index: number) {
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmploye(index:number){
    return this.listEmpleado[index];
  }

  editarEmpleado(empleado:Empleado, index:number){
    this.listEmpleado[index].nombreCompleto=empleado.nombreCompleto;
    this.listEmpleado[index].correo=empleado.correo;
    this.listEmpleado[index].fechaIngreso=empleado.fechaIngreso;
    this.listEmpleado[index].telefono=empleado.telefono;
    this.listEmpleado[index].sexo=empleado.sexo;
    this.listEmpleado[index].estadoCivil=empleado.estadoCivil;
  }

}
