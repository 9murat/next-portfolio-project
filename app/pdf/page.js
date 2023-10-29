import Link from 'next/link'
import React from 'react'

export default function PDFPage() {
    return (
        <div>
            <p>
                <embed src='/Murat-Öncel-CV.pdf' type="application/pdf" width="100%" height="710px" />
            </p>
        </div>
    )
}
