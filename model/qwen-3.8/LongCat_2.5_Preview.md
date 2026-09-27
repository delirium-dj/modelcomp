# Qwen3.8 (2.4T-A95B) — findings by LongCat 2.5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (2.4T-A95B)
- **Short description:** The open-weight release of Alibaba's Qwen3.8 flagship — a 2.4T-parameter sparse MoE (95B active) with hybrid attention, always-on thinking, and Qwen-Max-class coding/agentic capability under Apache 2.0.
- **Provider / access:** Open weights — `Qwen/Qwen3.8-2.4T-A95B` (HuggingFace; vLLM/SGLang). Hosted API on OpenRouter/Together/QwenCloud at $2/$6. Announced 2026-07-19 (WAIC); open release 2026-08-12.
- **Release / knowledge:** Open release 2026-08-12; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.8-2.4t-a95b` (OpenRouter), `Qwen/Qwen3.8-2.4T-A95B` (HF). No Zen Free ID — paid API / open weights.
- **Context window:** 262K tokens native, extensible to ~1M (OpenRouter lists 1,010,000); max output 128K–131K.
- **Modalities:** Text in; text out (this checkpoint is text-only — multimodal input is the Qwen3.8 Max API variant); reasoning yes (always on; `reasoning_effort` low/high/xhigh, xhigh default); function calling, structured outputs.
- **Pricing (as of 2026-09-27):** $2.00/M in, $6.00/M out (hosted API); Apache 2.0 open weights (self-host at infrastructure cost).
- **Architecture:** 2.4T total params, 95B active; MoE — 512 experts, 10 routed + 1 shared; hybrid Gated DeltaNet + Gated Attention; 92 layers; hidden 8192.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Claude Code harness, avg@10, 5h timeout; Qwen card)
- Toolathlon Verified: **72.5%**; WideSearch: **81.9%**; OSWorld-Verified: **86.1%**
- Automation-Bench: **27.3%**; JobBench: **53.4%**; SkillsBench: **70.2%**
- Agents' Last Exam: **27.0 pass / 52.4 score**

Reasoning / knowledge:

- GPQA Diamond: **92.6%**
- HLE: **43.6%** no tools / **56.2%** with tools
- Artificial Analysis Intelligence Index: **58.1** (independent, TensorX)

Coding:

- SWE-bench Pro: **67.7%** (rank 7/70)
- DeepSWE 1.1: **56.6%**; FrontierSWE: **73.5%**
- PaperBench: **93.0%**; QwenSWEBench: **80.7%**; NL2Repo-Bench: **55.9%**
- AA Coding Index: **71.8** (independent, TensorX)

Long context:

- MRCRv2: **92.9%** (vendor card); LongBench v2: **66.3%**

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 86.6% is a hair under the 88%+ frontier mark; OSWorld 86.1%, Toolathlon 72.5% and WideSearch 81.9% are strong; AutomationBench 27.3% is the drag.
- **Reasoning: 87/100.** GPQA 92.6%, HLE 56.2% with tools and AA Index 58.1 (independent) are all frontier-tier.
- **Context window: 72/100.** 262K native context lands in the 200K–500K tier (200K = 70); extension to ~1M is possible but not native.
- **Multimodal: 15/100.** This checkpoint is text-only (text in, text out) — the multimodal input lives in the Qwen3.8 Max API variant.
- **Coding: 80/100.** SWE-bench Pro 67.7% (rank 7), FrontierSWE 73.5% and PaperBench 93.0% are strong; DeepSWE 56.6% keeps the dimension in the upper-mid range.
- **Cost efficiency: 78/100.** $2.00/$6.00 hosted pricing sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points; Apache 2.0 weights can self-host at infrastructure cost.
- **Overall Score: 68/100.** Mean of the five quality dims (87+87+72+15+80)/5 = 68.2 → 68. Best-fit: self-hostable open-weight flagship for coding and long-horizon agentic work — Max-class capability with full deployment freedom, held back in this text-only checkpoint by multimodal and native-context limits.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Qwen HF model card + ModelScope, OpenRouter, TensorX independent indices, Together AI, ApX); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
