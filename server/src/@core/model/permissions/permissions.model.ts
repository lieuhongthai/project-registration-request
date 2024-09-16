import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Users } from '../users/user.model';
import { Roles } from '../roles/roles.model';

@Table
export class Permissions extends Model<Permissions> {
  @ForeignKey(() => Users)
  @Column
  userId: number;

  @ForeignKey(() => Roles)
  @Column
  roleId: number;
}
