import { Component } from '@angular/core';

import { User } from '../../models/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  //Properties
    user: User;
//Methods
  constructor() {
      this.user = {
        firstName: 'Chelsie',
        lastName: 'Saunders',
        age : 41,
        address: {
          street: '242 Spencer Peak Way G12',
          city: 'Draper',
          state: 'UT'
        }
      }

  }

}
