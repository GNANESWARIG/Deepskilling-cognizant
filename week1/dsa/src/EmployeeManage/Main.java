public class Main {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager(5);

        manager.addEmployee(new Employee(1, "Alice", "Manager", 75000));
        manager.addEmployee(new Employee(2, "Bob", "Developer", 60000));
        manager.addEmployee(new Employee(3, "Charlie", "Tester", 50000));

        System.out.println("All Employees:");
        manager.displayAll();

        System.out.println("\nSearching for Employee with ID 2:");
        Employee emp = manager.searchEmployee(2);
        if (emp != null) emp.display();

        System.out.println("\nDeleting Employee with ID 2:");
        manager.deleteEmployee(2);

        System.out.println("\nAll Employees after deletion:");
        manager.displayAll();
    }
}
