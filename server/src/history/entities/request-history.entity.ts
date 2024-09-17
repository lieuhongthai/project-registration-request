import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Users } from 'src/@core/model/users/user.model';
import { ProjectRegistration } from 'src/project-registration/entities/project-registration.entity';
import { Status } from './status.entity';

@Table
export class RequestHistory extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ field: 'comment' })
  comment: string;

  @Column({ field: 'status_id' })
  statusId: number;

  @BelongsTo(() => Status, 'user_id')
  status: Status;

  @Column({ field: 'user_id' })
  userId: number;

  @BelongsTo(() => Users, 'user_id')
  user: Users;

  @Column({ field: 'project_registration_id' })
  projectRegistrationId: number;

  @BelongsTo(() => ProjectRegistration, 'project_registration_id')
  projectRegistration: ProjectRegistration;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;
}
