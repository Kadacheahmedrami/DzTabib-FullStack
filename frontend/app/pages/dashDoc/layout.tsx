
import DashboardLayout from '../../../components/sidebar';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = ["notification", "appointments", "historique", "profile"];

  const links = ["pages/dashDoc/notification", "pages/dashDoc/appointments", "pages/dashDochistorique", "pages/dashDoc/profile"]; // Menu links


  return (
    <DashboardLayout 
    userType="doctor"
      tabs={tabs}
      links={links}

    >
      {children}
    </DashboardLayout>
  );
}


