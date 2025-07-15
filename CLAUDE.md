# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML wedding website for a "distributed wedding" concept, featuring multiple celebration events across different locations. The site is built with pure HTML and CSS without any build tools or frameworks.

## Architecture

The website consists of:
- **index.html** - Main landing page with overview of all wedding events
- **ceremony.html** - Details about the intimate family ceremony at Stevns Klint, Denmark
- **nijmegen.html** - Information about the Netherlands celebration satellite event
- **odense.html** - Information about the Denmark celebration satellite event
- **styles.css** - Single stylesheet containing all styles with responsive design
- **assets/img/** - Image directory containing engagement and event photos

## Development Approach

Since this is a static HTML site with no build process:
- Changes can be made directly to HTML and CSS files
- No package management, build commands, or compilation steps needed
- Simply open HTML files in a browser to preview changes
- Deploy by uploading files to any static hosting service

## Design System

The site uses a consistent design language with:
- **Color palette**: Blues (#3498db, #2980b9), grays (#7f8c8d, #2c3e50), gradients for special sections
- **Typography**: Georgia serif font for elegant, wedding-appropriate feel
- **Layout**: CSS Grid for responsive card layouts, flexbox for navigation and timelines
- **Components**: Reusable card styles (.event-card, .detail-card), timeline items, hero sections
- **Special styling**: The main ceremony uses highlighted styling with purple gradients

## Content Structure

Each event page follows the same pattern:
- Hero section with date, location, and subtitle
- Grid of detail cards covering various aspects (schedule, location, what to expect, etc.)
- Timeline/schedule section with specific times and events
- RSVP or contact information section

## Image Handling

- Images are stored in `assets/img/` directory
- Engagement photo (IMG_6416.jpeg) featured prominently on homepage
- Location-specific photos used on individual event pages
- CSS handles responsive image sizing and styling