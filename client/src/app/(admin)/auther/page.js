import Link from 'next/link';
const AuthorDashboard = () => {
  return (
    <div>
      <h1>Author Dashboard</h1>
      <Link href="/author/posts">Manage My Posts</Link>
    </div>
  );
};

export default AuthorDashboard;
