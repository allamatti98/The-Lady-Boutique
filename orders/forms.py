from django import forms
from django_countries import fields
from django_countries.widgets import CountrySelectWidget

PAYMENT_CHOICES = (
    ('S', 'Stripe'),
    ('A','Adyen'),
    ('P','PayPal')
)
class CheckOutForm(forms.Form):
    country = fields.CountryField(blank_label='(select country)').formfield(widget= CountrySelectWidget(attrs = { 
        'class': 'custom-select d-block w-100'
    }))
    city = forms.CharField(widget = forms.TextInput(attrs = { 'placeholder': 'eg Caracas'}))
    street_address = forms.CharField(widget = forms.TextInput(attrs={'placeholder': 'eg 24 Gayaza Road'}))
    apartment_address = forms.CharField(required = False, widget = forms.TextInput(attrs={'placeholder': 'eg Apartment B6'}))
    same_shipping_address = forms.BooleanField(required= False)
    save_info = forms.BooleanField(required= False)
    payment_option = forms.ChoiceField(widget = forms.RadioSelect, choices= PAYMENT_CHOICES)

class CouponForm(forms.Form):
    code = forms.CharField(widget = forms.TextInput(attrs= {
        'class': 'form-control',
        'placeholder': 'Promo-Code',
        'aria-label': 'Recipient',
        'aria-describeably': 'basic-addon2 '
    }))