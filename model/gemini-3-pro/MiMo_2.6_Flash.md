# Gemini 3 Pro — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3-pro` / `gemini-3-pro-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** The first Gemini 3-generation flagship (released 2025-11-18 in preview) — sparse MoE trained from scratch, natively multimodal, topped LMArena (1501 Elo) and WebDev Arena (1487) at launch. Superseded by Gemini 3.1 Pro and Gemini 3.5 Pro but remains a distinct, generally-available model with its own API ID. `thinking_level` and `media_resolution` controls; Deep Think was a separate upcoming mode (not this ID).
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3-pro-preview-20251117`, stable), Vertex AI, Gemini Enterprise, Gemini app, Gemini CLI, Google Antigravity. OpenAI-compatible Chat route on gateways.
- **Release / knowledge:** released 2025-11-18; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro` (gateway routes) / `gemini-3-pro-preview` (native).
- **Context window:** 1,048,576 tokens; max output ~65,536 (66K listed by Vals).
- **Modalities:** text, images, audio, video, PDF in; text out; reasoning yes (`thinking_level`); tool calls yes (function calling, code execution, grounding, structured outputs).
- **Pricing (as of 2026-10-07):** **$2.00 in / $12.00 out** per 1M for prompts ≤200K; **$4.00 / $18.00 above 200K** (whole-request tier); cache read $0.20, cache write $0.375; Batch API 50% off; AI Studio free tier exists (not scored). One aggregator (Shawn Hack) lists $1.25/$10 — unconfirmed as a current official rate; launch pricing scored. Paid.
- **Architecture:** proprietary sparse mixture-of-experts transformer with native multimodal support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google; above GPT-5.1 47.6, Sonnet 4.5 42.8 at launch).
- Terminal-Bench 2.1 (AA, high): **41.7%**; Terminal-Bench 4.0 (AA): **25%** — far under the 88% frontier ref on current terminal suites.
- τ2-bench: **85.4%** (Google — strong tool-use result).
- GDPval-AA / OSWorld / Tau3 / Claw-Eval / MCP Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google, no tools — clears the 90%+ ref; 93.8 with extended reasoning).
- HLE: **37.5%** no tools / **45.8%** with search+code execution (Google); AA independent (high): **39.7%** — borderline on the 40%+ ref (cleared only with tools).
- ARC-AGI-2: **31.1%** (ARC Prize Verified; 45.1 with Deep Think — separate mode, not scored here).
- MathArena Apex: **23.4%** (SOTA at launch); AIME 2025: 95.0 no tools / 100.0 with code execution; MATH: 100%. FrontierMath: ~38% (Shawn Hack, partial). CritPt: 9.1 (AA, high).
- AA Intelligence Index: no verified public score found for this snapshot.

Coding:

- SWE-bench Verified: **76.2%** (Google, single attempt). LiveCodeBench: **86.4** (Vals); LiveCodeBench Pro: **2439 Elo** (Google, ahead of GPT-5.1 2243).
- Terminal-Bench 2.0 54.2% / TB2.1-AA 41.7% as above. WebDev Arena: **1487 Elo** (#1 at launch).
- DeepSWE / SWE-bench Pro / Vibe Code Bench / SciCode / AA Coding Index: no verified public score found.

Long context:

- MRCR v2 (8-needle): **77.0%** at 128K average; **26.3%** at 1M pointwise (vs Gemini 2.5 Pro 16.4 — competitors did not support 1M in the comparison).
- AA-LCR (AA, high): **76%**. Real 1M operation but weak retrieval at the top of the window.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ2-bench 85.4% is strong and TB2.0 54.2% was launch-leading, but TB2.1 41.7% and TB4.0 25% are far under the frontier ref, and there is no GDPval/OSWorld/Tau3 row.
- **Reasoning: 88/100.** GPQA 91.9 clears the 90%+ ref outright; HLE sits at 37.5–45.8 (AA 39.7 — just under without tools); MathArena/AIME/MATH results are SOTA-class but CritPt 9.1 and the absent AA Index composite cap it at 88.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor; MRCR 77% at 128K and 26.3% at 1M show the window is usable but retrieval degrades sharply — floor, no uplift.
- **Multimodal: 94/100.** Text, image, audio, video, and PDF in — audio-in band (90–100); MMMU-Pro 80.2–81, Video-MMMU 87.6, MMMU 87.5 support a top-of-band score; text-only output keeps it below 95+.
- **Coding: 84/100.** SWE-bench Verified 76.2% and LiveCodeBench 86.4/2439 Elo are strong, WebDev Arena #1 at launch; capped by weak terminal results (TB2.1 41.7, TB4.0 25) and no DeepSWE/SWE-Pro rows.
- **Cost efficiency: 74/100.** $2/$12 (≤200K) sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (~76); discounted to 74 by the 2×/1.5× >200K surcharge that applies precisely on long-context work, plus thinking tokens billed as output. ($0.20 cache reads and Batch 50% help.)
- **Overall Score: 88/100.** (78+88+95+94+84)/5 = 87.8 → 88 — the multimodal benchmark-setter of the Gemini 3 launch: perfect-band multimodal input, SOTA math, strong GPQA/SWE; terminal-agentic work and 1M retrieval are the weak flanks, and successors (3.1/3.5 Pro) have since moved the line.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google blog launch post, AI/TLDR, Model Beats, MarkTechPost, GrowthJockey, Vals.ai, Benchable, Shawn Hack); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
