#STEP 1. Print in the desired format
ID = "Wadas4342"
Q = '5'

print ( "  { 'price' : " + "'"+ ID + "'" + ", 'quantity' : " + Q + "}"     )
print(f" {{ 'price' : '{ID}' , 'quantity' : '{Q}' }} ")

#Step 2 Define a shortcut function to do so

def list(id, quantity):
    print(f" {{ 'price' : '{id}' , 'quantity' : {quantity} }} ")
list("gdfg43534543", 6)


        order = Order.objects.get(user = self.request.user, ordered = False)
        output = ""
        for order_item in order.items.all():
            P = order_item.item.stripe_price_id
            Q = order_item.quantity
            output += (f" {{ 'price' : '{P}' , 'quantity' : {Q} }} ") + ", "
        list_items = output
        print(list_items)

        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                list_items
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/orders/success/',
            cancel_url=YOUR_DOMAIN + '/orders/cancel/',
