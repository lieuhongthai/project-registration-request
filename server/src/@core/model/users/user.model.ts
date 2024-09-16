import { AutoIncrement, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Roles } from '../roles/roles.model';
import { Permissions } from '../permissions/permissions.model';

@Table
export class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @BelongsToMany(() => Roles, () => Permissions, 'userId', 'roleId')
  roles: Roles[];
  getRoles: () => Promise<Roles[]>;
  setRoles: (args: Roles[]) => Promise<Roles[]>;
}
