<template>
<v-app class="bg-grey-lighten-5">
    <v-container fluid fill-height>
        <v-row justify='center' class="no-gutters setFont" style="padding-top:10vh">
            <v-col cols="10">
                <p style="font-size: 35px; color: hsl(216, 100%, 19%);">ข้อมูลการลงทะเบียน</p>
                <p style="font-size: 25px; color: gray;" class="ml-1">นำ QR Code จากการพิมพ์ไปสแกนที่ประตูทางเข้าของอาคารเพื่อเข้าใช้งานอาคาร หรือพบบุคคลในอาคาร ตามบริษัทหรือชั้นที่ได้ลงทะเบียน</p>
            </v-col>

            <v-col cols="4">
                <v-row class="no-gutters setFont ">
                    <v-col cols="4" class="" style="color: gray; font-size: 20px;">
                        <p class="mb-2">ชื่อ:</p>
                        <p class="mb-2">เวลาเข้าพบ:</p>
                        <p class="mb-2">สิ้นสุดที่เวลา:</p>
                        <p class="mb-2">ทะเบียนรถ:</p>
                    </v-col>
                    <v-col cols="8" style="font-size: 20px;">
                        <p class="mb-2">สมใจ เป็นสุข</p>
                        <p class="mb-2">1 มกราคม 2022 - 12:00</p>
                        <p class="mb-2">1 มกราคม 2022 - 12:00</p>
                        <p class="mb-2">9ฮฮ 1234 กรุงเทพมหานคร</p>
                    </v-col>
                </v-row>

            </v-col>

            <v-col cols="3">
                <img class="mx-auto mb-4" alt="Vue logo" style="display: flex; justify-content: center;" src="@/assets/lifelink_qr.png" width="150" height="150" /><br />
            </v-col>

            <v-col cols="6">
                <v-row>
                    <v-col cols="5" class="text-center">
                        <v-card @click="click" class="BDradius15 mt-2" id="rounded-card" :elevation="elevation" style="padding-top:1vh; background-color: #7D90AC; color: white; cursor: pointer;">
                            <p class="my-3 mb-4 mx-4" style="font-size: 22px;">
                                พิมพ์ QR CODE
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="7" class="text-center">
                        <v-card @click="click" class="bg-grey-darken-2 BDradius15 mt-2" id="rounded-card" :elevation="elevation" style="padding-top:1vh; cursor: pointer;">
                            <p class="my-3 mb-4 mx-4" style="font-size: 22px;">
                                เสร็จสิ้นการลงทะเบียน
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</v-app>
</template>

<script>
export default {

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
