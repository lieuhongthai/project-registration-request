import { AutoIncrement, Column, CreatedAt, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Status extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ field: 'name' })
  name: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;
}
