<template>
    <h3>
       First Name: {{ order.firstName }}
    </h3>
    <div> Last Name: {{order.lastName}}</div>
</template>

<script>

export default{
    name:'Order',
    props:{
        order: Object
    }
}

</script>
