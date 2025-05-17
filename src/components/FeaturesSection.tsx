
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Github, Cpu, Database, Wifi, Server, ActivitySquare, BarChart3, CircuitBoard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Wifi,
    title: "Real-time Obstacle Detection",
    description: "Multi-threaded ultrasonic sensors detect obstacles and enqueue priority instructions for navigation."
  },
  {
    icon: CircuitBoard,
    title: "Latency-Optimized Audio Alerts",
    description: "Messages processed via a priority queue and converted to speech using eSpeak with low-latency \"cheat codes\"."
  },
  {
    icon: ActivitySquare,
    title: "Emergency Reporting via Telegram API",
    description: "Automatically notifies emergency contacts through Telegram during critical events."
  },
  {
    icon: BarChart3,
    title: "Surface Type Detection with IR Sensors",
    description: "Uses IR reflection patterns to identify floor-type changes like stairs or uneven terrain."
  },
  {
    icon: BarChart3,
    title: "Gait Analysis through Pressure Sensors",
    description: "Uses IR reflection patterns to identify floor-type changes like stairs or uneven terrain."
  },
  {
    icon: BarChart3,
    title: "Self-Charging Footwear with Piezoelectric Pads",
    description: " Generates power from foot pressure using embedded piezoelectric materials — no external battery needed."
  }

];

const techStack = [
  {
    title: "Hardware Stack",
    items: [
      "Raspberry Pi 3 Model B+",
      "VL53L0X Time-of-Flight Distance Sensor",
      "TCRT5000 Reflective Optical Sensor",
      "FSR (Force Sensitive Resistor)",
      "Neo-6M GPS Module",
      "Ultrasonic Sensor (HC-SR04)",
      "Servo Motor (for scanning with the ultrasonic sensor)",
      "Buzzer",
      "Push Button",
      "Telebot (Telegram bot) setup"
  ]
  },
  {
    title: "Software Stack",
    items: [
      "Raspbian OS",
      "Python 3",
      "RPi.GPIO",
      "Telebot",
      "Threading",
      "Gps",
      "Subprocess",
      "Geopy",
      "Signal"
  ]
  }
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="bg-white py-20 md:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Our Technical Solution</h2>
          <p className="text-lg text-gray-700">
          Strideo assist is a wearable smart shoe with multiple sensing technologies helps in solving the major problems that blind face.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="card-feature group"
            >
              <div className="bg-brand-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-soft p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                {index === 0 ? (
                  <Cpu className="mr-3 h-5 w-5 text-brand-600" />
                ) : (
                  <Server className="mr-3 h-5 w-5 text-brand-600" />
                )}
                {stack.title}
              </h3>
              <ul className="space-y-3">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-brand-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button className="btn-primary" asChild>
              <a href="https://github.com/kowshikdontu/smartshoe" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View Source on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
