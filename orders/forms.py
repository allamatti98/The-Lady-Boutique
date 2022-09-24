from django import forms
from django_countries import fields
from django_countries.widgets import CountrySelectWidget

PAYMENT_CHOICES = (
    ('S', 'Stripe'),
    ('A','Adyen'),
    ('P','PayPal')
)


class CheckOutForm(forms.Form):
    shipping_country = fields.CountryField(blank_label='(select country)').formfield(required = False, widget= CountrySelectWidget(attrs = { 
        'class': 'custom-select d-block w-100'
    }))
    shipping_city = forms.CharField(required= False)
    shipping_address = forms.CharField(required= False)
    shipping_address2 = forms.CharField(required = False)
 
    billing_country = fields.CountryField(blank_label='(select country)').formfield(required = False, widget= CountrySelectWidget(attrs = { 
        'class': 'custom-select d-block w-100'
    }))
    billing_city = forms.CharField(required= False)
    billing_address = forms.CharField(required= False)
    billing_address2 = forms.CharField(required = False)

    same_billing_address = forms.BooleanField(required= False)
    set_default_shipping = forms.BooleanField(required= False)
    use_default_shipping = forms.BooleanField(required= False)
    set_default_billing = forms.BooleanField(required= False)
    use_default_billing = forms.BooleanField(required= False)
    payment_option = forms.ChoiceField(widget = forms.RadioSelect, choices= PAYMENT_CHOICES)



class CouponForm(forms.Form):
    code = forms.CharField(widget = forms.TextInput(attrs= {
        'class': 'form-control',
        'placeholder': 'Promo-Code',
        'aria-label': 'Recipient',
        'aria-describeably': 'basic-addon2 '
    }))



class RefundForm(forms.Form):
    ref_code = forms.CharField()
    message = forms.CharField(widget= forms.Textarea(attrs={
        'rows': 4
    }))
    email = forms.EmailField()