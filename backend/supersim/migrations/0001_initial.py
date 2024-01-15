# Generated by Django 5.0.1 on 2024-01-15 18:50

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('year_of_founding', models.PositiveIntegerField()),
                ('month_of_founding', models.PositiveIntegerField(choices=[(1, 'January'), (2, 'February'), (3, 'March'), (4, 'April'), (5, 'May'), (6, 'June'), (7, 'July'), (8, 'August'), (9, 'September'), (10, 'October'), (11, 'November'), (12, 'December')])),
                ('status', models.PositiveSmallIntegerField(choices=[(0, 'Opened'), (1, 'Closed')], default=0)),
                ('money', models.IntegerField()),
                ('overness', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('momentum', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
            ],
        ),
        migrations.CreateModel(
            name='Wrestler',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('year_of_birth', models.PositiveIntegerField()),
                ('month_of_birth', models.PositiveIntegerField(choices=[(1, 'January'), (2, 'February'), (3, 'March'), (4, 'April'), (5, 'May'), (6, 'June'), (7, 'July'), (8, 'August'), (9, 'September'), (10, 'October'), (11, 'November'), (12, 'December')])),
                ('height', models.IntegerField()),
                ('weight', models.IntegerField()),
                ('finisher', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('style', models.CharField(choices=[('Brawler', 'Brawler'), ('High Flyer', 'High Flyer'), ('Powerhouse', 'Powerhouse'), ('Technician', 'Technician'), ('All-Rounder', 'All-Rounder'), ('Gimmick', 'Gimmick'), ('Comedy', 'Comedy'), ('Showman', 'Showman'), ('Hardcore', 'Hardcore'), ('Luchador', 'Luchador'), ('Strong Style', 'Strong Style'), ('Other', 'Other')], default='Brawler', max_length=50)),
                ('brawl', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('technical', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('aerial', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('psychology', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('charisma', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('acting', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('physique', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('stamina', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('power', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('referee', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('commentary', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('road_agent', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('sociable', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('ambitious', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('condition', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('overness', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('momentum', models.PositiveSmallIntegerField(default=50, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
            ],
        ),
        migrations.CreateModel(
            name='Contract',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('starting_month', models.PositiveIntegerField(choices=[(1, 'January'), (2, 'February'), (3, 'March'), (4, 'April'), (5, 'May'), (6, 'June'), (7, 'July'), (8, 'August'), (9, 'September'), (10, 'October'), (11, 'November'), (12, 'December')])),
                ('starting_year', models.PositiveIntegerField()),
                ('ending_month', models.PositiveIntegerField(choices=[(1, 'January'), (2, 'February'), (3, 'March'), (4, 'April'), (5, 'May'), (6, 'June'), (7, 'July'), (8, 'August'), (9, 'September'), (10, 'October'), (11, 'November'), (12, 'December')])),
                ('ending_year', models.PositiveIntegerField()),
                ('salary', models.IntegerField()),
                ('exclusivity_type', models.CharField(choices=[('exclusive', 'Exclusive'), ('non-exclusive', 'Non-Exclusive')], max_length=20)),
                ('written_contract', models.BooleanField(default=False)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='supersim.company')),
                ('wrestler', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='supersim.wrestler')),
            ],
        ),
        migrations.CreateModel(
            name='WrestlerRelation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('relationship_type', models.CharField(choices=[('friends', 'Friends'), ('rivals', 'Rivals'), ('lovers', 'Lovers'), ('pupil', 'Pupil')], max_length=20)),
                ('starting_month', models.PositiveIntegerField(choices=[(1, 'January'), (2, 'February'), (3, 'March'), (4, 'April'), (5, 'May'), (6, 'June'), (7, 'July'), (8, 'August'), (9, 'September'), (10, 'October'), (11, 'November'), (12, 'December')])),
                ('starting_year', models.PositiveIntegerField()),
                ('from_Wrestler', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='from_Wrestler', to='supersim.wrestler')),
                ('to_Wrestler', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='to_Wrestler', to='supersim.wrestler')),
            ],
            options={
                'unique_together': {('from_Wrestler', 'to_Wrestler', 'relationship_type')},
            },
        ),
    ]
