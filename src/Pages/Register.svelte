<script>
	import Section from "../Components/Section.svelte";
	let name;
	let email;
	let body;
	let result;

	const handleSubmit = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
			method: "POST",
			body: JSON.stringify({
				postId: 1,
				id: 501,
				name,
				email,
				body,
			}),
		});

		const json = await res.json();
		result = JSON.stringify(json);
	};
</script>

<style>
	form {
		margin-top: 50px;
		text-align: center;
	}
</style>

<form on:submit|preventDefault={handleSubmit}>
	<h1>{result === undefined ? 'No hay resultados' : result}</h1>
	<Section id="1" label="nombre" type="text" value={name} />
	<Section id="2" label="email" type="email" value={email} />
	<Section id="3" label="body" type="text" value={body} />
	<button type="submit">Enviar</button>
</form>
