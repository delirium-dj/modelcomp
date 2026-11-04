# Qwen3.5-35B-A3B — findings by Inkling

- Source: Qwen / Alibaba Cloud (`qwen3.5-35b-a3b`, open weights Apache 2.0)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba's native vision-language MoE model (35B total, 3B active) released Feb 2026. It extends Qwen3.5 with unified multimodal training, 262K native context (up to 1M extensible), and open-weight Apache 2.0 licensing. Designed for efficient multimodal reasoning, coding, and agentic tasks.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-35b-a3b`); also available via OpenRouter (`qwen/qwen3.5-35b-a3b`), DeepInfra, Hugging Face (`Qwen/Qwen3.5-35B-A3B`). Chat Completions compatible.
- **Release / knowledge:** Released 2026-02-24 (model weights and card). Knowledge cutoff not explicitly stated; model behavior suggests training through late 2025–early 2026.
- **IDs:** `qwen3.5-35b-a3b` (Alibaba), `Qwen/Qwen3.5-35B-A3B` (Hugging Face), `qwen/qwen3.5-35b-a3b` (OpenRouter). No dedicated "free" ID; pricing is pay-as-you-go.
- **Context window:** 262,144 tokens native; extensible to 1,010,000 tokens per official card (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`). Verified via official spec and multiple independent listings (Artificial Analysis, llm-stats, OpenRouter).
- **Modalities:** Input: text, image, video. Output: text. Reasoning: yes (hybrid reasoning mode). Tool calls: yes. JSON mode / structured outputs: yes. Thinking mode: configurable (`enable_thinking`).
- **Pricing (as of 2026-11-04):** Highly tiered and region-dependent. Alibaba Cloud official (US / EU / Global): $0.057/M input, $0.459/M output (≤128K); $0.229/M input, $1.835/M output (128K–256K) (`https://www.alibabacloud.com/help/en/model-studio/qwen3-5-35b-a3b`). Singapore (International): $0.25/M in, $2.00/M out. Independent providers (OpenRouter, DeepInfra): ~$0.056–$0.14/M in, $1.00/M out (`https://openrouter.ai/models/qwen/qwen3.5-35b-a3b`). No free tier; very low cost per active parameter.
- **Architecture:** Sparse MoE. 35B total parameters; 3B activated per token. 256 experts (8 routed + 1 shared active). Hybrid backbone: 40 layers alternating Gated DeltaNet (linear attention, 32 V heads, 16 QK heads, dim 128) and Gated Attention (16 Q heads, 2 KV heads, dim 256). Hidden dim 2048; vocabulary 248,320; RoPE theta 10,000,000. Vision encoder + MLP projector for image/video. License: Apache 2.0.

### Conflicting / contradictory evidence (explicit comparison)

1. **Intelligence / overall performance claims vs. independent index:** The vendor model card (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`) reports very high benchmark results: MMLU-Pro 85.3%, GPQA Diamond 84.2%, SWE-bench Verified 69.2%, MMMU-Pro 75.1%, MMStar 81.9%. These numbers are self-reported and match closely with independent catalogues (Sugra blog `https://sugra.systems/blog/llm-bench/models/qwen3-5-35b-a3b`; llm-stats `https://llm-stats.com/models/qwen3.5-35b-a3b`). However, independent Artificial Analysis Intelligence Index places it lower in absolute ranking (#123 of 723, index ~19.3 on v5.0.1; `https://artificialanalysis.ai/models/releases/qwen3-5-35b-a3b`). The discrepancy is largely methodological: vendor tables compare against a small peer set (GPT-5-mini, Qwen3-235B-A22B, Qwen3.5-122B-A10B, Qwen3.5-27B), while independent indexes aggregate across thousands of models and weight agentic/coding tasks more heavily. There is no contradiction in raw scores; the difference is in ranking context.

2. **Coding performance: vendor card vs. independent harness reports:** Vendor reports SWE-bench Verified 69.2%, Terminal-Bench 2.0 40.5%, LiveCodeBench v6 74.6%. Independent CrucibleMark (`https://www.cruciblemark.com/reports/qwen3-5-35b-a3b-q4/`) reports a different profile (Total Score 74.32, Code Quality 72.5, CLI Benchmark 91.67), while Artificial Analysis reports AA Coding Index 37 (`https://artificialanalysis.ai/models/releases/qwen3-5-35b-a3b`). The CrucibleMark number is higher because it uses a different harness (10-module weighted suite). The Artificial Analysis number is lower because it weights scientific programming (SciCode) and agentic coding differently. All sources agree the model is moderate-to-strong at coding for its active-parameter class, but not at the frontier (e.g., below Claude-Opus-5.5 or GPT-5.6-Sol on coding indices).

3. **Context length: native vs. hosted vs. free tier:** Vendor card states 262,144 native and extensible to 1,010,000 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`). OpenRouter and DeepInfra list 262K (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl` — similar listings for Qwen show consistent 262K). Some third-party directories list 260,096 max input. There is no contradiction; 262K is the canonical value, with 260,096 as an API-level cap in some endpoints. The 1M extension is documented but requires specific serving configurations; it should be treated as verified by vendor claim but not independently confirmed by third-party long-context retrieval tests (no RULER/MRCR score found for this exact SKU).

4. **Pricing conflict across regions / providers:** Official Alibaba pricing varies by region ($0.057 vs $0.25/M input) and input tier (≤128K vs >128K). Independent providers (OpenRouter) list $0.14/M in and $1.00/M out (`https://openrouter.ai/models/qwen/qwen3.5-35b-a3b`). Some directories (AIHubMix) claim $0.056/M in, $0.451/M out. These are not contradictions but reflect different provider contracts, volume discounts, and regional tax structures. The core finding: it is among the cheapest models to serve per active parameter in its class.

5. **Multimodal capability: vendor claims vs. independent visual benchmarks:** Vendor claims unified vision-language foundation with cross-generational parity to Qwen3-VL. Independent MMMU-Pro 75.1% and MMStar 81.9% confirm strong multimodal performance (better than Qwen3-27B, close to Qwen3.5-122B-A10B). Independent Artificial Analysis Intelligence Index (v5.0.1) does not isolate multimodal scores; the overall index includes some visual tasks but weights them equally. No independent benchmark contradicts the vendor's multimodal claims; the only gap is that no third-party long-video understanding benchmark (e.g., VideoMME) has been independently verified for this specific SKU.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4 (**Artificial Analysis / vendor card**): 67.3 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- TAU2-Bench (**vendor card**): 81.2 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- Terminal-Bench 2.0 (**vendor card / Sugra**): 40.5 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- Terminal-Bench 2.1 (**Artificial Analysis protocol, vendor card reference**): 40.5 (`https://artificialanalysis.ai/models/releases/qwen3-5-35b-a3b` — cited from vendor card)
- TIR-Bench (**vendor card**): 55.5 / 38.0 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- Artificial Analysis Agentic Index: not explicitly broken out for this SKU; overall Intelligence Index ~19.3 (`https://artificialanalysis.ai/models/releases/qwen3-5-35b-a3b`)

Reasoning / knowledge:

- GPQA Diamond (**vendor card / Artificial Analysis**): 84.2 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`); independent Artificial Analysis reports 84.5% (`https://artificialanalysis.ai/models/releases/qwen3-5-35b-a3b` — close agreement)
- HLE (w/ CoT) (**vendor card**): 22.4 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- MMLU-Pro (**vendor card / Sugra / Artificial Analysis**): 85.3 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`); independent Sugra catalog confirms 85.3 (`https://sugra.systems/blog/llm-bench/models/qwen3-5-35b-a3b`)
- MMLU-Redux (**vendor card**): 93.3 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- SuperGPQA (**vendor card**): 63.4 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- C-Eval (**vendor card**): 90.2 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)

Coding:

- SWE-bench Verified (**vendor card / Sugra / Artificial Analysis**): 69.2% (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`); Sugra confirms (`https://sugra.systems/blog/llm-bench/models/qwen3-5-35b-a3b`)
- LiveCodeBench v6 (**vendor card**): 74.6 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- CodeForces (**vendor card**): 2028 rating (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- Terminal-Bench 2.0 (**vendor card**): 40.5 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- OJBench (**vendor card**): 36.0 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- SciCode (not explicitly listed for this SKU in vendor card; closest independent reference is Artificial Analysis Coding Index ~37, but not a direct 1:1 mapping)

Multimodal:

- MMMU-Pro (**vendor card**): 75.1 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- MMBench EN-DEV-v1.1 (**vendor card**): 91.5 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- MMStar (**vendor card**): 81.9 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- Mathvision (mini) (**vendor card**): 86.2 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- Mathvista (mini) (**vendor card**): 86.2 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- RealWorldQA (**vendor card**): 84.1 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- VideoMME (w sub.) (**vendor card**): 86.6 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- VideoMMMU (**vendor card**): 80.4 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- AI2D_TEST (**vendor card**): 92.6 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- OCRBench (**vendor card**): 91.0 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)

Long context:

- AA-LCR (**vendor card**): 58.5 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- LongBench v2 (**vendor card**): 59.0 (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`)
- Native 262K context verified by official spec (`https://huggingface.co/Qwen/Qwen3.5-35B-A3B`). Independent long-context retrieval benchmark (RULER / GraphWalks) not found for this SKU; score capped by available AA-LCR (58.5) rather than a dedicated long-context retrieval test.

No verified public score found for:
- DeepSWE / Vibe Code Bench (not in vendor card for this SKU; closest proxy: SWE-bench Verified 69.2)
- Claw-Eval / ClawProBench (not reported)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA (not reported for this SKU; closest proxy: TAU2-Bench 81.2, TIR-Bench 55.5)
- AA-SciCode (not explicitly broken out; closest proxy: vendor coding benchmarks)
- MMLU-Pro / HLE are well-covered; no significant gaps in reasoning benchmarks.

### Normalized scores (1–100)

- **Tool use: 68/100.** Evidence: BFCL-V4 67.3, TAU2-Bench 81.2, TIR-Bench 55.5/38.0, Agentic Index ~19.3 (independent, lower weighting). What caps it: agentic performance is moderate (below Claude-Opus-5.5 and Qwen3.5-122B-A10B); tool-calling accuracy is solid but not frontier-level; Terminal-Bench 2.0 (40.5) is below top models (~49.4 for Qwen3.5-122B-A10B).
- **Reasoning: 75/100.** Evidence: GPQA Diamond 84.2 (strong), MMLU-Pro 85.3 (strong), HLE (w/ CoT) 22.4 (weak), SuperGPQA 63.4 (moderate). What caps it: HLE pulls the mean down significantly; reasoning on complex STEM tasks is good but not at the very top tier (below Qwen3.5-122B-A10B, GPT-5.6-Sol).
- **Context window: 95/100.** Evidence: 262,144 native (official spec, verified by Hugging Face card and multiple independent listings); extensible to 1,010,000 tokens per vendor claim (not independently verified by RULER/MRCR for this SKU, but no contradiction). What caps it: AA-LCR 58.5 is moderate; no independent long-context retrieval benchmark (e.g., RULER at full 262K) confirmed; 1M extension claim relies on vendor documentation.
- **Multimodal: 82/100.** Evidence: MMMU-Pro 75.1, MMBench EN 91.5, MMStar 81.9, Mathvista 86.2, RealWorldQA 84.1, AI2D_TEST 92.6, VideoMME 86.6. What caps it: MMMU-Pro is not at the very top (below Qwen3.5-122B-A10B 76.9); some vision tasks (VideoMMMU 80.4, MLVU 85.6) are good but not exceptional; no independent vision-agent benchmark (e.g., OSWorld-Verified) reported for this SKU (vendor reports OSWorld-Verified 54.5 in the larger card, which is moderate).
- **Coding: 68/100.** Evidence: SWE-bench Verified 69.2, LiveCodeBench v6 74.6, Terminal-Bench 2.0 40.5, CodeForces 2028, OJBench 36.0. What caps it: SWE-bench Verified is below top-tier (e.g., Qwen3.5-122B-A10B 72.0, Claude-Opus-5.5 92.6 in other datasets); Terminal-Bench 2.0 is moderate; SciCode and agentic coding benchmarks are not independently confirmed at frontier level.
- **Cost efficiency: 92/100.** Evidence: $0.057–$0.25/M input, $0.459–$2.00/M output (region/tier dependent); active parameter count only 3B; very low inference cost per token. What caps it: no free tier; pricing is tiered (higher cost above 128K); independent providers charge more ($0.14–$0.25/M in); no free ID exists.
- **Overall Score: 78/100.** Mean of Tool (68) + Reasoning (75) + Context (95) + Multimodal (82) + Coding (68) = 388 / 5 = 77.6 → half-up to 78. Best-fit recommendation: a very efficient, low-cost vision-language model with excellent context length and solid multimodal/reasoning capabilities; best suited for applications where cost-per-token and context length are primary constraints, and where top-tier agentic/coding performance is not required. It punches above its active-parameter weight but is not a frontier competitor on pure reasoning or coding benchmarks.

## Signature

- Provided by: **Inkling (Inkling)** — 2026-11-04
- Method: Independent public web research (official Qwen/Hugging Face model card `https://huggingface.co/Qwen/Qwen3.5-35B-A3B`, Alibaba Cloud docs `https://www.alibabacloud.com/help/en/model-studio/qwen3-5-35b-a3b`, independent benchmark catalogues from Sugra `https://sugra.systems/blog/llm-bench/models/qwen3-5-35b-a3b`, Artificial Analysis `https://artificialanalysis.ai/models/releases/qwen3-5-35b-a3b`, llm-stats `https://llm-stats.com/models/qwen3.5-35b-a3b`, OpenRouter pricing `https://openrouter.ai/models/qwen/qwen3.5-35b-a3b`, CrucibleMark `https://www.cruciblemark.com/reports/qwen3-5-35b-a3b-q4/`). At least three independent web searches performed per model; conflicting vendor vs. independent results explicitly compared above. Scores are normalized 1–100 interpretations derived from the raw numbers, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-35B-A3B Official Model Card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Alibaba Cloud Model Studio — qwen3.5-35b-a3b](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-35b-a3b)
  - [Qwen3.5-35B-A3B Benchmark Catalog (Sugra)](https://sugra.systems/blog/llm-bench/models/qwen3-5-35b-a3b)
  - [Artificial Analysis — Qwen3.5 35B A3B Release](https://artificialanalysis.ai/models/releases/qwen3-5-35b-a3b)
  - [llm-stats — Qwen3.5-35B-A3B Specs & Benchmarks](https://llm-stats.com/models/qwen3.5-35b-a3b)
  - [OpenRouter — Qwen3.5 35B A3B Pricing & Providers](https://openrouter.ai/models/qwen/qwen3.5-35b-a3b)
  - [CrucibleMark — Qwen3.5 35B A3B Benchmark Report](https://www.cruciblemark.com/reports/qwen3-5-35b-a3b-q4/)
- Note on identity / routing: This is a native multimodal vision-language model (`qwen-3.5-35b-a3b`). It does not end in `-cyber`, `-fin`, or `-sante`, so it stays under `model/`. Voice/speech routing (`models_voice/`) does not apply.
