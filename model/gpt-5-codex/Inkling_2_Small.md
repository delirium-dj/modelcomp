# GPT-5 Codex — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex (hyphenated vendor style)
- **Short description:** OpenAI's GPT-5 derivative optimized for agentic coding — RL-trained on real-world coding tasks to mirror human PR style, run tests iteratively, and operate autonomously for hours inside Codex-like environments. Now superseded (API status: shut down); research value is as a tracked baseline. Not a variant — a distinct RL-tuned checkpoint family member of GPT-5.
- **Provider / access:** OpenAI API, Responses API only (Chat Completions not supported); also distributed via Codex (CLI, IDE extension, web). Status: **Shut down** per the OpenAI model page (checked 2026-11-10).
- **Release / knowledge:** Announced September 15, 2025 (Vals AI lists release date Sep 23, 2025); knowledge cutoff September 30, 2024; GPT-5-Codex system card addendum published Sep 2025.
- **IDs:** `gpt-5-codex` (OpenAI; snapshot alias, default snapshot `gpt-5-codex`)
- **Context window:** 400,000 total; max input 272,000; max output 128,000 — per the OpenAI API model page (verified 2026-11-10)
- **Modalities:** Text, image in; text out; reasoning token support; function calling, web search, structured outputs, prompt caching; JSON mode via structured outputs
- **Pricing (as of 2026-11-10):** $1.25 / $10.00 per 1M input/output; cached input $0.125 per 1M; Responses API only. Paid, no free tier for API use (free access via ChatGPT/Codex plans only).
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench (Vals AI, harness: Vals, Sep 2025): **58.8% — 1st place** at evaluation time, ~10 points over the previous #1 GPT-5; lower cost and latency than the other top three (val-ai)
- SWE-bench Verified (Vals AI): **1st place**, narrowly outperforming GPT-5 (2nd) by under a percentage point; OpenAI-reported figure **74.5%** (max reasoning, per airank.dev summary of the launch)
- GDPval / OSWorld: no verified public score found for this exact model
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- IOI v1 (Vals AI, Sept 2025): **9.8%** — low overall accuracy; first model to receive full credit on a single IOI v1 question (Vals)

Coding:

- SWE-bench Verified: **74.5%** (OpenAI-reported, max reasoning, per airank.dev; Vals AI ranks #1)
- LiveCodeBench (Vals AI): **84.72% ±1.0** — 2nd place behind GPT-5 Mini (Vals)
- SWE-rebench: **44.0%** (per airank.dev)
- Terminal-Bench 2.0: **43.4%** (per airank.dev)

Long context:

- MRCR / RULER / GraphWalks: no verified public long-context retrieval score found; 400k window documented by vendor

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench #1 (58.8%) and near-#1 SWE-bench Verified show strong agentic tool execution in terminal environments; no public Tau-bench/GDPval figure for this exact model caps higher confidence.
- **Reasoning: 72/100.** GPT-5-class reasoning with September 2024 cutoff; IOI v1 9.8% and absent GPQA/HLE data keep it below the frontier reasoning tier; no AA Index entry.
- **Context window: 76/100.** 400k window / 272k max input / 128k max output — strong but short of the 1M-class; vendor-documented, unverified by independent long-context retrieval benchmarks.
- **Multimodal: 62/100.** Text + image input, text out; no video/audio; no verified multimodal benchmark; capped on coverage breadth.
- **Coding: 82/100.** Best-in-class at launch for agentic coding: SWE-bench Verified 74.5% (#1 per Vals), LCB 84.72%, Terminal-Bench 58.8% #1 — capped below top decile by the age of the checkpoint (superseded by GPT-5.2/5.3-Codex) and by the low IOI result.
- **Cost efficiency: 66/100.** $1.25/$10 with $0.125 cached input — mid-pack paid pricing; no free tier; Codex subscription paths exist outside the API price card.
- **Overall Score: 74/100.** Mean of (78 + 72 + 76 + 62 + 82) / 5 = 370/5 = 74.0. A strong agentic-coding specialist, now shut down and succeeded — best for historical comparison and pinned legacy workflows, not new deployments.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (vendor docs, independent evaluation reports); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: legacy agentic coding baselines; new work should target GPT-5.3-Codex-class successors.
- Reference URLs:
  - [OpenAI API — GPT-5-Codex model page (status: shut down; pricing, context limits)](https://developers.openai.com/api/docs/models/gpt-5-codex)
  - [OpenAI — GPT-5-Codex system card addendum (PDF)](https://cdn.openai.com/pdf/97cc5669-7a25-4e63-b15f-5fd5bdc4d149/gpt-5-codex-system-card.pdf)
  - [Vals AI — GPT 5 Codex benchmarks, cost and capabilities](https://www.vals.ai/models/openai_gpt-5-codex)
  - [airank.dev — GPT-5 Codex benchmark summary](https://airank.dev/models/gpt-5-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
