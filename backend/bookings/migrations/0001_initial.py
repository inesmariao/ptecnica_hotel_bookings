# Generated by Django 5.0.6 on 2024-05-29 20:40

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Hotel Name')),
                ('city', models.CharField(max_length=100, verbose_name='City')),
            ],
            options={
                'verbose_name': 'Hotel',
                'verbose_name_plural': 'Hotels',
            },
        ),
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('season', models.CharField(choices=[('high', 'High'), ('low', 'Low')], max_length=10, verbose_name='Season')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0.0)], verbose_name='Price')),
                ('room_type', models.CharField(choices=[('standard', 'Standard'), ('premium', 'Premium'), ('vip', 'VIP')], max_length=10, verbose_name='Room Type')),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bookings.hotel', verbose_name='Hotel')),
            ],
            options={
                'verbose_name': 'Rate',
                'verbose_name_plural': 'Rates',
            },
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('standard', 'Standard'), ('premium', 'Premium'), ('vip', 'VIP')], max_length=10, verbose_name='Room Type')),
                ('max_capacity', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='Max Capacity')),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bookings.hotel', verbose_name='Hotel')),
            ],
            options={
                'verbose_name': 'Room',
                'verbose_name_plural': 'Rooms',
            },
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField(verbose_name='Start Date')),
                ('end_date', models.DateField(verbose_name='End Date')),
                ('number_of_people', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='Number of People')),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bookings.room', verbose_name='Room')),
            ],
            options={
                'verbose_name': 'Booking',
                'verbose_name_plural': 'Bookings',
            },
        ),
    ]