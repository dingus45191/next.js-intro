import Link from 'next/link'
import React from 'react'

export default function Notes() {
    return (
        <div>
            <h1>Notes Index Path Page</h1>
            <Link href="/notes/[id]" as={`/notes/1`}>
                <a>
                    Note 1
                  </a>
            </Link>
        </div>
    )
}
