// Api Key 295bb434713f4559a7506b12bff6e07b
// Base Url https://api.rawg.io/api/

import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "295bb434713f4559a7506b12bff6e07b"
    }
})