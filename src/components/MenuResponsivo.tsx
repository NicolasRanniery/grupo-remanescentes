import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"; // 1. Importar o Link

// 2. Definir a prop "onClose" para poder fechar o menu
interface MenuResponsivoProps {
  open: boolean;
  onClose: () => void;
}

const MenuResponsivo = ({ open, onClose }: MenuResponsivoProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-full z-20"
        >
          <div className="text-xl font-semibold font-quicksand uppercase bg-linear-to-r from-[#535353] to-[#292929] py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li onClick={onClose}>
                <Link to="/" className="text-[#cdad7d]">
                  Início
                </Link>
              </li>
              <li onClick={onClose}>
                <Link to="/reunioes" className="text-[#cdad7d]">
                  Reuniões
                </Link>
              </li>
              <li onClick={onClose}>
                <Link to="/quem-somos" className="text-[#cdad7d]">
                  Quem Somos
                </Link>
              </li>
              <li onClick={onClose}>
                <Link to="/contato" className="text-[#cdad7d]">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;
