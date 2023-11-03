using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Oblig2RentHive.Data;
using Oblig2RentHive.Models;
using Oblig2RentHive.ViewModels;
using System.Security.Claims;

namespace Oblig2RentHive.Controllers
{
    public class ListingController : Controller
    {


        private readonly ApplicationDbContext _context;
        private readonly ILogger<ListingController> _logger;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IWebHostEnvironment _hostEnvironment;


        public ListingController(ApplicationDbContext context, ILogger<ListingController> logger, UserManager<ApplicationUser> userManager, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _logger = logger;
            _userManager = userManager;
            _hostEnvironment = hostEnvironment;
        }   

        public IActionResult Index()
        {
            return View();
        }



        //NOT ADDED SEARCH (YET)





        // GET: Listings/Create

        [Authorize]
        public IActionResult Create()
        {
            return View();
        }


        // POST: Listing/Create

        [Authorize]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(ListingViewModel model)
        {

            _logger.LogInformation("Attempting to create a Listing with the following model:");

            //A lot of loggers for debugging...
            _logger.LogInformation($"The listing title is {model.Title}");
            _logger.LogInformation($"The listing description is: {model.Description}");
            _logger.LogInformation($"The listing price per night is: {model.PricePerNight}");
            _logger.LogInformation($"The listing street is: {model.Street}");
            _logger.LogInformation($"The listing City is: {model.City}");
            _logger.LogInformation($"The listing Country is: {model.Country}");
            _logger.LogInformation($"The listing Zipcode is: {model.ZipCode}");
            _logger.LogInformation($"The listing State is: {model.State}");
            _logger.LogInformation($"The listing Bedroom is: {model.Bedroom}");
            _logger.LogInformation($"The listing Bathroom is: {model.Bathroom}");
            _logger.LogInformation($"The listing Beds is: {model.Bed}");


            //Check if it finds userId. This might already be done by [Authorize].
            string userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrEmpty(userId))
            {
                _logger.LogError("The userId is null or empty.");

                return Forbid();

            }

            _logger.LogInformation($"The userId is {userId}"); 

            //Check if the modelstate is valid.

            if (!ModelState.IsValid)
            {
                _logger.LogError("The ModelState is not valid.");
                return View(model);
            }


            //Try to create the model.

            try
            {

                Listing listing = new Listing
                {
                    ApplicationUserId = userId,
                    PricePerNight = model.PricePerNight,
                    Title = model.Title,
                    Description = model.Description,
                    Street = model.Street,
                    City = model.City,
                    Country = model.Country,
                    ZipCode = model.ZipCode,
                    State = model.State,
                    Bedroom = model.Bedroom,
                    Bathroom = model.Bathroom,
                    Beds = model.Bed,
                    CreatedDateTime = DateTime.Now
                };


                _context.Listing.Add(listing);

                await _context.SaveChangesAsync();

            }
            catch (Exception ex)
            {

                _logger.LogError(ex, "An error occured while creating the listing.");
                //Need to return something here too. 
            }

            return RedirectToAction("Index", "Hosting"); //This needs to be changed. 

        }











    }
}
