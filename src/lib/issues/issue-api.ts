import { get } from 'svelte/store';
import { issuesStore, selectedIssuesStore } from '$lib/issues/stores/issues-stores';
import { apiRequest } from '$lib/utils/api';
import { config } from '$lib/config';
import type { Issue } from '$lib/issues/model/issues';

export async function fetchIssues(): Promise<void> {
	const issues: Issue[] | null = await apiRequest<Issue[]>(`${config.apiUrl}/issues`, 'GET');
	if (issues) {
		issuesStore.set(issues);
	} else {
		const mockIssues: Issue[] | null = await apiRequest<Issue[]>('/mock-issues.json', 'GET');
		if (mockIssues) {
			issuesStore.set(mockIssues);
		}
	}
}

export async function sendSelectedIssues(): Promise<void> {
	const selectedIssues: string[] = get(selectedIssuesStore);
	const result = await apiRequest(`${config.apiUrl}/send-issues`, 'POST', {
		branches: selectedIssues
	});

	if (result) {
		selectedIssuesStore.set([]);
		issuesStore.update((currentIssues: Issue[]) =>
			currentIssues.filter((issue: Issue) => !selectedIssues.includes(issue.gitBranch))
		);
	} else {
		console.error('Failed to send selected issues');
	}
}
