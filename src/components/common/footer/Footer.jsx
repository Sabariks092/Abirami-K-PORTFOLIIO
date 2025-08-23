import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },

  { id: 4, name: "Portfolio", url: "Portfolio" },

  { id: 6, name: "Services", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3 pb-10">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <div
              style={{
                width: "45px",
                height: "45px",
                background: "linear-gradient(135deg, #04807dff, #1bc0ba)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
              className="me-3"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff, #d9d9d9)", // white gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                A
              </span>
            </div>
          <p
            className="text-2xl xxs:text-2xl sm:max-xl:text-3xl xl:text-3xl 
               font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #04807dff, #1bc0ba)",
            }}
          >
            Abirami K
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
