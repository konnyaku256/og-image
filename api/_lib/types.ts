export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark' | 'konnyaku256';

export interface ParsedRequest {
    theme: Theme;
    fileType: FileType;
    fontSize: string;
    postTitle: string;    
    author: string;
    blogTitle: string;
}
