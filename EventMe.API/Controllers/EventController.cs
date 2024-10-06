using AutoMapper;
using EventME.API.Dtos;
using EventME.API.Responses;
using EventME.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace EventME.API.Controllers
{
    [ApiController]
    [Route("events")]
    public class EventController : ControllerBase
    {

        private readonly ILogger<EventController> _logger;
        private readonly AppDbContext _ctx;
        private readonly IMapper _mapper;


        public EventController(ILogger<EventController> logger, AppDbContext ctx, IMapper mapper)
        {
            _logger = logger;
            _ctx =  ctx;
            _mapper = mapper;
        }

        [HttpGet("getEvents")]
        public ActionResult<ApiResponse<IEnumerable<EventDto>>> GetEvents()
        {
            try
            {
                // Retrieve events from the database
                List<Event> events = _ctx.Events.Include(x => x.EventLocation).ToList();

                // Check if no events are found
                if (events == null || !events.Any())
                {
                    return Ok(ApiResponseHelper.CreateResponse<IEnumerable<EventDto>>(false, "No events found.", null));
                }

                var eventDtos = _mapper.Map<IEnumerable<EventDto>>(events);



                return Ok(ApiResponseHelper.CreateResponse(true, "Events retrieved successfully.", eventDtos));
            }
            catch (Exception ex)
            {
                // Return error response in case of exception
                return StatusCode(500, ApiResponseHelper.CreateResponse<IEnumerable<EventDto>>(false, "An error occurred while retrieving events: " + ex.Message, null));
            }
        }

        [HttpPost("saveEvent")]
        public ActionResult<ApiResponse<EventDto>> SaveEvent(EventDto model)
        {
            try
            {
                // Validate the input model
                if (model == null)
                {
                    return BadRequest(ApiResponseHelper.CreateResponse<EventDto>(false, "Event data is required.", null));
                }

                var eventEntity = _mapper.Map<Event>(model);
                _ctx.Events.Add(eventEntity);

                _ctx.SaveChanges();

                var savedEventDto = _mapper.Map<EventDto>(eventEntity);

                return Ok(ApiResponseHelper.CreateResponse(true, "Event saved successfully.", savedEventDto));
            }
            catch (DbUpdateException dbEx)
            {
                // Handle database update exceptions
                return StatusCode(500, ApiResponseHelper.CreateResponse<EventDto>(false, "Database error occurred: " + dbEx.Message, null));
            }
            catch (Exception ex)
            {
                // Return error response in case of an exception
                return StatusCode(500, ApiResponseHelper.CreateResponse<EventDto>(false, "An error occurred while saving the event: " + ex.Message, null));
            }
        }


    }
}