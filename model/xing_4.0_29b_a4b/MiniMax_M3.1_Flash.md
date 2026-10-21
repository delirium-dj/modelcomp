# Xing 4.0 29B A4B — findings by MiniMax M3.1 Flash

- Source: China Telecom TeleAI (Xing4.0-29B-A4B), `XingChen-AGI/Xing4.0-29B-A4B`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B (Xing4.0-29B-A4B)
- **Short description:** China Telecom TeleAI's September 2026 Apache-2.0 open-weight MoE — **29B total / 4B active**, 256K native context (512K via YaRN), and the first model of its scale trained **entirely on Ascend NPUs with MindSpore**. It reports SWE-bench Verified 75.0% and Terminal-Bench 2.1 57.5% from a 29B model, with a free OpenRouter route.
- **Provider / access:** Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (Apache 2.0; `-FP8`, `-GGUF`, `-w8a8` quantizations, plus `Xing4.0-29B-Intent`), ModelScope and Modelers; OpenRouter `xingchen-agi/xing4.0-29b-a4b` with a **free** `:free` route ($0/$0, 262,144 ctx); local serving via vLLM / SGLang / KTransformers / llama.cpp (upstream PRs pending). **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-09-17** ("Open-sourced Xing4.0-29B-A4B" in the repo's News section; HF repo created 2026-09-16). Knowledge cutoff not published.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF), `xingchen-agi/xing4.0-29b-a4b` (OpenRouter).
- **Context window:** **262,144** native (`max_position_embeddings`), extensible to **512,000** via YaRN (`rope_scaling` yarn, factor 64, original 4096).
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** Apache 2.0 weights, self-host free; the OpenRouter `:free` route is **$0/$0** (single provider, Phala, 235,929 max completion).
- **Architecture:** MoE, **29B total / 4B active**, 40 layers, hidden 3584, MLA, 64 routed experts (4 active) + 1 shared, vocab 131,072, `Xing4_0ForCausalLM`, bf16.

### Raw benchmarks found

> Every number is from China Telecom's own model card and GitHub evaluation tables; no
> third-party tracker carries a Xing4.0 row.

Coding:

- SWE-bench Verified: **75.00%** (SWE-agent harness, 210K ctx) — the folder's "75%" confirmed
- Terminal-Bench 2.1: **57.50%** (terminus-2, average of 3 runs) · SWE-bench Multilingual: **66.00%**
- LiveCodeBench / DeepSWE / SciCode / SWE-bench Pro: no verified public score found

Agent / tool use:

- Claw-Eval: **76.55%** (official harness, 256K ctx) · Tau3-Bench: **64.63%** · DeepresearchBII: **60.80%** · IFBench: **69.67%**
- Terminal-Bench 2.1 57.5% and SWE-bench Verified 75.0% are the vendor's own agentic rows
- Tau2-bench / GDPval-AA / OSWorld / AutomationBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AIME 2026: **90.00%** · AA-LCR: **61.00%** (vendor) · IFBench: **69.67%** (vendor)
- GPQA Diamond / HLE / MMLU-Pro / FrontierMath: **no verified public score found** — none appear on the card, the GitHub README, Artificial Analysis (no Xing4.0 entry) or BenchLM (no page)

Long context:

- No MRCR / RULER measurement published; the 512K figure is the YaRN extension of a 256K native window.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.1 57.5%, Claw-Eval 76.6%, Tau3-Bench 64.6% and DeepresearchBII 60.8% are solid mid-band agentic numbers, with no τ², GDPval or OSWorld figure.
- **Reasoning: 58/100.** AIME 2026 90.0% and IFBench 69.7% are mid-band, but with no GPQA, HLE or MMLU-Pro published and a 61.0% AA-LCR, the dimension rests on two rows.
- **Context window: 72/100.** 256K native (512K via YaRN) is the 200K–500K tier, discounted for the absence of any retrieval measurement.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 72/100.** SWE-bench Verified 75.0% and Terminal-Bench 2.1 57.5% are strong mid-band results for a 29B model, capped by SWE-bench Multilingual 66.0% and the missing LiveCodeBench/DeepSWE rows.
- **Cost efficiency: 99/100.** Apache 2.0 weights plus a genuinely free OpenRouter route — among the cheapest ways to run a 29B agentic model.
- **Overall Score: 55/100.** Mean of the five quality dims = (60 + 58 + 72 + 15 + 72) / 5 = 55.4 → **55**. Best fit: cheap open-weight agentic coding, with the Ascend-first training stack as the interesting part — but every number is vendor-published.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (XingChen-AGI Hugging Face model card and config, the Xing4.0 GitHub repository and evaluation tables, Hugging Face API, OpenRouter API and models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Xing_4.0_29B_Intent.md`, using the same headings.
