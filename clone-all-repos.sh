#!/bin/bash

ORG_NAME=ATL-WDI-Exercises

curl -s https://api.github.com/orgs/${ORG_NAME}/repos?per_page=100 | \
ruby utils/lib/clone-repos.rb
