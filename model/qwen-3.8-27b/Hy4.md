- Source: Alibaba/Qwen3.8-27B
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's 2026-08-14 open-sourced **native multimodal dense** 27B model under **Apache 2.0**, designed to run on high-end phones, consumer GPUs and ordinary home PCs. A distinct model; Qwen3.8-Max and Qwen3.8-Flash are separate sizes in the same generation.
- **Provider / access:** Hugging Face / ModelScope weights (BF16, FP8 and 500+ community quantisations); Transformers, vLLM, SGLang and TokenSpeed support; Day-0 adaptations for MediaTek Dimensity (automotive C-X1 cockpit and flagship mobile chips), Xuantie RISC-V C950, Jiangyuan D20 and Rockchip RK1828.
- **Release / knowledge:** 2026-08-14 (base generation 2026-08-03); knowledge cutoff: no verified public score found.
- **IDs:** `Qwen3.8-27B` / `qwen3.8-27b`. No free Zen ID verified.
- **Context window:** **262,144 tokens native**, extrapolated to **1,000,000 tokens via YaRN**; `reasoning_effort` with **xhigh / medium / low** tiers and built-in `preserve_thinking`.
- **Modalities:** text, image and video in, text out (native multimodal); programming, office/CoWork workflows, computer/phone/browser operation, visual mathematical problem solving. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** **Apache 2.0 open weights** — free for commercial use and secondary development, self-hosted; no API rate card in the retrieved page.
- **Architecture:** **27B dense** with a hybrid attention stack — **64 layers** in 16 repeated groups of "3 Gated DeltaNet + 1 Gated Attention", each followed by an FFN. On a 64-core Xuantie C950 (pure CPU, no discrete GPU) it reaches **>30 tokens/s** decode with **1.9s TTFT**; quantised to ~17–19GB VRAM for consumer GPUs.

### Raw benchmarks found

Agent / tool use:

- CoWorkBench (professional long tasks): **70.7** (Claude Opus 4.6 Max 68.2)
- OSWorld-Verified (computer operation): **84.3**
- AndroidWorld (phone operation): **81.9**
- WebArena-Verified (browser): **64.8**, up from the previous generation's **48.8**
- SWE-bench Pro: **+8.3 points** over Claude Opus 4.6 Max; QwenSWEBench: **+15.2 points** (relative deltas, no absolute figures published)
- Visual maths problem solving (with CI enabled): **94.6** — highest among the evaluated models
- Tau3-Banking / Tau2-Bench / GDPval-AA / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Reported to outperform Qwen3.7-Plus in several evaluations (directional, no numbers)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Pro and QwenSWEBench relative deltas above; no absolute scores published — no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 262K native / 1M via YaRN; an iPhone 17 Pro Max + M4 Pro MacBook Pro distributed-inference demo improved 8K prefill from 132→177 tok/s (+35%), 16K from 109→157 (+44%) and 32K from 101→130 (+29%), and cut 140K single-token write time from 279ms to 176ms — a hardware/inference result, not a retrieval benchmark
- MRCR / RULER / GraphWalks: no verified public score found

Adoption (context, not scored): >**1 million downloads** in two days, **500+** community quantisations, **>5 million** total related downloads, #1 on the Hugging Face trending board, and by 2026-09-22 the most-liked open model on Hugging Face ahead of DeepSeek-R1 and Meta-Llama3.1.

### Normalized scores (1–100)

- **Tool use: 91/100.** 84.3 OSWorld-Verified, 81.9 AndroidWorld, 64.8 WebArena-Verified and 70.7 CoWorkBench — all strong computer/phone/browser agent results for a 27B dense model; capped by no τ-bench/GDPval figure and relative-only SWE deltas.
- **Reasoning: 87/100.** 94.6 on visual maths problem solving (best in that evaluation) with three-tier reasoning_effort and preserve_thinking; capped by no GPQA/HLE/AA index figure.
- **Context window: 91/100.** 262K native extended to 1M via YaRN, with demonstrated long-context distributed inference; capped by 1M being an extrapolation rather than native and no retrieval benchmark.
- **Multimodal: 90/100.** Native text/image/video input with computer/phone/browser operation and a top visual-maths score; capped by text-only output, no verified audio input, and no published MMMU/video benchmark.
- **Coding: 87/100.** +8.3 over Opus 4.6 Max on SWE-bench Pro and +15.2 on QwenSWEBench; capped by those being relative deltas without absolute published scores.
- **Cost efficiency: 98/100.** Apache 2.0 free commercial weights, 17–19GB quantised VRAM, pure-CPU >30 tok/s on Xuantie C950, and phone/automotive edge deployment — exceptional economics. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 91, 87, 91, 90, 87 = 89.2 → 89. Best fit: local/edge-deployed multimodal agents, phone and desktop automation, and privacy-sensitive commercial use where Apache 2.0 weights and consumer hardware matter.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.8-27B article (Apache 2.0, 27B dense hybrid attention, 262K→1M YaRN, full benchmark table, edge hardware support, distributed-inference case, download stats). SWE-bench Pro / QwenSWEBench figures are relative deltas vs Claude Opus 4.6 Max and are reported as deltas, never as absolute scores. The iPhone/Mac distributed-inference numbers are hardware results, not retrieval benchmarks. Qwen3.8-Max / Flash and the `qwen-3.8-2400b-a95b` merged identity are separate, never merged here. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Qwen3.8-27B — 百度百科 (Apache 2.0, architecture, benchmarks, edge hardware, downloads)](https://baike.baidu.com/item/Qwen3.8-27B/68548115)
