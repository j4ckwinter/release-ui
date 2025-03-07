import { type Writable, writable } from 'svelte/store';
import type { Issue } from '$lib/issues/model/issues';

export const issuesStore: Writable<Issue[]> = writable<Issue[]>([]);
export const selectedIssuesStore: Writable<string[]> = writable<string[]>([]);

export function toggleSelection(gitBranch: string): void {
	selectedIssuesStore.update((selected: string[]) =>
		selected.includes(gitBranch)
			? selected.filter((branch: string) => branch !== gitBranch)
			: [...selected, gitBranch]
	);
}
