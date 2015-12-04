#!/bin/bash

# ORG_NAME=ATL-WDI-Curriculum
# ORG_NAME=ATL-WDI-Exercises

ORG_NAME=$1

echo "Cloning all repos from $ORG_NAME"
curl -s https://api.github.com/orgs/${ORG_NAME}/repos?per_page=100 | \
ruby utils/lib/clone-repos.rb

