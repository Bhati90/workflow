// // LandingPage.tsx
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { File } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const steps = [
//      {
//     title: 'Step 1: Create Your Stack First',
//     description: 'give name to you stack & some discription then your stack created click on edit stack ',
//     img: 'step1.png',
//   },
//   {
//     title: 'Step 2: Add Components & Enter Query',
//     description: 'Drag and drop the four required components: User Query, LLM, Knowledge Base, and Output. Now enter your Query',
//     img: 'step2.png',
//   },
// //   {
// //     title: 'Step 3: Enter User Query',
// //     description: 'Type your initial query, like “check resume” in the User Query box.',
// //     img: '/step3.png',
// //   },
//   {
//     title: 'Step 3: Configure LLM Node',
//     description: 'Choose GPT or Gemini model, enter your API key, set temperature, and enter prompt.',
//     img: '/step3.png',
//   },
//   {
//     title: 'Step 4: Upload PDF in Knowledge Base',
//     description: 'Upload a PDF resume or any file, choose an embedding model, and add API key.',
//     img: '/step4.png',
//   },
//   {
//     title: 'Step 5: Save & Build Stack',
//     description: 'Click “Save” then “Build Stack” to generate results.',
//     img: '/step5.png',
//   },
//   {
//     title: 'Step 6: View Results & Chat',
//     description: 'See the final output in the Output box and continue chatting with follow-up questions.',
//     img: '/step6.png',
//   },
// ];

// export default function LandingPage() {
//   const [activeStep, setActiveStep] = useState(0);

//   return (
//       <div className="p-6 max-w-7xl mx-auto">
//       <motion.h1 
//         initial={{ opacity: 0, y: -20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold mb-6 text-center"
//       >
//         📊 GenAI Stack - Visual Workflow Guide
//       </motion.h1>

//       <motion.p 
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="text-center text-gray-600 mb-12"
//       >
//         Build your own AI workflow visually by combining user input, LLMs, knowledge base PDFs, and custom outputs.
//       </motion.p>

//       <div className="grid md:grid-cols-2 gap-8">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             transition={{ duration: 0.2 }}
//           >
//             <Card
//               onClick={() => setActiveStep(index)}
//               className={`cursor-pointer hover:shadow-xl transition-all duration-300 border-2 ${
//                 index === activeStep ? 'border-blue-500' : 'border-transparent'
//               }`}
//             >
//               <CardContent className="p-4">
//                 <motion.h2 
//                   initial={{ opacity: 0 }} 
//                   animate={{ opacity: 1 }} 
//                   transition={{ duration: 0.4 }}
//                   className="text-xl font-semibold mb-2"
//                 >
//                   {step.title}
//                 </motion.h2>
//                 <motion.p 
//                   initial={{ opacity: 0 }} 
//                   animate={{ opacity: 1 }} 
//                   transition={{ delay: 0.1, duration: 0.4 }}
//                   className="text-gray-700 mb-4"
//                 >
//                   {step.description}
//                 </motion.p>
//                 <motion.img
//                   src={step.img}
//                   alt={`Step ${index + 1}`}
//                   width={500}
//                   height={300}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="rounded-lg border"
//                 />
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         className="mt-12 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//       >
//         <Button className="text-lg px-6 py-3">Try the Stack Live</Button>
//       </motion.div>
//     </div>
//   );
// }
// LandingPage.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { File } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
     {
    title: 'Step 1: Create Your Stack First',
    description: 'give name to you stack & some discription then your stack created click on edit stack ',
    img: 'step1.png',
  },
  {
    title: 'Step 2: Add Components & Enter Query',
    description: 'Drag and drop the four required components: User Query, LLM, Knowledge Base, and Output. Now enter your Query',
    img: 'step2.png',
  },
//   {
//     title: 'Step 3: Enter User Query',
//     description: 'Type your initial query, like “check resume” in the User Query box.',
//     img: '/step3.png',
//   },
  {
    title: 'Step 3: Configure LLM Node',
    description: 'Choose GPT or Gemini model, enter your API key, set temperature, and enter prompt.',
    img: '/step3.png',
  },
  {
    title: 'Step 4: Upload PDF in Knowledge Base',
    description: 'Upload a PDF resume or any file, choose an embedding model, and add API key.',
    img: '/step4.png',
  },
  {
    title: 'Step 5: Save & Build Stack',
    description: 'Click “Save” then “Build Stack” to generate results.',
    img: '/step5.png',
  },
  {
    title: 'Step 6: View Results & Chat',
    description: 'See the final output in the Output box and continue chatting with follow-up questions.',
    img: '/step6.png',
  },
];

export default function LandingPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 max-w-7xl mx-auto overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-4 text-center text-blue-900 tracking-tight"
      >
        🚀 GenAI Stack Workflow Builder
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-blue-700 mb-12 text-lg max-w-2xl mx-auto"
      >
        Visually design your AI pipelines with LLMs, PDF knowledge, and dynamic chat outputs — no code required.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`transition-all duration-300 rounded-3xl shadow-lg border-2 overflow-hidden cursor-pointer bg-white ${
              index === activeStep ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setActiveStep(index)}
          >
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                {step.title}
              </h2>
              <p className="text-blue-600 mb-4">
                {step.description}
              </p>
              <img
                src={step.img}
                alt={`Step ${index + 1}`}
                className="rounded-xl border w-full object-cover"
              />
            </CardContent>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        {/* <Button className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white rounded-full shadow-md">
          Try the Stack Live
        </Button> */}
      </motion.div>
    </div>
  );
}
