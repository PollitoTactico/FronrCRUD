import UserTable from './components/UserTable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24" style={{ backgroundColor: '#3674B5' }}>
      <div className="w-full max-w-7xl bg-[#578FCA] p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-[#D1F8EF] text-center">
          Sistema de Gestión de Usuarios
        </h1>
        <div className="bg-[#A1E3F9] bg-opacity-10 rounded-lg p-6">
          <UserTable />
        </div>
      </div>
    </main>
  );
}