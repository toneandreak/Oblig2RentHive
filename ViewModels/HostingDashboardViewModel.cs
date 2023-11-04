using Oblig2RentHive.Models;

namespace Oblig2RentHive.ViewModels
{
    public class HostingDashBViewModel
    {
        public IEnumerable<Booking> PendingBookings { get; set; }

        public IEnumerable<Booking> ApprovedBookings { get; set; }

        public IEnumerable<Booking> PastBookings { get; set; }

        public IEnumerable<Listing> Listings { get; set; }
    }
}
