import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Chelsie',
        lastName: 'Saunders',
        age : 41,
        address: {
          street: '242 Spencer Peak Way G12',
          city: 'Draper',
          state: 'UT'
        }
      },
      {
        firstName: 'Stuart Mac',
        lastName: 'Saunders',
        age : 56,
        address: {
          street: '242 Spencer Peak Way G12',
          city: 'Draper',
          state: 'UT'
        }
      },
      {
        firstName: 'Gabby',
        lastName: 'Saunders',
        age : 21,
        address: {
          street: '242 Spencer Peak Way G12',
          city: 'Draper',
          state: 'UT'
        }
      },
      {
        firstName: 'Duncan',
        lastName: 'Saunders',
        age : 19,
        address: {
          street: '242 Spencer Peak Way G12',
          city: 'Draper',
          state: 'UT'
        }
      }

    ];

    this.addUser({
      firstName: 'Pepper',
      lastName: 'Saunders',
      age : 12,
      address: {
        street: '242 Spencer Peak Way G12',
        city: 'Draper',
        state: 'UT'
      }
    });
  }
  addUser(user: User){
    this.users.push(user);

  }
}
