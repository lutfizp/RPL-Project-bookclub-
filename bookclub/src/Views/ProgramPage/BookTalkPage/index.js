import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function BookTalkPage() {
    const { ref, inView } = useInView();

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Welcome to Book Talk Page</h1>
                <p>This is the content of the Book Talk page.</p>
            </motion.div>
        </div>
    );
}

export default BookTalkPage;