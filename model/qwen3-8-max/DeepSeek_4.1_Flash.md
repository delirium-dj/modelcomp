# Qwen3.8-Max — findings by DeepSeek 4.1 Flash

- Source: Alibaba Cloud (Qwen team) / Qwen3.8-Max (`qwen3.8-max-0902`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via Alibaba's Qwen3.8 launch and frontier comparison
> tables).

## Model card

- **Name:** Qwen3.8-Max (dated checkpoint `qwen3.8-max-0902`)
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter sparse MoE (roughly 95B active per token), previewed at the World AI Conference in Shanghai on 2026-07-19 and generally available from 2026-08-03. It is Alibaba's direct answer to OpenAI and Anthropic frontier models, competing on reasoning benchmarks and a 1M-token multimodal window while undercutting them on a single flat price — but it still ships without a published safety or training model card.
- **Provider / access:** Alibaba Cloud Model Studio (hosted multimodal API, proprietary). A separate open-weight checkpoint appeared on Hugging Face on 2026-08-13 under a restricted custom license — text-only with a smaller context than the hosted API, so it is not a drop-in replacement.
- **Release / knowledge:** Preview 2026-07-19; GA 2026-08-03. Knowledge cutoff not published.
- **IDs:** `qwen3.8-max-0902` (dated checkpoint; `qwen3.8-max` family id). Not tracked on OpenCode Zen.
- **Context window:** 1,000,000 tokens — up to 991,800 input tokens in non-thinking mode and 983,610 in thinking mode — plus 131,072 output tokens. Verified from Alibaba's page as compiled by HokAI (checked 2026-09-14).
- **Modalities:** text, image and video input with text output; reasoning yes (thinking/non-thinking modes); tool calls and structured output yes; no audio input.
- **Pricing (as of 2026-09-18):** a single flat rate across the whole context — **$2.00 / 1M in and $6.00 / 1M out**, with no tiered step-up for long inputs (AA blended price lists $1.18 / 1M). New Model Studio activations get a one-time 1M-token free quota in the Singapore region; there is no permanent free tier.
- **Architecture:** sparse Mixture-of-Experts, 2.4T total parameters with ~95B active per token, built on the Qwen3.5 architecture with hybrid attention. Hosted API remains closed; the open-weight checkpoint has a different modality/context profile.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (independent) — ahead of both Claude Opus 4.8 and Claude Fable 5 (84.6 each), behind GPT-5.6 Sol's 88.8%
- IFBench (instruction following): **82.8%** — ahead of GPT-5.6 Sol's 72.7%
- LMArena multimodal rank: **#2 globally** on blind human-preference multimodal tasks, behind only Claude Fable 5
- GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas, Tau3-Banking / Tau2-Bench, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (independent; ranked 11th of 44 tracked models)
- HLE: **43.6%** — behind Claude Fable 5's 53.3%
- PaperBench: **93.0** — ahead of GPT-5.6 Sol (90.5), Claude Fable 5 (88.8) and Claude Opus 4.8 (80.3)
- MMLU-Pro / CritPt / LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index: **40** — well below the frontier cohort (Claude Opus 5 61, GPT-5.6 Sol 61, Fable 5.1 66)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **67.7%** (independent) — behind Claude Fable 5's 80.0%
- Terminal-Bench 2.1: **86.6%** (above) — the strongest coding-adjacent result
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Output speed: **41 tok/s** median (rank 33 of 36 tracked models) — a significant throughput weakness for agent loops

Long context:

- Alibaba publishes the 991,800/983,610 input-token ceilings but no MRCR/RULER/GraphWalks recall value; the ~1M window is vendor-claimed.

### Normalized scores (1–100)

- **Tool use: 85/100.** 86.6% on Terminal-Bench 2.1 (third in the field as measured here), 82.8% IFBench and a #2 multimodal arena rank make it a capable agent; capped by the absence of Tau3/GDPval/Claw results and 41 tok/s throughput.
- **Reasoning: 84/100.** GPQA Diamond 92.6% and PaperBench 93.0 are strong, but HLE 43.6% and an AA Intelligence Index of 40 show a clear gap to the frontier on hard reasoning.
- **Context window: 95/100.** A full 1M-token window with no tiered price step and 131K output is excellent value; no recall-at-depth benchmark keeps it below the maximum.
- **Multimodal: 85/100.** Text, image and video input with a #2 global multimodal arena placement; no audio input and text-only output.
- **Coding: 80/100.** SWE-bench Pro 67.7% trails the Fable/Opus tier, though Terminal-Bench 2.1 at 86.6% is near the top; missing LiveCodeBench/DeepSWE numbers cap the score.
- **Cost efficiency: 85/100.** A flat $2/$6 per 1M across a 1M window undercuts most frontier rivals, and a one-time 1M-token free quota helps evaluation; there is no permanent free tier, and 41 tok/s raises per-task wall-clock cost.
- **Overall Score: 86/100.** (85 + 84 + 95 + 85 + 80 + 85) / 6 = 85.7 → **86**. Best fit: large-context multimodal agent and document workloads that need frontier-adjacent tool scores at roughly a fifth of frontier per-token prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Alibaba Cloud model page and independent/AA figures as compiled by HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.