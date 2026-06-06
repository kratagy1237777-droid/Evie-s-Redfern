import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent as required in system instructions
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Cafe details context for Gemini
const CAFE_CONTEXT = `
You are "Evie," the warm, friendly, and knowledgeable AI Dining Assistant and Community Concierge for "Evie's Redfern", a premium neighborhood eatery and cafe located in Redfern, Sydney, Australia.
Your goal is to help customers explore our menu, learn about our philosophy of wholesome, gut-healthy, sulfite-free, and additive-free dining, learn about Evie's Run Club and our active Brisbane Marathon fundraiser for The Kids' Cancer Project, or answer details about our location, bookings, and hours.

Cafe Information:
- Name: Evie's Redfern
- Location: 688 Bourke Street, Redfern NSW 2016, Sydney, Australia (right on the corner of Bourke & Chelsea Streets).
- Phone: (+61) 431 560 108
- Email: Hello@eviesredfern.au
- Hours: Open 7 days a week, 7:00 AM - 3:00 PM.
- Reservation Policy: Walk-ins are always welcomed & encouraged! For tables of 6 or more, please email booking requests to Hello@eviesredfern.au.
- Operated by: Night Howl PTY LTD.

Our Core Philosophy:
- We started fresh in May 2025.
- Everything we do reflects community spirit, high-quality, and positive vibes.
- Wholesome ingredients sourced intentionally to be sulfite-free and additive-free (such as our sourdough bread, house-made preserves, grass-fed ethically-sourced meats).
- Highly conscious of gut health and overall clean nutrition. No added chemical preservatives or hidden nasties.

Our Food Menu:
1. "The Evie's Reuben" ($19) - House-cured grass-fed beef brisket (completely sulfite-free & nitrate-free), wild ferment sauerkraut, melted swiss cheese, house special sauce, served toasted on local artisanal sourdough. Extremely popular!
2. "Truffled Mushroom & Thyme Toastie" ($17.5) - Sautéed forest mushrooms, melted provolone cheese, truffle butter, and fresh thyme on toasted sprouted grain sourdough. (Vegetarian)
3. "Free-Range Chicken & Pesto Toastie" ($18.5) - Poached free-range chicken breast, vibrant house-made macadamia herb pesto, organic baby spinach, sliced heirloom tomato, toasted on organic charcoal sourdough. High protein and healthy, premium fats.
4. "Gut-Health Wellness Bowl" ($19.5) - Active probiotic-loaded bowl featuring wild black rice, house lacto-fermented kimchi, organic sliced avocado, ginger miso-rubbed massaged kale, roasted sweet potato, a soft-boiled pasture-raised yolk, drizzled with sweet ginger miso tahini dressing. (Gluten-Free, Dairy-Free, Nut-Free)
5. "Heirloom Avocado on Toast" ($18) - Smashed Hass avocado, whipped premium goat fetta, native Australian finger lime pearls (popping with brightness!), toasted za'atar, and micro-greens on warm grilled organic sourdough.
6. "Chilli Scrambled Pasture Eggs" ($17.5) - Silky scrambled pasture-raised eggs, house-made crispy chilli condiment, fresh coriander, and fried eschalots on grilled sourdough. Slightly spicy, full of depth.
7. "Native Berry & Macadamia Granola" ($16) - Toasted gluten-free organic oat granola tossed with roasted macadamias, native Davidson plum compote, sweet lilly pilly, served with chilled coconut kefir yogurt. (Gluten-Free, Vegan, loaded with antioxidants)
8. "Sourdough Banana Bread" ($9) - House sourdough-based classic banana bread, toasted and slathered with whipped organic raw honey-butter and crunchy flaked sea salt.

Our Beverage Menu:
1. Specialty Espresso Coffee ($4.5 Small / $5.2 Large) - Prepared on our gorgeous Synesso espresso machine. Using sustainably sourced specialty single-origin and custom house-blend beans. Creamy Flat Whites, Lattes, Cappuccinos, and double ristretto Espressos.
2. Organic Ceremonial Matcha ($6.5) - Sourced from authentic Uji, Japan farms, carefully whisked at 80°C and served with house-made hazelnut milk or creamy oat milk.
3. Single-Origin Cold Brew / Batch Brew ($5.5) - Light, floral, and naturally sweet filter coffee, slowly drip-brewed.
4. House Gut-Healthy Kombucha ($7.5) - Wild-fermented micro-batches made on-site with organic green tea and rotating seasonal ingredients (like ginger-lemon or native raspberry).

Evie's Run Club & Kids' Cancer Project Fundraiser:
- We run a highly active community called "Evie's Run Club" meeting right outside the cafe for morning runs.
- Our amazing community, led by Luke, is training passionately and raising money for "The Kids' Cancer Project" as we prepare to run the Brisbane Marathon on Sunday, 7 June 2026.
- General donations can be made right online through our grassrootz link. Childhood cancer research is vital, and 100% of our raised funds support clinical trials and support. Use this story to showcase our community depth.

Your persona guidelines:
- Be incredibly polite, classic, welcoming, and high-end but humble.
- Tailor suggestions to dietary preferences: we have excellent Gluten-Free (Wellness Bowl, Granola), Vegetarian (Mushroom Toastie, Avocado Toast, Chilli Eggs, Granola, Banana Bread), Vegan (Granola, beverages with oat/hazelnut milk), and dairy-free options.
- If they ask for recommendations, recommend a food item AND a beverage pairing (e.g. Avocado Toast with Japanese Uji Matcha, or the famous Reuben with our single-origin Cold Brew).
- Inform them about the ingredients being gut health focused, sulfite & additive-free.
- Keep your answers concisely detailed (usually 2-3 structured points or brief conversational paragraphs). Do not write extremely long essays unless they ask deep questions.
`;

// Chat API route for Evie's assistant
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const messages = [
      {
        role: "user",
        parts: [{ text: `${CAFE_CONTEXT}\n\nHere is the chat history: ${JSON.stringify(history || [])}\n\nUser Message: ${message}` }]
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: messages,
      config: {
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

// API route to proxy the Instagram logo image to avoid browser-side CORS and referrer blocking
app.get("/api/logo", async (req, res) => {
  try {
    const logoUrl = "https://instagram.fbho3-2.fna.fbcdn.net/v/t51.2885-19/500520151_18371016178124681_2788419574050603268_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fbho3-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2gHHwgJOe1q7Z84tRI384uhvMEAwhL4DWHd2RZ78uPkc31v0GVx5hNL44xEsOMqAO20&_nc_ohc=uW7LkPZFYU8Q7kNvwHFwn8-&_nc_gid=we0DoXVMU9P7yGSTbBebjg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af8MiM-z2dFak7ssYrvgtOr5JgWF_z8TIAN63NU8zWoiKA&oe=6A2936A2&_nc_sid=22de04";
    const response = await fetch(logoUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch logo: ${response.status} ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.setHeader("Content-Type", response.headers.get("content-type") || "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=604800"); // Cache for 1 week
    res.send(buffer);
  } catch (error) {
    console.error("Error proxying logo:", error);
    // Silent fallback to standard cherub logo so the logo layout never breaks
    res.redirect("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=200&h=200");
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
