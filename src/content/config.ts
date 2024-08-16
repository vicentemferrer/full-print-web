import { z, defineCollection } from "astro:content";

const serviceCollection = defineCollection({
    type: "data",
    schema: z.object({
        category: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number().int(),
        img_url: z.string(),
    })
})

export const collections = {
    services: serviceCollection
}