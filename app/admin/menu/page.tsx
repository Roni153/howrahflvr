"use client";

import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  MenuItem as MuiMenuItem
} from "@mui/material";
import { Plus, Trash2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { MenuItem, MenuCategory } from "@/lib/validation";

const categories: MenuCategory[] = [
  "Starters",
  "Main Course",
  "Desserts",
  "Beverages"
];

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChange = (id: string, field: keyof MenuItem, value: any) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  const handleAdd = () => {
    setItems((prev) => [
      ...prev,
      {
        id: `temp-${Date.now()}`,
        name: "",
        description: "",
        price: 0,
        category: "Starters",
        vegetarian: false,
        special: false,
        imageUrl: ""
      }
    ]);
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/menu", {
        method: "PUT",
        body: JSON.stringify(items),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) {
        throw new Error("Failed to save menu");
      }
      alert("Menu updated successfully. Remember that on Vercel, file changes may not persist.");
    } catch (e) {
      console.error(e);
      alert("Could not save menu. Please check server logs.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        Loading menu…
      </div>
    );
  }

  return (
    <AnimatedSection>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          eyebrow="Admin"
          title="Manage Daily Menu"
          subtitle="Add, edit, or remove dishes. Changes are stored in `public/menu.json`."
          align="left"
        />
        <Button
          startIcon={<Plus className="h-4 w-4" />}
          variant="contained"
          color="primary"
          onClick={handleAdd}
        >
          Add Dish
        </Button>
        <div className="grid gap-4">
          {items.map((item) => (
            <Card key={item.id} className="shadow-soft">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name"
                      fullWidth
                      value={item.name}
                      onChange={(e) =>
                        handleChange(item.id, "name", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      select
                      label="Category"
                      fullWidth
                      value={item.category}
                      onChange={(e) =>
                        handleChange(item.id, "category", e.target.value)
                      }
                    >
                      {categories.map((c) => (
                        <MuiMenuItem key={c} value={c}>
                          {c}
                        </MuiMenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      label="Price (₹)"
                      type="number"
                      fullWidth
                      value={item.price}
                      onChange={(e) =>
                        handleChange(item.id, "price", Number(e.target.value))
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Description"
                      fullWidth
                      multiline
                      minRows={2}
                      value={item.description}
                      onChange={(e) =>
                        handleChange(item.id, "description", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      label="Image URL (optional)"
                      fullWidth
                      value={item.imageUrl || ""}
                      onChange={(e) =>
                        handleChange(item.id, "imageUrl", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className="flex items-center gap-2">
                    <Chip
                      label={item.vegetarian ? "Vegetarian" : "Non-veg"}
                      color={item.vegetarian ? "success" : "default"}
                      variant={item.vegetarian ? "filled" : "outlined"}
                      onClick={() =>
                        handleChange(item.id, "vegetarian", !item.vegetarian)
                      }
                    />
                    <Chip
                      label={item.special ? "Chef’s Special" : "Mark Special"}
                      color={item.special ? "primary" : "default"}
                      variant={item.special ? "filled" : "outlined"}
                      onClick={() =>
                        handleChange(item.id, "special", !item.special)
                      }
                    />
                    <Button
                      color="error"
                      variant="text"
                      startIcon={<Trash2 className="h-4 w-4" />}
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Menu"}
        </Button>
      </div>
    </AnimatedSection>
  );
}
