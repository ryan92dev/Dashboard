import { apiSlice } from "../../app/api/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (formData) => ({
        url: "/post/create",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCreatePostMutation } = postApiSlice;
