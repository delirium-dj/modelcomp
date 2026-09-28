# GPT-5 — findings by GLM 5.3

- Source: OpenAI/GPT-5 (`gpt-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's flagship system released 2025-08-07 — a unified model with a real-time router between fast responses and "GPT-5 thinking" (plus GPT-5 pro for extended reasoning). Replaced GPT-4o, o3, o4-mini, GPT-4.1, and GPT-5-preview in ChatGPT. Deprecated as of Sep 2026 (superseded by GPT-5.1 → 5.6).
- **Provider / access:** OpenAI API (`gpt-5`, Responses API), OpenCode Zen (`opencode/gpt-5`, still listed), 2 API providers tracked by AA.
- **Release / knowledge:** 2025-08-07; knowledge cutoff Sep 2024 (AA).
- **IDs:** `gpt-5` (+ `gpt-5-pro` variant). On Zen: `opencode/gpt-5` (paid, $1.07/$8.50 per 1M) — no Free ID.
- **Context window:** 400K tokens (AA).
- **Modalities:** text + image in; text out; built-in adaptive thinking with router (reasoning effort steerable); function calling; JSON mode.
- **Pricing (as of 2026-09-27):** $1.25 in / $10.00 out per 1M via OpenAI API (AA; 90% cache discount, blended ≈ $1.34); Zen resells at $1.07/$8.50 (Zen pricing page).
- **Architecture:** proprietary; parameter count undisclosed; trained on Microsoft Azure AI supercomputers.

### Raw benchmarks found

> Sources: OpenAI "Introducing GPT-5" (2025-08-07), Artificial Analysis model page (Sep 2026, deprecated listing), OpenCode Zen pricing docs. OpenAI's evaluation charts are images — text-verified numbers only.

Agent / tool use:

- Instruction following & agentic tool use: **significant gains over predecessors** (OpenAI announcement; exact benchmark values chart-only).
- Terminal-Bench 2.x / Tau3-Banking / GDPval-AA / Claw-Eval: **no verified public score found** for this ID.
- Honesty on impossible tasks: deception rate **2.1%** vs o3's 4.8%; on CharXiv with images stripped, confident answers about non-existent images **9%** vs o3's 86.7% (announcement).
- Hallucination: with web search, **~45% fewer factual errors than GPT-4o**; thinking **~80% fewer than o3**; **~6× fewer** hallucinations than o3 on LongFact/FActScore (announcement).
- Economically valuable knowledge-work benchmark: comparable to or better than human experts in roughly half of evaluated cases (announcement).

Reasoning / knowledge:

- AIME 2025: **94.6%** without tools (state of the art at launch; announcement).
- GPQA Diamond: **88.4%** without tools — SOTA via GPT-5 pro extended reasoning (announcement).
- Artificial Analysis Intelligence Index v4.3.2: **23 (high effort, estimated)** — below the class median of 26 in Sep 2026 (AA).
- HLE / LCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **74.9%** (fixed n=477 verified subset; state of the art at launch; announcement).
- Aider Polyglot: **88%** (announcement).
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- Thinking efficiency: beats o3 performance with **50–80% fewer output tokens** (announcement).

Multimodal:

- MMMU: **84.2%** (state of the art at launch; announcement).

Long context:

- 400K window (AA); no MRCR/RULER rows for this ID. "No long-context retrieval reported."

### Normalized scores (1–100)

> Derived per `model-comparison.md` methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 78/100.** Launch-era agentic excellence: adaptive router, "significant gains" in instruction following and multi-step tool use, top-tier honesty on impossible tasks (deception 2.1%), and huge reliability gains (45–80% fewer factual errors). Capped by unverified TB/τ³/GDPval rows and an AA Index (23) now below class median after a year of successor releases.
- **Reasoning: 84/100.** AIME 94.6% and GPQA 88.4% (pro) were SOTA at launch with 6× lower hallucination rates; AA Index 23 vs median 26 shows the 2026 frontier has moved past it.
- **Context window: 78/100.** 400K (AA) — top of the 200K–500K tier band (65–84) as scaled by window size; no verified retrieval depth.
- **Multimodal: 68/100.** Text + image in, text out (60–70 band) with launch-SOTA MMMU 84.2%; no audio/video input.
- **Coding: 82/100.** SWE-bench Verified 74.9% (n=477) and Aider Polyglot 88% were SOTA in Aug 2025 with 50–80% token-efficiency gains vs o3; the 2026 frontier now sits ~81%+ standard-config and GPT-5 has been deprecated.
- **Cost efficiency: 72/100.** $1.25/$10.00 (AA; Zen $1.07/$8.50) — between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) anchors; strong token efficiency partially offsets the $10 output price.
- **Overall Score: 78/100.** (78+84+78+68+82)/5 = 78. A former flagship that still holds upper-mid coding/agent standing in Sep 2026; for new workloads GPT-5.1+ succeeds it at better quality per dollar.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-27
- Method: public internet research (OpenAI launch post + Artificial Analysis + Zen pricing docs); no peer report files read; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
