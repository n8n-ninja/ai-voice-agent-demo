import { useVoice } from "@humeai/voice-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "./ui/button"
import { Phone } from "lucide-react"

export default function StartCall() {
  const { status, connect } = useVoice()

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (
        <motion.div
          className={
            "fixed inset-0 p-4 flex items-center justify-center bg-background"
          }
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              variants={{
                initial: {
                  scale: 0.8,
                  opacity: 0,
                  y: 20,
                },
                enter: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  },
                },
                exit: {
                  scale: 0.8,
                  opacity: 0,
                  y: -20,
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
              className="flex flex-col items-center gap-4 bg-white rounded-xl border border-gray-200 shadow-lg p-8"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.2,
                  },
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <img
                  src="/avatar.png"
                  alt="Avatar"
                  className="w-24 h-24 rounded-full"
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3 },
                }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl font-semibold tracking-tight"
              >
                Sophia Minds
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4 },
                }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-gray-600 mb-4 max-w-[400px]"
              >
                Hi! I'm an AI guide designed to help you learn effective
                techniques for training ADHD patients. Let's work together to
                develop your skills.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Button
                  className={"z-50 flex items-center gap-1.5"}
                  onClick={() => {
                    connect()
                      .then(() => {})
                      .catch(() => {})
                      .finally(() => {})
                  }}
                >
                  <span>
                    <Phone
                      className={"size-4 opacity-50"}
                      strokeWidth={2}
                      stroke={"currentColor"}
                    />
                  </span>
                  <span>Start Call</span>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
