using System;
using System.Collections.Generic;

namespace EventME.Data.Models;

public partial class Event
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public DateTime Date { get; set; }

    public string TimeZone { get; set; } = null!;

    public int? TypeId { get; set; }

    public int? MaxAttendees { get; set; }

    public int? Duration { get; set; }

    public string? CategoryId { get; set; }

    public string? Link { get; set; }

    public string? Tags { get; set; }

    public string? Description { get; set; }

    public bool Notifications { get; set; }

    public int? LocationId { get; set; }

    public virtual Location? EventLocation { get; set; }
}
