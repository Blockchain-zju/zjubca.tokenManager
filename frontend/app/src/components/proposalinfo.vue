<template>
    <div>
            <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">提案详情</div>
        </md-card-header>

   <md-card-content style="overflow: hidden;">
      <md-table style="overflow: hidden;overflow: hidden;">

        <md-table-row :key="1">
          <md-table-cell>提案名</md-table-cell>
          <md-table-cell>{{item.proposal_name}}</md-table-cell>
        </md-table-row>
        <md-table-row :key="2">
          <md-table-cell>提案人</md-table-cell>
          <md-table-cell>{{item.proposer}}</md-table-cell>
        </md-table-row>
        <md-table-row :key="3">
          <md-table-cell>提案请求转账方</md-table-cell>
          <md-table-cell>{{item.from}}</md-table-cell>
        </md-table-row>
        <md-table-row :key="4">
          <md-table-cell>收款方</md-table-cell>
          <md-table-cell>{{item.to}}</md-table-cell>
        </md-table-row>
        <md-table-row :key="5">
          <md-table-cell>金额</md-table-cell>
          <md-table-cell>{{item.amount}}</md-table-cell>
        </md-table-row>
        <md-table-row :key="6">
          <md-table-cell>备忘</md-table-cell>
          <md-table-cell>{{item.memo}}</md-table-cell>
        </md-table-row>
      </md-table>
    </md-card-content>

        <md-card-actions>
          <md-button @click="approve()">同意</md-button>
          <md-button @click="approve()">驳回</md-button>
        </md-card-actions>
      </md-ripple>
       <md-snackbar :md-position="position"
      :md-duration=4000
      :md-active.sync="first" 
      md-persistent>
      <span>成功签署提案!</span>
      <md-button class="md-primary" @click="goback()">ok</md-button>
    </md-snackbar>
    </md-card>
    </div>
</template>
<script>
import Eos from 'eosjs'
import {eos} from '../main'
export default {
    data(){
        return{
        first: false,
        position:'center',
        }
    },
    methods:{
      getParams() {
        this.item = this.$route.query.item;
      },
      async approve(){
                  const network = {
          blockchain: 'eos',
          protocol: 'https',
          host: 'api-kylin.eoslaomao.com',
          port: 443,
          chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
        };
        console.log(this.$store.state.scatter);
        const account = this.$store.state.account;
        const Scattereos = await this.$store.state.scatter.eos(network, Eos, {expireInSeconds: 20});
        console.log(account);
                       try{
                        await Scattereos.transaction({
                            // actions:[{
                            //         account:"eosio.msig",
                            //         name:"approve",
                            //         authorization:[{
                            //           actor:account.name,
                            //           permission:account.authority
                            //         }],
                            //         data:{
                            //         proposer:"yangjiani233",
                            //         proposal_name:"kongtou",
                            //         level:{
                            //             actor:account.name,
                            //             permission:account.authority,
                            //         },                                   
                            //         }

                            // }]
                actions: [
                    {
                      account: "zjubcatokens", //has to be the smart contract name of the token you want to transfer - eosio for EOS or eosjackscoin for JKR for example
                      name: "transfer",
                      authorization: [{
                        actor: this.$store.state.account.name,
                        permission: this.$store.state.account.authority
                      }
                      ],
                      data: {
                        from: this.$store.state.account.name,
                        to: 'zjubcatokens',
                        quantity: "1.0000 ZJUBCA",
                        memo: "enroll" 
                      }
                    }]     
                        
      });
                console.log(res);
          let result = null;
          this.loading = true;
          let intv = setInterval(async () => {
            try {
              result = await scattereos.getTransaction(res.transaction_id)
              if (result.block_num > 0) {
                clearInterval(intv);
                this.loading = false;
                this.first=true;
              }
            } catch (e) {
              //console.log(e);
              console.log("fail");
              this.first=true;
            }
          }, 1000);
        } catch (e) {
          let error = e;
          try {
            error = JSON.parse(e);
          } catch (ee) {
            // do nothing
          }
          if (error.message === 'nologin') {
            //this.alert("请先登录")
          } else if (error.code !== 402) {
            if (error.error) {
              //this.alert(error.error.details[0].message);
              this.first=true;
            } else {
              //this.alert(error.message)
              this.first=true;
            }
          }
        }
    },
    goback(){
        this.$router.push({
          name: 'multisig',
        });
    }
    },
    created(){
        this.getParams();
    }
}
</script>

