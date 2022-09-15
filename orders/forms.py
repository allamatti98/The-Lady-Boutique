from django import forms
# from django_countries import fields


PAYMENT_CHOICES = (
    ('S', 'Stripe'),
    ('A','Adyen'),
    ('P','PayPal')
)
class CheckOutForm(forms.Form):
    # country = fields.CountryField(blank_label='(select country)').formfield()
    country = forms.CharField(max_length=20)
    city = forms.CharField(max_length=20)
    address = forms.CharField(widget = forms.TextInput(attrs={'placeholder': 'eg 24 Gayaza Road'}))
    apartment_address = forms.CharField(required = False, widget = forms.TextInput(attrs={'placeholder': 'eg Apartment B6'}))
    same_billing_address = forms.BooleanField(required=False)
    save_info = forms.BooleanField(required=False)
    payment_option = forms.ChoiceField(widget = forms.RadioSelect(), choices= PAYMENT_CHOICES)