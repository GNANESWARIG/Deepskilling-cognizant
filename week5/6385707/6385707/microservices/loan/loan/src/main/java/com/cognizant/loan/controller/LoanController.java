package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoanDetails(@PathVariable("number") String number) {
        return new Loan(number, "home", 500000);
    }

    static class Loan {
        private String number;
        private String type;
        private int amount;

        public Loan(String number, String type, int amount) {
            this.number = number;
            this.type = type;
            this.amount = amount;
        }

        public String getNumber() { return number; }
        public String getType() { return type; }
        public int getAmount() { return amount; }
    }
}
