
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const team = [
  {
    name: "kowshik Dontu",
    
    image: "/kowshik.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/kowshik-dontu-2b5b462b9/",
      github: "https://github.com/kowshikdontu",
      email: "kowshik.22bce9556@vitapstudent.ac.in"
    }
  },
  {
    name: "T.S.Aditya",
    
    image: "/aditya.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/aditya-ts-333751326/",
      github: "https://github.com/tsadityaa",
      email: "t.s.aditya35@gmail.com"
    }
  },
  {
    name: "Jyesta Satya Priya",
    
    image: "/satya.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/satya-priya-jyesta-066362276/",
      github: "https://github.com/satya102304",
      email: "satyapriya.22bce8445@vitapstudent.ac.in"
    }
  },
  {
    name: "Durgam Moksha sree",
    
    image: "/moksha.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/moksha-sree-043657258/",
      github: "https://github.com/Mokshasree2406",
      email: "mokshasree.22bce9979@vitapstudent.ac.in"
    }
  }
  
];

export default function TeamSection() {
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
    <section id="team" className="bg-white py-20 md:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Meet Our Team</h2>
          <p className="text-lg text-gray-700">
            Computer Science and Engineering students with a passion for innovation
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="card-team group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.email}
                      className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
