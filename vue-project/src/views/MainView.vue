<template>
<v-app class="bg-grey-lighten-5">
    <v-container fluid fill-height>
        <v-row justify='center' class="no-gutters" style="padding-top:2vh">
            <!-- logo + date + time -->
            <v-col cols="10" class="py-0">
                <v-row style="align-items: flex-end;">
                    <v-col cols="6">
                        <img alt="Vue logo" class="logo" src="@/assets/main_logo.png" width="230" height="120" />
                    </v-col>

                    <v-col cols="5">
                        <v-row style="align-items: flex-end;">
                            <v-col cols="8" class="text-right">
                                <p class="my-4  mb-9 my-text-light setFont" style="font-size: 25px;">
                                    {{ formattedDate }}
                                </p>
                            </v-col>
                            <v-col cols="4" class="text-left">
                                <p class="my-4 my-text-light setFont" style="font-size: 70px; color: hsl(216, 100%, 19%);">
                                    {{ formattedTime }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

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
                                    <v-row>
                                        <v-col cols="6" class="pr-0">
                                            <p>ชื่อ: </p>
                                            <p>ทะเบียนรถ:</p>
                                            <p>วันที่ติดต่อ:</p>
                                            <p>เข้าได้ถึงวันที่:</p>
                                            <p style="color: red;">เวลาที่เข้าจุดตรวจ:</p>
                                        </v-col>
                                        <v-col cols="6" class="pl-0">
                                            <p>กระติก อิ่มใจ</p>
                                            <p>กบ 1223</p>
                                            <p>5 พ.ค. 2565</p>
                                            <p>8 พ.ค. 2565</p>
                                            <p style="color: red;">11:00</p>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>

                        <v-col cols="6" class="pl-2">
                            <h1>รถขาออก</h1>
                            <v-card class="mr-16 mt-3 BDradius15">
                                <v-container>
                                    <v-row>
                                        <v-col cols="6" class="pr-0">
                                            <p>ชื่อ: </p>
                                            <p>ทะเบียนรถ:</p>
                                            <p>วันที่ติดต่อ:</p>
                                            <p>เข้าได้ถึงวันที่:</p>
                                            <p style="color: red;">เวลาที่เข้าจุดตรวจ:</p>
                                        </v-col>
                                        <v-col cols="6" class="pl-0">
                                            <p>กระติก อิ่มใจ</p>
                                            <p>กบ 1223</p>
                                            <p>5 พ.ค. 2565</p>
                                            <p>8 พ.ค. 2565</p>
                                            <p style="color: red;">11:00</p>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="4" class="py-0">
                <!-- <img alt="Vue logo" class="logo" src="@/assets/main_logo.png" width="220" height="120" /> -->
                <v-row>
                    <v-col cols="6" class="px-3 text-right">
                        <p class="my-4 mt-6 my-text-light setFont" style="font-size: 24px; color: grey">
                            Powered by
                        </p>
                    </v-col>
                    <v-col cols="6" class="px-0">
                        <img alt="Vue logo" class="logo" src="@/assets/main_logo.png" width="150" height="80" />
                    </v-col>
                </v-row>
            </v-col>

        </v-row>
    </v-container>
</v-app>
</template>

<script>
import {
    format
} from 'date-fns';
import {
    th
} from 'date-fns/locale';

export default {
    data() {
        return {
            currentDate: new Date(),
        };
    },
    methods: {
        click() {
            console.log("can click")
        }
    },
    computed: {
        formattedDate() {
            const thaiLocale = th; // ใช้โมดูลที่นำเข้ามาแทนค่าเป็น thaiLocale

            const formattedDay = format(this.currentDate, 'd', {
                locale: thaiLocale
            });
            const formattedMonth = format(this.currentDate, 'MMMM', {
                locale: thaiLocale
            });
            
            const formattedYear = parseInt(format(this.currentDate, 'yyyy', { locale: thaiLocale })) + 543;
            return `${formattedDay} ${formattedMonth} ${formattedYear}`;
        },
        formattedTime() {
            const thaiLocale = th; // ใช้โมดูลที่นำเข้ามาแทนค่าเป็น thaiLocale

            const formattedTime = format(this.currentDate, 'HH:mm', {
                locale: thaiLocale
            });
            return `${formattedTime}`;
        },
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');

.BDradius15 {
    border-radius: 15px;
    font-family: 'Kanit', sans-serif;
    ;
}

.setFont {
    font-family: 'Kanit', sans-serif;
    ;
}
</style>
