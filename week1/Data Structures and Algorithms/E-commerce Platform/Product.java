public class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "[" + productId + ", " + productName + ", " + category + "]";
    }
}
//Using linear search
public static Product linearSearch(Product[] products, String name) {
    for (Product p : products) {
        if (p.productName.equalsIgnoreCase(name)) {
            return p;
        }
    }
    return null;
}
//using binary search
import java.util.Arrays;
import java.util.Comparator;

public static Product binarySearch(Product[] products, String name) {
    int left = 0, right = products.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        int cmp = products[mid].productName.compareToIgnoreCase(name);

        if (cmp == 0)
            return products[mid];
        else if (cmp < 0)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return null;
}
Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
