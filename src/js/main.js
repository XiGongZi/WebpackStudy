import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../css/index.less';
import Vue from './vue-2.4.0';
import resource from './vue-resource-1.3.4';

// let teml1 = Vue.
let vm2 = new Vue({
    el:"#app2",
    data:{
        table:[],
    },
    resource,
    methods:{
        delThis(val){
            this.table.some((item,i) => {
                if(item.id === val){
                    this.table.splice(i,1);
                    return true;
                }
            });
        }
    },
    created(){
        console.log(__dirname)
        console.log(__dirname + "json/table.json")
        this.$http.post("localhost:3001/json/table.json",{},{ emulateJSON: true }).then(result => {
            console.log(result)
        });
    }
});
let vm = new Vue({
    el:"#app",
    data:{
        name:'hello world',
        add1:0,
        add2:0,
        result:0,
        calcSel:"+"
    },
    methods:{
        calc(){
            let val1 = Number(this.add1);
            let val2 = Number(this.add2);
            switch (this.calcSel) {
                case "+":
                    this.result = val1 + val2;
                    break;
                case "-":
                    this.result = val1 - val2;
                    break;
                case "x":
                    this.result = val1 * val2;
                    break;
                case "/":
                    this.result = val1 / val2;
                    break;
                default:
                    break;
            }
        },
    },
    created(){
        console.log(this.add1)
    }
});

// console.log("webpack-ser11111000");
// $("#app").click(function(){
//     // alert(`这里是inport22`)
//     console.log(112222222)
// });
// console.log("ok!!")