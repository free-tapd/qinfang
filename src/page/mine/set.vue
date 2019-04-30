<template>
<div class="vg">
    <div class="set">
        <div class="cv">
            <cellInput :islink="true" type="0" title="清理缓存" :tColor="'#333'" :isBorder="false"/>
        </div>
        <div class="cv">
            <cellInput :islink="true" type="0" title="鼓励我们，给我们评分" :tColor="'#333'" /> 
            <cellInput :islink="true" type="0" title="清理缓存" :tColor="'#333'"  />
        </div><div class="cv">
            <cellInput :islink="true" type="0" title="免责声明" :tColor="'#333'" /> 
            <cellInput :islink="true" type="0" title="关于我们" :tColor="'#333'"  />
        </div>
    
    </div>
</div>
    
</template>
<script>
import cellInput from "@/components/cellInput.vue"
export default {
    components:{
        cellInput
    }
}
</script>
<style lang="less" scoped>
.cv{
    margin-bottom: 26px;
}
.set{
    padding-top: 20px;
}
</style>
