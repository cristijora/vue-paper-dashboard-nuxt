<template>
 <div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="header">
      </div>
      <div class="content">
        <div class="row">
          <div id="cardsContainer">
            
            <div class="card" v-for="message in messageCards" :key="message.title">
              <stats-card>
                <div class="icon-big text-center" :class="`icon-${message.type}`" slot="header">
                  <i :class="message.icon"></i>
                </div>
                <div class="text-center" slot="content">
                  <p><a v-if="message.isUrl" :href="message.title" target="_blank"> {{message.title}}</a>
                  <span v-else>{{message.title}}</span>
                  </p>
                  {{message.value}}
                </div>
              </stats-card>
            </div>

          </div>
          <div v-if="showBut" class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="newCard">
            Press me!
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
  import StatsCard from '~/components/UIComponents/Cards/StatsCard.vue'
  export default {
    layout: 'dashboard',
    data(){
      return{
        currentMessage: 0,
        showBut:true,
        messageCards : [
        ],
        icons:["ti-truck","ti-timer","ti-ticket","ti-thumb-up","ti-thumb-down","ti-stats-up","ti-stats-down","ti-shine","ti-shift-right","ti-shift-left","ti-shift-right-alt","ti-shift-left-alt","ti-shield","ti-notepad","ti-server","ti-pulse","ti-printer","ti-power-off","ti-plug","ti-pie-chart","ti-panel","ti-package","ti-music","ti-music-alt","ti-mouse","ti-mouse-alt","ti-money","ti-microphone","ti-menu","ti-menu-alt","ti-map","ti-map-alt","ti-location-pin","ti-light-bulb","ti-info","ti-infinite","ti-id-badge","ti-hummer","ti-home","ti-help","ti-headphone","ti-harddrives","ti-harddrive","ti-gift","ti-game","ti-filter","ti-files","ti-file","ti-zip","ti-folder","ti-envelope","ti-dashboard","ti-cloud","ti-cloud-up","ti-cloud-down","ti-clipboard","ti-calendar","ti-book","ti-bell","ti-basketball","ti-bar-chart","ti-bar-chart-alt","ti-archive","ti-anchor","ti-alert","ti-alarm-clock","ti-agenda","ti-write","ti-wallet","ti-video-clapper","ti-video-camera","ti-vector","ti-support","ti-stamp","ti-slice","ti-shortcode","ti-receipt","ti-pin2","ti-pin-alt","ti-pencil-alt2","ti-eraser","ti-more","ti-more-alt","ti-microphone-alt","ti-magnet","ti-line-double","ti-line-dotted","ti-line-dashed","ti-ink-pen","ti-info-alt","ti-help-alt","ti-headphone-alt","ti-gallery","ti-face-smile","ti-face-sad","ti-credit-card","ti-comments-smiley"],
        messages: ["U2FsdXQ=", "VGUgY29udGFjdGV6IHBlbnRydSBvIHBveml0aWUgZGVzY2hpc2EgZGUgdnVlLmpzIGRldmVsb3BlciBsYSBHYW1lcmluYQ==", "TWktYSBhdHJhcyBhdGVudGlhIGFjdGl2aXRhdGVhIHRhIHBlIHN0YWNrIG92ZXJmbG93IHNpIGFtIGRhdCB1biBvY2hpIHNpIHBlIHJlcG9zaXRvcnktdXJpbGUgdGFsZQ==", "SSBsaWtlIHdoYXQgeW91J3ZlIHdvcmtlZCBvbg==", "SXRpIGxhcyBsaW5rIGxhIHVuIGRvY3VtZW50IGN1IG1haSBtdWx0ZSBkZXRhbGlp", "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xSjktUGdLMU5WeC1fbk5yVTl4eHpnYks5eUJwYlNocHVvNk9CQi1JVkdJUS9lZGl0", "aWYgeW91J3JlIHVwIGZvciBpdCwgbWEgcG90aSBjb250YWN0YSBwZSBmbG9yaW5AZ2FtZXJpbmEuZXU=", "U2EgbmUgYXV6aW0gY3UgYmluZSE=", "RmxvcmluIC0gQ1RPQEdhbWVyaW5h"]
      }
    },
    components:{
      StatsCard
    },
    methods:{
      getMessage(message){
        return Buffer.from(message, 'base64').toString();
      },
      newCard(){
        let message = this.getMessage(this.messages[this.currentMessage++]);
        this.messageCards.push({
            type: 'warning',
            icon: this.icons[Math.floor(Math.random()*100)],
            title: message,
            value: "^^",
            isUrl: message.split('https://').length>1
          });
          if(this.currentMessage == this.messages.length){
            this.showBut = false;
          }
      }
    }
  }

</script>
<style>

</style>
