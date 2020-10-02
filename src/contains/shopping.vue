<template>
    <div>
        <v-toolbar>
            <h5 style="padding: 20px;">
                Catalogo de packs
            </h5>
            <template v-slot:extension>
                <v-tabs
                    v-model="tabs"
                    fixed-tabs
                >
                    <v-tab
                        href="#shopping-tab-1"
                        class="tab-text"
                    >
                        Tu Pedido
                    </v-tab>
        
                    <v-tab
                        href="#shopping-tab-2"
                        class="tab-text"
                    >
                        Datos personales
                    </v-tab>
        
                    <v-tab
                        href="#shopping-tab-3"
                        class="tab-text"
                    >
                        Pago
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
    
        <v-tabs-items v-model="tabs">
            <v-tab-item
                key="1"
                value="shopping-tab-1"
            >
                <ShoppingItem title="Likes" number="300" price="399" @DeleteItem = "deleteItem"/>
                <ShoppingContinue price="1698" @ClickContinue="clickContinue"/>
            </v-tab-item>
            <v-tab-item
                key="2"
                value="shopping-tab-2"
            >
                <div v-if="isLoginPage == true">
                    <div class="d-flex justify-space-around">
                        <sapn>
                            Titular
                        </sapn>
                        <span>
                            Ya eres cliente?
                        </span>
                        <span style="color: blue; cursor: pointer;" @click="registePage">
                            Registrate
                        </span>
                    </div>
                    <div>
                        <UserInput title="Obligatorio" placeholder="Email"/>
                        <UserInput title="Obligatorio" placeholder="Password"/>
                    </div>
                </div>
                <div v-else>
                    <div class="d-flex justify-space-around">
                        <span>
                            Titular
                        </span>
                        <span>
                            No tienes cuenta?
                        </span>
                        <span style="color: blue; cursor: pointer;" @click="loginPage">
                            Acceder
                        </span>
                    </div>
                    <div>
                        <UserInput title="Obligatorio" placeholder="Email"/>
                        <UserInput title="Opcional" placeholder="Nombre y apellidos"/>
                        <UserInput title="Opcional" placeholder="Nombre y apellidos"/>
                    </div>
                </div>
                <ShoppingContinue price="1698" @ClickContinue="clickContinue"/>
            </v-tab-item>
            <v-tab-item
                key="3"
                value="shopping-tab-3"
            >
                <div style="padding: 20px;">
                    <div style="padding: 10px; border: solid 1px #e0dddd;">
                        <div>
                            <img class="img-paypal" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/800px-PayPal_logo.svg.png" alt="">
                        </div>
                        <div class="text-right">
                            <img class="img-icon" src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png" alt="">
                            <img class="img-icon" src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png" alt="">
                            <img class="img-icon" src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png" alt="">
                            <img class="img-icon" src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png" alt="">
                        </div>
                    </div>
                    <div style="padding: 20px; border: solid 1px #e0dddd;">
                        If payment is successful remember to update Top
                        header Credit balance with the increase.
                    </div>
                </div>
                <div style="margin-bottom: 60px;">
                    <v-btn
                        depressed
                        large
                        color="error"
                        class="float-right"
                        @click="clickFinish"
                    >
                        Finalizar
                    </v-btn>
                </div>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
    import ShoppingItem from '../components/ShoppingItem';
    import ShoppingContinue from '../components/ShoppingContinue';
    import UserInput from '../components/UserInput';

    export default {
        name: 'Shopping',
        components: {
            ShoppingItem,
            ShoppingContinue,
            UserInput,
        },
        methods : {
            deleteItem(title, number) {
                console.log('delete'+title+number)
            },
            clickContinue(){
                console.log('continue')
            },
            registePage(){
                this.isLoginPage = false
            },
            loginPage(){
                this.isLoginPage = true
            },
            clickFinish(){
                console.log('end')
            }
        },
        data () {
            return {
            tabs: null,
            isLoginPage: true
        }
      },
    }
</script>
<style>
    .tab-text{
        text-decoration: none;
    }
    .img-paypal{
        width:100px
    }
    .img-icon{
        width: 40px;
        margin: 0 5px;
    }
</style>