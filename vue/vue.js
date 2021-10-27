const app = Vue.createApp({
    data() {
      return {
        info: {
          info1: {
            title: "Work",
            timeframes: {
              daily: {
                current: 5,
                previous: 7
              },
              weekly: {
                current: 32,
                previous: 36
              },
              monthly: {
                current: 103,
                previous: 128
              }
            },
				  bg: "bgwork",
				  url: "images/icon-work.svg"
        },
        info2: {
          title: "Play",
          timeframes: {
            daily: {
              current: 1,
              previous: 2
            },
            weekly: {
              current: 10,
              previous: 8
            },
            monthly: {
              current: 23,
              previous: 29
            }
          },
          bg: "bgplay",
          url: "images/icon-play.svg"
        },
        info3 :  {
          title: "Study",
          timeframes: {
            daily: {
              current: 0,
              previous: 1
            },
            weekly: {
              current: 4,
              previous: 7
            },
            monthly: {
              current: 13,
              previous: 19
            }
          },
					bg: "bgstudy",
					url: "images/icon-study.svg"
        },
        info4  :{
          title: "Exercise",
          timeframes: {
            daily: {
              current: 1,
              previous: 1
            },
            weekly: {
              current: 4,
              previous: 5
            },
            monthly: {
              current: 11,
              previous: 18
            }
          },
					bg: "bgexercise",
					url: "images/icon-exercise.svg"
        },
        info5: {
          title: "Social",
          timeframes: {
            daily: {
              current: 1,
              previous: 3
            },
            weekly: {
              current: 5,
              previous: 10
            },
            monthly: {
              current: 21,
              previous: 23
            }
          },
					bg: "bgsocial",
					url: "images/icon-social.svg"
        },
        info6: {
          title: "Self Care",
          timeframes: {
            daily: {
              current: 0,
              previous: 1
            },
            weekly: {
              current: 2,
              previous: 2
            },
            monthly: {
              current: 7,
              previous: 11
            }
          },
					bg: "bgself",
					url: "images/icon-self-care.svg"
          }
        },
			  time: "weekly"
      }
    },
	methods: {
		seccionTipo(tipo) {
			switch (tipo) {
				case "daily":
					this.time="daily";
					break;
				case "weekly":
					this.time="weekly";
					break;
				case "monthly":
					this.time="monthly";
					break;
			}
		}
	},
  computed: {
    tipo() {
      return this.time;
    }
  }
})

app.component('card', {
    props: ['tema','predaily','posdaily','preweekly','posweekly','premonthly','posmonthly','bg','url','time'],
    template:`
        <div class="bgComponent" :class="bg">
			<img class="img-logo" :src="url" alt="image-tipe">
			<div class="bgFondo">
				<div class="titulo">
					<span>
						{{tema}}
					</span>
					<img src="../images/icon-ellipsis.svg" alt="icon">
				</div>
				<div class="info">
					<label class="pre" v-if="time=='daily'">
						{{predaily}}hrs
					</label>
					<label class="pos" v-if="time=='daily'">
						Last Week - {{posdaily}}hrs
					</label>

					<label class="pre" v-if="time=='weekly'">
						{{preweekly}}hrs
					</label>
					<label class="pos" v-if="time=='weekly'">
						Last Week - {{posweekly}}hrs
					</label>

					<label class="pre" v-if="time=='monthly'">
						{{premonthly}}hrs
					</label>
					<label class="pos" v-if="time=='monthly'">
						Last Week - {{posmonthly}}hrs
					</label>
				</div>
			</div>
        </div>
    `
})
app.mount('#app')