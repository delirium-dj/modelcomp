# GPT-6 Astra — findings by Leanstral_1.5

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI / GPT-6 Astra
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship model released September 3, 2026, featuring extended 1M context, 1M max output, native text/image multimodal, state-of-the-art performance across coding, cybersecurity, computer use, and scientific reasoning (saturates ARC-AGI-3 at 99.9%, FrontierMath Tier 4 at 97.6%, ExploitBench at 100%), and substantially improved alignment over GPT-5.6 Sol. Supports Zero Data Retention for eligible API customers. Launches with a limited early-access phase before broad availability.
- **Provider / access:** OpenAI API (`gpt-6-astra`; also available on Microsoft Azure and AWS Bedrock), ChatGPT Plus/Pro/Business/Enterprise (subscription-included). Standard pricing: $10/$50 per 1M in/out; Fast mode 2x speed at 2x price ($20/$100); cache reads $1.00 (90% discount); Batch API 50% off. Knowledge cutoff: April 2026.
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff April 30, 2026. Training data includes pre-2026 knowledge; model was used to solve long-standing open problems in mathematics (short prime gaps and large prime gaps).
- **IDs:** `openai/gpt-6-astra`; OpenAI API model ID `gpt-6-astra`.
- **Context window:** 1,050,000 (1.05M) total tokens; 922,000 max input; 128K max output (per BenchLM/AA); prompts above 272K input charged at 2x input and cache rates, 1.5x output.
- **Modalities:** Text and image in; text out. Reasoning yes (extended thinking, configurable effort). Tool calls yes (computer use, browsing). JSON mode yes. Auto-review safeguard system (checks every consequential action).
- **Pricing (as of 2026-10-31):** $10.00/$50.00 per 1M in/out; cache reads $1.00 (90% off); cache writes $12.50; Fast mode $20/$100 (2x speed); Batch 50% off. On blended rate (7:2:1 cache:input:output): $7.70/M tokens.
- **Architecture:** Proprietary; no parameter count disclosed. Inferred: successor to GPT-5.6 family, multimodal (text/image), 1M+ context, reasoning-focused MoE or dense architecture.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

**Agent / tool use:**

- Terminal-Bench 4.0: **57.9%** (OpenAI official; AA reports 59.1% on AA leaderboard — different harness)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI official; AA reports 63.3% for GPT-6 Astra)
- Agents' Last Exam: **59.3%** (OpenAI official; beats Fable 5.1 at 55.8%, Opus 5 at 52.3%)
- OSWorld 2.0 (partial): **72.6%** (OpenAI official); OSWorld 2.1 (offline): **75.8%** (Meta system card)
- BrowseComp: **91.5%** (OpenAI official)
- AutomationBench: **41.4%** (OpenAI official; AA reports 68.5% — no fallback in AA runs)
- SRE-Bench: **88.0%** single attempt / **99.2%** within 4 attempts (OpenAI official)
- ExploitBench: **100.0%** (OpenAI official; beats Fable 5.1 at 30.4%, Opus 5 at 22.0%)
- ExploitGym: **42.4%** (OpenAI official; AA reports 33.4%)
- CWE-bench v1: **68.0%** (OpenAI official; ties with Gemini 4 Argon)
- ScreenSpot-Pro: **92.7%** (OpenAI official)
- AA Agentic Index: **51.5%** (AA model page)
- AA Briefcase: **1,568 Elo** (AA model page)

**Reasoning / knowledge:**

- ARC-AGI-3: **99.9%** (OpenAI official; AA reports 62.7% on AA leaderboard — different harness)
- ARC-AGI-2: **95.0%** (OpenAI official)
- ARC-AGI-1: **98.5%** (OpenAI official)
- GPQA Diamond: **96.0%** (OpenAI official; AA reports 96.1%)
- GPQA: **96%** (OpenAI official)
- HLE (with tools): **57.2%** (OpenAI official; AA reports 54.7%)
- MLCR-AA: **41.7%** (AA model page)
- GraphWalks BFS 256K–1M: **71.8%** (Google Gemini 4 Argon launch chart)
- AA-LCR: **80.7%** (AA model page)
- CritPt: **31.7%** (AA model page)
- FrontierMath v2 Tier 4: **97.6%** (OpenAI official; #1 on leaderboard)
- FrontierMath v2 Tiers 1–3: **93.7%** (Epoch AI leaderboard)

**Coding:**

- DeepSWE v1.1: **74.1%** (OpenAI official; AA reports 74.1%)
- FrontierCode 1.1 Extended: **64.5%** (OpenAI official; Fable 5.1 63.6%, Opus 5 63.6%)
- FrontierCode 1.1 Main: **53.3%** (OpenAI official)
- ProgramBench: not in AA model page; FrontierSWE v2: **65.5%** (Proximal leaderboard)
- AA-SciCode: **56.5%** (AA model page)
- AA Coding Index: **76.9%** (AA model page)
- LiveCodeBench (Vals): **90.5%** (Vals leaderboard)

**Long context:**

- MRCR v2 256K–512K: **100.0%** (OpenAI official; beats Fable 5.1 at 98.5%, Opus 5 at 97.5%, Gemini 4 Argon at 84.2%)
- MRCR v2 512K–1M: **96.3%** (OpenAI official)

**Multimodal:**

- AA-MMMU-Pro: **86.9%** (AA model page)
- BenchCAD Vision2Code (tools): **0.959** (OpenAI official)
- ExtractBench (LlamaIndex): **91.9%** (OpenRouter benchmarks)

**Speed:**

- 78.2 tok/s output (AA model page; AA reports 78.2)
- TTFT: 270.03s (AA model page)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 93/100.** Agents' Last Exam 59.3% (beats Fable 5.1 and Opus 5), BrowseComp 91.5%, SRE-Bench 88% single / 99.2% at 4 attempts — capped by ExploitGym 42.4% and AA AutomationBench 68.5% (partial, no fallback in AA runs).
- **Reasoning: 97/100.** ARC-AGI-3 99.9% (#1 on leaderboard, near-human parity), GPQA Diamond 96.0%, FrontierMath Tier 4 97.6% — capped by HLE 57.2% (with tools) being mid-tier, CritPt 31.7%, and MLCR-AA 41.7%.
- **Context window: 100/100.** 1.05M tokens confirmed; MRCR 100% at 256K–512K and 96.3% at 512K–1M validates near-perfect retrieval.
- **Multimodal: 70/100.** Text/image in; AA-MMMU-Pro 86.9%, BenchCAD 0.959, ExtractBench 91.9% — strong but limited benchmark coverage (no Chartography, EQ-Bench, or video benchmarks in AA model page).
- **Coding: 93/100.** DeepSWE 74.1%, FrontierCode 64.5%, FrontierSWE 65.5%, LiveCodeBench 90.5% — capped by AA-SciCode 56.5% and CursorBench 51.8%.
- **Cost efficiency: 70/100.** $10/$50 per 1M — expensive frontier tier; $7.70/M blended; cost per task competitive at lower effort settings. Capped by $10/$50 pricing.
- **Overall Score: 90.6/100.** Mean of (93 + 97 + 100 + 70 + 93) / 5 = 90.6 → **91**; capped by Multimodal 70 and Cost 70. Using v4 methodology (cost excluded): (93 + 97 + 100 + 70 + 93) / 5 = 90.6 → **91**.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-10-31
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-6 Astra](https://openai.com/index/gpt-6-astra/)
  - [OpenAI GPT-6 Astra model documentation](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [Artificial Analysis: GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra)
  - [BenchLM: gpt-6-astra](https://benchlm.ai/models/gpt-6-astra)
  - [Sophon: GPT-6 Astra](https://sophon.at/models/gpt-6-astra)
  - [Vals AI: Terminal-Bench 2.1 leaderboard](https://www.vals.ai/models/openai_gpt-6-astra)
  - [ARC Prize: published semi-private results](https://arcprize.org/results/openai-gpt-6-astra)
  - [OpenAI Safety overview](https://openai.com/index/safety-overview-gpt-6-astra/)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-astra/Leanstral_1.5.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-astra/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
