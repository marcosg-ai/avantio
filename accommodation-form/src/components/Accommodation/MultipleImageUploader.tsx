import { useState } from "react";

interface MultipleImageUploaderProps {
  handleUpdloadImages: (file: [File]) => void;
  handleDeleteImage: (index: number) => void;
  images: Array<{ file: File; preview: string }>;
}

const MultipleImageUploader: React.FC<MultipleImageUploaderProps> = ({
  handleUpdloadImages,
  handleDeleteImage,
  images = [],
}) => {
  // const [images, setImages] = useState<{ file: File; preview: string }[]>([]);

  // Manejar la carga de archivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files); // Convertir a array

      const newImages = filesArray.map((file) => {
        const reader = new FileReader();

        return new Promise<{ file: File; preview: string }>((resolve) => {
          reader.onloadend = () => {
            resolve({ file, preview: reader.result as string });
          };
          reader.readAsDataURL(file);
        });
      });

      // Esperar a que todas las imágenes se procesen
      Promise.all(newImages).then((images) => {
        console.log(images);
        handleUpdloadImages(images);
      });
    }
  };

  // Eliminar una imagen de la previsualización
  const handleRemoveImage = (index: number) => {
    handleDeleteImage(index);
  };

  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2  text-left text-sm font-medium text-white dark:text-white"
      >
        Subir Imágenes
      </label>

      <div className="p-4 border rounded shadow">
        <label className="block text-gray-700 font-bold mb-2"></label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="mb-2"
        />

        {/* Mostrar vista previa */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {images?.map(
            (img: { file: File; preview: string }, index: number) => (
              <div key={index} className="relative">
                <img
                  src={img.preview}
                  alt={`preview-${index}`}
                  className="w-32 h-32 object-cover border rounded"
                />
                <button
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                  onClick={() => handleRemoveImage(index)}
                >
                  ✕
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default MultipleImageUploader;
