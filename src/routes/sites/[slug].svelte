<script context="module">
    import {onlineChannel} from '../../contentChef.js';

    export async function preload({params, query}) {
        const response = await onlineChannel.content({publicId: params.slug});
        console.log(response.data);

        return { site: response.data.payload };
    }
</script>

<script>
    export let site;
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>

<svelte:head>
    <title>{site.title}</title>
</svelte:head>

<div class="container">
    <h1>
        {site.title}
    </h1>

    <img src="https://picsum.photos/200" alt="alt"/>

    <p>
        {site.url}
    </p>

    <p>
        {site.repository}
    </p>
</div>