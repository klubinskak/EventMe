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
    [eventId] int NOT NULL IDENTITY,
    [eventName] varchar(255) NOT NULL,
    [eventDate] datetime NOT NULL,
    [eventTimeZone] varchar(50) NOT NULL,
    [eventTypeId] int NULL,
    [maxAttendees] int NULL,
    [eventDuration] int NULL,
    [eventCategory] varchar(100) NULL,
    [eventLink] varchar(255) NULL,
    [eventTags] varchar(255) NULL,
    [eventDescription] text NULL,
    [eventNotifications] bit NOT NULL,
    [eventLocationId] int NULL,
    CONSTRAINT [PK__Events__2DC7BD09BE145062] PRIMARY KEY ([eventId]),
    CONSTRAINT [FK_Events_Locations] FOREIGN KEY ([eventLocationId]) REFERENCES [Locations] ([Id])
);
GO

CREATE INDEX [IX_Events_eventLocationId] ON [Events] ([eventLocationId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240929192641_initial', N'7.0.20');
GO

COMMIT;
GO

