import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Downloadproduct() {
    const navigate = useNavigate();

    useEffect(() => {
        const baseURL = `https://prince9559.github.io/jsonproject/Product.json`;

        axios.get(baseURL).then((response) => 
            {
                localStorage.setItem("products", JSON.stringify(response.data));
                console.log("Data stored successfully");
                navigate("/shopping"); 
            })

            .catch((error) => {
            console.error("Error storing data", error);
            
            });
    });

    return (
        <div>

            <p>Storing product data...</p>
            
        </div>
    );
}

export default Downloadproduct;
