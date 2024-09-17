export const getDepartmentsSql = `
select KJ.拠点コード, KJ.拠点名 
from 拠点基本情報マスタ KJ
where (exists (select 1 from 従業員マスタ JM inner join ＡＤユーザマスタ AD on JM.従業員コード = AD.従業員コード and AD.有効区分 = '1' and JM.有効区分 = '1' where KJ.拠点コード = JM.所属部署コード) 
or exists (select 1 from 従業員兼任マスタ JK inner join ＡＤユーザマスタ AD on JK.従業員コード = AD.従業員コード and AD.有効区分 = '1' and JK.有効区分 = '1' where KJ.拠点コード = JK.所属部署コード)
or exists (select 1 from 特別ユーザ管理マスタ TK inner join ＡＤユーザマスタ AD on TK.従業員コード = AD.従業員コード and AD.有効区分 = '1' and TK.有効区分 = '1' where KJ.拠点コード = TK.所属部署コード)) order by KJ.拠点名 ASC
`;
