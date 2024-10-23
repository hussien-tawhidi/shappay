import { auth } from "../../../auth";
import AdBanner from "./AdBanner";
import Search from "./Search";
import TopHeader from "./TopHeader";

const Header = async ({ flag }: { flag: string }) => {
  const session = await auth();
  return (
    <div>
      <AdBanner />
      <TopHeader flag={flag} session={session}/>
      <Search />
    </div>
  );
};

export default Header;
