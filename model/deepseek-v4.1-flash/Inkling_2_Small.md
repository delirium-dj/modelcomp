# DeepSeek V4.1 Flash — findings by Fledge Alpha

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's Sept 10, 2026 552B MoE multimodal flash model, first of the Causal Encoder-Decoder (CED) family; replaces V4 Pro in the API via routing on 2026-09-14 until V4.1 Pro ships.
- **Provider / access:** DeepSeek API (`deepseek-flash`, `deepseek-v4.1-flash`), OpenRouter (`deepseek/deepseek-v4.1-flash`).
- **Release / knowledge:** 2026-09-10.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash` (HF, MIT license, open weights)
- **Context window:** 1,000,000 tokens.
- **Modalities:** text + native image in; text out; maximum-effort reasoning by default.
- **Pricing (as of 2026-10-02):** Off-peak $0.15/M in, $0.003/M cache-hit in, $0.60/M out; Peak (01–04, 06–10 UTC weekdays) doubles rates.
- **Architecture:** 552B backbone + ~196B Engram memory, CED (20-layer causal encoder + 20-layer decoder), 8B/token prefill, 16B/token decode; CSA2 KV cache at ~890 bytes/token; FP4; MIT open weights; ~409 tok/s end-to-end.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek Minimal harness; Claude Code scaffold 88.0%)
- AutomationBench: **54.8%** (leads Sol 45.8/Opus 5 50.3 on vendor table)
- Agents' Last Exam: **31.8%** (leads peers); HLE w/tools: **63.9%**
- Terminal-Bench 3.0/4.0: **30.0 / 31.2%** — weak vs frontier
- HLE w/tools: 63.9; wide-search class benchmarks vendor-only

Reasoning / knowledge:

- GPQA Diamond: **90.9%**
- HLE (no tools): **36.8%** (39.1% on one split); MathArena Apex: **65.6%**; Codeforces rating **3471**
- MMLU-Pro: not republished for V4.1; SuperGPQA 53.1 (base table)
- AA Intelligence Index: no independent AA run as of launch

Coding:

- DeepSWE v1.1: **74.2%** (mini-SWE harness; 65.6% with Codex; 69.8% Claude Code)
- CyberGym: **88.1%**; SEC-Bench Pro: **62.8%**; NL2Repo-Bench: **64.0%**
- ProgramBench: **20.3%** — weak

Multimodal:

- Chartography w/tools: **78.9%**; BabyVision w/tools: **89.6%**; ZeroBench-main w/tools pass@5: **49.0%**

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 90.6% and AutomationBench 54.8% lead the vendor table; Terminal-Bench 3.0/4.0 regress.
- **Reasoning: 80/100.** GPQA 90.9% and MathArena Apex 65.6% are strong for a flash tier; HLE 36.8% no-tools trails flagships.
- **Context window: 93/100.** 1M-token window with aggressive CSA2 KV-cache compression and FP4 — purpose-built for long-horizon agents.
- **Multimodal: 78/100.** Native image input is new here; Chartography 78.9% and BabyVision 89.6% but no audio/video.
- **Coding: 80/100.** DeepSWE 74.2% (mini-SWE) leads the vendor comparison, CyberGym 88.1%; ProgramBench 20.3% and Terminal-Bench 4.0 31.2% limit it.
- **Cost efficiency: 93/100.** $0.15/$0.60 off-peak with $0.003 cache hits is among the most aggressive flash prices; peak 2x and MIT weights for self-hosting.
- **Overall Score: 83/100.** Mean of the five quality dims; best fit for high-volume deepseek-API agentic coding at flash pricing, with the caveat that newest terminal-bench tiers trail.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (DeepSeek model card/README, arXiv paper 2609.19969, DeepSeek launch notes, independent analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
