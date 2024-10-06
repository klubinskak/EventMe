namespace EventME.API.Responses
{
    public static class ApiResponseHelper
    {
        // Helper method to create ApiResponse
        public static ApiResponse<T> CreateResponse<T>(bool success, string message, T data = default)
        {
            return new ApiResponse<T>
            {
                Success = success,
                Message = message,
                Data = data
            };
        }
    }
}
