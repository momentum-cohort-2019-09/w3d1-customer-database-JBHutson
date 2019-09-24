function customersToHtml (customer) {
    return `
    <div class = "customer">
        <img src= ${customer.picture.large}>
        <div class= "customerName">${customer.name.first} ${customer.name.last}</div>
        <div class="customerEmail">${customer.email}</div>
        <ul class="locations">
            <li><span class="customerLocation">${(customer.location.street)}</span></li>
            <li><span class="customerLocation">${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</span>
        </ul>
        <ul class="dates">
            <li><div class="customerDate">DOB: ${moment(customer.dob).format("MMM D, YYYY")}</div></li>
            <li><div class="customerDate">Customer Since: ${moment(customer.registered).format("MMM D, YYYY")}</div></li>
        </ul>
    </div>
    `
}

document.querySelector('#container').innerHTML = customers.map(customersToHtml).join('\n');