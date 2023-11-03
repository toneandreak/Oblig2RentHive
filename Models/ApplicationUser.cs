using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Oblig2RentHive.Models
{
    public class ApplicationUser : IdentityUser //Inherits from IdentityUser (Identity.net)
    {

        [Required(ErrorMessage = "A Firstname is required.")]
        public string Firstname { get; set; }

        [Required(ErrorMessage = "A Lastname is required.")]
        public string Lastname { get; set; }



        public string? ProfilePicture { get; set; } //Need to set a placeholder image as default.





        //Navigation Property 

        public virtual ICollection<Listing> Listings { get; set; }

        public ICollection<Booking>? Bookings { get; set; }



    }
}