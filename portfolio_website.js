import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Chidi
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A Full-Stack Developer & AI Engineer
      </motion.p>
      
      <div className="flex space-x-4">
        <Button variant="outline">View My Work</Button>
        <Button>Contact Me</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Card className="bg-gray-800">
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Building responsive and modern websites using React & Next.js.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">AI Engineering</h3>
            <p>Creating AI-driven applications with Python and TensorFlow.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
            <p>Developing Shopify stores that drive sales and engagement.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4 mt-8 text-xl">
        <a href="#" className="text-gray-400 hover:text-white"><FaGithub /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
      </div>
    </div>
  );
}
