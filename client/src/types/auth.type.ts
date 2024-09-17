export interface Role {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  Permissions: Permissions;
}

export interface Permissions {
  userId: number;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
}
