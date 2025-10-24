import { TicketForm } from "@/components/tickets/CreateTicketForm";

export default function CreateTicketPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-10">
      <TicketForm />
    </div>
  );
}
