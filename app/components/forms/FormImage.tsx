"use client"
import Image from "next/image"

export default function FormImage() {
  return (
    <div>
      <Image
        src="/form_image.png"
        alt="Form icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: '100px' }}
      />
    </div>
  )
} 