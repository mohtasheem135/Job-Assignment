import { z } from "zod"


// export const taskSchema = z.object({
//   // sr_no: z.string(),
//   state: z.string().nullable(),
//   city: z.string().nullable(),
//   // locality: z.string().nullable(),
//   landDimensions: z.object({
//     length: z.number().nullable(),
//     breadth: z.number().nullable()
//   }),
//   locationType: z.string(),
//   notes: z.string().nullable(),
//   status: z.string().nullable(),
// })
export const taskSchema = z.object({
  createdAt: z.string(), // Assuming the date is handled as a string in ISO format
  name: z.string(),
  avatar: z.string().url(), // Ensuring avatar is a valid URL
  email: z.string().email(), // Email validation
  mobileNumber: z.string(), // Could further validate if needed with regex for phone format
  currency: z.string(),
  isActive: z.boolean(),
  totalUnpaidBooking: z.string(), // Storing as a string, could convert to number if needed
  availableLimit: z.number(),
  id: z.string(), // Assuming `id` is a string
  companyId: z.string(),
  companyName: z.string(),
  logo: z.string().url(), // Ensuring logo is a valid URL
  address: z.string(),
  gst_num: z.number(), // Assuming `gst_num` is a numeric field
  availableCreditLimit: z.number()
});


export type Task = z.infer<typeof taskSchema>
