export async function apiRequest<T>(
	url: string,
	method: 'GET' | 'POST',
	body?: object
): Promise<T | null> {
	try {
		const response: Response = await fetch(url, {
			method,
			headers: { 'Content-Type': 'application/json' },
			body: body ? JSON.stringify(body) : undefined
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch ${url}`);
		}

		return await response.json();
	} catch (error) {
		console.error('API request error:', error);
		return null;
	}
}
