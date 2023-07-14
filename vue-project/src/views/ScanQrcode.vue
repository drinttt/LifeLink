<template>
<v-app class="bg-grey-lighten-5">
    <v-container fluid fill-height>
        <v-row justify='center' class="no-gutters" style="padding-top:5vh">
            <v-col cols="9" class="text-center setFont">
                <p style="font-size: 35px; color: hsl(216, 100%, 19%);">สแกน QR Code</p>
            </v-col>

            <v-col cols="5" class="text-center setFont">
                <p style="font-size: 22px; color: gray;">แสดง Qr Code จากอีเมลที่ได้รับของคุณ ที่หน้ากล้องเพื่อสแกนยืนยันตัวตน และการเข้าเยี่ยม</p>
            </v-col>

            <v-col cols="11">
                <v-row justify='center' align="center">
                    <img alt="Vue logo" class="logo" src="@/assets/qrcode.jpeg" width="440" height="350" /><br />
                </v-row>
            </v-col>

            <v-col cols="3" class="text-center setFont mt-2">
                <v-card @click="click" class="bg-grey-darken-2 BDradius15 mt-2" id="rounded-card" :elevation="elevation" style="padding-top:1vh; cursor: pointer;">
                    <p class="my-3 mb-4 mx-4" style="font-size: 22px;">
                        ยกเลิก
                    </p>
                </v-card>
            </v-col>
            <v-col cols="11" class="text-center setFont">
                <p @click="click()" style="font-size: 21px; color: hsl(216, 100%, 19%); cursor: pointer;">รายชื่อผู้นัดหมายวันนี้</p>
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
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.setFont {
    font-family: 'Kanit', sans-serif;
    ;
}
.BDradius15 {
    border-radius: 15px;
    font-family: 'Kanit', sans-serif;
    ;
}
</style>
