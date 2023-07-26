<template>
<v-app class="bg-grey-lighten-5">
    <v-container fluid fill-height>
        <v-row justify='center' class="no-gutters setFont" style="padding-top:7vh">
            <v-col cols="10">
                <p style="font-size: 35px; color: hsl(216, 100%, 19%);">ข้อมูลของคุณ</p>
            </v-col>

            <v-col cols="10">
                <v-row>
                    <v-col cols="5">
                        <p style="font-size: 25px; color: #EFB729">ข้อมูลการจอง</p>
                        <v-row>
                            <v-col cols="4" class="" style="color: gray; font-size: 18px;">
                                <p class="mb-2">ต้องการติดต่อ:</p>
                                <p class="mb-2">หัวเรื่อง:</p>
                                <p class="mb-2">เวลาเข้าพบ:</p>
                                <p class="mb-2">สิ้นสุดที่เวลา:</p>
                                <p class="mb-2">ผู้เข้าพบ:</p>
                                <p class="mb-2">ทะเบียนรถ:</p>
                            </v-col>
                            <v-col cols="8" style="font-size: 18px;">
                                <p class="mb-2">จอห์น ซีด</p>
                                <p class="mb-2">ขอเข้าพบคุณฟ้า</p>
                                <p class="mb-2">1 มกราคม 1970 12:00</p>
                                <p class="mb-2">1 มกราคม 1970 13:00</p>
                                <p class="mb-2">ซันนี่ ฮันยา</p>
                                <p class="mb-2">9กก 9999</p>
                                <v-col cols="6" class="ml-auto text-center justify-end">
                                    <v-card @click="click" class=" mt-2 py-0" id="rounded-card" :elevation="elevation" style="padding-top:1vh;  background-color: hsl(216, 100%, 19%); color: white; cursor: pointer;">
                                        <p class="my-2 mt-3 mb-4 mx-1" style="font-size: 16px;">
                                            แก้ไขข้อมูล
                                        </p>
                                    </v-card>
                                </v-col>
                            </v-col>
                        </v-row>
                        <!-- ///////// -->
                        <v-row justify="center">
                            <v-col cols="7" class="text-center py-0 ทัขจ">
                                <v-card @click="click" class=" BDradius15 mt-2" id="rounded-card" :elevation="elevation" style="padding-top:1vh; background-color: hsl(216, 100%, 19%); color: white; cursor: pointer;">
                                    <p class="my-2 mb-4 mx-2" style="font-size: 20px;">
                                        แสกนบาร์โค้ด
                                    </p>
                                </v-card>
                            </v-col>
                        </v-row>
                        
                    </v-col>

                    <div class="vertical-line"></div>

                    <v-col cols="5">
                        <p style="font-size: 25px; color: #EFB729">ข้อมูลจากบัตรประชาชน</p>
                        <v-row>
                            <v-col cols="5" class="" style="color: gray; font-size: 18px;">
                                <p class="mb-2">เลขบัตรประชาชน:</p>
                                <p class="mb-2">ชื่อ:</p>
                            </v-col>
                            <v-col cols="7" style="font-size: 18px;" class="pl-0">
                                <p class="mb-2">0000000000000</p>
                                <p class="mb-2">จอห์น ซีด</p>

                                <v-col cols="6" class="ml-auto text-center justify-end">
                                    <v-card @click="click" class=" mt-2 py-0" id="rounded-card" :elevation="elevation" style="padding-top:1vh;  background-color: hsl(216, 100%, 19%); color: white; cursor: pointer;">
                                        <p class="my-2 mt-3 mb-4 mx-1" style="font-size: 16px;">
                                            แก้ไขข้อมูล
                                        </p>
                                    </v-card>
                                </v-col>
                            </v-col>

                            <v-divider class="my-1"></v-divider>

                            <v-col cols="12" class="text-center">
                                <v-text-field label="เลือกพนักงานรักษาความปลอดภัย" variant="underlined"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <img class="mt-5 mx-auto ml-0" alt="Vue logo" style="display: flex; justify-content: center;" src="@/assets/sample_profile.jpg" width="150" height="150" /><br />

                </v-row>
            </v-col>

            <v-col cols="3" class="text-center setFont">
                <v-card @click="click" class=" BDradius15 mt-10" id="rounded-card" :elevation="elevation" style="padding-top:1vh; background-color: hsl(216, 100%, 19%); color: white; cursor: pointer;">
                    <p class="my-3 mb-4 mx-1" style="font-size: 20px;">
                        เสร็จสิ้นการยืนยันตัวตน
                    </p>
                </v-card>
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

.vertical-line {
    width: 2px;
    height: 430px;
    background-color: rgb(226, 226, 226);
}
</style>
