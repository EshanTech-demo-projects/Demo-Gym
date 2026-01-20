'use client';

import { TrainersSection } from '@/components/sections/trainers-section';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/ui/booking-modal';
import { useState } from 'react';

const schedule = [
  {
    day: 'Monday',
    slots: [
      { time: '6:00 AM - 8:00 AM', trainer: 'John Smith', specialty: 'Strength Training', available: true },
      { time: '9:00 AM - 11:00 AM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
      { time: '12:00 PM - 2:00 PM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
      { time: '4:00 PM - 6:00 PM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: true },
      { time: '7:00 PM - 9:00 PM', trainer: 'John Smith', specialty: 'Strength Training', available: false },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '6:00 AM - 8:00 AM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
      { time: '9:00 AM - 11:00 AM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
      { time: '12:00 PM - 2:00 PM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: true },
      { time: '4:00 PM - 6:00 PM', trainer: 'John Smith', specialty: 'Strength Training', available: true },
      { time: '7:00 PM - 9:00 PM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '6:00 AM - 8:00 AM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
      { time: '9:00 AM - 11:00 AM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: true },
      { time: '12:00 PM - 2:00 PM', trainer: 'John Smith', specialty: 'Strength Training', available: false },
      { time: '4:00 PM - 6:00 PM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
      { time: '7:00 PM - 9:00 PM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '6:00 AM - 8:00 AM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: true },
      { time: '9:00 AM - 11:00 AM', trainer: 'John Smith', specialty: 'Strength Training', available: true },
      { time: '12:00 PM - 2:00 PM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
      { time: '4:00 PM - 6:00 PM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
      { time: '7:00 PM - 9:00 PM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: false },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '6:00 AM - 8:00 AM', trainer: 'John Smith', specialty: 'Strength Training', available: true },
      { time: '9:00 AM - 11:00 AM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
      { time: '12:00 PM - 2:00 PM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
      { time: '4:00 PM - 6:00 PM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: true },
      { time: '7:00 PM - 9:00 PM', trainer: 'John Smith', specialty: 'Strength Training', available: true },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '8:00 AM - 10:00 AM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
      { time: '10:00 AM - 12:00 PM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
      { time: '2:00 PM - 4:00 PM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: true },
      { time: '4:00 PM - 6:00 PM', trainer: 'John Smith', specialty: 'Strength Training', available: true },
    ],
  },
  {
    day: 'Sunday',
    slots: [
      { time: '9:00 AM - 11:00 AM', trainer: 'Emily Davis', specialty: 'Yoga & Flexibility', available: true },
      { time: '11:00 AM - 1:00 PM', trainer: 'Sarah Johnson', specialty: 'HIIT & Cardio', available: true },
      { time: '3:00 PM - 5:00 PM', trainer: 'Mike Williams', specialty: 'CrossFit', available: true },
    ],
  },
];

export default function TrainersPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<{
    trainer: string;
    timeSlot: string;
    specialty: string;
  } | null>(null);

  const handleBookSession = (trainer: string, timeSlot: string, specialty: string) => {
    setSelectedBooking({ trainer, timeSlot, specialty });
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-20">
      <TrainersSection />
      
      {/* Trainer Schedule Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Weekly Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trainer <span className="gradient-text">Availability</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Book your sessions with our expert trainers. Check their weekly availability and specialties below.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {schedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="mdi:calendar" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{day.day}</h3>
                      <p className="text-sm text-muted-foreground">{day.slots.length} sessions available</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {day.slots.map((slot, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          slot.available
                            ? 'border-primary/20 bg-primary/5 hover:border-primary/40 hover:bg-primary/10'
                            : 'border-muted bg-muted/50 opacity-60'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon icon="mdi:clock-outline" className="h-5 w-5 text-primary" />
                            <span className="font-semibold text-sm">{slot.time}</span>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              slot.available
                                ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                                : 'bg-red-500/20 text-red-600 dark:text-red-400'
                            }`}
                          >
                            {slot.available ? 'Available' : 'Booked'}
                          </span>
                        </div>
                        <p className="font-medium text-foreground mb-1">{slot.trainer}</p>
                        <p className="text-xs text-muted-foreground">{slot.specialty}</p>
                        {slot.available && (
                          <button
                            onClick={() => handleBookSession(slot.trainer, slot.time, slot.specialty)}
                            className="mt-3 w-full px-3 py-1.5 bg-primary text-white rounded-md text-xs font-medium hover:bg-primary/90 transition-colors"
                          >
                            Book Session
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Booking Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-primary/10 rounded-xl border border-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon icon="mdi:information" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How to Book a Session</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Sessions must be booked at least 24 hours in advance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Each session is 2 hours including warm-up and cool-down</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Free cancellation up to 12 hours before session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Premium members get priority booking access</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        trainerName={selectedBooking?.trainer}
        timeSlot={selectedBooking?.timeSlot}
        serviceTitle={selectedBooking?.specialty}
      />
    </main>
  );
}
