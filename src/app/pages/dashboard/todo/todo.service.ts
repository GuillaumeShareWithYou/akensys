import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Vidange véhicule 123 avant Septembre 2018' },
    { text: 'Appel société TARTEMPION'},
    { text: 'Relance facture M. Dupont'},
    { text: 'Préparer dossier 456 pour Thanh'},
  ];

  getTodoList() {
    return this._todoList;
  }
}
