import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous errors
    if(!email){
      setError("Please enter a valid email address")
      return;
    }
    if(!password){
      setError("Please enter the password.");
      return;
    }

    setError(""); // Clear

    try {
      // Perform your login logic here
      // For example, you can use fetch to send a request to your backend
      const  = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

        if (!response.ok){
          navigate('/dashboard')
        }
      
    } catch (error) {
        if(error instanceof Error && error.response && error.response.data && error.response.data.message){
            setError(error.response.data.message);
        } else {
            setError("An unexpected error occurred. Please try again");
        }
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>
          {error && <p className='text-red-500 ml-5 text-xs pb-1'>{error}</p>}

        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Sign in</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
