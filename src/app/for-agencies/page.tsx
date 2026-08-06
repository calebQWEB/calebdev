import AgencyNavbar from "./components/AgencyNavbar";
import AgencyHero from "./components/AgencyHero";
import AgencyWhyPartner from "./components/AgencyWhyPartner";
import AgencyProjects from "./components/AgencyProjects";
import AgencyProcess from "./components/AgencyProcess";
import AgencyCTA from "./components/AgencyCTA";

export default function ForAgencies() {
  return (
    <>
      <AgencyNavbar />
      <main>
        <AgencyHero />
        <AgencyWhyPartner />
        <AgencyProjects />
        <AgencyProcess />
        <AgencyCTA />
      </main>
    </>
  );
}
