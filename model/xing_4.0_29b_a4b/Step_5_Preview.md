# Xing4.0 29B A4B — findings by Step 5 Preview

- Source: China Telecom AI (XingChen-AGI) / Xing4.0-29B-A4B (`XingChen-AGI/Xing4.0-29B-A4B`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0 29B A4B
- **Short description:** China Telecom AI's agent-oriented open-weight MoE (the Xing series, formerly TeleChat): 29B total/4B active, native 256K context extensible to 512K, and the first model of this scale trained entirely on Huawei Ascend NPUs with MindSpore.
- **Provider / access:** Self-host weights — Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (Apache 2.0; BF16, plus community FP8/w8a8/GGUF/4-bit builds, ~15GB VRAM at 4-bit); OpenAI-compatible API. OpenRouter lists a **free route** `xingchen-agi/xing4.0-29b-a4b:free` at $0/$0 (verified 2026-10-19); no OpenCode Zen route found.
- **Release / knowledge:** Model card live (papers: TeleChat3-MoE arXiv 2512.24157, Dec 2025; TeleChat2/2.5/T1 arXiv 2507.18013); knowledge cutoff not separately disclosed.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF/served name) · `xingchen-agi/xing4.0-29b-a4b:free` (OpenRouter).
- **Context window:** 262,144 tokens (256K) native, extensible to 512K (official model card; OpenRouter lists 262,144).
- **Modalities:** Text in → text out (HF pipeline "Text Generation"); thinking mode via chat template (`enable_thinking`); tool calling and multi-step planning; agent-framework adaptation for OpenCode, Claude Code, OpenClaw, Hermes.
- **Pricing (as of 2026-10-19):** $0 / $0 on the OpenRouter free route; self-hostable under Apache 2.0.
- **Architecture:** Open weights, Apache 2.0; MoE — 29B total / 4B active, 40 layers, hidden size 3584, MLA attention, 64 routed experts (4 active) + 1 shared expert, mHC + MLA + MTP; trained on Ascend 910C clusters (MindSpore/MindFormers) with ~96% throughput gain over baseline.

### Raw benchmarks found

> All benchmark numbers are vendor self-reported from the official model card (harness details per benchmark in the card's footnotes); no Artificial Analysis or BenchLM entry exists for this model, and OpenRouter lists only the free route with no published scores — the vendor table is the sole source, so every figure below carries that caveat.

Agent / tool use:

- Tau3-Bench: **64.63%** (official card, pass^1 over 4 runs) — above the ~50% frontier reference
- Claw-Eval: **76.55%** (official card, official harness, best in its comparison table)
- DeepresearchBII: **60.80%** (official card, OpenCode harness with Exa MCP)
- Terminal-Bench 2.1: **57.50%** (official card, terminus-2, 24h timeout, avg of 3 runs)
- IFBench: **69.67%** (official card) — instruction following
- GDPval-AA / OSWorld / MCP-Atlas / Toolathlon / BrowseComp: no verified public score found

Reasoning / knowledge:

- AIME 2026: **90.00%** (official card, avg of 5 runs) — strong for a 29B-class model
- AA-LCR: **61.00%** (official card, long-context reasoning)
- SuperCLUE: **93.52** (vendor collection note; Chinese-language general benchmark)
- GPQA Diamond / HLE / CritPt / Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **75.00%** (official card, SWE-agent harness, 210K window, temp 1.0) — best-in-table vs Gemma4-26B-A4B's 53.0 and just under Qwen3.6-35B-A3B's 76.0
- SWE-bench Multilingual: **66.00%** (official card, SWE-agent)
- Terminal-Bench 2.1: **57.50%** (official card; see agentic section)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / SWE-bench Pro: no verified public score found

Long context:

- 256K native (512K extensible) verified on the official card; AA-LCR 61.00% is the closest retrieval/reasoning-at-length figure; no MRCR/RULER/GraphWalks pass rate published.

Speed / cost: not published by the vendor; served free on OpenRouter ($0/$0); 4-bit quantization runs on a single RTX 3090/4090-class card per the vendor collection note.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau3-Bench 64.63% clears the ~50% frontier reference and Claw-Eval 76.55% is a strong agentic result, while Terminal-Bench 2.1 57.5% and DeepresearchBII 60.8% sit mid-band; capped by the absence of any GDPval-AA/OSWorld/MCP-Atlas figure and by all numbers being vendor-reported.
- **Reasoning: 70/100.** AIME 2026 90.0% is genuinely strong and AA-LCR 61.0% is upper-mid, but no GPQA Diamond, HLE, CritPt or Intelligence Index figure exists for this model, so the top of the mid band is the defensible ceiling.
- **Context window: 74/100.** 256K native context (extensible to 512K) verified on the official card — inside the methodology's 200K–500K band (65–84) toward its top given the documented 512K extension path; AA-LCR 61.0% supports but does not earn the 85+ tier.
- **Multimodal: 15/100.** Text-only input and output per the official card — squarely in the methodology's text-only 10–20 band.
- **Coding: 74/100.** SWE-bench Verified 75.0% (SWE-agent) and SWE-bench Multilingual 66.0% are solid mid-plus results and Terminal-Bench 2.1 57.5% is mid-band, but no LiveCodeBench, SciCode, DeepSWE or Vibe figure exists, keeping it below the 90+ frontier tier.
- **Cost efficiency: 100/100.** Free route on OpenRouter ($0 input/output) plus Apache 2.0 weights for self-hosting (4-bit build on a single 24GB-class GPU) — the methodology's $0 anchor.
- **Overall Score: 62/100.** Mean of 75/70/74/15/74 = 61.6 → 62. Best fit: a remarkably cheap (free) open-weight agentic-coding workhorse for budget deployments — SWE-bench ~75% and Tau3 ~65% at zero per-token cost on a single consumer GPU — with the caveat that every score is vendor self-reported and the reasoning/multimodal evidence is thin.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official XingChen-AGI model card (Hugging Face, full benchmark table with harness footnotes) cross-checked against OpenRouter's model catalog (free route, 262K context); no Artificial Analysis or BenchLM entry exists for this model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
