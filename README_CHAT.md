# Next.js Chat UI Application

A modern, WhatsApp-style chat interface built with Next.js, following DRY principles with fully reusable components.

## Features

### Admin Page (`/admin`)
- WhatsApp Desktop-style layout
- Left sidebar with user list and search functionality
- Right panel with active chat window
- User selection and conversation switching
- Real-time message display

### User Page (`/user`)
- Clean, focused chat interface
- Same chat UI components as admin (DRY approach)
- Auto-reply simulation
- Mobile-responsive design

## Component Architecture

### Reusable Components (`/components/chat/`)

1. **ChatHeader** - Display user information and status
   - User avatar with online indicator
   - User name and status text
   - Action buttons (call, video, more)

2. **MessageBubble** - Individual message display
   - Sent/received styling
   - User avatars
   - Timestamps
   - Glass morphism effects

3. **ChatInput** - Message input area
   - Text input with auto-resize
   - Send button
   - Attachment and emoji buttons
   - Enter key support

4. **ChatWindow** - Messages container
   - Smooth scroll behavior
   - Auto-scroll to latest message
   - Gradient background

5. **UserList** - Sidebar user list (Admin only)
   - Search functionality
   - User filtering
   - Active user highlighting

6. **UserListItem** - Individual user in list
   - Avatar display
   - Last message preview
   - Unread count badge
   - Time display

## Design Features

- **Glass Morphism UI** - Modern frosted glass effects with backdrop blur
- **3D Shadows** - Soft, layered shadows for depth
- **Smooth Animations** - Hover effects and transitions
- **Gradient Backgrounds** - Subtle blue/cyan color scheme
- **Responsive Layout** - Works on all screen sizes
- **Clean Typography** - Easy to read interface

## Pages

- `/` - Landing page with navigation to admin and user views
- `/admin` - Full admin dashboard with user management
- `/user` - Simple user chat interface

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

## Running the Application

```bash
npm run dev
```

Visit:
- `http://localhost:3000` - Home page
- `http://localhost:3000/admin` - Admin view
- `http://localhost:3000/user` - User view

## Component Reusability

All chat components are fully reusable:
- Both pages use the same `ChatHeader`, `ChatWindow`, `ChatInput`, and `MessageBubble` components
- No code duplication between admin and user views
- Easy to extend with new features
- Clean separation of concerns

## UI Interactions

- Click users in admin sidebar to switch conversations
- Type messages and press Enter or click Send
- Search users in admin view
- Smooth scroll to latest messages
- Hover effects on all interactive elements
