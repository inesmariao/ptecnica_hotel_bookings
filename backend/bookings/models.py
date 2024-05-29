from django.db import models
from django.core.validators import MinValueValidator

class Hotel(models.Model):
    name = models.CharField(max_length=100, verbose_name="Hotel Name")
    city = models.CharField(max_length=100, verbose_name="City")

    def __str__(self):
        return f"{self.name} ({self.city})"

    class Meta:
        verbose_name = "Hotel"
        verbose_name_plural = "Hotels"

class Room(models.Model):
    ROOM_TYPE_CHOICES = [
        ('standard', 'Standard'),
        ('premium', 'Premium'),
        ('vip', 'VIP'),
    ]
    type = models.CharField(max_length=10, choices=ROOM_TYPE_CHOICES, verbose_name="Room Type")
    max_capacity = models.IntegerField(validators=[MinValueValidator(1)], verbose_name="Max Capacity")
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, verbose_name="Hotel")

    def __str__(self):
        return f"{self.get_type_display()} - {self.hotel.name}"

    class Meta:
        verbose_name = "Room"
        verbose_name_plural = "Rooms"

class Rate(models.Model):
    SEASON_CHOICES = [
        ('high', 'High'),
        ('low', 'Low'),
    ]
    season = models.CharField(max_length=10, choices=SEASON_CHOICES, verbose_name="Season")
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0.0)], verbose_name="Price")
    room_type = models.CharField(max_length=10, choices=Room.ROOM_TYPE_CHOICES, verbose_name="Room Type")
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, verbose_name="Hotel")

    def __str__(self):
        return f"Rate {self.get_season_display()} - {self.get_room_type_display()} - {self.hotel.name}"

    class Meta:
        verbose_name = "Rate"
        verbose_name_plural = "Rates"

class Booking(models.Model):
    start_date = models.DateField(verbose_name="Start Date")
    end_date = models.DateField(verbose_name="End Date")
    number_of_people = models.IntegerField(validators=[MinValueValidator(1)], verbose_name="Number of People")
    room = models.ForeignKey(Room, on_delete=models.CASCADE, verbose_name="Room")

    def __str__(self):
        return f"Booking {self.room} from {self.start_date} to {self.end_date}"

    class Meta:
        verbose_name = "Booking"
        verbose_name_plural = "Bookings"
