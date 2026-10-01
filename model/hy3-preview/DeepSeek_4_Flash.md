# Hy3 Preview — findings by DeepSeek 4 Flash

- Source: Tencent/Hy3 Preview
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's April 2026 preview of the Hy3 Hunyuan MoE (295B/21B, 256K context); superseded by the full release.
- **Provider / access:** Tencent TokenHub / preview access; open weights; no Free ID.
- **Release / knowledge:** preview April 2026; full release July 2026; knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/hy3-preview`
- **Context window:** 256,000 (256K) / 32K out — verified from curated metadata and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** TokenHub preview ~$0.18 in / $0.59 out per 1M.
- **Architecture:** open-weights 295B total / 21B active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **54.4%**; Gert Labs **36.91%**
- GDPval-AA **1136 Elo** (AA normalized 35.8%); AA Agentic Index **25.6%**
- MCP Atlas / OSWorld / Tau3: no verified public score found for this ID
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **87.2%** (Tencent); AA 89.7%
- HLE **25.5%** (AA 33.5%)
- AA-LCR **66.7%**; CritPt **4.9%**; AA Index **41.2%**
- AA-Omniscience Index **−18.5%**; Accuracy / Hallucination Rate **31.5% / 73.0%**
- IFBench **63.1%**

Coding:

- SWE-bench Verified **74.4%**
- AA-SciCode **48.6%**; AA Coding Index **58.8%**; SciCode **41.2%**

Long context:

- AA-LCR 66.7%

Multimodal:

- text/image in; no public MMMU number found

### Normalized scores (1–100)

- **Tool use: 62/100.** TB 2.0 54.4%, GDPval 1136 and AA Agentic Index 25.6% are modest; Gert Labs 36.9% is weak.
- **Reasoning: 64/100.** GPQA 87.2% is strong; HLE 25.5%, LCR 66.7% and an Omniscience Index of −18.5 are weak.
- **Context window: 72/100.** 256K window with AA-LCR 66.7%.
- **Multimodal: 70/100.** Text + image in; no public MMMU number.
- **Coding: 68/100.** SWE Verified 74.4% is good; SciCode 41.2% and Coding Index 58.8% are modest.
- **Cost efficiency: 95/100.** ~$0.18/$0.59 per 1M is very cheap.
- **Overall Score: 67/100.** Mean of (62 + 64 + 72 + 70 + 68) / 5 = 67.2 → 67. Best-fit: cheap preview open-weights coding agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Tencent, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
