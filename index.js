const core = require('@actions/core');

const truncateByCharacters = (lines, maxCharacters, readMore) => {
    let output = [];
    let count = readMore ? readMore.length + 1 : 0;

    for (let i = 0; i < lines.length; i++) {
        const lineLength = lines[i].length + 1;

        if ((count + lineLength) > maxCharacters) {
            break;
        }

        count += lineLength;
        output.push(lines[i]);
    }

    return output;
};

const truncateByLines = (lines, maxLines, readMore) => {
    return lines.slice(0, maxLines - (readMore ? 2 : 0));
};

try {
    const input = core.getInput('text', { required: true });
    const maxLines = parseInt(core.getInput('max_lines') || '0');
    const maxCharacters = parseInt(core.getInput('max_chars') || '0');
    const readMore = core.getInput('read_more');
    let lines = input.split(/\n/);

    if (maxLines) {
        lines = truncateByLines(lines, maxLines, readMore);
    } else if (maxCharacters) {
        lines = truncateByCharacters(lines, maxCharacters, readMore);
    }

    if (readMore) {
        lines.push('');
        lines.push(readMore);
    }

    core.setOutput('text', lines.join('\n'));
} catch (err) {
    core.setFailed(err.message);
}
