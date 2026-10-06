# Gemini 3 Flash — findings by Mimo V2.6 Flash

- Source: Google/`gemini-3-flash`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's December 2025 thinking-native Flash workhorse — 1M context at $0.50/$3, tuned for high-volume agentic coding and multimodal work (SWE-V 78, MMMU-Pro 81.2/87.6) while undercutting Pro-class pricing by ~2–4×. Sits under Gemini 3 Pro as the default "smart enough, cheap enough" tier.
- **Provider / access:** Google AI Studio / Gemini API / Vertex AI (`gemini-3-flash`), AI Mode / Gemini app surfaces; OpenRouter and major gateways. Chat Completions-compatible via Gemini API.
- **Release / knowledge:** 2025-12-17 (Google blog); knowledge cutoff not isolated in rows reviewed.
- **IDs:** `gemini-3-flash` (Gemini API); `google/gemini-3-flash` on gateways.
- **Context window:** 1,000,000 tokens input; max output 64,000 tokens (Google / models.dev).
- **Modalities:** text, image, audio, video, PDF in; text out; thinking mode; tool calls / function calling; structured output.
- **Pricing (as of 2026-09-23):** $0.50 / $3.00 per 1M in/out (≤200K prompt tier); cached input discounted. Paid; free tier in AI Studio.
- **Architecture:** proprietary Google multimodal MoE (params undisclosed).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench (Google launch harness): **78%** SWE-V proxy-adjacent coding row below; MCP Atlas: **57.4%** (Google launch)
- Toolathlon: **49.4%** (Google launch / BenchmarkList)
- τ-bench: **71.5%** (Google launch)
- OSWorld / GDPval-AA / Claw-Eval: **no verified public score found** in rows reviewed

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Google launch)
- HLE: **33.7%** no tools / **43.5%** with tools (Google launch)
- MATH: **97.5%** (Google launch)
- AA Intelligence Index (v4.3.2): **26.3 (#139)** not-stated config / **17.9 (#240)** no-reasoning (Artificial Analysis via BenchLeader 2026-10-06 — **fills the former AA Index gap**; pre-rescale launch-era indexes are not comparable)
- BenchLeader composite index: **59.3 (#120 of 750, thinking)**; categories Instruction-following 76 / Knowledge 66 / Long-context 64 / Multimodal 63 / Reasoning 56 / Agents&tools 55; Epoch Capabilities Index 151.8 (#47); IFBench **78.0% (#14, not-stated)** / 55.1% (#145, no-reasoning)

Coding:

- SWE-bench Verified: **78%** (Google launch / vendor harness)
- LiveCodeBench / SciCode / DeepSWE: **no verified public score found** in rows reviewed

Long context:

- 1M window documented; MRCR / RULER retrieval % at depth: **no verified public score found** in this pass. AA-LCR: **78.0% (#111, not-stated config) / 55.3% (#278, no-reasoning)** (Artificial Analysis via BenchLeader 2026-10-06 — first measured long-context row for Gemini 3 Flash)

Multimodal:

- MMMU-Pro: **81.2%** no tools / **87.6%** with tools (Google launch); **78.5–79.9%** (AA via BenchLeader 2026-10-06) / **87.6% (#13, Vals)**; GeoBench **88.0% (#1)**; Chatbot Arena text-vision: **1467** Elo (Google / LMArena row) — LMArena now 1458–1473 text / 1266–1285 vision by config (BenchLeader 2026-10-06)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 57.4, Toolathlon 49.4, τ-bench 71.5 — solid mid-upper agentic stack for a Flash-tier model; capped by missing public TB2.1/GDPval/OSWorld rows and Toolathlon still mid-pack vs Pro/Max-class 70+.
- **Reasoning: 89/100.** GPQA 90.4, HLE 43.5-tools, MATH 97.5 — near-frontier science/math; capped by HLE no-tools 33.7 still behind top Pro/Sol-class 47–53.
- **Context window: 95/100.** Full 1M (≥1M tier → 95–100); no public ≥98% retrieval at 512K+ to claim 100.
- **Multimodal: 88/100.** Text/image/audio/video/PDF in (video+audio → 75–90 band); MMMU-Pro 81.2/87.6 and Arena 1467 strong; text-only out keeps it shy of 90+.
- **Coding: 85/100.** SWE-V 78 is strong Flash-class coding; capped by missing LCB/DeepSWE rows and still below Fable/Opus/Sol 80–90+ multi-bench consensus.
- **Cost efficiency: 91/100.** $0.50/$3 sits just under the ~$0.60/$2.20≈92 anchor with near-Pro benchmarks — exceptional value; no free-tier API beyond AI Studio sandbox noted as caveat.
- **Overall Score: 86/100.** Mean of Tool 72 + Reasoning 89 + Context 95 + Multimodal 88 + Coding 85 = 429/5 = 85.8 → **86** (best-fit: high-volume multimodal/agentic coding worker at $0.50/$3 when 1M context and image/audio/video-in suffice; step up to 3 Pro / Fable / Sol for top HLE depth or 80+ multi-harness SWE consensus).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Google DeepMind launch blog, BenchmarkList, models.dev); re-run 2026-10-06 (user-approved enrichment): BenchLeader model page (index 59.3 #120/750 thinking, AA 26.3 #139 filling the AA-Index gap, AA-LCR 78.0/55.3 filling the long-context gap, MMMU-Pro/GeoBench/LMArena rows, IFBench 78.0) — scores unchanged: (72+89+95+88+85)/5 = 85.8 → 86. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
