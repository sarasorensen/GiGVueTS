<template>
    
    <div class="wrap__buttons">
        <button class="btn btn__neutral" >
                        <i class="fa fa-close"></i> {{button1}}
                      </button>
                      <button class="btn" >
                        <i class="fa fa-trash-o"></i> {{ button2 }}
                      </button>
    </div>
</template>

<script lang="ts">
export default{
    props: {
        button1:{
            type: String
        },
        button2:{
            type: String
        },
    }
}
</script>