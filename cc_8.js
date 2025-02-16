// Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Task 2 - Product Price After Discount
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

// Task 3 - Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    let serviceFee = amount * feeRate;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
};

// Task 4 - Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {
    let rate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100;
    let totalCost = (rate * days) + (insurance ? days * 20 : 0);
    return `Total Rental Cost: $${totalCost}`;
}

// Task 5 - Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

// Task 6 - Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500];
function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Task 7 - Shopping Cart Tracker
function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}

// Task 8 - Savings Growth Projection
function calculateSavings(years, amount) {
    if (years === 10) return `Projected Savings: $${amount.toFixed(2)}`;
    return calculateSavings(years + 1, amount * 1.05);
}

// Exporting for testing
console.log(calculateSalary(5000, 500, 0.1));
console.log(calculateDiscount(100, 0.2));
console.log(calculateServiceFee(200, "Premium"));
console.log(calculateRentalCost(3, "Economy", true));
console.log(calculateLoanPayment(1000, 0.05, 2));
console.log(filterLargeTransactions(transactions, amount => amount > 1000));
let cart = createCartTracker();
console.log(cart(20));
console.log(cart(35));
console.log(calculateSavings(8, 1000));
