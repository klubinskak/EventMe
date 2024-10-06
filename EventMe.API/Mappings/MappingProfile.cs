using EventME.API.Dtos;
using AutoMapper;
using EventME.Data.Models;

namespace EventME.API.Mappings
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Event, EventDto>()
                .ForMember(dest => dest.LocationName, opt => opt.MapFrom(src => src.EventLocation.LocationName));
        }
    }
}
