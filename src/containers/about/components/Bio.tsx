import React, { FunctionComponent } from 'react';

import CodeBlock from 'components/CodeBlock';

const code = `// About me
// I have 5 years of еxperience in web
// development lorem ipsum dolor sit amet, 
// consectetur adipiscing elit, sed do eiusmod
// tempor incididunt ut labore et dolore
// magna aliqua. Ut enim ad minim veniam,
// quis nostrud exercitation ullamco laboris
// nisi ut aliquip ex ea commodo consequat.
// Duis aute irure dolor in reprehenderit in

// Duis aute irure dolor in reprehenderit in
// voluptate velit esse cillum dolore eu fugiat 
// nulla pariatur. Excepteur sint occaecat 
// officia deserunt mollit anim id est laborum.`;

const Bio: FunctionComponent = () => {
    return (
        <CodeBlock
            code={code}
        />
    );
};

export default Bio;
