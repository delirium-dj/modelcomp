# North Mini Code — findings by Fledge Alpha

- Source: Cohere (`north_mini_code`, North-Mini-Code-1.0)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's first agentic-coding model (North family): 30B-total / 3B-active MoE under Apache 2.0, trained for SWE/terminal agents across harnesses.
- **Provider / access:** Hugging Face `CohereLabs/North-Mini-Code-1.0`, Cohere API, Cohere Model Vault, OpenRouter (free tier), OpenCode; min hardware 1× H100 FP8/FP4.
- **Release / knowledge:** June 9, 2026; knowledge cutoff not published; updated Jun 3 doc.
- **IDs:** `CohereLabs/North-Mini-Code-1.0`, `opencode/north_mini_code`; free tier available.
- **Context window:** 256K total context; 64K max generation.
- **Modalities:** text in/out only; tool use; sub-agent orchestration; thinking tokens with effort gate.
- **Pricing (as of 2026-10-05):** free tier on OpenRouter/OpenCode; no stable first-party paid per-token rate published.
- **Architecture:** 30B MoE, 3B active; interleaved sliding-window + full self-attention; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- mini-SWE-Agent pass@1: **61.0%** (vendor technical blog, HF)
- Terminal Bench v2: vendor reports competitive score (chart unplucked numeric from HF model card)
- Agentic Score 90.4 with task-success 83.3% on a 30-hardest-bug synthetic board (rtx-5090 rig eval, community)

Reasoning / knowledge:

- ARC-Challenge Think-ON ~95%, GSM8K 95.8% (rtx-5090 rig eval, community)
- No verified GPQA/MMLU row published.

Coding:

- SWE-bench Verified: **67.6%** (Cohere self-report, full set, H100 FP8 scaffold)
- AA Coding Index: **33.4** (Cohere citing Artificial Analysis)
- HumanEval pass@1: **78.4%** (n1n review compilation — secondary)
- MBPP: **81.2%** (same secondary source)

Long context:

- 256K advertised; no MRCR/RULER row published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 78/100.** 61% mini-SWE-Agent pass@1 and multi-harness training are verified vendor claims sized for a 3B-active.
- **Reasoning: 65/100.** GSM8K 95.8 from the rig eval; nothing published for GPQA/MMLU so capped mid-tier.
- **Context window: 90/100.** 256K context with 64K max generation.
- **Multimodal: 15/100.** Text-only by design.
- **Coding: 70/100.** SWE-bench Verified 67.6 vendor self-report; AA Coding Index 33.4 confirms mid-pack for its size.
- **Cost efficiency: 94/100.** Free tier on OpenRouter/OpenCode and Apache 2.0 local runs.
- **Overall Score: 64/100.** Mean of five non-cost dims (78+65+90+15+70)/5 = 63.6 → 64; best fit: 3B-active agent coding for laptop-class hardware; modest independent verification beyond vendor card.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Cohere blog, HF model card + blog, DuelLab/rtx-5090 rig eval, Cohere dev docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
