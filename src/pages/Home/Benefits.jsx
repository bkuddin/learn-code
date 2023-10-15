import MoneyBack from "../../assets/images/30-Days-Moneyback.png";
import Certification from "../../assets/images/Certificate-of-Completion.png";
import lifeTime from "../../assets/images/Lifetime-Access.png";
import Satisfication from "../../assets/images/Satisication.png";

const Benefits = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 px-24 justify-center text-center py-10">
        <div className="w-[250px]">
          <img className="w-1/4 mx-auto" src={lifeTime} alt="" />
          <h3 className="text-2xl font-semibold">Lifetime Access</h3>
        </div>
        <div className="w-[250px]">
          <img className="w-1/4 mx-auto" src={Satisfication} alt="" />

          <h3 className="text-2xl font-semibold">
            100% Satisfaction <br />
            Guarantee
          </h3>
        </div>
        <div className="w-[250px]">
          <img className="w-1/4 mx-auto" src={MoneyBack} alt="" />
          <h3 className="text-2xl font-semibold">
            30 Days Money Back <br /> Guarantee
          </h3>
        </div>
        <div className="w-[250px]">
          <img className="w-1/4 mx-auto" src={Certification} alt="" />
          <h3 className="text-2xl font-semibold">
            Certificate of <br /> Completion
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
