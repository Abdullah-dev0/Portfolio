import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
   markdown: string;
}

const MyMarkdownComponent: React.FC<Props> = ({ markdown }) => {
   return (
      <Markdown
         children={markdown}
         components={{
            code(props) {
               const { children, className, node, ...rest } = props;
               const match = /language-(\w+)/.exec(className || "");
               return match ? (
                  <SyntaxHighlighter
                     {...rest}
                     PreTag="div"
                     children={String(children).replace(/\n$/, "")}
                     language={match[1]}
                     style={coldarkCold}
                     ref={React.createRef<SyntaxHighlighter>()}
                     showLineNumbers
                     startingLineNumber={1}
                  />
               ) : (
                  <code {...rest} className={className}>
                     {children}
                  </code>
               );
            },
         }}
      />
   );
};

export default MyMarkdownComponent;
