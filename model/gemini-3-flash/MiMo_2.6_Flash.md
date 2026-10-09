# Gemini 3 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3-flash-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (API `gemini-3-flash-preview` at launch; model card published December 2025)
- **Short description:** The first Flash built off the Gemini 3 **Pro** reasoning foundation (released 2025-12-17, a month after Gemini 3 Pro) — Pro-grade reasoning at Flash latency: GPQA 90.4, MMMU-Pro 81.2 (SOTA at release), SWE-bench Verified 78 (beating 3 Pro itself), 30% fewer tokens than 2.5 Pro, ~3× faster (AA-measured), and <¼ the cost of 3 Pro. Became the default model in the Gemini app and AI Mode in Search. Now legacy: superseded by 3.5 Flash (2026-05), AA benchmarking deprecated to the 10k workload.
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI / Gemini Enterprise, Google Antigravity, Gemini CLI, Android Studio; small free tier; OpenRouter and other gateways.
- **Release / knowledge:** released 2025-12-17 (preview); knowledge cutoff **January 2025**.
- **IDs:** `google/gemini-3-flash-preview` (gateway routes) / `gemini-3-flash-preview` (native; model card: "Gemini 3 Flash").
- **Context window:** 1,000,000 tokens (1M class); max output 65,536.
- **Modalities:** text, images, audio, video in; text out; reasoning yes (thinking levels, modulates effort; even the lowest level beat prior models' high); tool calls yes (function calling, structured outputs, **code execution incl. zoom/count/edit on visual inputs**, context caching, Batch API).
- **Pricing (as of 2026-10-07):** **$0.50 in / $3.00 out** per 1M (audio input $1.00/M); 90% context-cache discount, 50% Batch discount; free tier available. Paid. (Stable/released tier may reprice on migration to `gemini-3.5-flash`+ per Google's guidance.)
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Google-run unless noted):

- GDPval-AA: **1204** Elo (row from the 3.5 Flash comparison table — far under the 1750+ frontier ref; Opus 4.8 era boards put GPT-5.5 at 1769).
- Terminal-Bench 2.1: **58.0** (3.5 Flash model-card table — well under the 88% ref). Terminal-Bench 2.0: no 3 Flash row found (LLM Stats notes 3 Pro wins the shared pair).
- MCP-Atlas: **62.0**; Toolathlon: **49.4**; OSWorld-Verified: **65.1**; Finance Agent v2: **42.6** (all rows from the 3.5 Flash model-card table).
- AutomationBench / Agents' Last Exam / Tau3: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **90.4** (Google — just clears the 90%+ ref; **Epoch AI's independent run: 89** — borderline either way). AIME 2025: **99.7** (LLM Stats); OTIS Mock AIME: 96 (Epoch).
- HLE (no tools): **33.7** (Google) — **misses the 40%+ ref**. With-tools HLE: no separate row found.
- FrontierMath (Epoch, v2): **51% T1–3 / 17% T4** — strong T1–3, mid T4 (GPT-5.2 Pro: 74/46). ARC-AGI-2: **33.6–34** (model-card table/Epoch — well behind GPT-5.2 Pro's 54).
- AA Intelligence Index: **26** (AA's deprecated page, current methodology — "below average"; index was re-based after launch, when 3 Flash was a frontier-class release). LLM Stats Score 37.0 (their composite).
- SimpleQA Verified: 67 (Epoch). Global PIQA 92.8; MMMLU 91.8.

Coding:

- SWE-bench Verified: **78** (Google — beats Gemini 3 Pro's own figure; **Epoch: 75**). Clears the coding-era 74%+ frontier ref on the Google number, sits on it at Epoch's.
- SWE-bench Pro (Public): **49.6** (3.5 Flash model-card table — under the crowd of 54–64). DeepSWE: no row found. LiveCodeBench Pro: 3 Pro beats it (no number).
- Strong vibe-coding posture: JetBrains/Warp report Pro-close quality at lower latency; Warp +8% fix accuracy (customer quotes).

Long context:

- GDM-MRCR v2 (8-needle): **67.2% at 128K**, **22.1% at 1M pointwise** (from the 3.5 Flash table) — retrieval is the weak face; 3 Pro beat it here. Window 1M.

Multimodal (Google-run unless noted):

- MMMU-Pro: **81.2** (SOTA at release, "comparable to Gemini 3 Pro"). VideoMMMU / CharXiv-R / ScreenSpot Pro: 3 Pro wins the shared pair (no 3 Flash numbers surfaced). Code execution over visual inputs (zoom/count/edit) is a distinguishing feature.

### Normalized scores (1–100)

- **Tool use: 72/100.** Platform-strong (code execution, caching, antagentic positioning) but the agentic evidence is the weakest of any Gemini in this batch: GDPval 1204, TB2.1 58.0, MCP 62.0, OSWorld 65.1, Toolathlon 49.4 all sit mid-to-low against frontier rows.
- **Reasoning: 81/100.** GPQA 90.4 (Google) grazes the 90+ ref (Epoch 89 doesn't), AIME 99.7 and FrontierMath T1-3 51% are strong, but HLE 33.7 misses the 40+ ref outright, ARC-AGI-2 34 is far back, and the current AA Index (26) is deep under 60+.
- **Context window: 95/100.** 1M capacity = ≥1M tier floor; MRCR 67.2/22.1 is the retrieval floor of the floor → capacity-only score.
- **Multimodal: 90/100.** Text + image + **audio + video** in (top input band), text out; MMMU-Pro 81.2 was SOTA at release and visual code-execution is unique; held at 90 by 3 Pro winning most shared vision pairs and no audio/non-text output.
- **Coding: 76/100.** SWE-Verified 78/75 is frontier-band and beat 3 Pro at launch — but SWE-Pro 49.6, TB2.1 58.0, and the absence of DeepSWE/LiveCodeBench rows keep it well under the modern frontier coding set.
- **Cost efficiency: 93/100.** $0.50/$3.00 with 90% cache, half-price batch and a free tier sits just past the $0.60/$2.20 ≈ 92 anchor (≈92–93; audio input at $1/M is the small negative), and Google's "<¼ of 3 Pro" framing holds.
- **Overall Score: 83/100.** (72+81+95+90+76)/5 = 82.8 → 83 — a December-2025 speed/price frontier release that still wins on input breadth and unit economics, with agentic rows, HLE, and 1M retrieval showing how quickly the frontier moved in 2026.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google/DeepMind blogs + model card PDF, Artificial Analysis, Epoch AI, LLM Stats, Google Cloud blog, AI developers forum); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

