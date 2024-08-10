import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {

 
    return (
        <Parallax
        blur={{ min: -20, max:15}}
        bgImage={img}
        bgImageAlt="The menu"
        strength={-110}
    >
        <div
        className="hero h-[500px]  rounded-lg">
        <div className="hero-overlay bg-opacity-20 rounded-lg"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl rounded-xl font-bold uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{title}</h1>
            <p className="mb-5 text-2xl font-semibold">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          
          </div>
        </div>
      </div>
    </Parallax>
    );
};

export default Cover;