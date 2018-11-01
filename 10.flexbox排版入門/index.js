var vm = new Vue({
    el: "#app",
    data: {
        direction: "row",
        justify: "center",
        align: "center",
        values: {
            direction: ["row", "column", "row-reverse", "column-reverse"],
            justify: ["flex-start", "center", "flex-end", "space-around", "space-between", "space-evenly"],

            align: ["flex-start", "center", "flex-end", "space-around", "space-between", "space-evenly"]
        }
    },
    computed: {
        getStyle() {
            return {
                "flex-direction": this.direction,
                "justify-content": this.justify,
                "align-items": this.align,

            }
        }
    }
})