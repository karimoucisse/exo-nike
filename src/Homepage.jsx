import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import Homepagesection from "./components/Homepagesection";

const Homepage = () => {
  const srcs1 = [
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/deb1820a-82d5-4772-81de-c40b4ffd5bc0/chaussure-luka-2-pour-ado-SbSpPh.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7caac0e9-61e4-47b2-9a16-c9282c4c5b87/chaussure-zoom-vomero-5-pour-g6xRmf.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7bd7c9c7-589a-4336-9961-d8aaf5d648fd/chaussure-air-jordan-1-zoom-cmft-2-pour-8w7K7B.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/766b7773-0ce7-4b59-8ed4-b1d60d93369c/chaussure-nocta-zoom-drive-pour-2Xpggv.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0f7b997c-05a9-4e56-8b60-2441044fa795/chaussure-air-jordan-1-zoom-cmft-2-pour-5StvfS.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1fb22078-0354-42a4-9299-893c98d46abd/chaussure-jordan-6-rings-pour-LpRXmZ.png",
  ];
  return (
    <div>
      <Navbar />
      <HeroPage
        img="/nouveau1.jpg"
        title="Exprimez Votre Style - Découvrez Nos Collections Tendance"
      />
      <Homepagesection title="En ce moment" values={srcs1} />
      <Homepagesection title="Nos modeles iconiques" values={srcs1} />
      <Homepagesection title="Nouveautes de la semaine" values={srcs1} />
      <HeroPage
        img="/nouveau2.jpg"
        title="Votre Style, Votre Histoire - Explorez Nos Collections Uniques"
      />
    </div>
  );
};

export default Homepage;
