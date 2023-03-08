#!/bin/bash

# Check that a URL argument was provided
if [ -z "$1" ]; then
  echo "Please provide a Google Sheets URL as the first argument"
  exit 1
fi

# Set the Google Sheets API endpoint using the provided URL
SHEET_URL="$1/export?format=csv"

# Download the sheet data and filter for the desired emails using grep
curl -sSL "$SHEET_URL" | grep -i '@amazon.com' | awk -F',' '{print $3, $2}' > output.txt
