import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)

  useEffect(() => {
    if(numbers && !characters){
      const generatePassword = (length) => {
        const chars = "ABCDEFGHIJKLMNOPqrstuvwxyz0123456789";
        let result = "";
    
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        setPassword(result)
    
        return result;
      }
      generatePassword(length)
    } 
    if(characters && !numbers){
      const generatePassword = (length) => {
        const chars = "ABCDEFGHIJKLMNOPqrstuvwxyz!@#$%^&*()_+{}|:<>?-=[];',./`~";
        let result = "";
    
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        setPassword(result)
    
        return result;
      }
      generatePassword(length)
    }
if(characters && numbers){
  const generatePassword = (length) => {
    const chars = "ABCDEFGHIJKLMNOPqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[];',./`~";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    setPassword(result)

    return result;
  }
  generatePassword(length)
}
    if(!characters && !numbers)
     {
      const generatePassword = (length) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = "";
    
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        setPassword(result)
    
        return result;
      }
      generatePassword(length)
    }


   
  }, [])
  // generateNewPassword 

  const generateNewPassword = (length) => {
    if(numbers && !characters){
      const generatePassword = (length) => {
        const chars = "ABCDEFGHIJKLMNOPqrstuvwxyz0123456789";
        let result = "";
    
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        setPassword(result)
    
        return result;
      }
      generatePassword(length)
    } 
    if(characters && !numbers){
      const generatePassword = (length) => {
        const chars = "ABCDEFGHIJKLMNOPqrstuvwxyz!@#$%^&*()_+{}|:<>?-=[];',./`~";
        let result = "";
    
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        setPassword(result)
    
        return result;
      }
      generatePassword(length)
    }
if(characters && numbers){
  const generatePassword = (length) => {
    const chars = "ABCDEFGHIJKLMNOPqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[];',./`~";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    setPassword(result)

    return result;
  }
  generatePassword(length)
}
    if(!characters && !numbers)
     {
      const generatePassword = (length) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = "";
    
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        setPassword(result)
    
        return result;
      }
      generatePassword(length)
    }

  }

  const handleLength = (e) => {
    setLength(e.target.value)

  }
  const copyPassword = () => {
    
    navigator.clipboard.writeText(password)
toast.success("Password copied successfully! ", {
      position: "top-center",
      autoClose: 2000, 
    });  }

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-200 to-green-100 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <header className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-slate-800">Password Generator</h1>
            <div className="text-sm text-slate-500">Secure & simple</div>
          </div>
        </header>

        <main className="bg-white shadow-lg rounded-2xl p-6">
          <section className="mb-6">
            <label className="block text-sm text-slate-600 mb-2">Generated password</label>
            <div className="flex gap-3 items-center">
              <input value={password} readOnly type="text" aria-label="Generated password" className='flex-1 px-4 py-3 rounded-lg border border-slate-200 text-slate-800 bg-slate-50 shadow-inner' />
              <button className='inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700' onClick={copyPassword}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2h-6" />
                </svg>
                Copy
              </button>
            </div>
          </section>

          <section className="mb-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center " action="">
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-2">Length: <span className="font-medium text-slate-800">{length}</span></label>
                <input type="range" min={4} max={32} value={length} onClick={handleLength} className="w-full" />
              </div>

              <div className="flex gap-4  items-center">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" onClick={() => setNumbers(!numbers)} className="h-4 w-4" />
                  Numbers
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" onClick={() => setCharacters(!characters)} className="h-4 w-4" />
                  Characters
                </label>
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button className='bg-emerald-600 text-white px-4 py-2 m-auto rounded-lg shadow hover:bg-emerald-700' onClick={() => generateNewPassword(length)}>Generate New Password</button>
              </div>
            </form>
          </section>

          <footer className="text-xs text-slate-500">Tip: Click "Generate New Password" to create a new secure password. Use copy to save it to clipboard.</footer>
        </main>
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
