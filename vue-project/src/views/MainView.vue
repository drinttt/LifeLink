<template>
<v-app class="bg-grey-lighten-5">
    <v-container fluid fill-height>
        <v-row justify='center' class="no-gutters" style="padding-top:10vh">
            <!-- logo + date + time -->
            <v-col cols="10">
                <p style="font-size:38px">LifeLink</p>
            </v-col>

            <v-col cols="10" class="py-0">
                <v-card @click="click" class="BDradius15" id="rounded-card" :elevation="elevation" style="padding-top:1vh; background-color: hsl(216, 100%, 19%); color: white; cursor: pointer; ">
                    <p class="my-4 mx-5" style="font-size: 21px;">
                        <v-icon class="mr-4 mb-1">mdi-account-check</v-icon>ผู้ที่ได้รับการนัดหมายจากบริษัท
                    </p>
                </v-card>
            </v-col>

            <v-col cols="10">
                <v-card @click="click" class="bg-grey-darken-1 BDradius15" id="rounded-card" :elevation="elevation" style="padding-top:1vh; cursor: pointer;">
                    <p class="my-4 mx-4" style="font-size: 21px;">
                        <v-icon class="mr-4 mb-1">mdi-pencil</v-icon>ผู้ที่ไม่ได้รับการนัดหมายจากบริษัท
                    </p>
                </v-card>
            </v-col>

            <v-col cols="10">
                <v-card class="BDradius15" id="rounded-card" :elevation="elevation" style="padding-top:1vh; padding-bottom: 1vh; background-color: hsl(216, 100%, 19%); color: white; cursor: pointer;">
                    <v-row class="px-16 my-3">
                        <v-col cols="6" class="pr-2">
                            <h1>รถขาเข้า</h1>
                            <v-card class="mr-16 mt-3 BDradius15">
                                <v-container>
                                    <p>ชื่อ: </p>
                                    <p>ทะเบียนรถ:</p>
                                    <p>วันที่ติดต่อ:</p>
                                    <p>เข้าได้ถึงวันที่:</p>
                                    <p style="color: red;">เวลาที่เข้าจุดตรวจ:</p>
                                </v-container>
                            </v-card>
                        </v-col>

                        <v-col cols="6" class="pl-2">
                            <h1>รถขาออก</h1>
                            <v-card class="mr-16 mt-3 BDradius15">
                                <v-container>
                                    <p>ชื่อ: </p>
                                    <p>ทะเบียนรถ:</p>
                                    <p>วันที่ติดต่อ:</p>
                                    <p>เข้าได้ถึงวันที่:</p>
                                    <p style="color: red;">เวลาที่เข้าจุดตรวจ:</p>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>


        </v-row>
    </v-container>
</v-app>
</template>

<script>
export default {
    methods: {
        click() {
            console.log("can click")
        }
    }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.BDradius15 {
    border-radius: 15px;
    font-family: 'Kanit', sans-serif;;
}
</style>
