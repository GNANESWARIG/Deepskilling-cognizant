package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Setup – runs before every test
    @Before
    public void setUp() {
        calculator = new Calculator(); // Arrange
        System.out.println("Setting up...");
    }

    // Teardown – runs after every test
    @After
    public void tearDown() {
        calculator.reset(); // optional
        System.out.println("Cleaning up...");
    }

    // Test using AAA pattern
    @Test
    public void testAdd() {
        // Arrange: done in setUp()

        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        // Act
        int result = calculator.subtract(5, 2);

        // Assert
        assertEquals(3, result);
    }
}
