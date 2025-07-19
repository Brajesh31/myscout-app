<template>
    <Form v-slot="$form" class="w-full flex flex-col gap-2" :initialValues="initialValues" :resolver="resolver"
        :validateOnValueUpdate="false" :validateOnBlur="true" @submit="handleSubmitEvent">
        <FormField>
            <InputText name="email" type="email" placeholder="Email" class="w-full" />
            <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
                {{ $form.email.error.message }}
            </Message>
        </FormField>

        <FormField>
            <Password name="password" placeholder="Senha" toggleMask :feedback="false" class="!w-full" />
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
                {{ $form.password.error.message }}
            </Message>
        </FormField>

        <div class="flex gap-2">
            Ainda não tem uma conta?
            <Button label="Registre-se" variant="link" class="!p-0" @click="emit('jump')" />
        </div>

        <Button class="w-full" type="submit" severity="primary">
            Entrar
        </Button>
    </Form>
</template>

<script setup>
import axios from 'axios'

const emit = defineEmits(['jump'])

const toast = useToast()

const initialValues = ref({
    email: '',
    password: ''
})

const resolver = ({ values }) => {
    const errors = {}

    if (!values.email) {
        errors.email = [{ message: 'O e-mail é obrigatório.' }]
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = [{ message: 'O e-mail não é válido.' }]
    }

    if (!values.password) {
        errors.password = [{ message: 'A senha é obrigatória.' }]
    } else if (values.password.length < 6) {
        errors.password = [{ message: 'A senha deve ter no mínimo 6 caracteres.' }]
    }

    return { errors }
}


async function handleSubmitEvent(event) {

    const payload = getPayloadBySubmitEvent(event.states);

    if (event.valid) {
        try {
            await axios.post('/auth/login', payload)
            navigateTo({ name: 'index' })
        } catch (e) {
            toast.add({ severity: 'error', summary: 'ERRO', detail: e?.response?.data?.statusMessage, life: 3000 });
        }
    }

}
</script>

<style scoped>
:deep(.p-inputtext.p-component.p-password-input) {
    width: 100%;
}
</style>