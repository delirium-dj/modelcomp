# Nemotron 3 Ultra Free — findings by DeepSeek 4 Flash

- Source: NVIDIA/Nemotron 3 Ultra (evaluated via the free Zen / NVIDIA trial tier)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's flagship open-weights hybrid Mamba-MoE for frontier reasoning and long-running agents; fast with low hallucination. Free Zen/NVIDIA trial access.
- **Provider / access:** OpenCode Zen free tier / NVIDIA; open weights; OpenRouter `nvidia/nemotron-3-ultra-550b-a55b`.
- **Release / knowledge:** Nemotron 3 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/nemotron-3-ultra-free` (Free ID exists)
- **Context window:** 1M (262K default serve) — verified from curated metadata.
- **Modalities:** text in/out (beyond text unverified); reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** free Zen/NVIDIA trial; paid ~$0.60/$2.40 per 1M.
- **Architecture:** open-weights hybrid Mamba-MoE (550B total / 55B active class).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (NVIDIA); Vals **50.9%**; AA **53.9%**
- PinchBench **90.0%**; BrowseComp **44.4%**; GDPval-AA **1000 Elo** (AA normalized 33.1%)
- AA Agentic Index **21.7%**; AA AutomationBench **3.0%**; AA Tau3 Banking **14.2%**; AA Briefcase **876**; AA EnterpriseOps-Gym **28.9%**
- AA Harvey LAB **81.7%**; RULER (long context) reported by NVIDIA as ~95% (per curated sources)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **87.0%** (NVIDIA); AA 86.7%; Vals 86.1%
- HLE **26.7%** (AA 28.4%)
- AA-LCR **67.0%**; CritPt **3.1%**; MLCR-AA **11.1%**; AA Index **22.9%**
- AA-Omniscience Index **−0.4%**; Accuracy / Hallucination Rate **21.6% / 29.7%** (low hallucination)
- MMLU-Pro **86.8%**; IFBench **81.7%**

Coding:

- SWE-bench Verified **71.9%** (Vals 69.0%); SWE Multilingual **67.7%**
- LiveCodeBench v6 **89.0%** (Vals 86.0%); AA Coding Index **49.3%**; SciCode **44.6%**

Long context:

- AA-LCR 67.0%; LongBench v2 **61.9%**; RULER ~95% per NVIDIA

Multimodal:

- text-only per curated metadata

### Normalized scores (1–100)

- **Tool use: 58/100.** TB 2.1 56.4% and PinchBench 90% are decent; GDPval 1000, AA Agentic Index 21.7% and AutomationBench 3% are weak.
- **Reasoning: 55/100.** GPQA 87% is strong; HLE 26.7%, AA Index 22.9% and CritPt 3.1% are weak.
- **Context window: 80/100.** 1M window (262K default) with LCR 67% and RULER ~95%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 72/100.** SWE Verified 71.9% and LiveCode v6 89% are good; Coding Index 49.3% trails.
- **Cost efficiency: 100/100.** $0 on the evaluated free Zen/NVIDIA trial tier.
- **Overall Score: 56/100.** Mean of (58 + 55 + 80 + 15 + 72) / 5 = 56.0 → 56. Best-fit: free text execution/orchestration with low hallucination, not a frontier planner.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, NVIDIA, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
