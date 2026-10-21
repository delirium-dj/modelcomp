# GPT-6.1 Sol — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model released 2026-09-29 at DevDay 2026, replacing GPT-6 Sol after only one week; positioned as "nearly matching GPT-6 Astra's intelligence on agentic coding, computer use, and professional work" at one-fifth of Astra's token price. Best DeepSWE v1.1 score (75.2% at high effort, $0.65/task) actually beats Astra's best (74.1%, $4.43/task).
- **Provider / access:** OpenAI API, ChatGPT Work, Codex; OpenCode Zen as `opencode/gpt-6.1-sol`. Launched alongside Ultrafast speed tier and Dots persistent agents.
- **Release / knowledge:** 2026-09-29 (DevDay 2026); knowledge cutoff April 30, 2026 (OpenAI model docs via AlphaCorp).
- **IDs:** `openai/gpt-6.1-sol`; `opencode/gpt-6.1-sol` on Zen. No Free ID — paid model.
- **Context window:** 1,050,000 tokens total, up to 128,000 output (OpenAI model documentation). Long-context surcharge above 272K input: 2x input/cached, 1.5x output.
- **Modalities:** text + image input; text out; selectable reasoning effort (low/medium/high/xhigh/max); tool calls; hidden reasoning; structured outputs; cache write $2.50/M (1.25x input).
- **Pricing (as of 2026-10-09):** $2.00 / $10.00 per 1M in/out; cached input $0.10 (5% of input price — only GPT-6 model below the family's usual 10%); Batch/Flex −50%; fast mode 2x; regional processing +10%. Score falls from high (75.2%) to xhigh/max (71.9%) on DeepSWE while cost more than doubles — more reasoning can buy a worse result.
- **Architecture:** proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

> Primary: OpenAI's 2026-09-29 launch data (score + cost-per-task at each reasoning effort, cross-read via AlphaCorp full-table article). Vendor-run; Claude figures taken from public reports, not OpenAI runs.

Agent / tool use (best score by effort, cost per task):

- DeepSWE v1.1: low 64.4% ($0.17) / medium 73.0% ($0.42) / **high 75.2% ($0.65)** / xhigh 71.9% ($0.79) / max 71.9% ($1.57) — beats GPT-6 Astra's best 74.1% ($4.43) and GPT-6 Sol's best 68.8% ($2.74).
- OSWorld 2.0 (partial reward, 108 workflows): low 59.0% ($0.42) → **max 71.4% ($1.27)** vs Astra's 73.5% ($9.44), GPT-6 Sol's 64.4% ($3.37). Note: partial-credit metric; strict completion ~20% for strongest models.
- AutomationBench 1.0.6 (47 business tools): low 24.7% → **max 36.1% ($0.30)**; Opus 5.5 leads at max with 42.5% ($1.44); at medium 31.7% ($0.19) beats Opus 5.5's 29.5% ($0.65).
- GDPval-AA: no verified score found for 6.1 Sol in launch coverage.
- Tau3-Bench Banking: no verified public score found.
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Terminal-Bench Science 0.1: low 43.7% ($1.79) → **max 57.0% ($5.47)** — more than doubles GPT-6 Sol's 27.6% ($12.18); Astra leads at 68.1% ($23.80), Opus 5.5 63.3% ($23.21).
- Factual error rate (share of responses with ≥1 error, lower better): low 7.7% → xhigh **4.1%** ($0.10); Astra 3.9% at max.
- GDP.pdf (professional document QA, all-pass): **32.0% at high ($0.35)** vs Astra's 32.2% ($1.91), Opus 5.5's 28.8% ($0.83) — 0.2-pt gap at >5x cost. No model clears 33%.
- HLE / GPQA / CritPt / AA Intelligence Index: no verified public score found in launch coverage.

Coding:

- DeepSWE v1.1: **75.2%** — see agent section; field-best published at launch date.
- Terminal-Bench 2.1 / 4.0: no verified per-effort score found for 6.1 Sol in launch coverage.
- SWE-bench Verified / LiveCodeBench / SciCode / SWE-Atlas: no verified public score found.

Long context:

- Context 1,050,000 / 128K out; long-context surcharge >272K (2x input). No MRCR/RULER score published — no long-context retrieval score found.

Safety (OpenAI Sept 2026 evals):

- Adversarial warning rate: **23.5%** (down from 64.4% for GPT-6 Sol).

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 91/100.** OSWorld 71.4% within 2.1 pts of Astra at ~1/7 cost, AutomationBench 36.1% (Opus 5.5 42.5 leads), GDP.pdf 32% beats Opus 5.5 at every effort; capped by absent GDPval/Tau3/TB-4.0 numbers and Opus 5.5/Astra still leading at max effort on open-ended workflows.
- **Reasoning: 87/100.** TBS 57.0% max is near-frontier (Astra 68.1, Opus 5.5 63.3) at <25% of their cost; factual error 4.1–4.6% close to Astra's 3.9%; capped by the 11-pt TBS gap to Astra and missing GPQA/HLE/Index confirmations.
- **Context window: 100/100.** 1,050,000 tokens / 128K output — full 1M+ tier; caveat noted: >272K prompts pay 2x input surcharge (a pricing cliff, not a capability limit); no retrieval score published.
- **Multimodal: 65/100.** Text + image input, text out (+image = 60–70 band); no audio/video/PDF-input verified; GDP.pdf strength is document reasoning, not native PDF modality.
- **Coding: 96/100.** DeepSWE v1.1 75.2% — the best published score at launch (Astra 74.1, Muse 1.3 75.4 comparable) at $0.65/task; effort curve peaks at high; capped by missing SWE-bench Verified/Terminal-Bench numbers for this model.
- **Cost efficiency: 93/100.** $2/$10 with a 5% cached-input rate ($0.10) and 50% batch — strongest caching economics in the GPT-6 family; per-task costs ($0.65 DeepSWE, $1.27 OSWorld) are 1/7th of Astra; docked slightly for long-context 2x surcharge and fast-mode 2x.
- **Overall Score: 88/100.** (91 + 87 + 100 + 65 + 96) / 5 = 87.8 → 88. Best-fit: the mid-tier default for agentic coding and professional automation where Astra-level peaks aren't worth 5–7x the per-task cost; escalate to Astra/Fable for hardest science and max-effort workflows.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (OpenAI launch data via AlphaCorp full-table article, ARMES docs, OpenAI model documentation references); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.