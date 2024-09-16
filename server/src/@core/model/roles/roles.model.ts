import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Roles extends Model<Roles> {
  @PrimaryKey
  @Column({ type: DataType.SMALLINT({ scale: 2 }) })
  id: number;

  @Column({ type: DataType.STRING(50) })
  name: string;
}
