import { Link, useLocation, useNavigate} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from "react-hot-toast";


const Signup = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    // console.log(data);
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
      
    }
    // called api
    await axios.post("http://localhost:4000/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        // alert("Signup Successfully")
        toast.success("Signup Successfully");
        navigate(from, {replace:true})
      
      }
      localStorage.setItem("Users", JSON.stringify(res.data));
 
    })
    .catch((err)=>{
      // console.log(err);
      // alert("Signup Error" + err)
      if(err.response){
        console.log(err)
        // alert("Error:" + err.response.data.message)
        toast.error("Error:" + err.response.data.message);
      }
    })
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            <h3 className="font-bold text-center text-lg">Signup</h3>
            <hr />
            <div className="mt-4 space-y-2">
              <span>Name</span> <br />
              <input
                className="w-80 py-1 px-3 border rounded-md outline-none"
                type="text"
                placeholder="Your Name"
              {...register("fullname", { required: true })}

              />
               <br />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span> <br />
              <input
                className="w-80 py-1 px-3 border rounded-md outline-none"
                type="email"
                placeholder="Enter Your Email"
              {...register("email", { required: true })}

              />
               <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span> <br />
              <input
                className="w-80 py-1 px-3 border rounded-md outline-none"
                type="password"
                placeholder="Enter Your Password"
              {...register("password", { required: true })}

              />
               <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login/>
              </p>
            </div>
            </form>
            {/* button */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
