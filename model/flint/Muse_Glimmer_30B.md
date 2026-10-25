# Flint — findings by Muse Glimmer 30B

- Source: Recursive / Flint
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Flint
- **Short description:** Recursive Superintelligence's Apache-2.0 open-weight MoE language model built for local agentic coding. Released Oct 21 2026 by Recursive's "Eureka Machine" automated research loop, purpose-built for investigating codebases, fixing bugs, implementing features and writing tests.
- **Provider / access:** Open weights on Hugging Face `RecursiveSI/flint`. Hosted free routes: OpenRouter `recursive/flint-v1.0:free`, OpenCode Zen `flint-40b-free` / `opencode/flint`. Local serving via llama.cpp/Ollama/Unsloth/LM Studio/vLLM/SGLang.
- **Release / knowledge:** 2026-10-21; knowledge cutoff June 2026 per model card and OpenCode models.dev record.
- **IDs:** `RecursiveSI/flint`; `recursive/flint-v1.0` / `recursive/flint-v1.0:free`; `flint-40b-free` / `opencode/flint`.
- **Context window:** 262,144 tokens documented including prompt + output on Hugging Face model card and models.dev/OpenRouter. Recursive launch post claims up to 512K supported with ≤256K recommended — vendor-only claim not corroborated by catalogs. Route caps differ: 262,144 models.dev, 235,929 OpenRouter free, 65,536 max output on OpenCode Zen free route.
- **Modalities:** Text in / text out only. Reasoning always on, tool calling enabled, structured output enabled per models.dev.
- **Pricing (as of 2026-10-25):** $0/$0 per 1M tokens on free OpenRouter and OpenCode Zen routes; Apache-2.0 open weights self-host free. Zen route retains data 30 days and may use it for training.
- **Architecture:** Decoder-only MoE Transformer, 39.8B total parameters ~2.5B active per token. 49 layers, 256 experts with 6 routed + 1 shared per token, 32 query / 4 KV heads, vocab 150,144. Trained from scratch with pretrain/midtrain/SFT/RL in <4 months. Apache-2.0.

### Raw benchmarks found

> All Flint benchmark numbers below are vendor-reported. Independent benchmarkers were checked: Artificial Analysis returns 404 for Flint and no third-party Intelligence Index exists. No independent replication found.

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (vendor, Hugging Face model card, Recursive launch post `recursive.com/updates/introducing-recursive-flint`, Ollama entry)
- IFEval: **95.1** (vendor, via intelligentliving.co coverage citing Recursive launch post and PrismML whitepaper)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AIME 2026: no verified public score found. Intelligentliving.co states Flint "comfortably wins competition-math check" but does not provide Flint's number.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (404)
- CritPt / LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **74.2%** (vendor, HF card, launch post)
- SWE-bench Pro v2: **89.7%** (vendor, HF card, launch post)
- LiveCodeBench v6: **80.3** (vendor via intelligentliving.co; on same page Bonsai 2 at 90.07 and Qwen 3.8 27B FP16 at 90.05, placing Flint behind both)
- SciCode / AA-SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found
- Practical long-context signal: independent review via intelligentliving.co notes throughput collapses to ~9 tokens/s at ~115K context, the only independent quantitative finding about the model.
- Context window documentation conflict: 262,144 tokens documented (HF, models.dev, OpenRouter, OpenCode) vs 512K "supported, ≤256K recommended" vendor-only claim.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 54.9% is mid-band for agentic terminal use; IFEval 95.1 shows strong instruction adherence and tool calling is enabled. Capped below 75 because Tau3-Banking, GDPval-AA, OSWorld, Claw-Eval, Toolathon and MCP-Atlas are all unpublished and every agentic number is vendor-only.
- **Reasoning: 58/100.** No verified GPQA/HLE/AIME or independent Intelligence Index. Proxied by IFEval 95.1 and strong SWE-bench-class results, but the dimension rests on adjacent capability with zero independent reasoning benchmarks. Explicit provisional mid-low band.
- **Context window: 72/100.** 262,144-token documented window puts it in the 200K-500K methodology band (~70 baseline). Max output equals window on models.dev, unusual. Held to 72 because no MRCR/RULER retrieval scores exist, the 512K claim is uncorroborated, and independent measurement shows ~9 tok/s throughput at ~115K context.
- **Multimodal: 15/100.** Text in/out only per models.dev and OpenRouter. Methodology text-only band 10-20, at top of range.
- **Coding: 78/100.** SWE-bench Verified 74.2% clears frontier reference, SWE-bench Pro v2 89.7% is strong agentic software engineering, Terminal-Bench 54.9% provides a counterweight. Capped at 78 because LiveCodeBench v6 80.3 places Flint behind Bonsai 2 and Qwen 3.8 27B FP16 on the same comparison, SciCode/DeepSWE/Vibe Code Bench are unpublished, and all figures are vendor-sourced with no independent replication.
- **Cost efficiency: 100/100.** $0 input/output on free OpenRouter and OpenCode Zen routes; Apache-2.0 open weights allow self-host at GPU cost only. Methodology $0 = 100 applies.
- **Overall Score: 57.6/100.** Mean of five quality dims (65+58+72+15+78)/5 = 57.6 → 58 rounded. Best-fit: zero-cost local agentic coding with 262K context and strong SWE-bench-class vendor scores. Worst-fit: long-context throughput degradation past ~115K, multimodal absence, and reliance on single-sourced vendor benchmarks for every capability dimension.

---
## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research across Hugging Face model card `RecursiveSI/flint`, Recursive launch post `recursive.com/updates/introducing-recursive-flint`, OpenRouter model listing `recursive/flint-v1.0:free`. Conflicts and absence checks against Artificial Analysis and independent review coverage. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
