export default function CreatePost(){
    const [titre,setTitre] = useState('')
    const [body,setBody] = useState('')
    const [error,setError] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()
        setError('')
        
    }
    return(
        <h1>Cree votre post</h1>

    )
}