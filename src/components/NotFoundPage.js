import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate("/");
    }

    return (
      <div className="flex justify-center h-screen w-full mt-32">
        <div className="bg-orange-500/60 h-40 border rounded-md p-8 flex flex-col justify-center items-center space-y-2 shadow-lg">
            <h1 className="text-2xl font-bold">404: Page Not Found</h1>
            <p className="text-md md:text-lg">Oooops, this page is not created yet.</p>
            <div className="bg-green-500/50 shadow-sm hover:shadow-md text-md md:text-lg text-black rounded-md font-semibold p-2 cursor-pointer" onClick={navigateToDashboard}>Back to dashboard</div>
        </div>
      </div>
    );
}

export default NotFoundPage;