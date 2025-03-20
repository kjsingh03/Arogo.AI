import axios from "axios"

export const nearbyDoctorsFetchService = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/doctors/search?page=1&limit=10`)
        return res.data.data.doctors
    } catch (err: any) {
        console.log(err)
    }
}
