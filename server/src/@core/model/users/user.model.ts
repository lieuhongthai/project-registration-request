import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Roles } from '../roles/roles.model';
import { Permissions } from '../permissions/permissions.model';

@Table
export class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @AllowNull
  @Column({ field: 'full_name' })
  fullName: string;

  @Column
  email: string;

  @BelongsToMany(() => Roles, () => Permissions, 'userId', 'roleId')
  roles: Roles[];
  getRoles: () => Promise<Roles[]>;
  setRoles: (args: Roles[]) => Promise<Roles[]>;
}
