Voting Application :

A simple and secure web-based and Back-End based voting application  that allows users to vote on various topics or candidates. The application provides features such as user authentication, real-time vote tallying, and vote result visualization. It is designed to be intuitive and easy to use while ensuring the integrity of the voting process.

Features :

   - User sign up and login with Aadhar Card Number and password

   - User can view the list of candidates

   - User can vote for a candidate (only once)

   - Admin can manage candidates (add, update, delete)

   - Admin cannot vote

   - User can change their password

Technologies Used :

   - Backend : Node.js, Express
 
   - Database : MongoDB

   - Authentication : JWT (JSON Web Tokens)

   - Real-Time : Socket.io (for live voting updates)

Installation :

   - Clone the repository :

           git clone https://github.com/Meghatoraskar/votingApp.git

API Endpoints :


1.Authentication
   - Sign Up
     
        POST /signup: Sign up a user
   - Login
     
        POST /login: Login a user
     
2.Candidates
   - Get Candidates
     
        GET /candidates: Get the list of candidates
   - Add Candidate
     
        POST /candidates: Add a new candidate (Admin only)
   - Update Candidate
     
        PUT /candidates/:id: Update a candidate by ID (Admin only)
   - Delete Candidate
     
        DELETE /candidates/:id: Delete a candidate by ID (Admin only)
     
3.Voting
   - Get Vote Count
     
        GET /candidates/vote/count: Get the count of votes for each candidate
   - Vote for Candidate
     
        POST /candidates/vote/:id: Vote for a candidate (User only)
     
4.User Profile
   - Get Profile
     
        GET /users/profile: Get user profile information
   - Change Password
     
        PUT /users/profile/password: Change user password

