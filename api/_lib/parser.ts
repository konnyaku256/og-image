import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest, Theme } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname, query } = parse(req.url || '/', true);
    const { fontSize, theme, author, blogTitle } = (query || {});

    if (Array.isArray(fontSize)) {
        throw new Error('Expected a single fontSize');
    }
    if (Array.isArray(theme)) {
        throw new Error('Expected a single theme');
    }
    if (Array.isArray(author)) {
        throw new Error('Expected a single author');
    }
    if (Array.isArray(blogTitle)) {
        throw new Error('Expected a single blogTitle');
    }
    
    const arr = (pathname || '/').slice(1).split('.');
    let extension = '';
    let postTitle = '';
    if (arr.length === 0) {
        postTitle = '';
    } else if (arr.length === 1) {
        postTitle = arr[0];
    } else {
        extension = arr.pop() as string;
        postTitle = arr.join('.');
    }

    const parsedRequest: ParsedRequest = {
        theme: theme as Theme,
        fileType: extension === 'jpeg' ? extension : 'png',
        fontSize: fontSize || '96px',
        postTitle: decodeURIComponent(postTitle),
        author: author,
        blogTitle: blogTitle,
    };
    return parsedRequest;
}
