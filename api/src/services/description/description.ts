import type { MutationResolvers } from 'types/graphql'

export const uploadDescription: MutationResolvers['uploadDescription'] = ({ input }) => {
  const { content } = input

  // Check if content is above 5000 characters.
  if (content.length > 5000){
    return {
      status: "error",
      error: "Job description exceeds character limit."
    }
  }

  return {
    status: "success",
    message: "Job description submitted successfully."
  }
}
