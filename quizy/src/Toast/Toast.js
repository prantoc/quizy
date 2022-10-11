import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const success = (id) => {
    toast.success(' You did a great job!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: id
    });
}

const error = (id) => {
    toast.error("Your ans isn't correct! Please check your ans", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: id
    });
}

export { success, error }