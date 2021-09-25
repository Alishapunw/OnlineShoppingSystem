create database DB_OnlineShopping

use DB_OnlineShopping

create table  Customer( CustomerId int primary key identity(1000,1),
						  Email  nvarchar(40) NOT NULL UNIQUE,
						  Password  nvarchar(40) NOT NULL,
						  PhoneNumber bigint NOT NULL UNIQUE,
						  Name nvarchar(40) NOT NULL )
insert into Customer(Email,Password,PhoneNumber,Name) values('abc@gmail.com','Abc123$$',1234567890,'ABC')
select * from Customer


create table  Admin( Email  nvarchar(40) NOT NULL primary key,
						Password  nvarchar(64) NOT NULL,)
 
create table  Retailer( RetailerId int primary key identity(1000,1),
						  Email  nvarchar(40) NOT NULL ,
						  Password  nvarchar(64) NOT NULL,
						  RetailerName nvarchar(40) NOT NULL,
						  RetailerMobile bigint NOT NULL UNIQUE,
						)


create table  Category( CategoryId int primary key identity(1,1),
						  CategoryName nvarchar(40) NOT NULL,)

create table  Products( ProductId int primary key identity(1000,1),
						  ProductName nvarchar(40) NOT NULL,
						  BrandName nvarchar(40) NOT NULL,
						  PricePerUnit int NOT NULL,
						  Description nvarchar(max) NOT NULL,
						  Quantity int NOT NULL,
						  CategoryId int foreign key references Category(CategoryId),
						  RetailerId int foreign key references Retailer(RetailerId),
						  Status bit default 0,
						  )

create table  ProductImages( TB_ProductImageId int primary key identity(1,1),
								ProductId int foreign key references Products(ProductId),
								ImagePath nvarchar(max) NOT NULL,
								)

create table  Cart( CartId int primary key identity(1000,1),
					  CustomerId int foreign key references Customer(CustomerId),
					  Status bit default 0,					  
)

-- ProductId int foreign key references TB_Products(ProductId),
-- Quantity tinyint default 1,

create table ProductCart( Id int primary key identity(1000,1),
					   CartId int foreign key references Cart(CartId),
					   ProductId int foreign key references Products(ProductId),
					   Quantity tinyint default 1,
					   Amount money not null,
	)



create table  Orders( OrderId int primary key identity(1000,1),
					   CartId int foreign key references Cart(CartId),
					   OrderDate smalldatetime NOT NULL,
					   TotalAmount money not null,
					   ShippingDate smalldatetime NOT NULL,
					   ShippingAddress nvarchar(max) NOT NULL,
					   OrderStatus nvarchar(10) CHECK(OrderStatus in ('dispatched', 'packed' , 'delivered' ))				   
	)

-- CustomerId int foreign key references TB_Customer(CustomerId),



insert into Retailer(Email,Password,RetailerName,RetailerMobile) values ('t@gmail.com', 'password', 'Rname',1234567890)


insert into Category(CategoryName) values ('Cname1')

insert into  Products(ProductName, BrandName, PricePerUnit, Description, Quantity,  CategoryId, RetailerId)
values('Panme', 'Bnme' , 200, 'Desc' ,20 , 1,1000 )

select * from Category
select * from Products

