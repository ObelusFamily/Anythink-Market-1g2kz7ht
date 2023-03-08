#!/bin/bash

# Check that a filename argument was provided
if [ -z "$1" ]; then
  echo "Please provide a filename as the first argument"
  exit 1
fi

# Filter for the desired emails using grep (case-insensitive), then swap the first and last name fields using awk
cat "$1" | grep -i '@amazon.com' | awk -F',' '{print $3, $2}' > output_names.txt
