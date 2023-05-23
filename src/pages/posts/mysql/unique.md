
## 约束

用于限制表中的数据，为了保证表中数据的准确性和可靠性,不符合约束的数据，插入时就会失败

### 约束分类
1. NOT NULL ：非空，用于保证该字段的值不能为空。例如学生表的学生姓名及学号等等。
2. DEFAULT：默认值，用于保证该字段有默认值。例如学生表的学生性别
3. PRIMARY KEY：主键，用于保证该字段的值具有唯一性并且非空。例如学生表的学生学号等。
4. UNIQUE：唯一，用于保证该字段的值具有唯一性，可以为空。例如注册用户的手机号，身份证号等。
5. CHECK：检查约束（MySql不支持），检查字段的值是否为指定的值。
6. FOREIGN KEY：外键，用于限制两个表的关系，用于保证该字段的值必须来自于主表的关联列的值，在从表添加外键约束，用于引用主表中某些的值。例如学生表的专业编号

### 主键约束
1. MySQL 主键约束是一个列或者多个列的组合，其值能唯一地标识表中的每一行，这样的一列或多列称为表的主键，通过它可以强制表的实体完整性，同时可以方便根据主键查询该行数据
2. 每个表只能定义一个主键，主键值必须唯一标识表中的每一行，且不能为 NULL，即表中不可能存在两行数据有相同的主键值，这是唯一性原则
3. 创建表时设置主键约束 在 CREATE TABLE 语句中，主键是通过  PRIMARY KEY 关键字来指定的
4. 创建主键的约束时，系统会默认所在的列和列组合 建立对应的索引，方便提高查询效率

```sql
CREATE TABLE `user` (
  `id` int ,
  `phone` varchar(11) ,
  `name` varchar(255) ,
  `age` int,
  PRIMARY key (id,phone)
);
```

## 自动增长

```sql
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT
)AUTO_INCREMENT=1000;
```

## 非空约束
```sql
CREATE TABLE `user` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);
-- 修改表字段
ALTER TABLE 【数据库名.】表名称 MODIFY 字段名 数据类型 not null
```

### 唯一约束

可以为 null 

```sql
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `age` int DEFAULT NULL,
  `phone` varchar(11) ,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_phone` (`phone`)  -- 指定约束名称和约束字段
);

-- 修改表字段
ALTER TABLE 数据表名 ADD CONSTRAINT 唯一约束名 UNIQUE (列名)；
-- 删除约束
ALTER TABLE 数据表名 DROP INDEX 唯一约束名;
```

## 默认约束
```sql
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT 'wwww',
  `age` int DEFAULT 1,
  `phone` varchar(11) ,
  PRIMARY KEY (`id`)
);

ALTER TABLE 数据表名 CHANGE COLUMN 字段名 数据类型 DEFAULT 默认值;
```

### 零填充约束

定义了数据类型的长度，如果实际位数小于定义的长度，显示时会在左边用0填充
