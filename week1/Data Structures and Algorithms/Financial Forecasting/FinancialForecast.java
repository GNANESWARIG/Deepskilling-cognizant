public class FinancialForecast {

    public static double futureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return futureValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }
    public static void main(String[] args) {
        double initial = 10000;    
        double rate = 0.05;         
        int futureYears = 5;        
        double value = futureValue(initial, rate, futureYears);
    
        System.out.println("Future Value after " + futureYears + " years: ₹" + value);
    }
}
