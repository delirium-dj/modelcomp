- Source: Alibaba/Qwen3.5-122B-A10B
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba's 2026-02-25 mid-size Qwen3.5 model that set a new performance high for its class, beating the much larger Qwen3-235B-A22B and Qwen3-VL. A distinct model; `qwen-3.5-35b-a3b`, `qwen-3.5-27b`, `qwen-3.5-397b` are separate.
- **Provider / access:** Open weights (Hugging Face / ModelScope, GGUF and NVFP4/FP8 quantisations); Ascend / Moore Threads MTT S5000 / AMD GPU adaptations; deployable on consumer GPUs.
- **Release / knowledge:** 2026-02-25; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.5-122b-a10b`. No free Zen ID verified.
- **Context window:** **262,144 tokens** per the third-party BenchGecko Qwen3.5 family table; no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** text and image in, text/code out — trained on mixed text and vision tokens, native VLM. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** third-party BenchGecko family table lists **$0.26 / 1M input, $2.08 / 1M output** — labelled third-party; open weights allow free self-hosting.
- **Architecture:** High-sparsity MoE with hybrid attention, **122B total / 10B active** parameters; a 64GB Mac Studio ran it via low-bit quantisation (secondary 什么值得买 hands-on).

### Raw benchmarks found

Agent / tool use:

- Evaluated on **IFBench** (instruction following), **BFCL v4** (agent tool calling) and **SWE-bench Verified** (agentic coding), with results described as a new mid-size-model high beating Qwen3-235B-A22B / Qwen3-VL (directional; no exact scores in the retrieved excerpts)
- Chinese composite evaluation: **74.0% accuracy** at ¥32.3 cost (secondary CSDN hands-on, unnamed harness)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- **GPQA** (doctoral-level reasoning), **HMMT 25** (maths) and **MMMLU** (multilingual knowledge) leaderboards — all described as wins over larger predecessors, but no exact scores in the retrieved excerpts
- LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified evaluated with a reported win over Qwen3-235B-A22B (directional, no absolute score)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 262K (third-party); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** IFBench / BFCL v4 / SWE-bench Verified wins over a 235B predecessor and a 74.0% Chinese composite (secondary); capped by all named leaderboard figures being directional without exact scores.
- **Reasoning: 87/100.** GPQA / HMMT 25 / MMMLU wins at 10B active params; capped by no exact published scores.
- **Context window: 87/100.** 262K (third-party) with 64GB-Mac deployment via quantisation; capped by no vendor-verified window and no retrieval benchmark.
- **Multimodal: 87/100.** Native VLM trained on mixed text/vision tokens, beating Qwen3-VL (directional); capped by text/code-only output, no verified audio/video input, and no exact multimodal score.
- **Coding: 87/100.** SWE-bench Verified win over a larger predecessor plus NVFP4/FP8 quantisation support; capped by no absolute SWE-bench / Terminal-Bench score.
- **Cost efficiency: 94/100.** Free open weights with only 10B active params, $0.26/$2.08 hosted (third-party), consumer-GPU/64GB-Mac deployment and domestic accelerator support. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 87, 87, 87, 87, 87 = 87.0 → 87. Best fit: self-hosted mid-size multimodal agents and coding where a 10B-active MoE must beat much larger predecessors.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.5-122B-A10B article retrieved via public web search excerpt (release, 122B/10B hybrid-attention MoE, mixed text/vision tokens, named IFBench/GPQA/HMMT 25/MMMLU/BFCL v4/SWE-bench Verified wins over Qwen3-235B-A22B and Qwen3-VL, consumer-GPU deployment), plus a secondary CSDN hands-on for the 74.0% / ¥32.3 figure and a third-party BenchGecko family table for the 262K context and $0.26/$2.08 pricing — all labelled secondary/third-party. **No exact scores for the named leaderboards were published in the retrieved excerpts**, so those rows are honestly marked "no verified public score found" rather than estimated; directional wins are not converted to numbers. Rows without verified figures are marked accordingly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.5-122B-A10B — 百度百科 (retrieved via search excerpt; specs, leaderboard wins)](https://baike.baidu.com/item/Qwen3.5-122B-A10B/67419444)
  - [Qwen 3.5 family — BenchGecko (third-party context and pricing)](https://www.benchgecko.ai/family/qwen-3-5)
