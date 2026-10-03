# GPT 5.1 — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.1`; API `gpt-5.1`, Instant and Thinking variants)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1
- **Short description:** OpenAI's November-2025 flagship — a usability-focused revision of GPT-5 (warmer default tone, adaptive reasoning, Instant/Thinking variants replacing the opaque router) with GPQA Diamond 88.1%, SWE-bench Verified 76.3% (release-reported) and AIME 2025 94%, at $1.25/$10 per 1M; held the flagship for under a month before GPT-5.2.
- **Provider / access:** OpenAI API and Azure; Batch API at half rate; prefix caching (50–90% off repeated inputs). `noFreeId` (repo stub; treat as unverified).
- **Release / knowledge:** 2025-11-12 (GPT-5.1-Codex-Max followed a week later; GPT-5.2 arrived 2025-12-11); knowledge cutoff not stated in the materials reviewed.
- **IDs:** `openai/gpt-5.1`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a 400K window and vision (MMMU is among its evaluated benchmarks).
- **Context window:** 400,000 tokens.
- **Modalities:** text, image in (MMMU evaluated); text out.
- **Pricing (as of 2026-10-02):** $1.25/$10.00 per 1M input/output; cached input $0.125/M; Batch API $0.62/$5.00 (The Known Good's tracked OpenAI first-party rate); ~70 tok/s; TTFT ~1.1–1.2s.
- **Architecture:** dense Transformer; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **76.3%** (release-reported) / **68%** (The Known Good's tracked ingestion, vs its 71% tracked average)
- Known Good Index: **74** (composite of GPQA Diamond, Mock AIME 2024–25, MATH Level 5, SWE-bench Verified, LiveBench, HLE and Terminal-Bench, normalised 0–100; tracked average 65)
- Terminal-Bench / BrowseComp / MCP Atlas / OSWorld / τ-Bench / GDPval: no verified public score found in the materials reviewed

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (release-reported; The Known Good: 88, vs its 65% tracked average)
- AIME 2025: **94%**; Mock AIME 2024–25: **89** (vs the 54 tracked average)
- MATH Level 5, LiveBench, Humanity's Last Exam: components of the Known Good Index (individual figures not captured)
- AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **76.3%** (release) / 68% (tracked) — see above
- HumanEval: described as strong (no figure captured); no Terminal-Bench 2.x, DeepSWE, SciCode, LiveCodeBench or AA Coding Index captured

Long context / multimodal:

- 400K window; no MRCR/RULER/GraphWalks score published
- MMMU: among evaluated benchmarks (figure not captured)

### Normalized scores (1–100)

- **Tool use: 68/100.** No verified agentic-tool benchmarks (Terminal-Bench 2.x, BrowseComp, MCP Atlas, OSWorld, τ-Bench, GDPval) were found in the materials reviewed; the only anchors are SWE-bench Verified 76.3% (release-reported) and the Known Good Index of 74 (which includes a Terminal-Bench component), both mid-tier by the 2026 agentic bar.
- **Reasoning: 80/100.** GPQA Diamond 88.1% sits just under the 90%+ frontier band and AIME 2025 94% / Mock AIME 89 (vs a 54 average) are strong, but HLE and the AA Intelligence Index are unpublished, and 88.1% GPQA trails the 93%+ current frontier.
- **Context window: 76/100.** 400K-token window — double the 200K=70 reference, well under the 1M frontier, with no ≥98%-at-512K+ figure.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); MMMU was evaluated but its figure was not captured.
- **Coding: 72/100.** SWE-bench Verified 76.3% (release-reported; 68% tracked) is mid-tier by 2026 standards (frontier 80–88%), and no Terminal-Bench 2.x, DeepSWE, SciCode, LiveCodeBench or AA Coding Index figures were found.
- **Cost efficiency: 73/100.** $1.25/$10.00 per 1M interpolates to ~73 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references — the $10 output half is the drag; Batch API at half rate (~88) and cached reads at $0.125/M are offsets.
- **Overall Score: 72/100.** (68+80+76+65+72)/5 = 72.2 → 72 — a solid late-2025 flagship (GPQA 88.1%, AIME 94%, SWE-bench Verified 76.3%, 400K context) whose evidence base is thin on the 2026 agentic boards and whose $10/M output price dates it; scored against the October-2026 frontier, not its launch-era standing.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI API docs, AI Release Tracker, The Known Good, TheModelverse); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_1.md`, using the same headings.
