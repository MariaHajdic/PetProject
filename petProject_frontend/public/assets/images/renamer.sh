#!/bin/bash

# Initialize counter
counter=1

# Loop through all files in the current directory
for file in *; do
    if [[ $file =~ renamer ]]; then
        continue
    fi
    # Check if the file is a regular file (not a directory)
    if [[ -f "$file" ]]; then
        # Extract the unique ID (the first part of the filename before the first hyphen)
        unique_id="${file%%-*}"
        
        # Check if the file does not start with the unique ID followed by "-cat"
        if [[ ! $file =~ ^[0-9]+-cat ]]; then
            # Create the new filename with the current counter value
            new_filename="${unique_id}-dog-$counter.jpg"
            
            # Rename the file
            mv "$file" "$new_filename"
            
            # Increment the counter
            counter=$((counter + 1))
        fi
    fi
done
