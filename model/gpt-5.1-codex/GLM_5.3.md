# GPT-5.1 Codex — findings by GLM 5.3

- Source: OpenAI (`opencode/gpt-5.1-codex`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's November 2025 coding-agent reasoning model of the GPT-5.1 Codex line — the Codex CLI/IDE agent engine between GPT-5.2-Codex and the GPT-5.3 Codex successor. Artificial Analysis marks it **deprecated** in favor of GPT-5.2 Codex.
- **Provider / access:** OpenAI Responses API (`gpt-5.1-codex`); Codex CLI/IDE; OpenCode Zen `opencode/gpt-5.1-codex` (project meta). Chat Completions/Responses per platform.
- **Release / knowledge:** released 2025-11-13 (Artificial Analysis); knowledge cutoff **September 2024** (AA — the oldest cutoff in the current tracked set).
- **IDs:** `opencode/gpt-5.1-codex` (project meta); `gpt-5.1-codex` (OpenAI). No Free ID.
- **Context window:** 400,000 tokens (Artificial Analysis verified; the project meta's 128K is a scaffold placeholder).
- **Modalities:** text and image in; text out; reasoning yes (effort levels; AA tracks the high-effort variant); tool calls; structured outputs; Codex-harness agentic use.
- **Pricing (as of 2026-10-17):** $1.25 in / $10.00 out per 1M (AA median across providers; 90% cache discount); 125.4 tok/s output (fast, class median 83.4), TTFT 6.62s.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **83%** (Artificial Analysis via BenchLM)
- Gert Labs: **49.68%** (Gert Labs rankings via BenchLM — mid-field)
- JobBench: **26.2%** (JobBench paper via BenchLM — weak)
- Terminal-Bench / GDPval-AA / Tau3 / Claw-Eval: **no verified public score found** for this ID on current harnesses

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (AA via BenchLM — upper-mid band)
- HLE: **25.7%** (AA via BenchLM — mid)
- AA-LCR: **69.3%** (AA via BenchLM)
- CritPt: **5.7%** (AA via BenchLM — near-floor)
- Artificial Analysis Intelligence Index: **23.7** (AA via BenchLM; AA's own page shows 24 estimated, #133/217 in its price class, below the class median 27)
- AA-Omniscience: Index **-6.5** (accuracy 39.9%, hallucination rate **77.2%** — poor knowledge reliability, AA via BenchLM)
- AA-IFBench: **70.0%** (AA via BenchLM)

Coding:

- LiveCodeBench (Vals): **85.6%** (Vals via BenchLM — the strongest row)
- Vibe Code Bench: **13.12%** (Vals v1.1 via BenchLM — weak)
- Design Arena Website: **1163** (OpenRouter via BenchLM — low)
- SWE-bench Verified / SWE-Pro / SciCode: **no verified public score found** for this ID
- BenchLM composite: **50.37/100, #93 of 954** (16 of 639 rows — conservative coverage)

Long context:

- 400K window verified (AA); AA-LCR 69.3% is the long-context reasoning proxy — moderate; no MRCR/RULER retrieval percentage published.

Multimodal:

- AA-MMMU-Pro: **72.5%** (AA via BenchLM — decent image-in quality)

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 83% is genuinely strong conversational tool work and the Codex harness ships full agentic tooling, but Gert Labs 49.7% is mid, JobBench 26.2% is weak, and no Terminal-Bench/GDPval/Tau3 rows exist for this ID — a dated agentic record.
- **Reasoning: 60/100.** GPQA 86.0% and HLE 25.7% are mid-to-upper-mid, and the AA Intelligence Index 23.7 sits inside the 20–35 mid band; capped hard by CritPt 5.7%, a -6.5 Omniscience Index with a 77.2% hallucination rate, and the September-2024 knowledge cutoff (the oldest in the tracked set).
- **Context window: 78/100.** 400K verified (200K–500K tier) with moderate measured long-context reasoning (AA-LCR 69.3%); no retrieval-rate benchmark to justify more.
- **Multimodal: 65/100.** Text + image input verified (AA) with a decent MMMU-Pro 72.5%; text-only output — mid image-in band.
- **Coding: 70/100.** LiveCodeBench 85.6% is a strong coding anchor and Codex's purpose-built agentic-harness pedigree supports real-world coding fitness; capped by the weak Vibe Code 13.1%, low Design Arena 1163, no verified SWE-bench Verified row, and deprecation by GPT-5.2/5.3 Codex.
- **Cost efficiency: 80/100.** $1.25/$10.00 with the 90% cache discount sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) anchors — competitive input pricing with an output premium; 125 tok/s speed is a real bonus.
- **Overall Score: 67/100.** Half-up mean of the five quality dims (62 + 60 + 78 + 65 + 70) / 5 = 67.0. Best-fit recommendation: a deprecated-but-serviceable mid-2025 coding agent at competitive pricing — fine for legacy Codex workflows, but GPT-5.2 Codex and GPT-5.3 Codex supersede it at similar or better prices; keep factual outputs verified (77% hallucination rate, Sep-2024 cutoff).

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-17
- Method: public internet research (BenchLM 16-row profile updated 2026-10-17, Artificial Analysis model page — deprecated in favor of GPT-5.2 Codex, OpenAI platform references, project meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
