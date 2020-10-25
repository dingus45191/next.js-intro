import React from 'react';
import  Link from 'next/link'

export default function Pages() {
  return (
    <div>
          <h1>Index Page</h1>
          <Link href="/notes">
              <a>
               Link   
              </a>
          </Link>
    </div>
  );
}
