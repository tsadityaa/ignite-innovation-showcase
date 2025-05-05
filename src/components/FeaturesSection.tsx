
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Github, Cpu, Database, Wifi, Server, ActivitySquare, BarChart3, CircuitBoard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Wifi,
    title: "Wireless Sensor Network",
    description: "Low-power mesh network with self-healing capabilities for reliable data transmission."
  },
  {
    icon: CircuitBoard,
    title: "Advanced Sensing Technology",
    description: "Multi-parameter sensors for comprehensive infrastructure monitoring."
  },
  {
    icon: ActivitySquare,
    title: "Real-time Analytics",
    description: "Edge computing system for instant analysis and alert generation."
  },
  {
    icon: BarChart3,
    title: "Predictive Maintenance",
    description: "ML algorithms for failure prediction and maintenance optimization."
  }
];

const techStack = [
  {
    title: "Hardware Stack",
    items: [
      "ESP32 Microcontrollers",
      "Custom PCB Design",
      "LoRaWAN Communication",
      "Various Environmental Sensors",
      "Solar Power Integration",
      "Custom Enclosures (IP67)"
    ]
  },
  {
    title: "Software Stack",
    items: [
      "Node.js & Express Backend",
      "React Frontend",
      "MongoDB/TimescaleDB",
      "TensorFlow for ML Models",
      "MQTT Protocol",
      "AWS Cloud Infrastructure"
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
            Our IoT platform combines cutting-edge hardware and intelligent software
            to revolutionize infrastructure monitoring and management.
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
              <a href="https://github.com/username/repo" target="_blank" rel="noopener noreferrer">
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
