import 'github-markdown-css/github-markdown.css';

export const ReadmeViewer = ({ htmlContent }: { htmlContent: string }) => {
  return (
    <div
      className="markdown-body rounded-box"
      style={{ padding: '45px', maxWidth: '980px', margin: '0 auto' }}
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};
