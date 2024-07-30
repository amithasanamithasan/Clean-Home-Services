

const IframeG = () => {
    return (
        <div>
    <div className="relative py-2 h-80 md:h-[350px]">
    <iframe
      src="https://maps.google.com/maps?q=Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
      className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
        </div>
    );
};

export default IframeG;