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
            wrapLongLines
            language='typescript'
            customStyle={{
                background: 'transparent',
                backgroundColor: 'transparent',
                padding: '0.5rem 1rem',
                margin: 0,
                fontSize: 'inherit',
                fontFamily: 'inherit',
                width: '100%',
                height: '100%',
            }}
            codeTagProps={{
                style: {
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                },
            }}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
