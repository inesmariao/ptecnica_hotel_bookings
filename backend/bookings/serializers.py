from rest_framework import serializers
from .models import Hotel, Room, Rate, Booking

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'city']
        verbose_name = "Hotel"
        verbose_name_plural = "Hotels"

class RoomSerializer(serializers.ModelSerializer):
    hotel = HotelSerializer()

    class Meta:
        model = Room
        fields = ['id', 'type', 'max_capacity', 'hotel']
        verbose_name = "Room"
        verbose_name_plural = "Rooms"

class RateSerializer(serializers.ModelSerializer):
    hotel = HotelSerializer()

    class Meta:
        model = Rate
        fields = ['id', 'season', 'price', 'room_type', 'hotel']
        verbose_name = "Rate"
        verbose_name_plural = "Rates"

class BookingSerializer(serializers.ModelSerializer):
    room = RoomSerializer()

    class Meta:
        model = Booking
        fields = ['id', 'start_date', 'end_date', 'number_of_people', 'room']
        verbose_name = "Booking"
        verbose_name_plural = "Bookings"
