# Grok Build 0.1 — findings by Qwen 3.8 Flash

- Source: SpaceXAI (formerly xAI) / Grok Build 0.1 (`grok-build-0.1`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** SpaceXAI's purpose‑trained **agentic web‑dev / coding model** powering the Grok Build product (successor ID to `grok-code-fast-1`), with function calling, structured output, MCP support, and 100+ tok/s speed. Verified numbers show it's **real at reliability but weak at frontier coding**: ObviousBench 99.3% answer‑pass³, LiveBench 69.6%, but **Vibe Code Bench v1.1 13.3% and KernelBench Hard 0.0%** — evidence contradicts the "coding specialist" branding. Text+image input at 256K, paid only.
- **Provider / access:** xAI API (`https://api.x.ai/v1`, Responses + Chat Completions, OpenAI‑compatible), public beta since 2026‑05‑29; OpenCode Zen `opencode/grok-build-0.1` (paid, no Free ID); OpenRouter `x-ai/grok-build-0.1`; Vercel AI Gateway.
- **Release / knowledge:** OpenRouter listing 2026‑05‑20; API public beta 2026‑05‑29 (x.ai/news/grok-build-0-1). Cutoff not published.
- **IDs:** `grok-build-0.1`; aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` (official docs).
- **Context window:** **256,000 tokens** (docs.x.ai). Curated `meta.json` says "128K total" — placeholder template, corrected here.
- **Modalities:** **Text + image in; text out** (official). Function calling, structured outputs, reasoning yes; MCP support. Curated `meta.json` "Text in/out" under‑reports — image input is real per x.ai docs.
- **Pricing (as of 2026‑10‑02):** $1.00 in / $0.20 cached / $2.00 out per 1M below 200K; doubles to $2.00 / $0.40 / $4.00 at ≥200K (whole‑request rate). Cost excluded from Overall.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (official x.ai launch post + docs.x.ai; BenchmarkList aggregation of vals.ai, KernelBench, DuelLab, ObviousBench, LiveBench). Kimi's Overall 64 is evidence‑rich; cohort 68 inflates Coding (71) and Reasoning (73.8) on the "coding specialist" branding that the raw numbers do not support.

Agent / tool use:

- **ObviousBench reliability: 99.3% answer pass³** at high effort (rank 27/254, 90th pct) — reliability proxy, not a tool‑use score
- **DuelLab GameBench 2: 39.5** (23/48, 53rd pct; model‑code failure rate 0.0%)
- Terminal‑Bench 2.1 / τ²‑bench / GDPval‑AA / Claw‑Eval: **no verified public score found**

Reasoning / knowledge:

- **LiveBench average: 69.6%** (35/43 cohort); math_comp 95.1%, spatial 98.0%, olympiad 86.6%, tablereformat 100%, python 80.0%
- GPQA Diamond / HLE / MMLU‑Pro / AA Intelligence Index: **no verified public score found**

Coding:

- **Vibe Code Bench v1.1: 13.3%** (vals.ai, rank 52/71, 27th pct) — floor/low‑mid
- **KernelBench Hard: 0.0%** (0/6 problems — floor rank 14/14) — catastrophic
- LiveBench code slices: code_completion 67.4%, code_generation 63.4%, python 80.0%, javascript 40.0%, typescript 40.0%
- SWE‑bench Verified / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 256K window (official); no MRCR / RULER retrieval score published

Multimodal:

- Text + image input, text‑only output (official docs); no video / PDF / audio

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's evidence base drives scoring; the cohort's Coding 71 and Reasoning 73.8 are branding‑inflated and rejected.

- **Tool use: 62/100.** Purpose‑built for tool‑calling / agentic coding with function calling + structured output + MCP verified; ObviousBench 99.3% pass³ is real. Capped by zero audited agentic benchmarks (TB 2.1, τ², τ³, GDPval‑AA all absent). Kimi 62; cohort 68.7 (reputation). Match Kimi at 62.
- **Reasoning: 65/100.** LiveBench 69.6% with excellent math/spatial slices shows real skill, but the **overall rank is 35/43 = bottom‑quintile** of the current cohort and no GPQA / HLE / AA Index exists for cross‑check. Kimi 68; −3 for the missing frontier reasoning evidence — LiveBench alone doesn't reach the 2026 mid tier. Cohort 73.8 (inflated).
- **Context window: 72/100.** 256K = v4 200K–500K band (65–84), above the 200K=70 anchor but below the 500K tier; no retrieval‑at‑length evidence. Kimi 72; cohort 78 (over‑credits the missing retrieval). Match Kimi at 72.
- **Multimodal: 63/100.** **Text + image input**, text‑only output — v4 +image band 60–70. No video / PDF / audio. Kimi 63 (correct band placement); cohort 48.7 (some raters misclassified as text‑only). Match Kimi at 63.
- **Coding: 55/100.** Despite the "agentic coding" branding, verified numbers are **weak**: Vibe 13.3% and **KernelBench Hard 0.0%** are floor/low‑mid; LiveBench code slices are mixed (python 80 / TS+JS 40). Kimi 55; cohort 71 (pure branding). Match Kimi at 55 — **evidence over branding**.
- **Cost efficiency: 90/100.** $1 / $2 with $0.20 cached reads and 100+ tok/s — genuinely cheap for a fast agentic model. Cost excluded from Overall.
- **Overall Score: 63/100.** Mean of Tool 62, Reasoning 65, Context 72, Multimodal 63, Coding 55 = 317/5 = 63.4 → **63**. Best fit: **fast, cheap agentic web‑dev / debug loops inside tuned harnesses** (Grok Build / OpenCode / Cursor / Hermes). Do **not** trust it on kernel / algorithms / unfamiliar stacks — KernelBench Hard 0.0% is a hard stop. Kimi 64 (near match); cohort 68 (branding‑inflated on Coding+Reasoning). Honest middle: 63, one point below Kimi for the LiveBench rank being bottom‑quintile rather than mid.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` full evidence (official x.ai launch post, docs.x.ai model page, BenchmarkList aggregation). Curated `meta.json` is a placeholder template — corrected 128K → **256K** and "Text in/out" → **text+image in** per official docs. Flagged: (a) cohort Coding 71 and Reasoning 73.8 reflect the "agentic coding model" branding, but **Vibe 13.3% / KernelBench Hard 0.0% / LiveBench rank 35/43** do not support that reputation — scored on evidence; (b) ObviousBench 99.3% pass³ is real reliability, but reliability ≠ frontier capability; (c) 100+ tok/s speed is a legitimate value proposition for tight dev loops at $1/$2.
- Revisit trigger: if SpaceXAI publishes GPQA / SWE‑V / τ² rows for this ID, or ships Grok Build 0.2.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
