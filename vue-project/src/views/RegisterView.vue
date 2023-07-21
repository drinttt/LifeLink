<template>
<v-app class="bg-grey-lighten-5">
    <v-container fluid fill-height>
        <v-row justify='center' class="no-gutters setFont" style="padding-top:8vh">
            <v-col cols="10">
                <p style="font-size: 35px; color: hsl(216, 100%, 19%);">ลงทะเบียน</p>
            </v-col>
            <v-col cols="7">
                <v-row class="no-gutters setFont">
                    <v-col cols="6" class="py-0">
                        <v-text-field label="ชื่อ" variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="6" class="py-0">
                        <v-text-field label="นามสกุล" variant="underlined"></v-text-field>
                    </v-col>

                    <v-col cols="12" class="py-0">
                        <v-text-field label="ชั้น" variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-0">
                        <v-text-field label="เลือกบริษัท" variant="underlined"></v-text-field>
                    </v-col>

                    <v-col cols="5.5" class="py-0">
                        <v-text-field label="เวลาเข้าพบ" variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="1" class="py-0">
                        <p class="mt-5 text-center">-</p>
                    </v-col>
                    <v-col cols="5.5" class="py-0">
                        <v-text-field label="สิ้นสุดที่เวลา" variant="underlined"></v-text-field>
                    </v-col>

                </v-row>
            </v-col>
            <v-col cols="3">
                <img class="mt-5 mx-auto" alt="Vue logo" style="display: flex; justify-content: center;" src="@/assets/sample_profile.jpg" width="200" height="200" /><br />
                <p class="text-center">รูปจากบัตรประชาชน</p>
            </v-col>
        </v-row>

        <v-row justify='center' class="no-gutters setFont">
            <v-col cols="10">
                <v-row justify='center'>
                    <v-col cols="5" class="text-center setFont">
                        <v-card @click="click" class="bg-grey-darken-2 BDradius15 mt-2" id="rounded-card" :elevation="elevation" style="padding-top:1vh; cursor: pointer;">
                            <p class="my-3 mb-4 mx-1" style="font-size: 15px;">
                                <v-icon class="mr-2">mdi-camera</v-icon>
                                ถ่ายรูปหลักฐาน
                            </p>
                        </v-card>
                    </v-col>

                    <v-col cols="12" class="text-center">
                        <input type="checkbox" style="color: hsl(216, 100%, 19%);;" id="" value="" v-model="checkedNames">
                        <label class="ml-2" for="" style="font-size: 18px;">ฉันยอมรับการส่งข้อมูลส่วนตัวและประวัติการเข้าพบของคุณให้กับ LifelinkTech เพื่อดำเนินการยืนยันตัวตนและบันทึกการเข้าใช้อาคาร</label>
                    </v-col>

                    <v-col cols="3" class="text-center setFont">
                        <v-card @click="click" class=" BDradius15 mt-2" id="rounded-card" :elevation="elevation" style="padding-top:1vh; background-color: hsl(216, 100%, 19%); color: white; cursor: pointer;">
                            <p class="my-3 mb-4 mx-1" style="font-size: 20px;">
                                ลงทะเบียน
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
