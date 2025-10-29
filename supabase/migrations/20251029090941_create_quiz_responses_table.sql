/*
  # Create Quiz Responses Table

  1. New Tables
    - `quiz_responses`
      - `id` (uuid, primary key) - Unique identifier for each quiz response
      - `email` (text) - User's email address
      - `skin_type` (text) - User's skin type selection
      - `skin_concerns` (text[]) - Array of skin concerns
      - `skin_goals` (text[]) - Array of desired skin goals
      - `age_range` (text) - User's age range
      - `recommended_product` (text) - Product recommendation based on quiz
      - `created_at` (timestamptz) - Timestamp of quiz completion

  2. Security
    - Enable RLS on `quiz_responses` table
    - Add policy for inserting quiz responses (public access for form submission)
    - Add policy for service role to read all responses
*/

CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  skin_type text NOT NULL,
  skin_concerns text[] DEFAULT '{}',
  skin_goals text[] DEFAULT '{}',
  age_range text NOT NULL,
  recommended_product text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quiz responses"
  ON quiz_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all responses"
  ON quiz_responses
  FOR SELECT
  TO service_role
  USING (true);
