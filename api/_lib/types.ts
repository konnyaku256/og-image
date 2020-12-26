export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark' | 'konnyaku256';

export interface ParsedRequest {
    fileType: FileType;
    text: string;
    theme: Theme;
    md: boolean;
    fontSize: string;
}
