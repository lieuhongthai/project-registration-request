import { SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export const Roles = (roles: string[]) => SetMetadata('roles', roles);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const RolesDecorator = Reflector.createDecorator<string[]>();
