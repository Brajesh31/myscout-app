<template>
    <Form v-slot="$form" class="!w-full grid grid-cols-12 gap-2" :initialValues="initialValues" :resolver="resolver"
        :validateOnValueUpdate="false" :validateOnBlur="true" @submit="handleSubmitEvent">
        <FormField class="col-span-6">
            <InputText name="first_name" placeholder="Primeiro Nome" class="w-full" />
            <Message v-if="$form.first_name?.invalid" severity="error" size="small" variant="simple">
                {{ $form.first_name.error.message }}
            </Message>
        </FormField>

        <FormField class="col-span-6">
            <InputText name="last_name" placeholder="Sobrenome" class="w-full" />
            <Message v-if="$form.last_name?.invalid" severity="error" size="small" variant="simple">
                {{ $form.last_name.error.message }}
            </Message>
        </FormField>

        <FormField class="col-span-6">
            <DatePicker name="date_of_birth" showIcon iconDisplay="input" placeholder="Data de nascimento"
                class="w-full" />
            <Message v-if="$form.date_of_birth?.invalid" severity="error" size="small" variant="simple">
                {{ $form.date_of_birth.error.message }}
            </Message>
        </FormField>

        <FormField class="col-span-6">
            <InputMask name="phone_number" mask="(99) 99999-9999" placeholder="(99) 99999-9999" class="w-full" />
            <Message v-if="$form.phone_number?.invalid" severity="error" size="small" variant="simple">
                {{ $form.phone_number.error.message }}
            </Message>
        </FormField>

        <FormField class="col-span-12">
            <InputText name="email" type="email" placeholder="Email" class="w-full" />
            <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
                {{ $form.email.error.message }}
            </Message>
        </FormField>

        <FormField class="col-span-12">
            <Password name="password" placeholder="Senha" toggleMask weak-label="Fraca" medium-label="Média"
                strong-label="Forte" class="w-full" />
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
                {{ $form.password.error.message }}
            </Message>
        </FormField>

        <div class="flex gap-2 col-span-12">
            Já é cadastrado?
            <Button label="Faça login" variant="link" class="!p-0" @click="emit('jump')" />
        </div>

        <Button class="col-span-12" severity="primary" type="submit">
            Registrar
        </Button>
    </Form>
</template>

<script setup>
import axios from 'axios'

const emit = defineEmits(['jump'])

const toast = useToast()

const initialValues = ref({
    first_name: '',
    last_name: '',
    phone_number: '',
    date_of_birth: '',
    email: '',
    password: ''
})

const resolver = ({ values }) => {
    const errors = {}

    if (!values.first_name) {
        errors.first_name = [{ message: 'O primeiro nome é obrigatório.' }]
    }

    if (!values.last_name) {
        errors.last_name = [{ message: 'O sobrenome é obrigatório.' }]
    }

    if (!values.phone_number) {
        errors.phone_number = [{ message: 'O número de telefone é obrigatório.' }]
    }

    if (!values.date_of_birth) {
        errors.date_of_birth = [{ message: 'A data de nascimento é obrigatória.' }]
    }

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
            await axios.post('/auth/register', payload)
            toast.add({ severity: 'success', summary: 'SUCESSO', detail: "Conta criada com sucesso.", life: 3000 });
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