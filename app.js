var app = new Vue({
    el :'#app',
    data: {
        bil1: "",
        bil2: "",
        hasil: "",
    },
    methods: {
        tambah: function () {
            return this.hasil = parseInt(this.bil1) + parseInt(this.bil2);
            },
        kurang: function () {
            return this.hasil = parseFloat(this.bil1) - parseFloat(this.bil2);
            },
        kali: function () {
            return this.hasil = parseFloat(this.bil1) * parseFloat(this.bil2);
            },
        bagi: function () {
            return this.hasil = parseFloat(this.bil1) / parseFloat(this.bil2);
            },
        },
        
        
    
    })

