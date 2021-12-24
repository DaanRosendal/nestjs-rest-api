import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3434345435',
      name: 'Item One',
      description: 'This is item one',
      quantity: 100,
    },
    {
      id: '79798789',
      name: 'Item Two',
      description: 'This is item two',
      quantity: 50,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
