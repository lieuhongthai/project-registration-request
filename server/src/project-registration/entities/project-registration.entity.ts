import { AutoIncrement, BelongsTo, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Users } from 'src/@core/model/users/user.model';

@Table
export class ProjectRegistration extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column
  department: string;

  @Column
  purpose: string;

  @Column({ field: 'scope_of_use' })
  scopeOfUse: string;

  @Column
  demand: string;

  @Column({ field: 'contact_information' })
  contactInformation: string;

  @Column({ field: 'implementation_date' })
  implementationDate: string;

  @Column
  status: string;

  @Column({ field: 'is_draft' })
  isDraft: string;

  @Column({ field: 'created_at' })
  createdAt: string;

  @Column({ field: 'updated_at' })
  updatedAt: string;

  @BelongsTo(() => Users, 'user_id')
  user: Users;
}
