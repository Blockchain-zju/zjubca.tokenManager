<template>
  <div id="app" class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" style="display:flex">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button v-show="isShow" class="md-icon-button" @click="goback">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
            <span v-show="!isShow">&nbsp&nbsp&nbsp</span>
            <span @click="login()">{{Account}}</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>

        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full" :md-active.sync="menuVisible" class="md-right">


        <md-list>
          <md-list-item>
            <md-icon>
              <router-link to="/" style=" text-decoration:none;">home</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="clickshouye()">首页</span>
          </md-list-item>

          <md-list-item>
            <md-icon>
              <router-link to="/account" style=" text-decoration:none;">face</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="clickaccount()">我的账户</span>
          </md-list-item>

          <md-list-item>
            <md-icon>
              <router-link to="/multisig" style=" text-decoration:none;">receipt</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="clickmultisig()">相关提案</span>
          </md-list-item>

          <md-list-item>
            <md-icon>
              <router-link to="/allmembers" style=" text-decoration:none;">supervisor_account</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="clickmember()">成员信息</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
    <md-dialog-alert
        :md-active.sync="first"
        md-content="Please unlock your scatter!"
        md-confirm-text="OK!"/>
  </div>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }

  .page-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .md-app {
    overflow: hidden;
    border: 1px solid rgba(rgb(0, 0, 0), .12);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-app-content {
    padding-top: 16px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .md-list-item-text{
    color:rgba(0, 110, 255, 0.918);
  }
</style>

<script>
  import router from './router';
  import store from './store';
  import ScatterJS from 'zjubca-scatterjs-core'
  import ScatterEOS from 'zjubca-scatterjs-plugin-eosjs'
  import Eos from 'eosjs'

  export default {
    name: 'Normal',
    data() {
      return {
        Account: null,
        menuVisible: false,
        isShow: false,
        first: false
      }
    },
    async created() {
      await this.initialize();
    },
    watch: {
      $route(now, old) {     //监控路由变换，控制返回按钮的显示
        if (now.path == "/" || now.path == "/account" || now.path == "/member") {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      }
    },
    methods: {
      async login() {
        if (this.$store.state.login == false) {
          this.first = true;
          await this.initialize();
        } else {
          return;
        }
      },
      goback() {
        router.go(-1);
      },
      clickshouye(){
        this.menuVisible=false;
        this.$router.push({
          name: 'shouye',
        });
      },
            clickaccount(){
        this.menuVisible=false;
        this.$router.push({
          name: 'account',
        });
      },
            clickmultisig(){
        this.menuVisible=false;
        this.$router.push({
          name: 'multisig',
        });
      },
      clickmember(){
        this.menuVisible=false;
        this.$router.push({
          name: 'member',
        });
      },
      async initialize() {
        if (this.$store.state.login == true) {
          console.log("login");
          return;
        }
        await ScatterJS.plugins(new ScatterEOS());
        await ScatterJS.scatter.connect('ZJUBCA.TOKEN', {
          initTimeout: 10000,
        }).then(async connected => {
          if (!connected) {
            //alert('please unlock your scatter');
            this.first = true;
            this.Account = "登陆";
            return false
          }
          const network = {
            blockchain: 'eos',
            protocol: 'https',
            host: 'api-kylin.eoslaomao.com',
            port: 443,
            chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
          };

          let scatter = ScatterJS.scatter;
          await scatter.getIdentity({accounts: [network]}).then(async identity => {
            const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
            this.$store.state.scatter = scatter;
            this.$store.state.account = account;
            this.$store.state.login = true;
            this.Account = account.name;
          });
          // const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
          // const eos = scatter.eos(network, Eos, {expireInSeconds: 20});
          // console.log("ok");
          // this.$store.state.eos=eos;
          // this.$store.state.scatter=scatter;
          // this.$store.state.account=account;
          // this.Account=account.name;
        });
      },
    }
  }

</script>
