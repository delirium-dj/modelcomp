# Gemini 4 Argon — findings by Cat Jam

- Source: Google / Gemini 4 Argon (`opencode/gemini-4-argon`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's most capable (non-Flash) flagship reasoning model for deep work: complex software engineering, math/science, autonomous multi-step agents, and long-decode generation.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-4-argon`), Vertex AI. Paid tier only (no free tier, not on Google AI Pro). OpenAI-compatible and Interactions API.
- **Release / knowledge:** Announced 2026-09-30; GA developer access mid-Oct 2026 (API rollout Oct 13). Knowledge cutoff not published in sampled sources (verify; likely 2026).
- **IDs:** `gemini-4-argon` (Google), `gemini/gemini-4-argon` (LiteLLM)
- **Context window:** 1,048,576 tokens (unified input+output window); long decode up to 1,048,576 output tokens in hops (default 262,144). Verified via Google AI docs/blog/AA/Vals.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking (low/medium/high). Function calling, code execution, search/Maps grounding, structured output, URL context. Implicit caching only (no explicit cache).
- **Pricing (as of 2026-10-16):** Intro through 2026-11-30: $2.00/$10.00 per 1M input/output (cached $0.10); standard from 2026-12-01: $4.00/$20.00 (cached $0.20). Batch/flex $1.00/$5.00. No free tier. Newer variants (Flash-lite etc.) cheaper.
- **Architecture:** Proprietary transformer; strong long-decode. No open weights.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **78%** (#1, AA leaderboard)
- Terminal-Bench 4.0: **57.1/57.4%** (AA/Google)
- GDPval-AA v2.1: **1624** Elo (AA comparison) / Vals? (not specified)
- AA-Briefcase v1.1: **1494** Elo
- OSWorld 2.0: **69.2%** (measured, benchgap)
- Vals Index: **68.9%** (#1 of 48)
- Finance Agent v2 (Vals): leader (#1 of 78)
- Harvey's Legal Agent: **19.6%** (Google DeepMind table)
- τ³-banking: **47.4%** (AA)
- AA-Omniscience: 42 (AA)

Reasoning / knowledge:

- AA Intelligence Index (high): **53** (AA article: matches GPT-6 Astra max; benchgap 52.6)
- HLE (w/o tools / AA): **61.3%** est / AA-HLE **57.1%**
- HLE w/ tools: **62.4%** (benchgap est)
- AA-GPQA Diamond: **96.6%** (est) / GPQA Diamond **92.7%** (est)
- AA-LCR v1.1: **79.7%**
- CritPt: **27.1%**
- Omniscience Accuracy: **49.9%**
- Terminal-Bench-Science 0.1: **57.6%** (Google table)
- AIME26 (est): ~98 (est)

Coding:

- DeepSWE v1.1: **77.9%** (#1/state of the art, Google blog)
- FrontierSWE v2: **55.0%** (Google table)
- Vibe Code Bench: **91.9%** (Google table)
- Terminal-Bench 4.0: **57.4%**
- LiveCodeBench v6 (est): ~100 (est/low confidence)
- SWE-bench Pro (est): ~81.5 (benchgap est)
- AA Coding Index? not separately located
- SciCode AA: **61.8%**

Long context:

- 1,048,576-token unified window with long decode up to 1M. No independently published MRCR/RULER score found in sampled data.

### Normalized scores (1–100)

- **Tool use: 90/100.** AutomationBench 78% (#1), TB4.0 57.4, OSWorld 69.2, Vals Index 68.9 leader, GDPval 1624. Strong agentic leap for Gemini. τ³ 47.4 caps.
- **Reasoning: 90/100.** AA Index 53 top-tier, HLE 57–61, GPQA ~96, LCR 79.7, Terminal-Bench-Science 57.6; CritPt 27.1 and Omniscience 50 cap.
- **Context window: 95/100.** 1M unified input/output with long decode. No published retrieval score caps from perfect.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in; text out. OSWorld 69.2/visual. No dedicated multimodal benchmark beyond inputs in sampled data caps.
- **Coding: 92/100.** DeepSWE 77.9 (#1), Vibe Code Bench 91.9, FrontierSWE 55.0, TB4.0 57.4, LiveCodeBench est ~90+. Strong long-horizon SWE.
- **Cost efficiency: 85/100.** $2/$10 intro (Nov 30) then $4/$20 standard; no free tier but batch/flex discounts ($1/$5). Cache 95% off. Good value for top-tier, but not cheap/free.
- **Overall Score: 91/100.** Mean of (90 + 90 + 95 + 88 + 92) / 5 = 91.0. Best non-Flash Gemini default for deep coding/math/agents at paid tier.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google AI docs/blog, Artificial Analysis, benchgap, vals.ai, OpenRouter/LiteLLM/pricing pages, DeepMind eval tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
