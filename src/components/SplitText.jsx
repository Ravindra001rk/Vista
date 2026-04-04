import React from 'react';
import { motion } from 'framer-motion';

/**
 * SplitText — Reveals text word-by-word or char-by-char with a masked upward slide.
 *
 * Props:
 *  text       — the string to animate
 *  className  — classes applied to the outer wrapper span
 *  delay      — initial delay (seconds) before the stagger begins
 *  stagger    — time (seconds) between each item
 *  duration   — slide duration per item
 *  type       — 'words' | 'chars'
 *  as         — element to render each masked item as (default 'span')
 */
const SplitText = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  duration = 0.75,
  type = 'words',
}) => {
  // Split into words, preserving spaces between them
  const words = text.split(' ');

  // For 'chars' mode we further split each word into characters
  const items =
    type === 'words'
      ? words
      : words.flatMap((word, wi) => {
          const chars = word.split('');
          // Add a space-token after every word except the last
          if (wi < words.length - 1) chars.push('SPACE');
          return chars;
        });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: '115%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      aria-label={text}
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap', gap: type === 'chars' ? '0' : '0.25em' }}
    >
      {items.map((item, i) => {
        if (item === 'SPACE') {
          return (
            <span key={`space-${i}`} style={{ display: 'inline-block', width: '0.3em' }} />
          );
        }
        return (
          // Clip mask — hides the text below the baseline
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.15 }}>
            <motion.span
              variants={itemVariants}
              style={{ display: 'inline-block' }}
            >
              {item}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};

export default SplitText;
