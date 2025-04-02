function selectPlan(element, planName) {
    document.querySelectorAll(".plan").forEach(plan => {
        plan.classList.remove("selected");
    });

    element.classList.add("selected");

    const payBtn = document.getElementById("payBtn");
    payBtn.textContent = `Proceed with ${planName} Plan`;
    payBtn.classList.add("active");
    payBtn.disabled = false;
}


const stripe = Stripe("pk_test_51QRWuiJeQjGXosToh3qhFHci62XSluNbyWdvSpErFHRGqgJ70TyUbjkSXrBqWw1kfu4yl0VYg0JiXGWJWXpuVK1A00p72fxlIJ");

document.getElementById("payBtn").addEventListener("click", async () => {
    const selectedPlan = document.querySelector(".plan.selected h3").innerText;

    const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: selectedPlan }),
    });

    const session = await response.json();
    window.location.href = session.url;
});

