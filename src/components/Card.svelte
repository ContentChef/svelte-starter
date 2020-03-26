<script>
    export let thumbnail;
    export let title;
    export let url;
    export let description;
</script>

<style>
    .container {
        display: flex;
        box-shadow: 10px 7px 9px 4px #ccc;
        margin-bottom: 30px;
        height: 200px;
    }

    .right-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .right-container > * {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left-container img {
        height: 100%;
    }
</style>

<div class="container">
    <div class="left-container">
        <img 
            src={thumbnail}
            alt="alt"
        />
    </div>
    <div class="right-container">
        <h2>{title}</h2>
        <p><a href={url}>{url}</a></p>
        <p>{description}</p>
    </div>
</div>