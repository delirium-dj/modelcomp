# ByteDance Seed 2.0 Pro — findings by Step 5 Preview

- Source: ByteDance / Doubao Seed 2.0 Pro (`deepinfra/ByteDance/Seed-2.0-pro`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance's proprietary Seed 2.0 flagship for long-chain reasoning and multimodal agents — AIME 98.3%, GPQA Diamond 88.9%, SWE-bench Verified 76.5% at $0.47–$0.50/$2.37–$3.00 per 1M; scheduled for retirement 2026-11-24 and succeeded by Seed 2.1.
- **Provider / access:** Volcano Engine (official), BytePlus (`bytedance:ap/seed-2.0-pro`), DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`), Opper gateway; OpenCode Zen (`opencode/seed-2.0-pro`); Chat Completions API with reasoning, tools/function calling, adjustable thinking modes.
- **Release / knowledge:** released 2026-02-14 via Volcano Engine (llmreference); scheduled retirement 2026-11-24 (llmreference); knowledge cutoff not published; weights not released (proprietary).
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (DeepInfra), `bytedance:ap/seed-2.0-pro` (BytePlus), `seed-2.0-pro` (gateways), `opencode/seed-2.0-pro` (Zen).
- **Context window:** 256K–262K total (llm-stats 256K, opper.ai 262K); 131K max output (opper.ai).
- **Modalities:** text, image, video in; text out; reasoning (adjustable thinking modes); tool calls (JSON/tool use).
- **Pricing (as of 2026-10-21):** Volcengine $0.470/$2.37 per 1M (llmreference); BytePlus/DeepInfra $0.50/$3.00 with $0.10 cache (opper.ai, llm-stats); EU/US-residency routes with zero data retention available.
- **Architecture:** proprietary; parameter count not published ("Code: Unknown" per llmreference).

### Raw benchmarks found

ByteDance official launch materials (via LLM Reference) + Opper model summary:

Agent / tool use:

- τ²-Bench Retail: **90.4%** (ByteDance launch materials via LLM Reference) — strong tool calling
- Terminal-Bench 2.x / Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found
- rankllms composite: **39.5** overall, ~50 tok/s generation (rankllms.com)

Reasoning / knowledge:

- AIME 2025: **98.3%** (ByteDance launch materials via LLM Reference; opper.click)
- HMMT: **97.3%** (opper.click summary)
- GPQA Diamond: **88.9%** (ByteDance launch materials via LLM Reference)
- MMLU-Pro: **87.0%** (ByteDance launch materials via LLM Reference)
- FrontierSci-olympiad: **74.0%** (opper.click summary)
- HLE / CritPt / LCR / Omniscience / AA Intelligence Index: no verified public score found
- Neura Market Intelligence Index: **79.8/100** (neura.market)

Coding:

- SWE-bench Verified: **76.5%** (ByteDance launch materials via LLM Reference; rank 37/101 — ref: Claude Fable 5 96.0%, Opus 4.8 88.6%)
- LiveCodeBench v6: **87.8%** (ByteDance launch materials via LLM Reference; rank 12/74 — ref: DeepSeek V4 Pro 93.5%, Gemini 3.1 Pro 91.7%)
- SWE-bench Pro / DeepSWE / SciCode / Terminal-Bench / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks / LCR retrieval-at-length figure published; 256K–262K native window with 131K max output.

Multimodal extras (traceability): MMMU 85.4% (ByteDance launch materials via LLM Reference); near-top LMArena vision leaderboard with solid visual reasoning, spatial understanding and video comprehension (opper.click); airank.dev carries only the SWE-bench 76.5%.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench Retail 90.4% is a frontier-band tool-calling result and function calling/JSON mode are first-class; capped by no Terminal-Bench, Tau3, GDPval, OSWorld or MCP-Atlas numbers in any harness — the agentic evidence base is a single benchmark.
- **Reasoning: 90/100.** AIME 2025 98.3%, HMMT 97.3% and GPQA Diamond 88.9% are frontier-adjacent science/math evidence and the Neura Market index reads 79.8/100; capped by no HLE/CritPt/LCR numbers and MMLU-Pro 87.0% sitting below the 90%+ reference pack.
- **Context window: 78/100.** 262,144 native (256K per llm-stats) lands in the 200K–500K tier (65–84, above the 200K=70 floor); 131K max output is generous, but no retrieval-at-length measurement exists.
- **Multimodal: 88/100.** Text, image and video input (video-in tier 75–90) with text-only output; MMMU 85.4% and a near-top LMArena vision standing with video comprehension are strong; no audio input or non-text output.
- **Coding: 84/100.** SWE-bench Verified 76.5% and LiveCodeBench v6 87.8% (rank 12/74) are solid upper-mid band; capped by rank 37/101 on SWE-bench Verified (well behind the 88–96% frontier pack) and no SWE-bench Pro, DeepSWE, Terminal-Bench or SciCode numbers.
- **Cost efficiency: 88/100.** $0.47–$0.50 in / $2.37–$3.00 out with $0.10 cache matches the ~$0.60/$2.20 ≈ 92 band on the slightly expensive side for output; 3–6x cheaper than comparable frontier models per llmreference.
- **Overall Score: 84/100.** Mean of (82 + 90 + 78 + 88 + 84) / 5 = 84.4 → 84. Best fit: multilingual multimodal reasoning and vision agents at a below-frontier price — but with retirement scheduled 2026-11-24 and Seed 2.1 as the successor, new deployments should target the newer line.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (LLM Reference with ByteDance launch materials, Opper route/pricing record, opper.click, rankllms, airank.dev, neura.market); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
