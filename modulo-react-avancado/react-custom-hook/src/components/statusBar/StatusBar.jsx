import { useOnlineStatus } from "../../assets/hooks/useOnlineStatus"

export default function StatusBar() {
    
    const isOnline = useOnlineStatus();

return(
    <>
        <h1>{isOnline ? "✅ Online": "❌ Disconected..."}</h1>
    </>
)
    
}
