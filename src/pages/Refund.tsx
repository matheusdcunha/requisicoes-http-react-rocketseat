import { useState } from "react"
import { useNavigate, useParams } from "react-router"

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"

import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"

import fileSvg from "../assets/file.svg"

export function Refund() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null)

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (params.id) {
      return navigate(-1)
    }

    navigate("/confirm", { state: { fromSubmit: true } })
  }

  return (
    <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
      <header>
        <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reembolso.</p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        disabled={!!params.id}
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />

      <div className="flex gap-4">
        <Select
          legend="Categoria"
          required
          disabled={!!params.id}
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
          }}
        >
          {CATEGORIES_KEYS.map((categoria) => {
            return (
              <option key={categoria} value={categoria}>
                {CATEGORIES[categoria].name}
              </option>
            )
          })}
        </Select>
        <Input
          legend="Valor"
          required
          value={amount}
          disabled={!!params.id}
          onChange={(e) => {
            setAmount(e.target.value)
          }}
        />
      </div>

      {
        params.id ? 
        <a href="https://www.youtube.com/" 
        target="_blank"
        className="text-sm text-green-600 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="Ícone de arquivo" />
          Abrir comprovante
        </a> : 
        <Upload
        disabled={!!params.id}
        filename={filename && filename.name}
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
      />
      }

      
      <Button type="submit" isLoading={isLoading} >
        {params.id ? "Voltar" : "Enviar"}
      </Button>

    </form>
  )
}