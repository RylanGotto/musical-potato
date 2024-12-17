<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>
    About
</h1>

{#await data.users}
	Loading user...
{:then users}
	{#each users as user}
		<p>{user.email}</p>
	{/each}
{:catch error}
	<p>error loading user: {error.message}</p>
{/await}