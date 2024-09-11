# Generated by Django 4.2.13 on 2024-08-31 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lounge',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('floor', models.CharField(max_length=10)),
                ('room', models.CharField(max_length=10)),
                ('availability', models.CharField(choices=[('Available', 'Available'), ('Occupied', 'Occupied')], max_length=10)),
            ],
        ),
    ]
