using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Oblig2RentHive.Models;

namespace Oblig2RentHive.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {
        }


        //Models here: 

        public DbSet<Listing> Listing { get; set; }
        public DbSet<Booking> Bookings{ get; set; }   
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

      
    







    }
}