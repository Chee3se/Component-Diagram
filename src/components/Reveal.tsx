import { motion } from 'framer-motion';

type RevealProps = {
    children: React.ReactNode;
    title: string;
    className?: string;
};

export function Reveal({ children, title, className = "" }: RevealProps) {
    return (
        <motion.div
            className={`p-10 ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
            <h2 className="text-6xl font-extrabold mb-6">{title}</h2>
            {children}
        </motion.div>
    );
}