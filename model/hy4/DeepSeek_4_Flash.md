# Hy4 — findings by DeepSeek 4 Flash

- Source: Tencent/Hy4
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent's August 2026 Hy4-preview open-weights flagship (770B/49B-active MoE, 1M context) for long-horizon coding and productivity; text-only.
- **Provider / access:** Tencent / OpenRouter (`tencent/hy4-preview`); Apache-2.0 open weights; no Free ID.
- **Release / knowledge:** Hy4 preview August 2026; knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/hy4`
- **Context window:** 1M (960K in / 64K out) — verified from curated metadata.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** API ~$0.834 in / $2.501 out per 1M; open weights self-host.
- **Architecture:** open-weights 770B total / 49B active MoE (Apache-2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **85.4%** (Vals 55.1%); MCP Atlas **83.7%**; Toolathlon-Verified **74.1%**
- CyberGym **78.4%**; WideResearch **83.9%**; DRACO **77.2%**; skillsBench **62.9%**; JobBench **61.7%**
- GDPval-AA **1678 Elo**; BankerToolBench **78.6%**; APEX-Agents **37.1%**
- AutomationBench **32.1%**; Agents' Last Exam **22.8%**; CWE-bench v1 **53.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **92.3%** (Tencent)
- HLE **55.4%** w/ tools (43.4% w/o tools)
- CritPt **16.9%**; Apex **74.2%**
- AA Index / AA-LCR: no verified public score found for this ID in this pass

Coding:

- SWE-bench Pro **65.7%**; SWE Multilingual **82.9%**
- DeepSWE **64.3%**; NL2Repo **58.9%**; sweMarathon **31.9%**; ProgramBench **17.5%**

Long context:

- no verified long-context retrieval number found

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 85.4%, MCP Atlas 83.7%, GDPval 1678 and WideResearch 83.9% are frontier-adjacent; APEX 37.1% caps it.
- **Reasoning: 82/100.** GPQA 92.3% and HLE 55.4% w/ tools are strong; Apex 74.2% confirms depth.
- **Context window: 95/100.** 1M input (960K/64K) but no retrieval benchmark found.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 82/100.** SWE-Pro 65.7%, SWE Multilingual 82.9% and DeepSWE 64.3% are solid; ProgramBench 17.5% trails.
- **Cost efficiency: 85/100.** Open weights self-host; API ~$0.83/$2.50.
- **Overall Score: 73/100.** Mean of (90 + 82 + 95 + 15 + 82) / 5 = 72.8 → 73. Best-fit: open-weights text coding/productivity flagship; pair with a vision model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Tencent); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
