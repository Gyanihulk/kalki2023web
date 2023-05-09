import React, { useEffect } from "react";
import Error from "../components/Error";
import { useStateContext } from "../context/FirebaseContext";
import { useNavigate } from "react-router";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
const Dashboard = () => {
  const { isLoggedIn,user } = useStateContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/error");
    }
  }, [isLoggedIn]);
  function getImageFileObject(imageFile) {
    console.log(imageFile)
    const currentDate = new Date();
    const storageRef = ref(storage, "images/" + user +currentDate );
    const uploadTask = uploadBytes(storageRef, imageFile.file);
  
    uploadTask.then((snapshot) => {
      console.log("File uploaded successfully");
      // Additional code here (e.g., update database with file information)
    }).catch((error) => {
      console.error("Error uploading file:", error);
    });
  }

  function runAfterImageDelete(file) {
    console.log({ file });
  }
  return (
    <div class="flex flex-col h-screen">
      {/* <!-- Header --> */}
      <header class="p-4 bg-white border-b border-gray-200">
        <h1 class="text-xl font-semibold text-gray-800">Fitness App</h1>
      </header>

      {/* <!-- Main Content --> */}
      <main class="flex-grow p-6">
        <div class="grid">
          <div class="bg-green-500 hover:bg-green-600 rounded-lg p-4 text-white">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold">Upload your document</h2>
              <button class="bg-white text-green-500 hover:text-green-600 rounded-full p-2">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="flex flex-col">
              <div class="bg-gray-200 rounded-lg p-4 mb-2 flex items-center justify-between">
                <span class="text-lg font-semibold">
                  <ImageUploader
                  style={{ height: 50, width: 200, background: 'rgb(0 182 255)' }}
                    onFileAdded={(img) => getImageFileObject(img)}
                    onFileRemoved={(img) => runAfterImageDelete(img)}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Today's Workout --> */}
          <a
            href="/"
            class="w-full grid bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-white flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1519046904882-16f4e2b5cf43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Today's Workout"
              class="w-10 h-10 rounded-full mr-4"
            />
            <span class="text-lg font-semibold">Today's Workout</span>
            <div class="bg-gray-200 rounded-lg p-4 mt-4">
              <h2 class="text-lg font-semibold mb-2">Exercises:</h2>
              <ul class="list-disc ml-4">
                <li>Squats</li>
                <li>Push-ups</li>
                <li>Planks</li>
                <li>Lunges</li>
                <li>Burpees</li>
              </ul>
            </div>
          </a>

          {/* <!-- Water Intake --> */}
          <div class="bg-green-500 hover:bg-green-600 rounded-lg p-4 text-white">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold">Water Intake</h2>
              <button class="bg-white text-green-500 hover:text-green-600 rounded-full p-2">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="flex flex-col">
              <div class="bg-gray-200 rounded-lg p-4 mb-2 flex items-center justify-between">
                <h3 class="text-lg font-semibold">Required Water:</h3>
                <span class="text-lg font-semibold">8 glasses</span>
              </div>
              <div class="bg-gray-200 rounded-lg p-4 mb-2 flex items-center justify-between">
                <h3 class="text-lg font-semibold">Water Drank:</h3>
                <span class="text-lg font-semibold">4 glasses</span>
              </div>
            </div>
          </div>

          {/* <!-- Progress Graph --> */}
          <a
            href="/"
            class="bg-yellow-500 hover:bg-yellow-600 rounded-lg p-4 text-white flex items-center justify-center"
          >
            <i class="fas fa-chart-line text-3xl mr-4"></i>
            <span class="text-lg font-semibold">Progress Graph</span>
          </a>

          {/* <!-- Fitness Test --> */}
          <a
            href="/"
            class="bg-purple-500 hover:bg-purple-600 rounded-lg p-4 text-white flex items-center justify-center"
          >
            <i class="fas fa-running text-3xl mr-4"></i>
            <span class="text-lg font-semibold">Fitness Test</span>
          </a>

          {/* <!-- Book Classes --> */}
          <a
            href="/"
            class="bg-pink-500 hover:bg-pink-600 rounded-lg p-4 text-white flex items-center justify-center"
          >
            <i class="fas fa-calendar-alt text-3xl mr-4"></i>
            <span class="text-lg font-semibold">Book Classes</span>
          </a>

          {/* <!-- Find Trainer/Gym --> */}
          <a
            href="/"
            class="bg-red-500 hover:bg-red-600 rounded-lg p-4 text-white flex items-center justify-center"
          >
            <i class="fas fa-map-marker-alt text-3xl mr-4"></i>
            <span class="text-lg font-semibold">Find Trainer/Gym</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
