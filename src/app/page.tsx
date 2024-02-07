"use client"
import { useRouter } from 'next/navigation';
import Login from './Login_Paste/page';

export default function Home() {
  const navigate = useRouter();
  return (
    <div style={{height: '650px', paddingTop: '100px', backgroundColor: 'Highlight'}}>
      <center>
      <h1 style={{fontSize: '60px'}}>Virtual Environment</h1>
      <br/>
      <Login/>
      </center>
    </div>
  );
}
