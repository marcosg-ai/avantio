interface MultipleImageUploaderProps {
  handleUpdloadImages?: (
    file: Array<{ file: File; preview: string }>
  ) => void | undefined;
  handleDeleteImage?: (index: number) => void | undefined;
  images: Array<{ file: File; preview: string }>;
}

const MultipleImageUploader: React.FC<MultipleImageUploaderProps> = ({
  handleUpdloadImages,
  handleDeleteImage,
  images = [],
}) => {
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
      Promise.all(newImages).then(
        (images: Array<{ file: File; preview: string }>) => {
          console.log(images);
          if (handleUpdloadImages) handleUpdloadImages(images);
        }
      );
    }
  };

  const handleRemoveImage = (index: number) => {
    if (handleDeleteImage) handleDeleteImage(index);
  };

  return (
    <>
      {handleUpdloadImages && (
        <label
          htmlFor="countries"
          className="block mb-2  text-left text-sm font-medium text-white dark:text-white"
        >
          Subir Imágenes
        </label>
      )}

      <div className="p-4 border rounded shadow">
        <label className="block text-gray-700 font-bold mb-2"></label>

        {handleUpdloadImages && (
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="mb-2"
          />
        )}

        <div className="flex gap-2 mt-3 flex-wrap">
          {images?.map(
            (img: { file: File; preview: string }, index: number) => (
              <div key={index} className="relative">
                <img
                  src={img.preview}
                  alt={`preview-${index}`}
                  className="w-32 h-32 object-cover border rounded"
                />

                {handleDeleteImage && (
                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                    onClick={() => handleRemoveImage(index)}
                  >
                    ✕
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default MultipleImageUploader;
