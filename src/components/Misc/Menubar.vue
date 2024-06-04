<template>

	<div class="misc-menubar-wrapper flex flex-column h-full p-lg gap-sm justify-between bg-color-brand-primary">
		
		<div class="flex flex-column gap-sm">

			<ButtonSmall
				type="primary"
			>
				<MiscIcon
					icon="montain-icon"
					:size="[24, 24]"
				/>
				<p>Eventos</p>
			</ButtonSmall>

			<ButtonSmall
				type="primary"
			>
				<MiscIcon
					icon="cards-icon"
					:size="[24, 24]"
				/>
				<p>Baralho</p>
			</ButtonSmall>

			<ButtonSmall
				type="primary"
			>
				<MiscIcon
					icon="field-icon"
					:size="[24, 24]"
				/>
				<p>Territorios</p>
			</ButtonSmall>

			<ButtonSmall
				type="primary"
			>
				<MiscIcon
					icon="alies-icon"
					:size="[24, 24]"
				/>
				<p>Aliados</p>
			</ButtonSmall>

		</div>

		<div class="flex flex-column gap-sm">
			<ButtonSmall
				type="primary"
			>
				<MiscIcon
					icon="logout-icon"
					:size="[16, 16]"
				/>
				<p>Deslogar</p>
			</ButtonSmall>
		</div>

	</div>

</template>

<script>

import * as Button from "@/components/Button";
import MiscIcon from "@/components/Misc/Icon.vue";

export default {
	components: {
		...Button,
		MiscIcon
	}
}

</script>

<style scoped>

.misc-menubar-wrapper{
	min-width: 280px;
}

</style>