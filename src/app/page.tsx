import RegisterForm from './components/RegisterForm';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full h-screen">
      <RegisterForm />
    </main>
  );
}