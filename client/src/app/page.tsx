"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getPlot } from '@/utils/api';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export default function Home() {
  const [count,setCount] = useState(0);
  const [imageUrl,setImageUrl] = useState<string | null>(null);


  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme('dark');
  }, []);

  const inputChange = (e:any) => {
      
      setCount(e.target.value);
  }

  const getThePlot = async (n:number) => {
      n = parseInt(n.toString());
      if(n < 1)
      {
        alert("Please enter a number greater than 0");
        return;
      }
      if(!Number.isInteger(n)){
        alert("Please enter a whole number");
        return
      }
      if(n > 100000)
      {
        alert("Please enter a number less than 100.000");
        return;
      }

      const data = await getPlot(n);
      const blob = new Blob([data], {type: 'image/png'});
      const url = URL.createObjectURL(blob);;
      setImageUrl(url);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl font-bold text-center">Pi Approximation App</h1>
            <div className="text-center">
                <Input type="text" value={count} onChange={inputChange}/>
                <Button onClick={() => setCount(parseInt(count.toString())+1)}>Increment</Button>
            </div>


            <Button onClick={() => getThePlot(count)}>Get Plot</Button>


            {
                imageUrl && <img src={imageUrl} alt="plot" />
            }


        </div>
  );
}
