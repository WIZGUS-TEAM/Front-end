"use client"

export default function SuccessStep() {
  return (
    <div className="text-center py-12">
      <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
        <svg
          className="h-12 w-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="mt-6 text-3xl font-bold text-gray-900">Inscription réussie !</h2>
      <p className="mt-2 text-sm text-gray-600">
        Votre compte a été créé avec succès. Vous pouvez maintenant commencer à utiliser la plateforme.
      </p>
      <div className="mt-8">
        <button
          type="button"
          onClick={() => window.location.href = "/"}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Accéder à mon espace
        </button>
      </div>
    </div>
  )
} 