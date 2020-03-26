<script context="module">
    import {onlineChannel} from '../../contentChef.js';

    export async function preload({params, query}) {
        const response = await onlineChannel.content({publicId: params.slug});
        return { site: response.data.payload, cloudName: response.data.requestContext.cloudName };
    }
</script>

<script>
    import { createUrl } from '../../cloudinary.js';
    export let site;
    export let cloudName;
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

    <img src={createUrl(site.image, cloudName)} alt="alt"/>

    <a href={site.url}>
        {site.url}
    </a>

    <p>
        {site.description}
    </p>
</div>