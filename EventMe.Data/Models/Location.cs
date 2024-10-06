using System;
using System.Collections.Generic;

namespace EventME.Data.Models;

public partial class Location
{
    public int Id { get; set; }

    public string LocationName { get; set; } = null!;

    public string Country { get; set; } = null!;

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();
}
