<template>
    <div class="flex flex-col">
        <div class="p-4">
            <Toolbar>
                <template #start>
                    <img :src="logoHorizontal" class="max-h-15" />
                </template>

                <template #end>
                    <div class="flex items-center gap-4">
                        <RouterLink v-for="link in endLinks" :key="link" :to="link.to">
                            <Button variant="text" severity="secondary" class="font-medium">
                                {{ link.label }}
                            </Button>
                        </RouterLink>

                        <ToolbarUserOptions />
                    </div>
                </template>
            </Toolbar>
        </div>
        <div class="p-4">
            <slot />
        </div>
    </div>
</template>
<script setup>
import ToolbarUserOptions from '~/components/User/ToolbarUserOptions.vue'
import logoHorizontal from '~/assets/images/logo_horizontal_transparent.png'
const endLinks = ref([
    {
        label: 'Inicio',
        to: { name: 'index' }
    },
    {
        label: 'Explorar',
        to: { name: 'explorar' }
    }
])


</script>