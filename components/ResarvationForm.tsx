"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, ReservationFormValues } from "@/lib/validation";
import {
  TextField,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  compact?: boolean;
};

export default function ReservationForm({ compact }: Props) {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [reservation, setReservation] = useState<ReservationFormValues | null>(
    null
  );
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: undefined,
      time: "",
      guests: 2,
      requests: ""
    }
  });

  const onSubmit = async (values: ReservationFormValues) => {
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) {
        throw new Error("Failed to create reservation");
      }

      setReservation(values);
      setOpenDialog(true);
      reset();
      router.refresh();
    } catch (e) {
      alert(
        "We’re sorry, something went wrong while saving your reservation. Please try again."
      );
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={compact ? 12 : 6}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    required
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={compact ? 12 : 6}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={compact ? 12 : 6}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone"
                    fullWidth
                    required
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={compact ? 12 : 3}>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    label="Date"
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                        error: !!errors.date,
                        helperText: errors.date?.message
                      }
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={compact ? 12 : 3}>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    label="Time"
                    value={field.value ? new Date(`1970-01-01T${field.value}`) : null}
                    onChange={(value) => {
                      if (value) {
                        const hours = value.getHours().toString().padStart(2, "0");
                        const minutes = value
                          .getMinutes()
                          .toString()
                          .padStart(2, "0");
                        field.onChange(`${hours}:${minutes}`);
                      } else {
                        field.onChange("");
                      }
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                        error: !!errors.time,
                        helperText: errors.time?.message
                      }
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={compact ? 12 : 3}>
              <Controller
                name="guests"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Guests"
                    type="number"
                    inputProps={{ min: 1, max: 20 }}
                    fullWidth
                    required
                    error={!!errors.guests}
                    helperText={errors.guests?.message}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="requests"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Special requests (optional)"
                    fullWidth
                    multiline
                    minRows={3}
                    error={!!errors.requests}
                    helperText={errors.requests?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size={compact ? "medium" : "large"}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking your table..." : "Confirm Reservation"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </LocalizationProvider>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
        <DialogTitle>Reservation Confirmed</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2" gutterBottom>
            Thank you for reserving with Howrah Flavors. We&apos;ve received your
            request and will follow up if needed.
          </Typography>
          {reservation && (
            <div className="mt-3 space-y-1 text-sm">
              <p>
                <strong>Name:</strong> {reservation.name}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {reservation.date ? reservation.date.toDateString() : ""}
              </p>
              <p>
                <strong>Time:</strong> {reservation.time}
              </p>
              <p>
                <strong>Guests:</strong> {reservation.guests}
              </p>
              {reservation.requests && (
                <p>
                  <strong>Requests:</strong> {reservation.requests}
                </p>
              )}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
