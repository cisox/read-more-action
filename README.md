# read-more-action
GitHub Action to truncate text by line count or character count and optionally add a 'read more' line at the end

## Usage

### Inputs

* `text` - The text to truncate. (Required)
* `max_lines` - The maximum number of lines to keep. (Optional)
* `max_chars` - The maximum number of characters to keep. (Optional)
* `read_more` - The "Read More" line to append to bottom of the output. (Optional)

Either `max_lines` or `max_chars` is required.

If `read_more` is specified, a newline and then the `read_more` line will be appended to the output.

### Outputs

* `text` - The truncated text
