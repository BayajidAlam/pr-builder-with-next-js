import { useRouter } from 'next/router';


const ErrorPage = () => {
  const router = useRouter()

  setTimeout(()=>{
    router.push('/')
  },[])
  return (
    <div>
        <h1>Error</h1>
    </div>
  );
};

export default ErrorPage;