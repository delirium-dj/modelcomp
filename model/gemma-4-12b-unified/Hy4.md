- Source: Google DeepMind/Gemma 4 12B (Unified)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's June 2026 Apache 2.0 open-weight **unified encoder-free multimodal** model — the first mid-size Gemma 4 with native audio input, sitting between the E4B edge variant and the 26B MoE. A distinct model; per the project identity roster `gemma-4.12b-unified` (a dotted param-size misreading) was folded into this canonical hyphenated folder and must never be re-scaffolded.
- **Provider / access:** Apache 2.0 weights; Ollama / LM Studio local deployment; 16GB VRAM or unified memory minimum for laptop use; Gemma 4 family downloads exceeded 150 million.
- **Release / knowledge:** 2026-06 (technical report 2026-07-10); knowledge cutoff: no verified public score found.
- **IDs:** `gemma-4-12b-unified` (vendor `gemma-4-12B`). No free Zen ID verified.
- **Context window:** **256,000 tokens**, with hybrid sliding-window + global attention.
- **Modalities:** **text, image, audio and video in; text out** — raw pixels and audio waveforms fed directly into one Transformer trunk (encoder-free, only a 35M-parameter projection layer for the 12B model); **>140 languages**; multi-token-prediction draft head. No verified non-text output.
- **Pricing (as of 2026-11-14):** free Apache 2.0 weights — no API rate card in the retrieved pages.
- **Architecture:** **~12B dense unified** (11.95B per secondary analysis), encoder-free; hybrid sliding-window/global attention for 256K context; MTP draft head for lower latency; performs close to the 26B MoE on standard benchmarks at less than half its memory footprint.

### Raw benchmarks found

Agent / tool use:

- Local agent and multimodal workflow targeting; 140+ language support (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Standard benchmark results "close to the 26B model" (directional, no exact figures in the retrieved excerpt)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Code-assistance and local-agent use cases named in secondary OSCHINA coverage (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K window with hybrid attention; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** Local always-on agent design, 140+ languages, low-latency MTP drafting and Ollama/LM Studio support; capped by no scored agent harness.
- **Reasoning: 82/100.** Near-26B benchmark standing at half the memory; capped by that being directional with no exact scores.
- **Context window: 89/100.** 256K context in a 12B model via hybrid sliding-window/global attention on 16GB hardware; capped by no retrieval benchmark.
- **Multimodal: 93/100.** Text, image, audio and video raw input into a single encoder-free trunk — exceptional breadth for 12B; capped by text-only output and no published multimodal benchmark score.
- **Coding: 80/100.** Code-assistant use case with efficient local inference; capped by no published coding benchmark for this exact ID.
- **Cost efficiency: 97/100.** Free Apache 2.0 weights, 16GB laptop deployment, <half the 26B memory and MTP latency reduction. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 83, 82, 89, 93, 80 = 85.4 → 85. Best fit: fully local omni-modal agents on laptops and consumer GPUs, especially audio/vision workflows with privacy needs.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemma412B and Gemma 4技术报告 articles retrieved via public web search excerpt (release, 12B unified encoder-free architecture, 35M projection layer, 256K context, four modalities, 140+ languages, 16GB deployment, MTP, Apache 2.0, 150M family downloads), plus secondary OSCHINA / CSDN analyses for the 11.95B exact count and benchmark coverage — labelled secondary. No exact benchmark figures were published in the retrieved excerpts, so those rows are honestly marked "no verified public score found". Identity handling follows the project's generated roster: `gemma-4.12b-unified` and `gemma-4.26b-a4b` are over-normalized dotted param-size duplicates that were folded into their hyphenated canonical folders and must never be re-scaffolded; E2B/E4B/26B/31B are separate models. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Gemma412B — 百度百科 (retrieved via search excerpt; specs, modalities, 256K, licence)](https://baike.baidu.com/item/Gemma412B/67927335)
  - [Gemma 4技术报告 — 百度百科 (retrieved via search excerpt; encoder-free architecture)](https://baike.baidu.com/item/Gemma%204技术报告/68680921)
