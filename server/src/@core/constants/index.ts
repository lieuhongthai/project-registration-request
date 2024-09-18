export const roleEntity = 'ROLE_ENTITY';
export const userEntity = 'USER_ENTITY';
export const permissionEntity = 'PERMISSION_ENTITY';
export const groupEntity = 'GROUP_ENTITY';
export const userGroupEntity = 'USER_GROUP_ENTITY';

export enum RoleEnum {
  ADMIN = 'ADMIN',
  APPROVER = 'APPROVER',
  USER = 'USER',
}

export const dataSeerRole = [
  { name: RoleEnum.ADMIN, id: 1 },
  { name: RoleEnum.APPROVER, id: 2 },
  { name: RoleEnum.USER, id: 3 },
];
