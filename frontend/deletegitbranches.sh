#!/bin/zsh

echo "Deleting local merged git branches..."
git branch --merged | grep -Ev "(^\*|^\+|master|main|dev)" | xargs --no-run-if-empty git branch -d
echo "Delete complete."
