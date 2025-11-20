// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('budgetForm');
    const housingType = document.getElementById('housingType');
    const transportationType = document.getElementById('transportationType');

    // Show/hide housing fields based on selection
    housingType.addEventListener('change', function() {
        document.getElementById('campusFields').style.display = 'none';
        document.getElementById('offCampusFields').style.display = 'none';
        
        if (this.value === 'campus') {
            document.getElementById('campusFields').style.display = 'block';
        } else if (this.value === 'offcampus') {
            document.getElementById('offCampusFields').style.display = 'block';
        }
    });

    // Show/hide transportation fields based on selection
    transportationType.addEventListener('change', function() {
        document.getElementById('carFields').style.display = 'none';
        document.getElementById('bikeFields').style.display = 'none';
        document.getElementById('publicTransportFields').style.display = 'none';
        
        if (this.value === 'car') {
            document.getElementById('carFields').style.display = 'block';
        } else if (this.value === 'bike') {
            document.getElementById('bikeFields').style.display = 'block';
        } else if (this.value === 'public') {
            document.getElementById('publicTransportFields').style.display = 'block';
        }
    });

    // Show/hide educational and personal expense fields
    const educationalCheckbox = document.getElementById('includeEducational');
    const personalCheckbox = document.getElementById('includePersonal');

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("Form submitted");
        // Get basic income
        const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value) || 0;
        
        // Initialize expenses objects
        let housingExpenses = 0;
        let transportationExpenses = 0;
        let educationalExpenses = 0;
        let personalExpenses = 0;
        let monthlySavings = 0;

        // Calculate housing expenses
        if (housingType.value === 'campus') {
            housingExpenses = (parseFloat(document.getElementById('dormPrice').value) || 0) +
                            (parseFloat(document.getElementById('mealPlan').value) || 0);
        } else if (housingType.value === 'offcampus') {
            housingExpenses = (parseFloat(document.getElementById('mortgage').value) || 0) +
                            (parseFloat(document.getElementById('utilities').value) || 0) +
                            (parseFloat(document.getElementById('rent').value) || 0) +
                            (parseFloat(document.getElementById('hoa').value) || 0) +
                            (parseFloat(document.getElementById('maintenance').value) || 0); 
        }

        // Calculate transportation expenses
        if (transportationType.value === 'car') {
            transportationExpenses = (parseFloat(document.getElementById('carPayment').value) || 0) +
                                   (parseFloat(document.getElementById('carInsurance').value) || 0) +
                                   (parseFloat(document.getElementById('gasExpense').value) || 0) +
                                   (parseFloat(document.getElementById('parking').value) || 0);
        } else if (transportationType.value === 'bike') {
            transportationExpenses = (parseFloat(document.getElementById('bikeMaintenance').value) || 0) +
                                   (parseFloat(document.getElementById('bikeAccessories').value) || 0);
        } else if (transportationType.value === 'public') {
            transportationExpenses = parseFloat(document.getElementById('publicTransport').value) || 0;
        }

        /// Calculate Educational Expenses
        educationalExpenses = (parseFloat(document.getElementById('tuitionFees').value) || 0) +
                              (parseFloat(document.getElementById('booksSupplies').value) || 0) +
                              (parseFloat(document.getElementById('studentLoans').value) || 0);

        /// Calculate Personal Expenses
        personalExpenses = (parseFloat(document.getElementById('foodDining').value) || 0) +
                           (parseFloat(document.getElementById('clothing').value) || 0) +
                           (parseFloat(document.getElementById('entertainment').value) || 0) +
                           (parseFloat(document.getElementById('healthcare').value) || 0) +
                           (parseFloat(document.getElementById('miscellaneous').value) || 0);

        // Calculate Monthly Savings
        monthlySavings = parseFloat(document.getElementById('savings').value) || 0;

        // Calculate totals
        const totalExpenses = housingExpenses + transportationExpenses + educationalExpenses + personalExpenses;
        const remainingBudget = monthlyIncome - totalExpenses - monthlySavings;

        // Display results
        const results = document.getElementById('results');
        results.innerHTML = `
            <h3>Budget Summary</h3>
            <p>Monthly Income: $${monthlyIncome.toFixed(2)}</p>
            <h4>Expenses Breakdown:</h4>
            <p>Housing Expenses: $${housingExpenses.toFixed(2)}</p>
            <p>Transportation Expenses: $${transportationExpenses.toFixed(2)}</p>
            <p>Educational Expenses: $${educationalExpenses.toFixed(2)}</p>
            <p>Personal Expenses: $${personalExpenses.toFixed(2)}</p>
            <p>Monthly Savings: $${monthlySavings.toFixed(2)}</p>
            <h4>Totals:</h4>
            <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
            <p>Remaining Budget: $${remainingBudget.toFixed(2)}</p>
        `;
    });
});
