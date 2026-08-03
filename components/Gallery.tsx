"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Gallery() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const loadPhotos = async () => {
    const { data, error } = await supabase.storage
      .from("beatriz-50")
      .list();

    if (error) {
      console.log(error);
      return;
    }

    const urls = data.map((photo) => {
      const { data } = supabase.storage
        .from("beatriz-50")
        .getPublicUrl(photo.name);

      return data.publicUrl;
    });

    setPhotos(urls);
  };


  useEffect(() => {
    loadPhotos();
  }, []);


  const uploadPhoto = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("beatriz-50")
        .upload(fileName, file);


      if (error) {
        throw error;
      }

      setMessage("Foto subida correctamente 📸");

      loadPhotos();

    } catch (error) {

      setMessage("Error al subir la foto");

    } finally {

      setUploading(false);

    }
  };


  return (
    <section className="min-h-screen bg-[#00120f] px-6 py-20">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">
          Recuerdos
        </p>

        <h2 className="mt-6 text-white text-4xl md:text-6xl font-serif">
          Galería del evento
        </h2>


        <div className="my-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <label className="inline-block px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] cursor-pointer">

          {uploading ? "Subiendo..." : "Subir foto"}

          <input
            type="file"
            accept="image/*"
            onChange={uploadPhoto}
            className="hidden"
          />

        </label>


        {message && (
          <p className="mt-5 text-[#D4AF37]">
            {message}
          </p>
        )}


        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">

          {photos.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt="Foto del evento"
              className="rounded-xl w-full h-48 object-cover"
            />
          ))}

        </div>


      </div>

    </section>
  );
}