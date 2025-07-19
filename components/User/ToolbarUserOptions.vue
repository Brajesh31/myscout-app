<template>
    <div class="card flex justify-center">
        <IconLoaderCircle class="size-12" v-if="status === 'pending'" />

        <Button v-else type="button" severity="contrast" variant="text" @click="toggle" class="!p-0 !rounded-full">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large"
                shape="circle" />
        </Button>

        <Popover ref="op">
            <div class="flex flex-col gap-2">
                <Button severity="contrast" variant="text" class="min-w-max !p-2 ">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large"
                        shape="circle" />
                    <div class="flex flex-col items-start min-w-max">
                        <div class="flex gap-2 items-center">
                            <div class="text-lg font-semibold">{{ user.first_name }} {{ user.last_name }}</div>

                            <Badge severity="primary" :value="userBranch" />
                        </div>
                        <div class="opacity-70">{{ user.email }}</div>
                    </div>
                </Button>

                <Button label="Meu Grupo" severity="secondary" variant="text" class="flex !justify-start">
                    <template #icon>
                        <IconFlag />
                    </template>
                </Button>

                <Button label="Configurações" severity="secondary" variant="text" class="flex !justify-start">
                    <template #icon>
                        <IconSettings />
                    </template>
                </Button>

                <Button label="Sair" severity="danger" variant="text" class="flex !justify-start" @click="auth.logout">
                    <template #icon>
                        <IconLogOut />
                    </template>
                </Button>
            </div>

        </Popover>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const auth = useAuth()


const { data, status, } = await useLazyAsyncData('get-me', () => axios.get('/auth/me'), {
    immediate: true,
});

const user = computed(() => data.value?.data?.data)

const userBranch = computed(() => {
    const age = getAgeByDateOfBirth(user.value.date_of_birth);

    if (age >= 6 && age <= 10) return 'Lobinho(a)';
    if (age >= 11 && age <= 14) return 'Escoteiro(a)';
    if (age >= 15 && age <= 17) return 'Senior/Guia';
    if (age >= 18 && age <= 22) return 'Pioneiro(a)';
    if (age >= 23) return 'Chefe'
    return `Sem Ramo`;
});

const op = ref();

const toggle = (event) => {
    op.value.toggle(event);
}
</script>
