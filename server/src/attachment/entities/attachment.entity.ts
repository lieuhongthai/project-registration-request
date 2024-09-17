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
import { ProjectRegistration } from 'src/project-registration/entities/project-registration.entity';

@Table
export class Attachment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ field: 'fileName' })
  fileName: string;

  @Column({ field: 'file_path' })
  filePath: string;

  @Column({ field: 'file_type' })
  fileType: string;

  @Column({ field: 'file_icon' })
  fileIcon: string;

  @Column({ field: 'file_url' })
  fileUrl: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @Column({ field: 'project_registration_id' })
  projectRegistrationId: number;

  @BelongsTo(() => ProjectRegistration, 'project_registration_id')
  projectRegistration: ProjectRegistration;
}
