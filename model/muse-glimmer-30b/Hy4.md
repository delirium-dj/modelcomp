- Source: Meta/Muse Glimmer 30B
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's 2026-08-11 open-weight 30B dense multimodal agent model — the company's first public weight release since Llama 4, distilled from the closed Muse Spark model and built for local, always-on agent workflows. A distinct model; `muse-spark-1.2` (whose distillate it is), `muse-ember` and `muse-spark-open` are separate.
- **Provider / access:** Apache 2.0 weights on Hugging Face (free download, user bears compute); DFlash block-level speculative decoding; fully private local mode; 4-bit quantisation under 20GB, runs on 24GB/32GB consumer GPUs or MacBooks.
- **Release / knowledge:** 2026-08-11 (Zuckerberg's AI-roadmap essay 2026-08-10); knowledge cutoff: no verified public score found.
- **IDs:** `muse-glimmer-30b`. No free Zen ID verified.
- **Context window:** **128,000 tokens** (secondary Bilibili hands-on, which notes ~96GB VRAM is safer for full 128K use); no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** text and image in, text/code out (dense multimodal with a separate vision encoder per secondary analysis); multi-step reasoning, tool calling, local coding agents and failure recovery. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** free Apache 2.0 weights — no API rate card in the retrieved pages.
- **Architecture:** **~30B dense** (29.6B per secondary analysis), distilled via logic distillation from the closed Muse Spark; ~64GB VRAM for high precision (secondary), ~17GB at low-bit quantisation; DFlash speculative decoding gives several-fold throughput gains on some devices.

### Raw benchmarks found

Agent / tool use:

- Optimised for local/always-on agent workflows, complex multi-step reasoning and tool calling (qualitative)
- Public benchmark results are stated to exist but no exact scores were published in the retrieved excerpts — no verified public score found
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Local coding-assistant and agent-tool workflow targeting (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 128K (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** Purpose-built for persistent local tool-calling agents with DFlash speculative decoding and private mode; capped by no published agent benchmark score.
- **Reasoning: 81/100.** Logic-distilled 30B dense model for multi-step reasoning; capped by no numeric reasoning benchmark in the retrieved sources.
- **Context window: 82/100.** 128K context (secondary) on consumer hardware; capped by high VRAM needs at full length and no retrieval benchmark.
- **Multimodal: 84/100.** Native vision encoder with text+image input on a local 30B model; capped by text/code-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 81/100.** Designed for local coding agents and failure recovery; capped by zero published coding benchmark scores.
- **Cost efficiency: 96/100.** Free Apache 2.0 weights, <20GB at 4-bit, consumer-GPU/MacBook deployment, full privacy and DFlash throughput gains. Excluded from Overall.
- **Overall Score: 82/100.** Half-up mean of 84, 81, 82, 84, 81 = 82.4 → 82. Best fit: privacy-sensitive, always-on local multimodal agents on a single consumer GPU.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Glimmer article retrieved via public web search excerpt (release, 30B dense, Apache 2.0, <20GB 4-bit quantisation, 24/32GB consumer hardware, DFlash, Muse Spark distillation, private mode), plus secondary CSDN / Bilibili analyses for the 29.6B exact count, separate vision encoder, 64GB high-precision VRAM and 128K context — explicitly labelled secondary. No exact benchmark figures were published in the retrieved excerpts, so those rows are honestly marked "no verified public score found" rather than estimated. `muse-spark-1.2` (the distillation source), `muse-ember` and `muse-spark-open` are separate folders, never merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Muse Glimmer — 百度百科 (retrieved via search excerpt; specs, licence, distillation, deployment)](https://baike.baidu.com/item/Muse%20Glimmer/68490095)
  - [Meta Muse Glimmer 30B 全面解读 — CSDN (retrieved via search excerpt; secondary architecture)](https://blog.csdn.net/gitblog_00977/article/details/159449754)
