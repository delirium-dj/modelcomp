# Qwen 3.8 — findings by DeepSeek 4 Flash

- Source: Alibaba/Qwen3.8 Max (alias "Qwen 3.8")
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** The hosted Qwen3.8 flagship (Qwen3.8 Max, based on Qwen3.8-2.4T-A95B) — a top-10 frontier reasoning/agentic model with 1M context, vision input and built-in tools. BenchmarkList and vendor materials alias it as "Qwen 3.8" / "Qwen3.8".
- **Provider / access:** Qwen Cloud API (`qwen/qwen3.8-max`); API-only, no open weights served (weights announced for the 2.4T/A95B base).
- **Release / knowledge:** 2026-08-12.
- **IDs:** `qwen/qwen3.8-max`; `qwen-qwen3.8-max-20260803`
- **Context window:** 1,000,000 (1M) default — per vendor launch materials / BenchmarkList.
- **Modalities:** text and image in; text out; reasoning yes; built-in tools yes.
- **Pricing (as of 2026-10-01):** ~$2 in / $6 out per 1M (Qwen3.8 Max 0902 hosted tier).
- **Architecture:** proprietary hosted MoE (Qwen3.8-2.4T-A95B, ~2.4T total / 95B active).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%**; Toolathlon **72.5%**; Tau3-Banking **51.3%** (#1 of 174)
- GDPval-AA: **1,721 Elo** (#10); AA-Briefcase **1,420 Elo**; AutomationBench **39.8%**
- OSWorld-Verified **86.1%**; AndroidWorld **85.3%**; WideSearch **81.9%**; Agents' Last Exam **52.4%**
- SkillsBench **70.2%**; Workspace-Bench **67.7%**; JobBench **53.4%**; WildClawBench **56.2%**

Reasoning / knowledge:

- GPQA Diamond: **92.7%**; HLE **43.6%**; HLE w/ tools **56.2%**
- AA Intelligence Index: **58.1** (#10 of 418); AIIQ Composite IQ **119**
- MRCR v2 256K (8-needle) **92.9%**; AA-LCR **74.3%**; LongBench v2 **66.3%**

Coding:

- SWE-bench Pro: **67.7%**; DeepSWE 1.1 **57.5%**; NL2Repo **55.9%**; SciCode **52.9%**
- FrontierSWE **73.5%**; Android Bench **87.0%**; SWE Atlas Codebase QnA **60.3%**; CyberGym **78.5%**

Multimodal:

- MMMU-Pro: **82.3%**; BabyVision **91.3%**; ERQA **77.8%**; Design Arena **1335 Elo**; LMArena Vision **1301.88**

Long context:

- MRCR 256K 92.9%; AA-LCR 74.3% at 1M window

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 86.6%, GDPval 1,721, Tau3 #1 and AndroidWorld 85.3% are frontier; AutomationBench 39.8% is the only laggard.
- **Reasoning: 88/100.** GPQA 92.7%, HLE 43.6% and AA Index 58.1 (top 10) are frontier; AA-LCR 74.3% slightly trails the leaders.
- **Context window: 97/100.** 1M input with MRCR 256K 92.9% and AA-LCR 74.3%.
- **Multimodal: 82/100.** Image input with MMMU-Pro 82.3% and BabyVision 91.3%; text-only output.
- **Coding: 86/100.** TB2.1 86.6%, SWE-Pro 67.7% and Android 87.0% are frontier; DeepSWE 57.5% and NL2Repo 55.9% trail the very top.
- **Cost efficiency: 72/100.** ~$2/$6 per 1M is mid-priced frontier territory.
- **Overall Score: 88/100.** Mean of (88 + 88 + 97 + 82 + 86) / 5 = 88.2 → 88. Best-fit: top-tier multimodal agentic/coding model for 1M-context work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList, Qwen launch materials, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
