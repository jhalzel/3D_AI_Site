import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

//Components
import { CustomButton } from "../components/index";


import { state } from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state); // valtio state snapshot
  
  return (
    <AnimatePresence >
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")} exit={{ opacity: 0, transition: { duration: 0.2 } }}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div {...headTextAnimation}>
            <h1 className="head-text">
              Let's <br className="xl:block hidden" /> Do it.
            </h1>
          </motion.div>
          <motion.div {...headTextAnimation}>
            <p>
              Create your unique and exclusive shirt with our brand-new 3D
              customization tool. <strong>Unleash your imagination</strong> and
              define your own style
            </p>

            <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false }
                customStyle={`w-fit px-4 py-2.5 font-bold text-sm`}
              />

          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
