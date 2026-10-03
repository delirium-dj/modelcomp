# GPT-5 — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5`; API `gpt-5`, `gpt-5-chat-latest`; GPT-5 Pro variant)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August-2025 unified flagship (quick + thinking in one system) — launch SOTA in math (AIME 94.6% no-tools), coding (SWE-bench Verified 74.9%, Aider Polyglot 88%) and multimodal understanding (MMMU 84.2%); GPT-5 Pro (extended parallel test-time reasoning) set a GPQA SOTA of 88.4% no-tools; superseded by GPT-5.1 within a month.
- **Provider / access:** OpenAI API (Responses, Chat Completions; default in Codex CLI), ChatGPT (all tiers; free users fall back to GPT-5 mini at limits), OpenCode Zen. `noFreeId`.
- **Release / knowledge:** 2025-08-07; knowledge cutoff not stated in the materials reviewed.
- **IDs:** `openai/gpt-5` / `gpt-5` / `gpt-5-chat-latest`.
- **Context window:** 400,000 tokens (272K input + 128K max output; reasoning tokens count toward the output cap); GPT-5 Pro: 400K window, 272K max output.
- **Modalities:** text, image, file (PDF) in; text out.
- **Pricing (as of 2026-10-02):** $1.25/$10.00 per 1M input/output; cached input $0.125/M; OpenCode Zen $1.07/$8.50; mini $0.25/$2, nano $0.05/$0.40.
- **Architecture:** unified quick/thinking system; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **74.9%** (fixed n=477 subset, internal infra; o3 high: 69.1%) — with 22% fewer output tokens and 45% fewer tool calls than o3 at high effort
- Aider Polyglot: **88.0%** (o3: 79.6%)
- SWE-Lancer (IC SWE Diamond freelance tasks): **$112K** (o4-mini: $66K, o3: $86K)
- Front-end web development: beats o3 **70%** of the time (internal testing)
- Terminal-Bench / BrowseComp / MCP Atlas / OSWorld / τ-Bench: no verified public score found

Reasoning / knowledge:

- AIME 2025 (no tools): **94.6%** — launch SOTA (o3: 88.9%)
- HMMT 2025 (no tools): **93.3%** (o3: 81.7%)
- GPQA Diamond (no tools): **85.7%**; GPT-5 Pro: **88.4%** — launch SOTA (o3: 83.3%)
- HLE (no tools): **24.8%** (o3: 20.2%)
- FrontierMath (python tool only): **26.3%** (o3: 15.8%)
- External experts preferred GPT-5 Pro over GPT-5 thinking **67.8%** of the time across 1000+ economically valuable prompts; Pro made **22% fewer major errors**
- AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **74.9%**; Aider Polyglot: **88.0%** — see above
- Terminal-Bench 2.x / DeepSWE / SciCode / LiveCodeBench / AA Coding Index: no verified public score found

Long context / multimodal:

- 400K window; no MRCR/RULER/GraphWalks score published
- MMMU: **84.2%** — launch SOTA in multimodal understanding

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench Verified 74.9% (with 22% fewer output tokens and 45% fewer tool calls than o3) and Aider Polyglot 88.0% are strong coding-agent signals, but no general agentic-tool benchmarks (Terminal-Bench 2.x, BrowseComp, MCP Atlas, OSWorld, τ-Bench) were found in the materials reviewed.
- **Reasoning: 78/100.** AIME 94.6% and HMMT 93.3% (no tools) are top-tier and GPT-5 Pro's GPQA 88.4% was a launch SOTA, but base GPQA 85.7% sits under the 90%+ frontier band, HLE 24.8% (no tools) is weak, and the AA Intelligence Index is unpublished.
- **Context window: 76/100.** 400K-token window (272K in + 128K out) — double the 200K=70 reference, well under the 1M frontier, with no ≥98%-at-512K+ figure.
- **Multimodal: 68/100.** text/image/file in with text out — the +image/PDF band (60–70), corroborated by MMMU 84.2% (a launch SOTA in its day).
- **Coding: 75/100.** SWE-bench Verified 74.9% and Aider Polyglot 88.0% are solid, with SWE-Lancer $112K and the 70% front-end win over o3 supporting, but all figures are August-2025-era and no Terminal-Bench 2.x, DeepSWE, SciCode, LiveCodeBench or AA Coding Index figures were found.
- **Cost efficiency: 73/100.** $1.25/$10.00 per 1M (cached $0.125/M; Zen $1.07/$8.50) interpolates to ~73 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references — the $10 output half is the drag.
- **Overall Score: 74/100.** (72+78+76+68+75)/5 = 73.8 → 74 — a landmark August-2025 flagship (AIME 94.6%, SWE-bench Verified 74.9%, Aider 88%, MMMU 84.2%, 400K context) scored against the October-2026 frontier, where its missing agentic-board evidence and $10/M output price place it mid-pack.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5 launch + developer docs, OpenAI API model docs, Vercel AI Gateway, allthings.how); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
