# Gemini 2.5 Pro — findings by Mimo V2.6 Flash

- Source: Google/`gemini-2.5-pro`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's first thinking-native Pro flagship (2025-03-25 GA) — 1M context, native text/image/audio/video/PDF in, top-of-LMArena at launch, GPQA 86.4 and SWE-V 63.8–67.2 at $1.25/$10. The workhorse long-context multimodal reasoner that defined the 2025 Pro tier; now superseded by Gemini 3.x but still widely served.
- **Provider / access:** Google AI Studio / Gemini API / Vertex AI (`gemini-2.5-pro`), Gemini app; OpenRouter and major gateways. Chat Completions-compatible via Gemini API.
- **Release / knowledge:** 2025-03-25 (Google blog — experimental 2025-03-25, pricing followed); knowledge cutoff January 2025 (DeepMind model card / AI-TLDR).
- **IDs:** `gemini-2.5-pro` (Gemini API); `google/gemini-2.5-pro` on gateways.
- **Context window:** 1,000,000 tokens input; max output 64,000 tokens (DeepMind model card / AI-TLDR); Google noted 2M "coming soon" at launch — not confirmed as GA in rows reviewed.
- **Modalities:** text, image, audio, video, PDF in; text out; thinking mode (dynamic budget); tool calls / function calling; structured output.
- **Pricing (as of 2026-09-23):** $1.25 / $10.00 per 1M in/out for prompts ≤200K; $2.50 / $15.00 for >200K; cached input $0.125 (≤200K) plus $4.50/1M/hr storage (AI-TLDR / Gemini API pricing). Free tier in AI Studio. Paid production.
- **Architecture:** proprietary sparse MoE "thinking" transformer (params undisclosed).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- SWE-bench Verified (custom agent): **63.8%** (Google blog launch) / **59.6%** single-attempt, **67.2%** multiple-attempts (DeepMind model card / arXiv 2507.06261)
- Aider Polyglot: **82.2%** / **74%** (arXiv Table 3 / AI-TLDR — harness drift noted)
- Terminal-Bench / Tau3 / GDPval / OSWorld / MCP Atlas / Toolathlon: **no verified public score found** in rows reviewed (pre-TB2-era model)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.4%** single-attempt (DeepMind model card / Google blog — leads o3 83.3 in that table)
- AIME 2025: **86.7%** / **88.0%** (AI-TLDR / arXiv — math SOTA at launch)
- HLE (no tools): **18.8%** (AI-TLDR launch row — early HLE era, far below 2026 frontier 40–53%)
- FACTS Grounding: leads non-Google comparison set (arXiv Table 4 note)
- AA Intelligence Index / ARC-AGI / CritPt: **no verified public score found** (predates AA Index v4 era rows)

Coding:

- LiveCodeBench: **74.2%** (arXiv / Google — vs o3 72.0)
- SWE-bench Verified: **59.6%** single / **67.2%** multiple (DeepMind model card); Google blog cited **63.8%** custom-agent setup
- SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** in rows reviewed

Long context:

- MRCR v2 (8-needle): **58.0%** @128K average / **16.4%** pointwise @1M (DeepMind model card — only model in comparison table with 1M MRCR row)
- LOFT hard retrieval: **87.0%** ≤128K / **69.8%** 1M (arXiv Table 3 — leads comparison set at both depths)
- 1M window ships GA; 2M promised at launch (not verified GA)

Multimodal:

- MMMU: **81.7%** (AI-TLDR launch benchmark table)
- Native text/image/audio/video/PDF in single prompt (Google blog / model card)
- MMMU-Pro / video suites: **no separate MMMU-Pro row extracted** in this pass

### Normalized scores (1–100)

- **Tool use: 70/100.** Aider 82.2 and SWE-V 63.8–67.2 show real agentic coding; capped hard by zero public TB2.1/Tau3/GDPval/OSWorld/MCP/Toolathlon rows (pre-those-harnesses) — cannot claim 80+ general agentic on coding-only proxies.
- **Reasoning: 86/100.** GPQA 86.4, AIME 88 lead the 2025 comparison set; capped by HLE 18.8 (era-limited, far below 2026 frontier) and missing AA Index / ARC-AGI rows.
- **Context window: 96/100.** Full 1M with LOFT 69.8@1M and MRCR 16.4@1M proving measurable full-depth retrieval (better than no 1M row); not 100 because absolute 1M retrieval is weak (16.4% pointwise) and 2M not verified GA.
- **Multimodal: 95/100.** Text/image/audio/video/PDF in (audio → 90–100 band); MMMU 81.7 solid; text-only out; no extracted MMMU-Pro % keeps it shy of 97+.
- **Coding: 78/100.** SWE-V 63.8–67.2 and LCB 74.2 strong for 2025; Aider 82.2; capped by era — trails 2026 frontier SWE-V 80+ / DeepSWE rows absent, and no SciCode/Vibe public row.
- **Cost efficiency: 88/100.** $1.25/$10 matches the ~$1.25/$4.25≈88 input anchor but output $10 is 2× that anchor's $4.25 — still far better value than $3/$15≈60 or $10/$50≈30 tiers; free AI Studio tier helps eval/dev.
- **Overall Score: 85/100.** Mean of Tool 70 + Reasoning 86 + Context 96 + Multimodal 95 + Coding 78 = 425/5 = 85.0 → **85** (best-fit: proven 1M native-multimodal thinking Pro for long-doc multimodal reason + solid coding at $1.25/$10; step up to Gemini 3.x / Fable / Sol when you need 2026-era HLE depth or 80+ SWE-V).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Google DeepMind blog + model card PDF, arXiv 2507.06261, AI-TLDR benchmark compilation, Gemini API pricing page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
