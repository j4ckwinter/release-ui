<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchIssues, sendSelectedIssues } from '$lib/issues/issue-api';
	import {
		issuesStore,
		selectedIssuesStore,
		toggleSelection
	} from '$lib/issues/stores/issues-stores';

	onMount(() => {
		fetchIssues();
	});
</script>

<div class="mx-auto max-w-4xl p-6">
	<h class="mb-4 text-2xl font-semibold">Release Items</h>

	{#if $issuesStore.length > 0}
		<ul class="space-y-4">
			{#each $issuesStore as issue (issue.id)}
				<li class="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
					<div>
						<h2 class="text-xl font-semibold text-gray-800">{issue.summary}</h2>
						<div class="mt-2 text-gray-600">
							<p class="text-sm">
								<strong>Git branch:</strong>
								{issue.gitBranch}
							</p>
							<p class="text-sm">
								<strong>Priority:</strong>
								{issue.priority}
							</p>
						</div>
					</div>

					<input
						type="checkbox"
						class="ml-4"
						on:change={() => toggleSelection(issue.gitBranch)}
						checked={$selectedIssuesStore.includes(issue.gitBranch)}
					/>
				</li>
			{/each}
		</ul>

		<button
			class="mt-4 rounded px-4 py-2 hover:bg-blue-600"
			class:bg-gray-300={$selectedIssuesStore.length === 0}
			class:bg-blue-500={$selectedIssuesStore.length > 0}
			class:text-white={$selectedIssuesStore.length > 0}
			disabled={$selectedIssuesStore.length === 0}
			on:click={sendSelectedIssues}
		>
			Merge to release branch
		</button>
	{:else}
		<p class="text-gray-500">No issues found.</p>
	{/if}
</div>
