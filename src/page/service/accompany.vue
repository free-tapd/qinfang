<template>
    <div class="accompany">
        <div class="accompany-list">
            <img src="../../assets/images/service/list-accom1.png" alt="">
            <img src="../../assets/images/service/list-accom2.png" alt="">
            <img src="../../assets/images/service/list-accom3.png" alt="">
            <img src="../../assets/images/service/list-accom4.png" alt="" @click="changeJump('/pregnant',{})">
        </div>
        <div class="flow-process">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.accompany{
    padding: 19px 20px; 
    .accompany-list{
    >img{
        max-width: 100%;
        height: auto;
        display: block;
        margin-bottom: 18px;
        border-radius: 4px;
    }
}
>.flow-process{
    width:599px;
    margin: 0 auto;
height:294px;
background:rgba(247,247,247,1);
box-shadow:0px 4px 6px 0px rgba(50,156,254,0.1);
}
}

.flow-process{
width:599px;
height:294px;
background:rgba(247,247,247,1);
box-shadow:0px 4px 6px 0px rgba(50,156,254,0.1);
}
</style>
