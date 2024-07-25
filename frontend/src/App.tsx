export  default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
        <main className="my-10 w-full md:max-w-2xl">
          <h1 className="text-4xl font-medium text-white">Clientes</h1>

          <form className="flex flex-col my-6 ">
            <label className="font-medium text-white">Nome:</label>
            <input 
            type="text"
            placeholder="Digite seu nome completo ..."
            className="w-full mb-5 p-2 rounded"
             />

          <label className="font-medium text-white">Email:</label>
           
          </form>
        </main>
    </div>
  )
}