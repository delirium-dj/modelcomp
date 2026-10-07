# Qwen 3.5 397b — findings by Big Pickle

- Source: Alibaba / Qwen (`qwen3.5-397b-a17b`, open weights `Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397b (canonical checkpoint `Qwen3.5-397B-A17B`)
- **Short description:** Alibaba's first Qwen3.5-series flagship — a natively multimodal
  early-fusion MoE (397B total / 17B active) that unifies what were separate Qwen3 text and
  Qwen3-VL vision models into one checkpoint, with strong agentic and coding numbers that land
  near the Gemini-3-Pro / Claude-Opus-4.5 class on most rows.
- **Provider / access:** open weights (Apache 2.0) on Hugging Face / ModelScope; Alibaba Cloud
  Model Studio API as `qwen3.5-397b-a17b`; OpenRouter `qwen/qwen3.5-397b-a17b`; hosts incl.
  DeepInfra (FP8), Qubrid, Kilo, Together. Hosted counterpart with production features is
  **Qwen3.5-Plus** (1M context by default). **Not served on OpenCode Zen** as of 2026-10-07
  (Zen lists only `qwen3.5-plus` from this generation).
- **Release / knowledge:** 2026-02-16 (Qwen blog 2026-02-13/15); first Qwen3.5 open-weight.
  Knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF), `qwen3.5-397b-a17b` (Model Studio), `qwen/qwen3.5-397b-a17b`
  (OpenRouter).
- **Context window:** 262,144 (262K) native, extensible to 1M via YaRN; hosted Qwen3.5-Plus is
  1M by default. Max completion ~235,929 tokens on OpenRouter-class hosts.
- **Modalities:** text, image, video in; text out; thinking mode on by default (switchable);
  tool/function calling; structured outputs. 201 languages.
- **Pricing (as of 2026-10-07):** Alibaba Model Studio ≤128K **$0.172/$1.032** per 1M in/out,
  128K–256K **$0.43/$2.58** (International scope $0.60/$3.60); OpenRouter **$0.39/$2.34**;
  DeepInfra FP8 $0.29/$2.90 (blended $0.94). No free tier found for this checkpoint.
- **Architecture:** 397B total / 17B active sparse MoE (512 experts, 10 routed + 1 shared),
  hybrid Gated-Delta-Network linear attention + MoE, native early-fusion vision-language.
  Weights open, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench: **86.7%** (official setup; beats Gemini-3 Pro 85.4, below Claude Opus 4.5 91.6)
- BFCL-V4: **72.9%**; Tool Decathlon: **38.3%**; DeepPlanning: **34.3%** (official Qwen blog)
- BrowseComp: **78.6%** (DataCamp write-up of official table; 2nd behind Claude Opus 4.6 84.0)
- Terminal Bench 2: **52.5%** (official; vs GPT-5.3 Codex 77.3, Gemini-3 Pro 54.2)
- WildClawBench: **34.5% overall** (HF evaluation card)
- VITA-Bench: **49.7%**; ERQA (embodied): **67.5%** (DataCamp)
- GDPval-AA / Claw-Eval / MCPMark: no verified public score found (MCPMark referenced in passing
  on HF without a score for this model)

Reasoning / knowledge:

- GPQA (Diamond): **88.4%**; HLE: **28.7%**; HLE-Verified: **37.6%** (official table)
- MMLU-Pro: **87.8%**; MMLU-Redux: **94.9%**; SuperGPQA: **70.4%**; C-Eval: **93.0%**
- AIME26: **91.3%**; HMMT Feb-25: **94.8%**, HMMT Nov-25: **92.7%**; IMOAnswerBench: **80.9%**
- AA-LCR: **68.7%**; LongBench v2: **63.2%**
- Artificial Analysis Intelligence Index: **26\*** — explicitly marked by AA as an *estimate,
  independent evaluation forthcoming* (for scale: GPT-5 high = 27 on the same page); recorded
  with that caveat, not treated as verified.
- IF: IFEval 92.6, IFBench 76.5, MultiChallenge 67.6; WMT24++ 78.9, MAXIFE 88.2 (official)

Coding:

- SWE-bench Verified: **76.4%** (official + HF leaderboard; one table copy shows 76.2)
- SWE-bench Multilingual: **69.3%**; SecCodeBench: **68.3%**
- LiveCodeBench v6: **83.6%**; Terminal Bench 2: **52.5%**
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Multimodal / document:

- MMMU-Pro: **79.0%**; Video-MME: **87.5%**; OmniDocBench v1.5: **90.8%**
  (all DataCamp coverage of the official Qwen table)

Long context:

- AA-LCR 68.7% and LongBench v2 63.2% at 262K native — real measurements, far from
  near-perfect recall; 1M (YaRN / Plus-hosted) has no published retrieval score.

### Normalized scores (1–100)

- **Tool use: 74/100.** TAU2-Bench 86.7% (beats Gemini-3 Pro), BFCL-V4 72.9% and BrowseComp
  78.6% are strong; Terminal Bench 2 52.5% is solidly mid, and Tool Decathlon 38.3%,
  DeepPlanning 34.3% and WildClaw 34.5% cap the band — no TB2.1 or GDPval number to push higher.
- **Reasoning: 84/100.** GPQA 88.4% just under the 90 frontier line, AIME26 91.3% / HMMT 94.8%
  near-top, MMLU-Pro 87.8% strong; capped by HLE 28.7% (37.6 verified) vs the 40 frontier bar and
  AA's estimated Index of 26.
- **Context window: 92/100.** 262,144 native puts it in the ≥256K tier (88–95); measured
  long-context quality (AA-LCR 68.7%) keeps it below the ≥1M tier and the 100-recall bar.
- **Multimodal: 90/100.** Text/image/video in via native early fusion (audio not listed) with
  Video-MME 87.5%, MMMU-Pro 79.0% and OmniDocBench 90.8% — top of the image/video-in band.
- **Coding: 84/100.** SWE-bench Verified 76.4% and LiveCodeBench v6 83.6% are frontier-adjacent,
  SecCodeBench 68.3% solid; Terminal Bench 2 52.5% and no DeepSWE/SciCode row stop it at 84.
- **Cost efficiency: 90/100.** $0.172–$0.43 in / $1.03–$2.58 out (Model Studio tiers),
  $0.39/$2.34 on OpenRouter — far below the $1.25/$4.25 reference, with Apache-2.0 weights as
  self-host fallback; no free managed tier found.
- **Overall Score: 84.8/100.** (74+84+92+90+84)/5 = 84.8 — best-fit: an open-weight
  near-frontier generalist whose agentic-coding and vision numbers sit in the Gemini-3-Pro /
  Opus-4.5 class, traded against a 262K (not 1M) native window.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-07
- Method: fresh public web research (official Qwen3.5 launch blog and Hugging Face model card,
  Alibaba Cloud Model Studio pricing docs, DataCamp official-table write-up, Artificial Analysis
  comparison page, OpenRouter/Kilo/DeepInfra provider metadata). Scores are normalized 1–100
  interpretations, not official vendor scores; the AA Index value is provider-labeled an estimate.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6.md`, using the same headings.
