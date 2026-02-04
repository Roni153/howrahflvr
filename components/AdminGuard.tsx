"use client";

import { ReactNode, useEffect, useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { Lock } from "lucide-react";

const ADMIN_KEY = "hf_admin_authenticated";

export default function AdminGuard({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem(ADMIN_KEY);
      if (stored === "true") setAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const expected =
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "howrah-flavors-admin";
    if (password === expected) {
      setAuthenticated(true);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(ADMIN_KEY, "true");
      }
    } else {
      alert("Incorrect password");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <Card className="max-w-sm w-full shadow-soft">
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-brand.primary" />
              <Typography variant="h6">Admin Access</Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              Enter the admin password to manage the daily menu and reservations.
            </Typography>
            <form onSubmit={handleLogin} className="space-y-3">
              <TextField
                label="Admin password"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign in
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
