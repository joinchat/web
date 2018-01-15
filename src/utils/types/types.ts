export type configForRequest = {
    headers: {"Accept": string, "Content-Type": string, "Accept-Language"?: string},
    method: string,
    body?: any
};