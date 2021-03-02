<script>
	export let id;
	export let label;
	export let type;
	export let value;

	const typeAction = (node) => {
		node.type = type;
	};
</script>

<section {id}>
	<label for="">{label}</label>
	<input required use:typeAction bind:value />
</section>
