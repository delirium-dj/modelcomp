# Gemini 3.5 Flash — findings by MiniMax M3

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's "Pro-level reasoning at Flash-class latency" mid-cycle 3.5 Flash — announced at Google I/O 2026 (May 19). Built on the Gemini 3 Flash reasoning foundation with explicit thinking levels; the "high" thinking variant is the one in the published numbers.
- **Provider / access:** Gemini API; Google AI Studio; Gemini Enterprise; Gemini Enterprise Agent Platform; Google Search AI Mode; Google Antigravity; Android Studio; OpenCode Zen `opencode/gemini-3.5-flash`. Chat Completions-compatible.
- **Release / knowledge:** Released 2026-05-19 (Google I/O); public preview at launch. Knowledge cutoff January 2025.
- **IDs:** `google/gemini-3.5-flash` (vendor); `opencode/gemini-3.5-flash` (Zen). Free tier available on Google AI Studio and OpenCode Zen.
- **Context window:** 1,048,576 (1M) tokens; 64K output cap.
- **Modalities:** Text, image, audio, video, PDF in; text out. Tool calls: yes (function calling, structured output, code execution, search-as-a-tool all first-party).
- **Pricing (as of 2026-10-13):** Paid $1.50 input / $9.00 output per 1M; cached input $0.15 (90% discount). Free tier in consumer Gemini app and Search AI Mode.
- **Architecture:** Proprietary Google MoE. Reasoning levels control quality/cost/latency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **76.2%** (Google model card; ofox.ai; Appwrite).
- SWE-Bench Pro (Public, single attempt): **55.1%** (Google model card; Appwrite).
- MCP Atlas (multi-step MCP workflows): **83.6%** — Google's highest published MCP Atlas score, +21.6 over Gemini 3 Flash (Appwrite).
- Toolathlon (real-world tool use): **56.5%** (Google model card; Appwrite).
- OSWorld-Verified: **78.4%** (Google model card; Appwrite).
- GDPval-AA (Elo): **1656** (Google model card; Appwrite).
- Finance Agent v2: **57.9%** (Google model card; Appwrite).
- Tau3-Banking / Claw-Eval / SWE Atlas Codebase QnA: **no verified public score found** for this exact model/ID.

Reasoning / knowledge:

- Humanity's Last Exam (full set): **40.2%** (Google model card; Appwrite).
- ARC-AGI-2: **72.1%** (Google model card; Appwrite) — trails GPT-5.5 at 84.6%.
- Artificial Analysis Intelligence Index v4.3.2: **55.3** (rank #7 of 147). AA cohort top: GPT-5.5 (xhigh) 60.2, GPT-5.5 (high) 58.9, Claude Opus 4.7 (max) 57.3 (Appwrite).
- AA Hallucination Rate: **61%** on the AA hallucination measure — 31 points lower (better) than Gemini 3 Flash (Appwrite).
- GPQA Diamond / CritPt / AA-Omniscience Index: rolled into the 55.3 AA Intelligence Index; specific values not separately surfaced.

Long context:

- MRCR v2 (8-needle, 128k average): **77.3%** (Google model card; Appwrite).
- MRCR v2 (1M, pointwise): **26.6%** (Google model card; Appwrite) — 1M-class retrieval, very low.
- AA-LCR v1.1: included in the 55.3 AA Intelligence Index.

Multimodal:

- CharXiv Reasoning (no tools): **84.2%** (Google model card; Appwrite) — beats Opus 4.7 (82.1).
- MMMU-Pro (no tools): **83.6%** (Google model card; Appwrite) — beats Opus 4.7 (75.2) and GPT-5.5 (81.2).
- Blueprint-Bench 2 (normalized): **33.6%** — strongest in the cohort (Appwrite).
- 1M context window with text/image/audio/video/PDF input — full omni coverage.

Independent verification:

- Appwrite Arena (191 questions across 9 service categories), May 20, 2026: **96.20** overall (Skills in context) and **90.70** without Skills (freeform jumps from 77.5 → 91.9 with Skills). Fastest model in the top tier — 20 min with Skills, 13 min without (Appwrite).
- AA Speed: **278 output tok/s** (rank #2 of 147 in its AA price class). Pareto leader on intelligence-vs-speed axis (Appwrite).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 76.2%, SWE-Bench Pro 55.1%, MCP Atlas 83.6% (Google's strongest MCP score), OSWorld-Verified 78.4%, GDPval-AA 1656 Elo, Toolathlon 56.5%. Strong on MCP-driven agents. Capped at 84 because Toolathlon lags and SWE-bench Pro is at 55.1%.
- **Reasoning: 84/100.** AA Intelligence Index v4.3.2 = 55.3 (rank #7 of 147, above Gemini 3.1 Pro Preview 57.2, below GPT-5.5 60.2). ARC-AGI-2 72.1% trails GPT-5.5 84.6%. HLE full set 40.2%. Capped at 84 because AA-Omniscience is in the composite but no separate figure, and AA Hallucination Rate is the only published truthfulness number.
- **Context window: 96/100.** 1M context (AA spec), but MRCR v2 1M pointwise is 26.6% (very weak at full window). MRCR v2 128k = 77.3%. Capped at 96 because full-window retrieval collapses vs 128k.
- **Multimodal: 92/100.** Text + image + audio + video + PDF in. CharXiv Reasoning 84.2% (LEADS comparison). MMMU-Pro 83.6% (LEADS comparison). Blueprint-Bench 2 33.6% (LEADS comparison). Capped at 92 because no native video/audio out and 1M multimodal retrieval is weak.
- **Coding: 78/100.** Terminal-Bench 2.1 76.2%, SWE-Bench Pro 55.1%, OSWorld 78.4%. Appwrite Arena freeform 91.9% with Skills (96.20 overall). Capped at 78 because LiveCodeBench / SciCode / Vibe Code Bench are not published for this exact model/ID and SWE-bench Pro sits at 55.1%.
- **Cost efficiency: 78/100.** $1.50 in / $9.00 out. Cached input $0.15 (90% discount). AA cost per Intelligence Index task: $1,552 — 5.5× Gemini 3 Flash ($282), 75% more than Gemini 3.1 Pro ($892) due to higher token volume (73M vs 36M median). Capped at 78 because output is expensive ($9/MTok) and total eval cost is high.
- **Overall Score: 87/100** Half-up mean of Tool 84, Reasoning 84, Context 96, Multimodal 92, Coding 78 = 434/5 = 86.8 → half-up 87. Gemini 3.5 Flash is the Pareto leader on intelligence-vs-speed: 278 tok/s and AA Index 55.3 is unmatched in its price bracket, with a 1M context window and full-omni multimodal coverage, but Coding and long-window retrieval cap the upside.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Google blog announcement, DeepMind Gemini 3.5 Flash model card, Appwrite detailed benchmark review, Artificial Analysis spec sheet, ofox.ai coding agents guide). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash_Google.md`, using the same headings.
