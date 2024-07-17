export const metadata = {
  title: '로그인',
  description: 'JMF 로그인 페이지',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}