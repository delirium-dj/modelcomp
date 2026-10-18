# Ling-3.0-tiny — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-3.0-tiny`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny (`Ling 3.0 Tiny`)
- **Short description:** InclusionAI's (Ant Group's AGI lab) lightweight hybrid-reasoning MoE — 7.9B total / 1.3B active — built for strong reasoning and agentic capabilities at low inference cost, validated for local/edge deployment on NVIDIA DGX Spark, Apple Silicon MacBook, and Mac mini. BenchLM lists 10 rows but assigns **no public overall score (unranked)**.
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ling-3.0-tiny`, plus official INT4) and ModelScope; self-hosted via SGLang (MTP/NEXTN, 256K YaRN), vLLM, or Ollama (MLX on Apple Silicon); OpenRouter Free route `openrouter.ai/inclusionai/ling-3.0-tiny:free`.
- **Release / knowledge:** 2026-08-06 release (AA); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (self-host), `openrouter/inclusionai/ling-3.0-tiny:free` (Free); no Free ID on OpenCode Zen verified.
- **Context window:** 262,144 total (BenchLM concurs; 131,072 native extended via YaRN factor 2.0); max output 32K used in the official Terminal-Bench 2.1 eval config.
- **Modalities:** text in, text out; reasoning yes (native hybrid reasoning, thinking mode enabled by default); tool calls yes (`ling3` tool-call parser); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-11):** $0.00 in / $0.00 out (AA measured Free — $0.00 per Intelligence Index task, cost rank #1 of 142); open weights under MIT with BF16/FP8/INT4 for local deployment.
- **Architecture:** 7.9B total / 1.3B active MoE; 3:1 KDA–MLA hybrid attention; sparse MoE FFN with 128 routed experts (8 routed + 1 shared activated); MIT license.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (updated 2026-10-10, still unranked with 10 of 625 rows) fills several prior gaps — GPQA 73.4% (decent for the class), LCR 60.3% (moderate), but GDPval 3.2%, SciCode 24.2%, HLE 9.3% and CritPt 0.0% are floor-class. Mixed net; scores move down on the coding/tool side.

Agent / tool use:

- GDPval-AA: **normalized 3.2%** (AA, independent; 2026-10-17 refresh reads 3.1% — minor drift, flagged — fills the gap; floor-class)
- Artificial Analysis Agentic Index: **16** (InclusionAI HF card citing AA, prior pass)
- Terminal-Bench 2.1: charted on the HF card — still no verified extractable numeric score

Reasoning / knowledge:

- AA-GPQA Diamond: **73.4%** (AA, independent — fills the GPQA gap; decent for the 1.3B-active class)
- AA-HLE: **9.3%** (AA — fills the HLE gap; floor); Artificial Analysis Intelligence Index: **11.1** (AA — corroborates the prior 11)
- AA-LCR v1.1: **60.3%** (AA — fills the long-context gap; moderate, above expectations for the class); CritPt: **0.0%** (AA — floor)
- AA-Omniscience: **8.5% accuracy / 30.5% non-hallucination row / −19.3 index** (AA — very weak)

Coding:

- AA-SciCode: **24.2%** (AA, independent — fills the SciCode gap; very weak)
- Terminal-Bench 2.1: still no verified extractable numeric score
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 60.3% is the first measured long-context number (moderate); 262K YaRN-extended

Speed: 56.6 output tokens/s (AA — below the open-weight median of 84.4); TTFT 2.60s; ~18s end-to-end for a 500-token response. Local: ~100–105 tokens/s on DGX Spark, 86–90 on M4 Pro MacBook, ~8.34 GiB peak memory at 8K context (FP8). Very verbose: 230M output tokens across the Intelligence Index run.

### Normalized scores (1–100)

- **Tool use: 42/100.** (Was 48 on the prior pass.) GDPval normalizes to 3.2% (floor-class) on the current AA board, joining the low AA Agentic Index 16 — one band down on the measured evidence.
- **Reasoning: 50/100.** The new AA-GPQA 73.4% is a genuinely positive fill for the class and AA-LCR 60.3% is moderate, while AA-HLE 9.3%, CritPt 0.0% and the −19.3 Omniscience index hold the composite at the same band — unchanged.
- **Context window: 72/100.** 262K total (BenchLM concurs) sits inside the 200K–500K band; AA-LCR 60.3% is the first measured long-context evidence (moderate).
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA.
- **Coding: 44/100.** (Was 50 on the prior pass.) AA-SciCode 24.2% fills the coding gap at a very weak level — one band down from the provisional mid-band estimate.
- **Cost efficiency: 100/100.** $0.00 in / $0.00 out on AA (cost rank #1 of 142) plus MIT-licensed open weights runnable on a MacBook — the cheapest evaluated tier possible.
- **Overall Score: 44.6/100.** (Was 47 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (42 + 50 + 72 + 15 + 44) / 5 = 223/5 = 44.6 — lowered on the 2026-10-11 second pass as the AA board fills the tool/coding gaps at floor levels while GPQA/LCR provide the class bright spots. Best-fit recommendation: an ultra-cheap local/edge reasoning-and-agent model for MacBook/DGX Spark workflows — never a primary planner, coder, or frontier-capability pick.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Ling 3.0 Tiny page with AA board citations, the prior 2026-10-09 pass on the HF model card + AA model page; 2026-10-16 re-check: BenchLM 10-row refresh corroborates every row, still unranked, no new data (GDPval 3.2% → 3.1%) — no score changes; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
