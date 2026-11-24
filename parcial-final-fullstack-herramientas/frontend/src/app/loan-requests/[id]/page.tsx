import Link from "next/link";
import { apiFetch } from "../../../lib/api";
import { notFound } from "next/navigation";
import { LoanRequest } from "../../../lib/loan-types";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  const { id } = await params; 
  const response = await apiFetch('/loan-types/${endcodeURIComponent(id)}');
  if (response.status === 404 || response.status === 400) notFound();
  if (!response.ok) throw new Error("No se pudo consultar la solicitud"); 
  const item: LoanRequest = await response.json(); 

  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.
  void params;

  return (
    <main>
      <h1>Loan receipt</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section className="panel">
        <dl>
          <dt>ID</dt><dd>{item.id}</dd>
          <dt>PURPOSE</dt><dd>{item.purpose}</dd>
          <dt>DAYS</dt><dd>{item.days}</dd>
          <dt>TOOL</dt><dd>{item.tool.name}</dd>
        </dl>
        <p>Complete the request details.</p>
      </section>
    </main>
  );
}

