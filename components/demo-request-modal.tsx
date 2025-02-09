"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfSatdEmJ1C8nHBEmyyJxN5xjQJlZ7zNk",
  authDomain: "nidaaiqueries.firebaseapp.com",
  projectId: "nidaaiqueries",
  storageBucket: "nidaaiqueries.firebasestorage.app",
  messagingSenderId: "950424567099",
  appId: "1:950424567099:web:939f034bf31bf14ef08b1e",
  measurementId: "G-JYRSRS9P0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function DemoRequestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    query: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const submissionData = {
        ...formData,
        timestamp: new Date()
      };

      const docRef = await addDoc(collection(db, 'tarteebaiQueries'), submissionData);
      console.log('Document written with ID: ', docRef.id);
      setShowSuccess(true);
      
      setTimeout(() => {
        setIsOpen(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          query: "",
        });
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button 
        size="lg" 
        onClick={() => setIsOpen(true)} 
        className="text-white bg-primary hover:bg-primary/90"
      >
        Schedule a Demo
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="rounded-full bg-green-500/20 p-3 mb-4">
                <svg 
                  className="w-12 h-12 text-green-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-500">Your demo request has been submitted.</p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Schedule a Demo</DialogTitle>
                <DialogDescription className="text-lg">
                  Fill out the form below and we will get in touch to schedule your personalized demo of Tarteeb AI.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="query" className="text-sm font-medium">
                      How can we help!
                    </Label>
                    <Input
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full text-white bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Request Demo"
                  )}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
