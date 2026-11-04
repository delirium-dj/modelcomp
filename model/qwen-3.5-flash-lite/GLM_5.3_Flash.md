# Qwen 3.5 Flash Lite — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen3.5-flash` hosted tier — corresponds to Qwen3.5-35B-A3B)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's lightest hosted Qwen3.5 Flash API tier for high-volume, latency-sensitive multimodal work. The official Qwen3.5-35B-A3B model card states that "Qwen3.5-Flash is the hosted version corresponding to Qwen3.5-35B-A3B" with production features such as 1M context by default — so this entry is scored on the hosted Lite/Flash tier whose open-weight counterpart is Qwen3.5-35B-A3B (35B total / 3B active MoE).
- **Provider / access:** Alibaba Cloud Model Studio, model ID `qwen3.5-flash` (Chat Completions-compatible, thinking + non-thinking modes); resold via OpenRouter as `qwen/qwen3.5-flash-02-23`. No separate `-lite` model ID is listed on the Nov 2026 Alibaba pricing page — the Lite identification rests on the official hosted↔open mapping above.
- **Release / knowledge:** open-weight counterpart Qwen3.5-35B-A3B released 2026-02-24 (series launch 2026-02-16); hosted snapshot `qwen3.5-flash-2026-02-23`. Knowledge cutoff ~January 2025 (third-party tracker).
- **IDs:** `dashscope/qwen3.5-flash` (snapshot `qwen3.5-flash-2026-02-23`); `qwen/qwen3.5-flash-02-23` on OpenRouter. Open weights of the counterpart: `Qwen/Qwen3.5-35B-A3B`.
- **Context window:** 1,000,000 total on the hosted tier (991,808 max input; 65,536 max output; thinking mode 983,616 in / 65,536 out; max chain-of-thought 81,920 — per Model Studio docs). Open-weight counterpart: 262,144 native, extensible to ~1,010,000 via YaRN (verified on the HF model card).
- **Modalities:** text, image, video in (unified vision-language, early fusion); text out. Reasoning: yes (hybrid thinking). Tool calls: yes (built-in tools on hosted tier). JSON/structured output supported.
- **Pricing (as of 2026-11-03):** international (Singapore) flat $0.10 in / $0.40 out per 1M tokens (0–1M input); China (Beijing) tiered $0.029/$0.287 (≤128K) → $0.115/$1.147 (≤256K) → $0.172/$1.72 (≤1M). Batch = 50% discount; explicit cache write 125%, cache read 10%. OpenRouter $0.065/$0.26. Free quota (1M tokens) Singapore-only, 90 days.
- **Architecture:** 35B total / 3B active sparse MoE; 40 layers; hybrid Gated DeltaNet (linear attention) : Gated Attention 3:1; 256 experts (8 routed + 1 shared); hidden dim 2048; vocab 248,320; multi-token prediction; open weights (Apache 2.0 family license).

### Raw benchmarks found

Official Qwen3.5-35B-A3B model card (hosted-tier counterpart) unless noted:

Agent / tool use:

- Terminal-Bench 2: **40.5%** (official HF card; conflict: third-party OpenEvals-style run of `qwen3.5-flash-02-23` reports Terminal-Bench 2.0 24.7% — different harness build)
- TAU2-Bench: **81.2%** (official; best of the Qwen3.5 medium series)
- BFCL-V4: **67.3%** (official)
- OSWorld-Verified: **54.5%** (official)
- AndroidWorld: **71.1%** (official)
- VITA-Bench: **31.9%** / DeepPlanning: **22.8** (official)
- GDPval-AA: no verified public score found (closest proxy: none)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (official; 85.35% on the HF evaluation leaderboard — minor variance)
- MMLU-Pro: **85.3%** / MMLU-Redux: **93.3%** (official)
- HLE (w/ CoT): **22.4%**; HLE (w/ tool): **47.4%** (official)
- HMMT Feb 25: **89.0%** / HMMT Nov 25: **89.2%** (official)
- AA-LCR: **58.5%** / LongBench v2: **59.0%** (official)
- Conflict note: BenchLM "Vals" lanes give GPQA Diamond 82.8% and MMLU-Pro 84.1% for the Qwen3.5 Flash API tier — within ~1.5 pts of official, treated as harness noise.

Coding:

- SWE-bench Verified: **69.2%** (official HF card + evaluation leaderboard; conflict: independent Vals run reports 64.4% — harness difference, official preferred)
- LiveCodeBench v6: **74.6%** (official; conflict: BenchmarkList's own LCB implementation reports 83.3%)
- CodeForces: **2028** (official, own query set)
- OJBench: **36.0%** / FullStackBench en: **58.1%** (official)
- SciCode: **29.3%** (third-party comparison page)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 58.5% / LongBench v2 59.0% at extended-window settings (official); no MRCR/RULER value at 512K+ reported — 1M context is architectural (YaRN), retrieval quality at extreme lengths unproven.

### Normalized scores (1–100)

- **Tool use: 74/100.** TAU2-Bench 81.2 and AndroidWorld 71.1 are exceptional for the class, BFCL-V4 67.3 solid, but Terminal-Bench 2 at 40.5% (24.7% on an independent harness) sits below the 45–60% mid band and caps the score.
- **Reasoning: 80/100.** GPQA Diamond 84.2 and MMLU-Pro 85.3 sit at the top of the mid band; HLE 22.4 (w/CoT) is far below the 40% frontier ref and is the ceiling.
- **Context window: 93/100.** 1M total on the hosted tier (≥1M band = 95–100) nudged down for weak measured retrieval (AA-LCR 58.5, LongBench v2 59.0, no 512K+ MRCR verification); 65,536 output is adequate.
- **Multimodal: 82/100.** Native vision-language with image + video input (early fusion), MMMU 81.4 / VideoMME 86.6; text-only output and no audio keep it under the 90 band.
- **Coding: 72/100.** SWE-bench Verified 69.2 and LiveCodeBench v6 74.6 are solid mid-band; SciCode 29.3 and OJBench 36.0 cap it; trails its dense 27B sibling (SWE-V 72.4).
- **Cost efficiency: 96/100.** $0.10/$0.40 flat international (~$0.25 blended 1:1) matches the ~$0.10/$0.20 → 97–99 reference band; batch at 50% and cache reads at 10% add headroom.
- **Overall Score: 80/100.** (74 + 80 + 93 + 82 + 72) / 5 = 80.2 → 80. Best fit: ultra-cheap high-volume multimodal processing and lightweight agents — escalate to a bigger tier for hard SWE or frontier-HLE reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-03
- Method: public internet research (5 web searches: vendor model card, vendor pricing/docs, two independent leaderboards, one independent review); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-35B-A3B — official model card (benchmarks + hosted-tier mapping)](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Alibaba Cloud Model Studio — model pricing (qwen3.5-flash tiers)](https://www.alibabacloud.com/help/en/model-studio/model-pricing)
  - [Alibaba Cloud Model Studio — qwen3.5-flash model docs (context limits)](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-5-flash)
  - [BenchmarkList — Qwen3.5-Flash independent evals (conflict source)](https://benchmarklist.com/models/qwen-qwen3.5-flash-02-23/)
  - [NYU RITS — Qwen 3.5 Medium Series review](https://rits.shanghai.nyu.edu/ai/qwen-3-5-medium-series-frontier-ai-that-fits-on-your-gpu)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
