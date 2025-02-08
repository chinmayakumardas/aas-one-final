import Link from 'next/link';
const EditorDashboard = () => {
  return (
    <div>
      <h1>Editor Dashboard</h1>
      <Link href="/editor/posts">Manage Posts</Link>
    </div>
  );
};

export default EditorDashboard;
