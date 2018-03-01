console.log('hola')
var app = new Vue({
    el: "#app",
    delimiters: ["[[", "]]"],
    data: {
        chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    }
})