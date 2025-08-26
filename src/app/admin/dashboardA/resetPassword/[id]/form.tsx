// app/admin/dashboardA/resetPassword/[id]/form.tsx
'use client'

import { useActionState, useEffect } from 'react'
import { reset } from './actions'

export default function ResetForm({ id }: { id: string }) {
    const [state, formAction] = useActionState(reset, {})
    useEffect(() => {
        if (state?.success) {
            window.location.href = "/admin/dashboardA"
        }
    }, [state])
    return (
        <form
            className="w-full flex items-center shadow-xl p-10 flex-col gap-5"
            action={formAction}
        >
            <div className="flex flex-col w-full gap-5">
                <div className="w-full flex flex-col">
                    <label>Nueva Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className="h-10 px-5 border border-bluemain rounded-2xl"
                    />
                </div>

                <input type="hidden" name="id" defaultValue={id} />

                <div className="w-full flex flex-col">
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        name="confirm-password"
                        className="h-10 px-5 border border-bluemain rounded-2xl"
                    />
                </div>

                {state?.error && (
                    <p className="text-red-500 text-sm">{state.error}</p>
                )}

                <button
                    className="mt-5 bg-bronze text-white h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze"
                >
                    Actualizar contraseña
                </button>
            </div>
        </form>
    )
}
