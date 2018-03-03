console.log('hola')
var app = new Vue({
    el: "#app",
    delimiters: ["[[", "]]"],
    data: {
        chartData: [],
        second:0,    
    },
    
    methods:{
        randomNumber: function(){
            values=[new Date(),Math.random()]
            this.chartData.push(values)
        },
        secondUp: function(){
            this.second +=1
        }
    },
    created:function(){
        setInterval(this.randomNumber,1000)
        setInterval(this.secondUp,1000)
    },
})