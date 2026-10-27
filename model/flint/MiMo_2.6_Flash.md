# Flint — findings by MiMo 2.6 Flash

- Source: Recursive (RecursiveSI) `flint` (`RecursiveSI/flint`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint (`RecursiveSI/flint`, "Flint 40B A2.5B") — the first public model from **Recursive** (Richard Socher's AI lab, "Recursive Superintelligence"), a coding-agent specialist **built by their automated research system** (the "Eureka Machine" trained it end-to-end — the bigger story coverage emphasizes).
- **Short description:** 39.8B-total / ~2.5B-active MoE released **2026-10-21** (six days before this report) under **Apache 2.0**: "the best-performing MoE model with fewer than 50B total parameters on agentic coding benchmarks" (Recursive), engineered for fast local coding agents on laptops — 125+ t/s on an M4 Pro MacBook, 150–220+ t/s on an RTX Spark.
- **Provider / access:** open weights on Hugging Face (`RecursiveSI/flint`, BF16 + NVFP4 checkpoints); Ollama (day-one `flint` library entry), LM Studio, Unsloth GGUF, llama.cpp, **vLLM day-0 support** (single-GPU BF16 and NVFP4); SGLang guides; HuggingFace Inference Endpoints/FlexAI; OpenHands integration blog post.
- **Release / knowledge:** **2026-10-21** (recursive.com, MarkTechPost, BenchLM, ai-tldr, flowtivity — all agree). Knowledge cutoff not published.
- **IDs:** `RecursiveSI/flint` (HF), Ollama `flint`, FlexAI `flint-v1-0`.
- **Context window:** not stated in official coverage captured this pass; community 24GB **128K** GGUF variants (Makdok) indicate ~128K native. Max output not published.
- **Modalities:** **text only** (BenchLM: "text-only mixture-of-experts model for coding agents"); reasoning/thinking mode; tool calling (built for agent harnesses — repo examination, file edits, command runs).
- **Pricing (as of 2026-10-27):** free open weights (Apache 2.0, commercial use OK); hosted rates on FlexAI/HF Endpoints exist but exact per-1M numbers weren't captured. Self-host: fits 24 GB at quant, runs on a MacBook Pro.
- **Architecture:** dense-ish MoE, 39.8B total / ~2.5B active per token; NVFP4 and BF16 official checkpoints; exact expert count not published in this pass.

### Raw benchmarks found

(agent / coding — Recursive release evaluations, vendor-run BF16):

- **SWE-bench Verified: 74.2%**
- **SWE-bench Pro v2: 89.7%** — **skepticism flag:** this figure inverts the usual difficulty ordering (Pro v2 is harder than Verified, yet scores 15 points higher); all outlets (mindstudio, shattered.io, cellcog, flowtivity, ollama) simply relay the vendor card, and an X commentary notes these are vendor-run scores — treat as unverified externally
- **Terminal-Bench 2.1: 54.9%** — independent context from MarkTechPost: the dense Qwen 3.8 scores **73.0%** on the same bench, "well above Flint"; so class-leading only within the <50B-MoE lane Recursive claimed
- Class claim: best MoE <50B total on SWE-Pro v2 / TB-2.1 / SWE-Verified (Recursive launch post)

Performance / speed:

- 125+ t/s on M4 Pro MacBook, 150+ (up to 220+) t/s on RTX Spark (r/LocalLLaMA, AISEOInsider); vLLM single-request decode "about..." (vLLM blog); **independent caveat (Medium, lvntblsn):** the "125+ t/s" headline is best-case with a 1,000-token prompt — Flint's average across realistic prompts is lower; Flint-vs-Qwen-3.8 framed as "the speed-or-smarts choice for coding on your laptop"
- HF discussion thread title (2 days old): "Needs more work, but its fine" — early community sentiment is warm but measured

Reasoning / knowledge / multimodal / long context:

- No GPQA/HLE/MMMU/MRCR figures found — text-only coding specialist with no general-reasoning evidence published in its first week.

### Normalized scores (1–100)

- **Tool use: 74/100.** Purpose-built for coding-agent harnesses (repo navigation, file edits, shell runs; OpenHands + vLLM/Ollama day-zero support) with vendor SWE-Pro v2 89.7 and TB-2.1 54.9 — but every agentic number is vendor-run, the flagship Pro v2 figure is internally suspicious, and no independent agent evaluation exists six days post-release.
- **Reasoning: 52/100.** No general-reasoning benchmark (GPQA/HLE/MMLU-Pro) published or independently measured; a 2.5B-active model cannot plausibly be a general reasoner, and nothing contradicts that.
- **Context window: 62/100.** ~128K indicated only by community quants, unpublished officially; no retrieval accuracy measurement; young-ecosystem uncertainty.
- **Multimodal: 30/100.** Text-only — no vision, audio, or MMMU-class evidence; basic text-model floor.
- **Coding: 80/100.** SWE-Verified 74.2 and TB-2.1 54.9 at 2.5B active parameters are remarkable efficiency numbers, leading the <50B-MoE lane as claimed — capped because dense Qwen 3.8 beats it by ~18 points on Terminal-Bench 2.1, the Pro v2 number looks inflated, and all figures are vendor-run with zero independent replication yet.
- **Cost efficiency: 92/100.** Apache 2.0, ~2.5B active means laptop-class serving (125 t/s on an M4 Pro, 24 GB quant builds), day-zero support across every major local runtime — exceptional intelligence-per-watt for agent coding; docked for BF16 single-GPU being datacenter-adjacent and the headline speed being best-case.
- **Overall Score: 60/100.** (74 + 52 + 62 + 30 + 80) / 5 = 59.6 → 60 — best fit: private, fast, local agentic coding on a laptop or single workstation GPU where per-token cost and data locality dominate; not the pick for raw coding accuracy (Qwen 3.8 dense is faster to judge), general reasoning, or multimodal work. Revisit after independent SWE-bench/TB replications land.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official sources first (recursive.com "Introducing Flint" launch post, Hugging Face `RecursiveSI/flint` model page and discussions, vLLM day-0 support blog), then independent sources (MarkTechPost, mindstudio, shattered.io, cellcog, ai-tldr, flowtivity, Ollama/LM Studio catalogs, r/LocalLLaMA threads, Medium Flint-vs-Qwen-3.8 analysis with the speed-caveat, OpenHands integration post, BenchLM, FlexAI); the vendor-run-scores caveat and the SWE-Pro v2 anomaly are documented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
