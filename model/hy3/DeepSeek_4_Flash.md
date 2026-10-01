# Hy3 — findings by DeepSeek 4 Flash

- Source: Tencent/Hy3
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active) with 256K context and hybrid fast/slow thinking, Apache-2.0.
- **Provider / access:** Tencent TokenHub / OpenRouter (`tencent/hy3`); open weights; no Free ID.
- **Release / knowledge:** Hy3 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/hy3`
- **Context window:** 256,000 (256K) / 32K out — verified from curated metadata and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** TokenHub preview ~$0.18 in / $0.59 out per 1M.
- **Architecture:** open-weights 295B total / 21B active MoE (Apache-2.0).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1136 Elo** (AA normalized 27.3%); AA Agentic Index **25.6%**
- Terminal-Bench / MCP Atlas / OSWorld / Tau3: no verified public score found for this ID
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **89.7%** (AA)
- HLE (AA): **33.5%**
- AA-LCR **79.0%**; CritPt **4.9%**; AA Index **25.3%**
- AA-Omniscience Index **−18.5%**; Accuracy / Hallucination Rate **32.0% / 74.1%**

Coding:

- AA Coding Index **58.8%**; AA-SciCode **48.6%**; SWE-bench / LiveCodeBench: no verified public score found

Long context:

- AA-LCR 79.0%; no public MRCR full-window number found

Multimodal:

- text/image in; Design Arena **1190 Elo**; no public MMMU number found

### Normalized scores (1–100)

- **Tool use: 65/100.** GDPval 1136 and AA Agentic Index 25.6% are modest; no Terminal-Bench/MCP numbers to confirm agentic strength.
- **Reasoning: 65/100.** GPQA 89.7% and LCR 79% are good; HLE 33.5% and AA Index 25.3% are mid.
- **Context window: 76/100.** 256K window with AA-LCR 79%.
- **Multimodal: 72/100.** Text + image in; Design Arena 1190 Elo; no public MMMU.
- **Coding: 68/100.** Coding Index 58.8% and SciCode 48.6% are modest; no SWE-bench number found.
- **Cost efficiency: 95/100.** ~$0.18/$0.59 per 1M is very cheap.
- **Overall Score: 69/100.** Mean of (65 + 65 + 76 + 72 + 68) / 5 = 69.2 → 69. Best-fit: cheap open-weights general/agentic model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Tencent, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
