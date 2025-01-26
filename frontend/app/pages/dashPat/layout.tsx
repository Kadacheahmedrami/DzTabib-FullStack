import DashboardLayout from '../../../components/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = ["search","notification", "chat","appointments", "profile"];

  const links = ["pages/dashPat/notification", "pages/dashPat/appointments", "pages/dashPat/chat","pages/dashPat/search", "pages/dashPat/profile"]; // Menu links

  return (
    <DashboardLayout  
    userType="patient"
      tabs={tabs}
      links={links}

    >
      {children}
    </DashboardLayout>
  );
}
