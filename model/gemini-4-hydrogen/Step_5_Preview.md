# Gemini 4 Hydrogen — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's everyday-driver Gemini 4 model — fast, efficient frontier intelligence for coding and agentic workflows, priced flat across a unified 1M-token context window and released to every tier (free AI Studio included) one day after this report's research.
- **Provider / access:** Gemini API via Google AI Studio (`gemini-4-hydrogen`, stable version); also Gemini app, Search, Gemini for Business, and paid Google AI Pro/Ultra in Google Antigravity. Generative (Chat Completions-style `generateContent`) API; function calling + structured outputs supported.
- **Release / knowledge:** 2026-11-12 (blog announcement, "Last updated November 13, 2026"; docs list "Latest update: November 2026"). Knowledge cutoff not disclosed in fetched sources.
- **IDs:** `gemini-4-hydrogen` (Google AI Studio / Gemini API). No OpenCode Zen ID verified — none found in fetched sources.
- **Context window:** 1,048,576 unified input+output tokens (1M); max output 65,536 default synchronous, up to 1,048,576 with long decode (docs, token-limits table).
- **Modalities:** Text, Image, Video, Audio, PDF in; text out. Thinking supported at four levels (low / medium / high default / xhigh); function calling, structured outputs, code execution, computer use, file search, Google Search + Maps grounding, URL context, agentic video understanding supported; audio generation, image generation and Live API not supported (docs capabilities table).
- **Pricing (as of 2026-11-13):** Free tier free of charge in AI Studio (content used to improve products); paid $1.50/1M input, $7.50/1M output (thinking tokens billed), $0.075/1M implicit caching — flat across the whole 1M window; Batch and Flex $0.75/$3.75; Priority $2.70/$13.50 (pricing docs).
- **Architecture:** Proprietary (no parameters / license disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1 (cheating-adjusted): **57.0%** (DeepMind Gemini 4 performance table; blog: "more than tripling" the 18.2% of Gemini 3.8 Flash)
- SWE-sweep: **13.5%** (DeepMind table — best vs Claude Sonnet 5.5 3.1%, GPT-6.1 Terra 5.8%)
- AutomationBench-AA: **76.1%** (DeepMind table — best vs Sonnet 5.5 71.8%, GPT-6.1 Terra 60.2%; blog: "leads its class")
- Agents' Last Exam v1.1: **71.6%** (DeepMind table — best vs Sonnet 5.5 60.4%, GPT-6.1 Terra 69.8%)
- Vending-Bench 2: **$14,549** bank balance (DeepMind table — best vs $11,165 / $9,107)
- Agent Arena: **rank #5** (blog, arena.ai live benchmark)
- Vals Tax Agent Bench: **52.3%, #1 overall** (blog, vals.ai)
- Vals Legal Research Bench: **55.8%, tied #1** (blog, vals.ai)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found in fetched sources.

Reasoning / knowledge:

- HLE-Diamond: **58.8%** (DeepMind table — best vs Sonnet 5.5 53.3%, GPT-6.1 Terra 47.3%; blog: "leads its class")
- Artificial Analysis Intelligence Index: **51 at default high thinking; 54 at xhigh** (blog; the v5.0 leaderboard table lists Argon 50 vs Carbon 59, GPT-6 Astra 57, Claude Opus 5.5 58)
- Terminal-Bench-Science 0.1: **51.4%** (DeepMind table — below Sonnet 5.5 59.9% and GPT-6.1 Terra 58.3%)
- GPQA Diamond: no verified public score found in fetched sources.
- LCR / MLCR / CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found in fetched sources.

Coding:

- SWE-sweep (agentic repo coding): **13.5%** (listed above; best in class per DeepMind table)
- Terminal-Bench 4.1: **57.0%** (listed above; 3.8 Flash comparison 18.2% from blog)
- SWE-bench Verified / SWE-Pro: no verified public score found in fetched sources.
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found in fetched sources.

Long context:

- 1M-token window with up to 1M-token long decode documented (docs). A Hydrogen-specific long-context retrieval score (MRCR / RULER / GraphWalks): no verified public score found — the GraphWalks 96.2% figure in the same performance table is measured for Gemini 4 Carbon, not Hydrogen (not attributed here).

Multimodal:

- Multimodal Knowledge Agent (MKA), Climb WSR accuracy: **53.4%** (DeepMind table — best vs Sonnet 5.5 52.0%, GPT-6.1 Terra 43.8%)
- Chartography: **66.6%** (DeepMind table — best vs Sonnet 5.5 61.6%, GPT-6.1 Terra 63.2%)
- Computer use OSWorld-2.1 (offline subset): **77.6%** (DeepMind table — behind Claude Sonnet 5.5 83.9%, ahead of GPT-6.1 Terra 74.2%)

### Normalized scores (1–100)

- **Tool use: 87/100.** Leads its class on the fetched agentic suite — SWE-sweep 13.5% (3–4× the compared frontier models), AutomationBench-AA 76.1%, Agents' Last Exam 71.6%, Vending-Bench 2 $14,549, #1 Vals Tax Agent — plus #5 Agent Arena overall and native parallel tool-call batching; capped below the frontier frontier tier because Terminal-Bench 4.1 (57.0%) still trails cheating-adjusted Carbon (63.9%) and OSWorld trails Sonnet 5.5.
- **Reasoning: 87/100.** HLE-Diamond 58.8% beats every compared frontier model and AA Intelligence Index 51/54 (xhigh) surpasses Argon (50), but the same leaderboard puts Carbon (59), GPT-6 Astra (57) and Claude Opus 5.5 (58) ahead, and Terminal-Bench-Science 51.4% is mid-pack — strong, not class-topping.
- **Context window: 98/100.** 1,048,576-token unified input/output window with long decode up to 1M — the top documented tier, flat-priced across the full window; capped only because no model-specific long-retrieval benchmark (MRCR/RULER/GraphWalks) was published for Hydrogen in fetched sources.
- **Multimodal: 92/100.** Full multimodal input (text/image/video/audio/PDF) with native 1M-token input; best-in-table MKA 53.4% and Chartography 66.6%; output is text-only (no image/audio generation) and OSWorld-2.1 77.6% sits behind Sonnet 5.5.
- **Coding: 88/100.** SWE-sweep 13.5% is a decisive class lead and Terminal-Bench 4.1 57.0% triples Gemini 3.8 Flash (18.2%) for everyday issue-resolution and repair work; capped because the deepest coding/terminal frontier numbers (Carbon TB 4.0 65.2%, FrontierSWE 2 61.2%) and SWE-bench Verified figures are not published for this model.
- **Cost efficiency: 93/100.** A genuine free lane (AI Studio free tier, though content improves Google's products) plus flat $1.50/$7.50 per 1M across the entire 1M window — half Carbon's soon-to-be $4/$20 — with $0.75/$3.75 Batch/Flex; not 100 because production runtime is paid and grounding requests meter at $14/1,000 after 5K/month.
- **Overall Score: 90.4/100.** Mean of Tool 87 + Reasoning 87 + Context 98 + Multimodal 92 + Coding 88 = 90.4; best fit: the default daily driver for agentic coding and knowledge work when you want near-frontier quality at a third of Carbon's token spend, with a free on-ramp.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-13 UTC
- Method: public internet research; web search was unavailable (HTTP 402), so per `RULES.md` § Web-research fallback I fetched the official Google sources directly (vendor announcement, model docs, pricing docs, DeepMind performance page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources):
  - [Introducing Gemini 4 Hydrogen — Google blog, 2026-11-12](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
  - [Gemini 4 Hydrogen model documentation — ai.google.dev](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen)
  - [Gemini API models list (Gemini 4 family) — ai.google.dev](https://ai.google.dev/gemini-api/docs/models)
  - [Gemini Developer API pricing — ai.google.dev](https://ai.google.dev/gemini-api/docs/pricing)
  - [Gemini 4 performance tables — Google DeepMind](https://deepmind.google/models/gemini/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.