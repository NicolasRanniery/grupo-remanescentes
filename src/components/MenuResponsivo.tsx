import { AnimatePresence, motion } from "framer-motion";

const MenuResponsivo = ({ open }: { open: boolean }) => {
    return <AnimatePresence>
        {
            open && (
            <motion.div 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed top-0 left-0 w-full h-full bg-white/60 z-10"
            > 
                <div></div>
            </motion.div>
        )
        }
    </AnimatePresence>
}

export default MenuResponsivo;