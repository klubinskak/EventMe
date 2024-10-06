IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Locations] (
    [Id] int NOT NULL IDENTITY,
    [locationName] varchar(255) NOT NULL,
    [country] varchar(255) NOT NULL,
    CONSTRAINT [PK__Location__3214EC07A81659B9] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Events] (
    [Id] int NOT NULL IDENTITY,
    [name] varchar(255) NOT NULL,
    [date] datetime NOT NULL,
    [timezone] varchar(50) NOT NULL,
    [typeId] int NULL,
    [maxAttendees] int NULL,
    [duration] int NULL,
    [categoryId] varchar(100) NULL,
    [link] varchar(255) NULL,
    [tags] varchar(255) NULL,
    [description] text NULL,
    [notifications] bit NOT NULL,
    [locationId] int NULL,
    CONSTRAINT [PK__Events__2DC7BD09BE145062] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Events_Locations] FOREIGN KEY ([locationId]) REFERENCES [Locations] ([Id])
);
GO

CREATE INDEX [IX_Events_locationId] ON [Events] ([locationId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240929193614_initial', N'7.0.20');
GO

COMMIT;
GO

