import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    podcasts : defineTable({
        audioStorageId : v.optional(v.id('_storage')),
        user : v.id('users'),
        podcastTitle : v.string(),
        podcastDescription : v.string(),
        audioUrl : v.optional(v.string()),
        imageUrl : v.optional(v.string()),
        
    }),
    users : defineTable({
        email : v.string(),
        imageUrl : v.string(),
        clerkId : v.string(),
        name : v.string()
    })
})
