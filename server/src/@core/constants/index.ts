export const roleEntity = 'ROLE_ENTITY';
export const userEntity = 'USER_ENTITY';
export const permissionEntity = 'PERMISSION_ENTITY';
export const groupEntity = 'GROUP_ENTITY';
export const userGroupEntity = 'USER_GROUP_ENTITY';

export enum RoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  APPROVER = 'APPROVER',
}

export const dataSeerRole = [
  { name: RoleEnum.USER, id: 1 },
  { name: RoleEnum.ADMIN, id: 2 },
  { name: RoleEnum.APPROVER, id: 3 },
];
