import React, { FunctionComponent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import codeBlockStyle from 'utils/codeblock-style';

interface CodeBlockProps {
    code: string;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = (props: CodeBlockProps) => {
    const { code } = props;
    return (
        <SyntaxHighlighter
            showLineNumbers
            className={codeBlockStyle}
            style={codeBlockStyle}
            language='typescript'
            customStyle={{
                background: 'transparent',
                backgroundColor: 'transparent',
                padding: '0 1rem',
                fontSize: '16px',
                fontFamily: 'inherit',
            }}
            codeTagProps={{
                style: {
                    fontFamily: 'inherit',
                    fontSize: '16px',
                },
            }}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
