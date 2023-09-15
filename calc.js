function calculate() {
    // Profit and Charges
    const customerCharge = parseFloat(document.getElementById('customerCharge').value);
    const ppc = parseFloat(document.getElementById('ppc').value);
    const equipmentReimbursement = parseFloat(document.getElementById('equipmentReimbursement').value);
    const dishReimbursement = parseFloat(document.getElementById('dishReimbursement').value);

    const grossProfit = customerCharge + ppc + equipmentReimbursement + dishReimbursement;
    document.getElementById('grossProfit').textContent = grossProfit.toFixed(2);

    // Costs and Expenses
    const hardwareCost = parseFloat(document.getElementById('hardwareCost').value);
    const installationCharge = parseFloat(document.getElementById('installationCharge').value);

    let netProfit = grossProfit - hardwareCost - installationCharge;

    // Deduct the lead fee
    const leadFee = 50;
    netProfit -= leadFee;

    document.getElementById('netProfit').textContent = netProfit.toFixed(2);

    // Commission
    const commissionPercent = parseFloat(document.getElementById('commissionPercent').value) / 100;
    const netCommission = netProfit * commissionPercent;
    document.getElementById('netCommission').textContent = netCommission.toFixed(2);
}
