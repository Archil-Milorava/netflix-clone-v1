const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm landing-loose text-muted-foreground md:text-left">
          Built by <a href="#">achi</a>. The source code is available on
          <a
            href="#"
            className="font-medium underline undelrline-offset-4"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
