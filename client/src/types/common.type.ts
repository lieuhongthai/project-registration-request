export interface OracleDepartment {
  id: string;
  name: string;
}

export interface Option<TValue = number> {
  label: string;
  value: TValue;
}
