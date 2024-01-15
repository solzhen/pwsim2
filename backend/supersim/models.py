from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from .consts import MONTH_CHOICES, RELATIONSHIP_CHOICES, STYLE_CHOICES as style_choices
# Create your models here.


class Wrestler(models.Model):
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=20, choices=[
        ('male', 'Male'), ('female', 'Female'), ('other', 'Other')], default='male')
    year_of_birth = models.PositiveIntegerField()
    month_of_birth = models.PositiveIntegerField(choices=MONTH_CHOICES)
    height = models.IntegerField()
    weight = models.IntegerField()
    finisher = models.CharField(max_length=50)
    image = models.ImageField(upload_to='people/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    style = models.CharField(
        max_length=50, choices=style_choices, default='Brawler')
    # performance stats
    brawl = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    technical = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    aerial = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    psychology = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    charisma = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    acting = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    physique = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    stamina = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    power = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    # off-ring stats
    referee = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    commentary = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    road_agent = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    # personality
    sociable = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    ambitious = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    # body
    condition = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    # popularity
    overness = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    momentum = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)

    def __str__(self) -> str:
        return self.name


class WrestlerRelation(models.Model):
    from_Wrestler = models.ForeignKey(
        Wrestler, on_delete=models.CASCADE, related_name='from_Wrestler')
    to_Wrestler = models.ForeignKey(
        Wrestler, on_delete=models.CASCADE, related_name='to_Wrestler')
    relationship_type = models.CharField(
        max_length=20, choices=RELATIONSHIP_CHOICES)
    starting_month = models.PositiveIntegerField(choices=MONTH_CHOICES)
    starting_year = models.PositiveIntegerField()

    def __str__(self) -> str:
        return self.from_Wrestler.name + ' ' + self.relationship_type + ' ' + self.to_Wrestler.name

    class Meta:
        # Ensure uniqueness of relationships
        unique_together = ('from_Wrestler', 'to_Wrestler', 'relationship_type')


class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='companies/', null=True, blank=True)
    year_of_founding = models.PositiveIntegerField()
    month_of_founding = models.PositiveIntegerField(choices=MONTH_CHOICES)
    status = models.PositiveSmallIntegerField(
        choices=[(0, 'Opened'), (1, 'Closed')], default=0)
    money = models.IntegerField()
    overness = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)
    momentum = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)], default=50)

    def __str__(self):
        return self.name


class Contract(models.Model):
    wrestler = models.ForeignKey(Wrestler, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    starting_month = models.PositiveIntegerField(choices=MONTH_CHOICES)
    starting_year = models.PositiveIntegerField()
    ending_month = models.PositiveIntegerField(choices=MONTH_CHOICES)
    ending_year = models.PositiveIntegerField()
    salary = models.IntegerField()
    exclusivity_type = models.CharField(choices=[(
        'exclusive', 'Exclusive'), ('non-exclusive', 'Non-Exclusive')], max_length=20)
    written_contract = models.BooleanField(default=False)

    def __str__(self):
        return self.wrestler.name + ' ' + self.company.name
