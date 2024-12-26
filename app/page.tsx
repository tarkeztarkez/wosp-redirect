import { redirect } from "next/navigation";

export const metadata = {
  title: "WOSP NZS",
};

const DonationPage = () => {
  redirect("https://eskarbonka.wosp.org.pl/kebylunumy");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Finał WOŚP w SGH
          </h1>
          <p className="text-2xl text-blue-800 font-semibold">
            Już 17 grudnia bedzie tutaj e-skarbonka
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="/wosp.jpeg"
                alt="WOSP Logo"
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/nzs.jpeg"
                alt="NZS Logo"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center bg-blue-900 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Wkrótce rozpoczynamy zbiórkę!
          </h2>
          <p className="text-lg">Bądźcie z nami i śledźcie aktualizacje</p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
