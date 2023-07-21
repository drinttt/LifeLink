<template>
<v-app class="bg-grey-lighten-5">
    <v-container fluid fill-height>
        <v-row justify='center' class="no-gutters" style="padding-top:10vh">
            <v-col cols="8" class="text-center">
                <!-- <v-icon style="font-size: 150px; color: hsl(216, 100%, 19%);">mdi-credit-card-plus-outline</v-icon> -->
                <img alt="Vue logo" class="logo" src="@/assets/insert_card.png" width="210" height="200" />
            </v-col>

            <v-col cols="8" class="text-center setFont">
                <p style="font-size: 35px; color: hsl(216, 100%, 19%);">กรุณาเสียบบัตรประชาชน</p>
            </v-col>

            <v-col cols="5" class="text-center setFont">
                <p style="font-size: 25px; color: gray;">เสียบบัตรประชาชนที่เครื่องอ่านบัตรให้ถูกต้อง เพื่อดำเนินการยืนยันตัวตน</p>
            </v-col>

            <v-col cols="9" class="text-center setFont">
                <p style="font-size: 22px; color: hsl(216, 100%, 19%);">
                    <v-progress-circular indeterminate color="hsl(216, 100%, 19%)" class="mr-2"></v-progress-circular>
                    ไม่พบเครื่องอ่านบัตร
                </p>
            </v-col>

            <v-col cols="4" class="text-center setFont">
                <v-card @click="click" class="bg-red-darken-4 BDradius15" id="rounded-card" :elevation="elevation" style="padding-top:1vh; cursor: pointer;">
                    <p class="my-3 mb-4 mx-4" style="font-size: 21px;">
                        ไม่มีบัตร / ไม่สามารถอ่านข้อมูลบัตรได้
                    </p>
                </v-card>
                <v-card @click="click" class="bg-grey-darken-2 BDradius15 mt-2" id="rounded-card" :elevation="elevation" style="padding-top:1vh; cursor: pointer;">
                    <p class="my-3 mb-4 mx-4" style="font-size: 21px;">
                        ยกเลิก
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-col cols="4" class="wrapper" style="background-color: hsl(216, 100%, 19%); color: white;">
        <v-col>
            <p class="text-center mt-5 setFont" style="font-size: 33px;">กรุณาเสียบบัตรประชาชนที่นี่</p>
        </v-col>
        <v-col class="text-center">
            <v-icon style="font-size: 70px" class="text-center">mdi-arrow-down</v-icon>
        </v-col>
    </v-col>

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

.wrapper {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f0f0f0;
    /* สีของขอบสี่เหลี่ยม */
    height: 250px;
    /* ความสูงของขอบสี่เหลี่ยม */
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}
</style>
