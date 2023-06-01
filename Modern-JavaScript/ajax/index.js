document.getElementById("btn1").addEventListener("click", loadCustomer)

function loadCustomer() {
    const xhr = new XMLHttpRequest();

    //requesting to read file
    xhr.open("GET", "customer.json", true)

    xhr.onload = function () {
        if (this.status === 200) {

            //parsing the response to get those attributes
            const customer = JSON.parse(this.responseText)
            document.getElementById("customer").innerHTML = `
            <h3>Customer</h3>
            <ul> 
            <li> ID : ${customer.id}</li>
            <li> Name : ${customer.name}</li>
            <li> Order-ID : ${customer.orderID}</li>
            <li> Total : ${customer.totalBill}</li>
            </ul>
            `
        }
    }
    //sending data as response
    xhr.send()
}

document.getElementById("btn2").addEventListener("click", loadCustomers)

function loadCustomers() {
    const xhr = new XMLHttpRequest();

    //requesting to read file
    xhr.open("GET", "customers.json", true)

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)

            //parsing the response to get those attributes
            const customer = JSON.parse(this.responseText)
            document.getElementById("customers").innerHTML = `
            <h3>Customers</h3>
            ${customer.map((data) => `
                <ul> 
                    <li>ID: ${data.id}</li>
                    <li>Name: ${data.name}</li>
                    <li>Order-ID: ${data.orderID}</li>
                    <li>Total: ${data.totalBill}</li>
                </ul>
            `).join('')}
        `;
        
        }
    }
    //sending data as response
    xhr.send()
}