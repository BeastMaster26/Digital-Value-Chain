import LoginForm from '@/components/LoginForm';
import Logo from '@/components/logo';
import SvgComponent from '@/components/logo2';
export default function LoginPage(){
    return (
       <div
      className="min-h-screen flex pt-17 justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg_tower.png')" }}
    >
      {/* overlay */}
      
      <Logo />
      <LoginForm />
      
    </div>
    );
}