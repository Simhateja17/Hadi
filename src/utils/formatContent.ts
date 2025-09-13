// src/utils/formatContent.ts
export function formatBlogContent(content: string): string {
    if (!content) return '';
    
    // Split content into lines
    const lines = content.split(/\r?\n/);
    const formattedLines: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip empty lines initially, we'll handle spacing later
        if (line === '') {
            formattedLines.push('<br>');
            continue;
        }
        
        // Check for numbered lists (e.g., "1. ", "2. ", etc.)
        const numberedListMatch = line.match(/^(\d+)\.\s+(.*)$/);
        if (numberedListMatch) {
            const number = numberedListMatch[1];
            const text = numberedListMatch[2];
            formattedLines.push(`<p><strong>${number}. ${text}</strong></p>`);
            continue;
        }
        
        // Check for bullet points (e.g., "• ", "- ", "* ")
        const bulletMatch = line.match(/^[•\-\*]\s+(.*)$/);
        if (bulletMatch) {
            const text = bulletMatch[1];
            formattedLines.push(`<p>• ${text}</p>`);
            continue;
        }
        
        // Check for headers (lines that are shorter and don't end with punctuation)
        const isHeader = line.length < 100 && 
                         !line.endsWith('.') && 
                         !line.endsWith(',') && 
                         !line.endsWith(':') &&
                         (i === 0 || lines[i-1]?.trim() === '');
        
        if (isHeader && i < lines.length - 1 && lines[i+1]?.trim() !== '') {
            formattedLines.push(`<h3 style="font-weight: bold; font-size: 1.2em; margin-top: 1.5em; margin-bottom: 0.5em; color: #1f2937;">${line}</h3>`);
            continue;
        }
        
        // Regular paragraph
        formattedLines.push(`<p style="margin-bottom: 1em; line-height: 1.6;">${line}</p>`);
    }
    
    return formattedLines.join('');
}

// Alternative simpler function that just preserves line breaks
export function preserveLineBreaks(content: string): string {
    if (!content) return '';
    
    return content
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line !== '')
        .map(line => {
            // Check for numbered lists
            if (/^\d+\.\s+/.test(line)) {
                return `<p><strong>${line}</strong></p>`;
            }
            // Check for bullet points
            if (/^[•\-\*]\s+/.test(line)) {
                return `<p>${line}</p>`;
            }
            // Regular paragraph
            return `<p>${line}</p>`;
        })
        .join('');
}