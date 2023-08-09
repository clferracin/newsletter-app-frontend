import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"

export function useSendEmail(){
    const { mutate, isSuccess, isError }  = useMutation({
        mutationFn: (data: { email: string }) => {
            return axios.post('https://jotn3jq5pcj2hng2cbln524u7q0efhme.lambda-url.us-east-1.on.aws/', data)
        },
        onSuccess: () => {
            toast("Email enviado com sucesso!!! 😊",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "light",
                type: "success"
            })
        }
    })

    return {
        isSuccess,
        mutate,
        isError
    }
}