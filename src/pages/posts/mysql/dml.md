## DML

数据操作语句，用于添加、删除、更新和查询数据库记录，并检查数据完整性，常用的语句关键字主要包括 insert、delete、udpate 和select 等

### DML与DDL区别？

DDL 对数据库  表结构 增加、修改 删除操作

DML 表结构中的数据  增加（insert）、修改（update） 删除（delete） 查询（select ）

```sql
-- insert
-- INSERT INTO 表名称 (列名1，列名2 ...)  VALUES (值1, 值2,....)    // 插入数据列与值的顺序需要一一对应。
-- INSERT INTO 表名称  VALUES (值1, 值2,....)    // 向表中插入所有列
INSERT INTO `score` VALUES (4, '3-1', '李莉莉', 689);

-- update
-- update 表名称 set 字段=值，字段=值，...；  ---直接修改整张表的所有行数据
-- update 表名称 set 字段=值，字段=值，... where 条件 ---- 根据条件查找到对应行数据 修改
UPDATE `score` SET `id`='4', `class`='3-1', `student`='李莉莉', `score`='700' WHERE (`id`='4');

-- delete
-- delete from 表名称 where 条件 根据条件删除表中的数据
-- TRUNCATE 表名称   --清空表中所有的数据

```

### TRUNCATE 与delete  不同？

truncate:会清空表中所有的数据，速度快，不可回滚；实质是删除整张表包括数据再重新创建表；

delete:逐行删除数据，每步删除都是有日志记录的，可以回滚数据；实质是逐行删除表中的数据；
