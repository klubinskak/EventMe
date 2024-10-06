using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventME.API.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    locationName = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: false),
                    country = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Location__3214EC07A81659B9", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: false),
                    date = table.Column<DateTime>(type: "datetime", nullable: false),
                    timezone = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    typeId = table.Column<int>(type: "int", nullable: true),
                    maxAttendees = table.Column<int>(type: "int", nullable: true),
                    duration = table.Column<int>(type: "int", nullable: true),
                    categoryId = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    link = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: true),
                    tags = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: true),
                    description = table.Column<string>(type: "text", nullable: true),
                    notifications = table.Column<bool>(type: "bit", nullable: false),
                    locationId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Events__2DC7BD09BE145062", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Events_Locations",
                        column: x => x.locationId,
                        principalTable: "Locations",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Events_locationId",
                table: "Events",
                column: "locationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "Locations");
        }
    }
}
