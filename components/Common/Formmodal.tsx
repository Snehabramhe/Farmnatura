import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "" });
        onClose();
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("API error:", error);
      alert("Submission failed!");
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Get More Information</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label className="block text-gray-700 mt-3">Phone</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          <label className="block text-gray-700 mt-3">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded mt-1"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Button className="mt-4 w-full" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
