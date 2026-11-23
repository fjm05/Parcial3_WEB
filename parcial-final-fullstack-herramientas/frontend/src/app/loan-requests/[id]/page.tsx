import Link from "next/link";
import { apiFetch } from "../../../lib/api";
import { notFound } from "next/navigation";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  const { id } = await params; 
  const response = await apiFetch;
  if (response.status === 404 || response.status === 400) notFound();
  
  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.
  void params;

  return (
    <main>
      <h1>Loan receipt</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section className="panel">
        <p>Complete the request details.</p>
      </section>
    </main>
  );
}

