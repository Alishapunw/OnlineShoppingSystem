﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineShopping.Models
{
    public partial class DB_OnlineShoppingContext : DbContext
    {
        public DB_OnlineShoppingContext()
        {
        }

        public DB_OnlineShoppingContext(DbContextOptions<DB_OnlineShoppingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<ProductCart> ProductCart { get; set; }
        public virtual DbSet<ProductImages> ProductImages { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Retailer> Retailer { get; set; }
        public virtual DbSet<Timages> Timages { get; set; }
        public virtual DbSet<Wishlist> Wishlist { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-JDQP71G;Database=DB_OnlineShopping;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Admin__A9D105350B3803FE");

                entity.Property(e => e.Email).HasMaxLength(40);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(64);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.Status).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__Cart__CustomerId__17036CC0");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(40);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Customer__A9D10534B3D4E4B6")
                    .IsUnique();

                entity.HasIndex(e => e.PhoneNumber)
                    .HasName("UQ__Customer__85FB4E3827550A86")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.Otp)
                    .HasColumnName("OTP")
                    .HasMaxLength(4);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(64);
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderId)
                    .HasName("PK__Orders__C3905BCF120EFEDB");

                entity.Property(e => e.OrderDate).HasColumnType("smalldatetime");

                entity.Property(e => e.OrderStatus).HasMaxLength(10);

                entity.Property(e => e.ShippingAddress).IsRequired();

                entity.Property(e => e.ShippingDate).HasColumnType("smalldatetime");

                entity.Property(e => e.TotalAmount).HasColumnType("money");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CartId)
                    .HasConstraintName("FK__Orders__CartId__22751F6C");
            });

            modelBuilder.Entity<ProductCart>(entity =>
            {
                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.Quantity).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.ProductCart)
                    .HasForeignKey(d => d.CartId)
                    .HasConstraintName("FK__ProductCa__CartI__1DB06A4F");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductCart)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__ProductCa__Produ__1EA48E88");
            });

            modelBuilder.Entity<ProductImages>(entity =>
            {
                entity.HasKey(e => e.TbProductImageId)
                    .HasName("PK__ProductI__264BA4277C629982");

                entity.Property(e => e.TbProductImageId).HasColumnName("TB_ProductImageId");

                entity.Property(e => e.ImagePath).IsRequired();

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductImages)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__ProductIm__Produ__14270015");
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.HasKey(e => e.ProductId)
                    .HasName("PK__Products__B40CC6CD40B76740");

                entity.Property(e => e.BrandName)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.Status).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Products__Catego__0F624AF8");

                entity.HasOne(d => d.Retailer)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.RetailerId)
                    .HasConstraintName("FK__Products__Retail__10566F31");
            });

            modelBuilder.Entity<Retailer>(entity =>
            {
                entity.HasIndex(e => e.RetailerMobile)
                    .HasName("UQ__Retailer__C8C25D548639FE63")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(40);

                entity.Property(e => e.Otp)
                    .HasColumnName("OTP")
                    .HasMaxLength(4);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(64);

                entity.Property(e => e.RetailerName)
                    .IsRequired()
                    .HasMaxLength(40);
            });

            modelBuilder.Entity<Timages>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.FilePath).HasMaxLength(500);

                entity.Property(e => e.Id).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Wishlist>(entity =>
            {
                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Wishlist)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__Wishlist__Custom__4F47C5E3");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Wishlist)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__Wishlist__Produc__503BEA1C");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
