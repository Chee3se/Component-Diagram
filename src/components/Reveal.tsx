import { motion } from 'framer-motion';

type RevealProps = {
    children: React.ReactNode;
    title: string;
    className?: string;
    direction?: 'left' | 'right' | 'up';
};

export function Reveal({ children, title, className = "", direction = 'up' }: RevealProps) {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'up' ? 50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <motion.div
            className={`p-10 ${className}`}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2 className="text-6xl font-extrabold mb-6">{title}</h2>
            {children}
        </motion.div>
    );
}