import { useState } from "react";

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploadProps> = ({ onFileSelect }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // Manejar la selección del archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Verificar que el archivo sea una imagen
      if (!selectedFile.type.startsWith("image/")) {
        alert("Solo se permiten imágenes");
        return;
      }

      setFile(selectedFile);
      onFileSelect(selectedFile);

      // Generar una vista previa
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  console.log(file);

  return (
    <div className="p-4 border rounded shadow">
      <label className="block text-gray-700 font-bold mb-2">Subir Imagen</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2"
      />

      {preview && (
        <div className="mt-2">
          <p className="text-sm text-gray-500">Vista previa:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover mt-1 border"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
