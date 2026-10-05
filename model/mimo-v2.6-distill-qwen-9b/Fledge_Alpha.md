# MiMo V2.6 Distill Qwen 9B — findings by Fledge Alpha

- Source: Xiaomi (`mimo-v2.6-distill-qwen-9b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi's SFT distill of MiMo-V2.6 RL trajectories into Qwen3.5-9B, targeting agentic coding, general agent tasks, visual coding, and cybersecurity; released Sept 21, 2026.
- **Provider / access:** Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`; Ollama mirror quants; OpenCode-compatible SFT starting point.
- **Release / knowledge:** September 21–22, 2026; knowledge cutoff not published.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`; no Zen Free ID verified.
- **Context window:** 262,144 tokens.
- **Modalities:** text, image, video input (image-text-to-text); text output; tool use/conversational.
- **Pricing (as of 2026-10-05):** MIT open weights; self-hosted (no stable per-token API rate).
- **Architecture:** Qwen3.5-9B base fine-tuned, 9B dense, hybrid linear attention 75%+, MTP 1 head, MIT.

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6: **30.3%** (vendor tech report, vs Qwen3.5-9B 5.0)
- Toolathlon-Verified: **35.2%** (vendor, vs Qwen3.5-9B 25.9)
- JobBench: **18.3%** (vendor)
- Terminal Bench 2.1: **37.1%** (vendor)
- OfficeQA: **19.5%** (vendor)

Reasoning / knowledge:

- GPQA/HLE/MMLU rows: not published in the released SFT table.

Coding:

- SWE-bench Verified: **61.1%** avg@3 (vendor, starts from Qwen3.5-9B's 60.0 — RL later lifts it to 66.2)
- SWE Pro: **44.6%** avg@3 (vendor, vs Qwen3.5-9B 32.0)
- MiMo Code (mini): **51.6%** avg@3 (internal vendor eval)
- MiMo Cyber (mini): **31.3%** (internal vendor eval)

Multimodal / visual:

- MiMo Visual Coding (mini): **64.0%** (vendor, vs Qwen3.5-9B 61.7)

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 56/100.** AutomationBench 30.3, Toolathlon 35.2, Terminal Bench 37.1 verified vendor rows for a 9B SFT model.
- **Reasoning: 60/100.** General-agent table (MiMo General 62.2 vs 28.5) is the best reasoning proxy; no published GPQA row.
- **Context window: 88/100.** 262K verified HF + apxml.
- **Multimodal: 70/100.** Visual Coding 64.0 on a small visual eval — modest but real multimodal coding capability.
- **Coding: 70/100.** SWE Verified 61.1 and SWE Pro 44.6 are the headline agentic coding rows.
- **Cost efficiency: 96/100.** MIT open weights, 9B footprint (M3 Max single-GPU).
- **Overall Score: 69/100.** Mean of five non-cost dims (56+60+88+70+70)/5 = 68.8 → 69; best fit: SFT seed for agentic RL, already scoring above Qwen3.5-9B across the board.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Hugging Face XiaomiMiMo model card, Xiaomi MiMo V2.6 news page, apxml spec sheet, alphaXiv abstract); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
