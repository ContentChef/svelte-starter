<script context="module">
	import {onlineChannel} from '../contentChef.js';

	export async function preload(page, session) {
		const response = await onlineChannel.search({contentDefinition: 'top-site', skip: 0, take: 100});
		console.log(response.data.items[0]);
		return { sites: response.data.items };
	}
</script>

<script>
	import Card from '../components/Card.svelte';
	import { createUrl } from '../cloudinary.js';

	export let sites;
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	{#each sites as site}
		<a rel="prefetch" href="/sites/{site.publicId}">
			<Card thumbnail={createUrl(site.payload.image, site.requestContext.cloudName)} title={site.payload.title} url={site.payload.url} description={site.payload.description} />
		</a>
	{/each}
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
