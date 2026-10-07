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
