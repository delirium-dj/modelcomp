# Qwen3.8 Max (0902) — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Alibaba / Qwen 3.8 Max (`opencode/qwen-3.8-max`)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max (0902) — alias `Qwen3.8-Max`, `Qwen3.8-2.4T-A95B` (API name)
- **Short description:** Alibaba's flagship proprietary MoE, released 2026-08-03 (preview 07-19), 2.4T total / 95B active params, for coding, professional work and long-horizon agentics. Qwen3.8-27B (Apache 2.0) is a separate open sibling; the open `Qwen3.8-2.4T-A95B` checkpoint uses a custom `qwen3.8-max` license.
- **Provider / access:** Alibaba Cloud Model Studio (OpenCode Zen: `opencode/qwen-3.8-max`, Chat Completions + Responses, reasoning default on). Open weights on HF `Qwen/Qwen3.8-2.4T-A95B` / ModelScope (custom license); Qwen Cloud hosts a 1M-context variant.
- **Release / knowledge:** 2026-08-03 (preview 07-19; card 08-08). Knowledge cutoff: not disclosed.
- **IDs:** `opencode/qwen-3.8-max`; weights `Qwen/Qwen3.8-2.4T-A95B`. No free tier.
- **Context window:** 1,000,000 tokens total / 128K max output (AA 984K). Open-weight checkpoint native 262,144 tokens.
- **Modalities:** Text + image + video input; text output; reasoning default on (tunable); tool calls supported.
- **Pricing (2026-10-31):** $2.00 per 1M input, $6.00 per 1M output, $0.25 cache — paid only.
- **Architecture:** Sparse MoE, 2.4T total / ~95B active (~4%). Open release under custom `qwen3.8-max` license; 27B dense Apache-2.0 sibling.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 2.1: **88.76%** (independent AA 0902 run 09-29 — strongest still-ranked independent result here). Vendor claim 86.6% (RITS).
- GDPval-AA: **1,739 Elo** (independent, RITS) — ahead of GPT-5.6 Sol Max (1,730), Kimi K3 (1,685); behind Claude Opus 5 (1,852).
- OSWorld-Verified: **86.1** (vendor-reported; independent AA runs pending).
- Agentic Index (AA v4.1): **58** (independent, revised up from 53).

**Reasoning / knowledge:**
- GPQA Diamond: **92.6%** (vendor) vs **93.69%** (independent Vals.ai) — both retired/saturated; independent rank #6/138.
- HLE (no tools): ranked (behind Step 5 −3.4, Kimi K3 −3.8, G3.1 Pro −3.9, G3.8 Flash −4.7). HLE with tools: vendor-reported, no number.
- AA Intelligence Index: **56 → 58** on v4.1 (initial 53 withdrawn). v5.0 composite: **34** (#35/58, below average — different composite, not comparable).
- MMLU Pro: **88.60%**; MMMU Pro: **88.03%**; IOI **68.89%** (independent Vals.ai).

**Coding:**
- SWE-bench Verified: **85.60%** (independent Vals.ai; 17/88; retired/saturated).
- SWE-bench Pro: **67.7** (vendor-reported, RITS).
- LiveCodeBench: **87.85%** (independent Vals.ai; retired/saturated).
- DeepSWE: long-horizon; position vs Kimi K3/G3.8 Flash noise ±9.5.

**Long context / speed / cost / multimodal:**
- 1M total / 128K out (checkpoint native 262K). Cost/task **$1.14** (AA); output **40.1 t/s** (AA, slow); TTFT 3.10s.
- Multimodal: text + image + video in, text out (vendor-confirmed).

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 88.76% (independent, ranked; frontier bar ~88%+ → 90–100); GDPval-AA 1,739 Elo mid-upper. Capped by verbosity and slow speed.
- **Reasoning: 90/100.** GPQA Diamond 92.6–93.69% (frontier bar GPQA 90%+ → 90–100). HLE not independently quantified.
- **Context window: 96/100.** 1M hosted / 984K measured — ≥1M tier (95–100; 100 only with ≥98% retrieval at 512K+). Checkpoint-native 262K is a local-deploy caveat.
- **Multimodal: 82/100.** Text+image+video in → +video in tier (75–90).
- **Coding: 90/100.** SWE-bench Verified 85.6%, LiveCodeBench 87.85%, TB2.1 88.76% (independent, frontier-class). Vendor SWE-bench Pro 67.7 inconsistent — excluded.
- **Cost efficiency: 84/100.** $2.00/$6.00 sits between $1.25/$4.25 (88) and $3/$15 (60).
- **Overall Score: 89/100.** (89+90+96+82+90)/5 = 89.4 → half-up 89. Best fit: frontier agentic model for long-horizon coding/professional workflows; priced steeply for a "max".

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Qwen3.8 Max (0902)](https://artificialanalysis.ai/models/qwen3-8-max)
  - [The Model Gap — Qwen3.8-Max benchmarks & pricing](https://themodelgap.com/models/qwen3-8-max)
  - [RITS/NYU Shanghai — agentic benchmarks](https://rits.shanghai.nyu.edu/ai/qwen3-8-max-draws-level-with-the-frontier-on-agentic-benchmarks/)
  - [Hugging Face Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Hugging Face Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Alibaba Cloud LinkedIn announcement](https://www.linkedin.com/posts/alibaba-cloud-computing-company_buildwithqwen-alibabacloud-qwencloud-activity-7489885078244900864-UVO5)
  - [Vals.ai — Qwen 3.8 Max benchmarks](https://vals-ai.com/models/alibaba_qwen3.8-max)
  - [The Decoder — Qwen 3.8 open weights](https://the-decoder.com/alibabas-qwen-team-releases-qwen-3-8-models-with-open-weights-under-the-apache-2-0-license/)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; vendor vs independent conflicts noted.
