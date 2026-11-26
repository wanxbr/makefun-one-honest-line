#!/usr/bin/env python3

"""
Make.fun submission: The Funniest Excuse for Skipping a Meeting
Outputs one honest line to output/entry.txt
"""

import os

# Get output directory from environment (set by build system)
output_dir = os.getenv("MAKEFUN_OUTPUT_DIR", "/output")

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Write the entry
entry_file = os.path.join(output_dir, "entry.txt")
with open(entry_file, "w", encoding="utf-8") as f:
    f.write("Your prompts are like IKEA instructions: vague, missing pieces, and somehow I'm the one who built it wrong.")

print(f"Entry written to {entry_file}")
