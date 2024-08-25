import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  const footerList = [
    {
      title: "Commander",
      lists: ["Nouveautes", "Hommes", "Femmes", "Enfants"],
    },
    {
      title: "Commander",
      lists: ["Nouveautes", "Hommes", "Femmes", "Enfants"],
    }
  ];

  return (
    <div class="mt-4 p-4 bg-[#075D66] text-[#FAF9F8]">
      <p class="text-xl font-bold mb-8">Logo</p>
      <div class="mx-8 my-4 flex flex-col gap-6">
        {footerList.map((element, index) => (
          <div class="border-t">
            <h3 class="text-base mb-4  pt-3 font-semibold uppercase">
              {element.title}
            </h3>
            <div class="flex gap-4 flex-col">
              {element?.lists.map((item, key) => (
                <p key={key} class="text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
	  <div class="text-center mt-8">
		<h3 class =" text-xl">Inscription</h3>
		<p class="text-sm">Devenez membre & obtenez -10%</p>
	  </div>
	  <div class="flex justify-center gap-6 my-6 text-xl">
		<FaInstagram/>
		<FaTiktok />
		<FaYoutube />
		<FaFacebook />
	  </div>
		<p class="text-center text-sm">Le contenu de ce site est protege</p>
    </div>
  );
};

export default Footer;
