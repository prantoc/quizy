import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const success = () => {
    toast.success('🦄 success!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "success"
    });
}

const error = () => {
    toast.error("Your ans isn't correct! Please check your ans", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "error"
    });
}

export { success, error }