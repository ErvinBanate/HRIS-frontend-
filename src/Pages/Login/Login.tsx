import { useState, FormEvent } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setErrorEmail("");
    setErrorPass("");
    if(!email){
      setErrorEmail("Please Enter A Valid Email Address")
      return;
    }
    if(!isValidEmail(email)){
      setErrorEmail("Please Enter A Valid Email Address")
      return;
    }
    if(!password){
      setErrorPass("Please Enter A Password");
      return;
    }

    // Login with Authentication
    try {

      await axiosInstance.post('/auth/login', {
        email : email, 
        password: password
      }).then(response => {
        if(response.data.status){
          navigate('/dashboard');
          console.log('success');
          
        }else{
          setErrorEmail(response.data.errorEmail);
          setErrorPass(response.data.errorPass);
          return;
        }
      }).catch(error => {
        console.log(error);
      });

    } catch (error) {
      setError("An unexpected error occurred. Please try again");
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
          {error && <p className='text-red-500 ml-5 text-xs pb-1'>{error}</p>}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          {errorEmail && <p className='text-red-500 text-xs pb-1'>{errorEmail}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          {errorPass && <p className='text-red-500 text-xs pb-1'>{errorPass}</p>}
          </div>

        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Sign in</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
