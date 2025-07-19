<template>
    <div class="w-full flex justify-center">

        <div class="w-full flex gap-2 justify-center">
            <InputGroup class="w-full max-w-[34rem]">
                <InputGroupAddon>
                    <IconSearch />
                </InputGroupAddon>

                <InputText placeholder="Pesquise por um grupo" />
            </InputGroup>

            <Button label="Crie um novo">
                <template #icon>
                    <IconPlus />
                </template>
            </Button>
        </div>
    </div>
</template>

<script setup>

useHead({
    title: 'Explorar'
})
</script>