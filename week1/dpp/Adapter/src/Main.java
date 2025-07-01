public class Main {
    public static void main(String[] args) {
        // Using PayPal through adapter
        PaymentProcessor paypal = new PayPalAdapter(new PayPalGateway());
        paypal.processPayment(150.00);

        // Using Stripe through adapter
        PaymentProcessor stripe = new StripeAdapter(new StripeGateway());
        stripe.processPayment(250.00);
    }
}
