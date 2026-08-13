// =====================================================
// CS302JSC — Practical Lab Session 3
// Smart Shopping Cart & Billing System
// =====================================================


// =====================================================
// 1. CREATE THREE PRODUCT OBJECTS
// =====================================================

const product1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const product2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const product3 = {
    name: "Bag",
    price: 800,
    qty: 1
};


// =====================================================
// 2. CHECK PRODUCT PRICE DATA TYPES
// =====================================================

console.log("Product 1 Price Type:", typeof product1.price);
console.log("Product 2 Price Type:", typeof product2.price);
console.log("Product 3 Price Type:", typeof product3.price);


// =====================================================
// 3. CALCULATE EACH PRODUCT SUBTOTAL
// =====================================================

const subtotal1 = product1.price * product1.qty;

const subtotal2 = product2.price * product2.qty;

const subtotal3 = product3.price * product3.qty;


// =====================================================
// 4. CALCULATE GRAND TOTAL
// =====================================================

const grandTotal =
    subtotal1 +
    subtotal2 +
    subtotal3;


// =====================================================
// 5. TIERED DISCOUNT
//
// >= ₹5000  → 20%
// >= ₹2000  → 10%
// >= ₹1000  → 5%
// < ₹1000   → 0%
// =====================================================

const discountPercentage =
    grandTotal >= 5000 ? 20 :
    grandTotal >= 2000 ? 10 :
    grandTotal >= 1000 ? 5 :
    0;


// =====================================================
// 6. CALCULATE DISCOUNT AMOUNT
// =====================================================

const discountAmount =
    grandTotal * discountPercentage / 100;


// =====================================================
// 7. AMOUNT AFTER DISCOUNT
// =====================================================

const amountAfterDiscount =
    grandTotal - discountAmount;


// =====================================================
// 8. CALCULATE GST
// GST = 18%
// =====================================================

const gstRate = 18;

const gstAmount =
    amountAfterDiscount * gstRate / 100;


// =====================================================
// 9. FINAL PAYABLE AMOUNT
// =====================================================

const finalPayable =
    amountAfterDiscount + gstAmount;


// =====================================================
// 10. FREE SHIPPING
//
// Free shipping if:
// amount after discount >= ₹1500
// OR
// there are 3 or more distinct products
// =====================================================

const distinctItems = 3;

const isFreeShipping =
    amountAfterDiscount >= 1500 ||
    distinctItems >= 3;


// =====================================================
// 11. SHIPPING STATUS
// =====================================================

const shippingStatus =
    isFreeShipping
        ? "FREE"
        : "₹100 shipping charge";


// =====================================================
// 12. BONUS — LOYALTY POINTS
//
// 1 point for every ₹100 spent
// =====================================================

const loyaltyPoints =
    finalPayable / 100;


// =====================================================
// 13. PRINT RECEIPT
// =====================================================

console.log("");
console.log("==========================================");
console.log("         SMART SHOPPING RECEIPT");
console.log("==========================================");

console.log("");

console.log(
    product1.name +
    " x " +
    product1.qty +
    " = ₹" +
    subtotal1.toFixed(2)
);

console.log(
    product2.name +
    " x " +
    product2.qty +
    " = ₹" +
    subtotal2.toFixed(2)
);

console.log(
    product3.name +
    " x " +
    product3.qty +
    " = ₹" +
    subtotal3.toFixed(2)
);

console.log("------------------------------------------");

console.log(
    "Grand Total       : ₹" +
    grandTotal.toFixed(2)
);

console.log(
    "Discount           : " +
    discountPercentage +
    "%"
);

console.log(
    "Discount Amount    : ₹" +
    discountAmount.toFixed(2)
);

console.log(
    "After Discount     : ₹" +
    amountAfterDiscount.toFixed(2)
);

console.log(
    "GST (" +
    gstRate +
    "%)             : ₹" +
    gstAmount.toFixed(2)
);

console.log(
    "Final Payable      : ₹" +
    finalPayable.toFixed(2)
);

console.log(
    "Shipping           : " +
    shippingStatus
);

console.log(
    "Loyalty Points     : " +
    loyaltyPoints.toFixed(2)
);

console.log("==========================================");
console.log("             THANK YOU!");
console.log("==========================================");