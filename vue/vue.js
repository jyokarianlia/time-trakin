const app = Vue.createApp({
    data() {
        return {
            info: {
                info1: {
                    title: "Work",
                    "timeframes": {
                      "daily": {
                        "current": 5,
                        "previous": 7
                      },
                      "weekly": {
                        "current": 32,
                        "previous": 36
                      },
                      "monthly": {
                        "current": 103,
                        "previous": 128
                      }
                    }
                  },
                  info2: {
                    title: "Play",
                    "timeframes": {
                      "daily": {
                        "current": 1,
                        "previous": 2
                      },
                      "weekly": {
                        "current": 10,
                        "previous": 8
                      },
                      "monthly": {
                        "current": 23,
                        "previous": 29
                      }
                    }
                  },
                  info3 :  {
                    title: "Study",
                    "timeframes": {
                      "daily": {
                        "current": 0,
                        "previous": 1
                      },
                      "weekly": {
                        "current": 4,
                        "previous": 7
                      },
                      "monthly": {
                        "current": 13,
                        "previous": 19
                      }
                    }
                  },
                  info4  :{
                    title: "Exercise",
                    "timeframes": {
                      "daily": {
                        "current": 1,
                        "previous": 1
                      },
                      "weekly": {
                        "current": 4,
                        "previous": 5
                      },
                      "monthly": {
                        "current": 11,
                        "previous": 18
                      }
                    }
                  },
                  info5: {
                    title: "Social",
                    "timeframes": {
                      "daily": {
                        "current": 1,
                        "previous": 3
                      },
                      "weekly": {
                        "current": 5,
                        "previous": 10
                      },
                      "monthly": {
                        "current": 21,
                        "previous": 23
                      }
                    }
                  },
                  info6: {
                    title: "Self Care",
                    "timeframes": {
                      "daily": {
                        "current": 0,
                        "previous": 1
                      },
                      "weekly": {
                        "current": 2,
                        "previous": 2
                      },
                      "monthly": {
                        "current": 7,
                        "previous": 11
                      }
                    }
                  }
            }
        }
    }
})

app.component('card', {
    props: ['tema','antes','despues'],
    template:`
        <div class="bgFondo" :class="bg"></div>
        <div>
            <div class="titulo">
                <label>
                    {{tema}}
                </label>
                <img src="../images/icon-ellipsis.svg" alt="icon">
            </div>
            <div class="info">
                <label>
                    {{antes}} hrs
                </label>
                <label>
                    Last Week - {{despues}} hrs
                </label>
            </div>
        </div>
    `
})
app.mount('#app')