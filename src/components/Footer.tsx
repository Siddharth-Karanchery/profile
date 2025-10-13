const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-code-bg border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">const</span> year = <span className="text-yellow-300">new</span>{" "}
            <span className="text-blue-400">Date</span>().
            <span className="text-yellow-300">getFullYear</span>(); <span className="text-primary">//</span> {new Date().getFullYear()}
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{'<'}</span>
            <span>Built with </span>
            <span className="text-primary">❤️</span>
            <span> and </span>
            <span className="text-blue-400">React</span>
            <span className="text-primary">{' />'}</span>
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">//</span> Thanks for visiting!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
