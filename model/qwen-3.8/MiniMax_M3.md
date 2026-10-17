# Qwen 3.8 — findings by MiniMax M3

- Source: Alibaba / Qwen 3.8 27B (Apache 2.0 open weights, `opencode/qwen-3.8`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Naming note.** "Qwen 3.8" in our roster is the **27B dense Apache 2.0 open-weight model** released by Alibaba on Hugging Face on 2026-08-14 (per `meta.json`, `opencode/qwen-3.8`, 262K native context). It is the open sibling of Qwen3.8-Max (2.4T MoE, API-only). The two share a generation name but have different deployment stories; this report evaluates the 27B variant that the roster entry points to.

## Model card

- **Name:** Qwen 3.8 27B (Apache 2.0)
- **Short description:** Native multimodal dense 27B open-weight model; self-hostable near-flagship agentic coding, long-context (262K native / 1M YaRN), on a single ~17 GB consumer GPU.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8` (managed); also self-hostable from Hugging Face under Apache 2.0; Unsloth Dynamic GGUFs, Ollama, LM Studio, Transformers / vLLM / SGLang FP8 recipes.
- **Release / knowledge:** Weights published 2026-08-14 on Hugging Face under Apache 2.0. Generation announced 2026-08-03 alongside the API-only Qwen3.8-Max flagship. Managed Qwen Cloud hosted listing was announced as "coming soon" — no official per-token API price published in public sources.
- **IDs:** `opencode/qwen-3.8` (managed). Self-host: `Qwen/Qwen3.8-27B` (Hugging Face). Model Code per Alibaba: `qwen3.8-27b`.
- **Context window:** 262,144 tokens native; 1,000,000 tokens via YaRN (factor 4.0). 33K output (per `meta.json`).
- **Modalities:** Text, image, video in; text out. Native vision (not bolted on), per the Hugging Face model card. Tool calls and function-calling supported. Reasoning on by default (xhigh).
- **Pricing (as of 2026-10-13):** `meta.json` lists `~$0.42/$3.00 per 1M` for the hosted route; self-hosted is `$0` (Apache 2.0). Quants on consumer hardware (e.g. Unsloth Dynamic GGUF, Bonsai 2 1.76-bit derivative) put the effective price at zero for local deployment.
- **Architecture:** 27B-parameter **dense** Causal LM with Vision Encoder. 5120 hidden, 64 layers, hybrid Gated DeltaNet-plus-FFN + Gated Attention layout (16 repeats of 3× DeltaNet+FFN followed by 1× Gated Attention+FFN per cycle). Multi-Token Prediction (MTP) trained across multiple steps. Reasoning effort exposed as `xhigh` (default) / `medium` / `low`.

### Raw benchmarks found

Agent / tool use:

- **SWE-bench Pro: 61.7** (Qwen's own benchmark card, vs 53.4 for Claude Opus 4.6 Max in the same vendor-run table). No independent SWE-bench Pro run has been published as of 2026-10-13.
- **DeepSWE 1.1: 42.2** (Qwen benchmark card) vs 13.3 for the prior generation (Qwen 3.6 27B).
- **OSWorld-Verified (computer-use): 84.3** (Qwen third-party summary).
- **AndroidWorld (mobile-use): 81.9** (Qwen third-party summary).
- **LiveCodeBench v6: 90.3** (Qwen benchmark card).
- **Bonsai 2 derivative (1.76-bit): 83.9 aggregate benchmark points** vs 85.4 for the base model — 98.2% retention at ~5.9 GB (single-source report; not independent).

Reasoning / knowledge:

- No verified GPQA Diamond or HLE numbers for the **27B specifically** in our slice; Qwen's launch table benchmarks the 2.4T-Max variant. Defaults to xhigh reasoning, which independent tester Simon Willison found produces heavy over-thinking on simple prompts (22,276 reasoning tokens for an SVG-of-a-circle prompt).
- Reasoning Effort is a per-request dial (xhigh / medium / low); thinking is on by default and can be disabled entirely. Preserve Thinking flag controls whether reasoning blocks are retained across multi-turn.

Long context:

- 262,144 tokens native; 1,000,000 tokens via YaRN (factor 4.0). Long-context fidelity at the full 1M YaRN-extended window is **unverified** against native-context quality in independent testing.

Multimodal:

- **OmniDocBench 1.5: 91.1%** (third-party summary of Qwen's table).
- Native image and video understanding per the Hugging Face model card. Unsloth NVFP4 / FP8 quants preserve the vision path.

### Normalized scores (1–100)

> Placement against the frontier. All agentic and coding numbers above are **vendor-reported** (Qwen's own benchmark card, run inside Anthropic's Claude Code harness per the Qwen3.8-Max table footnote). Treated as a strong claim, not a measurement; scoring reflects the vendor claim with a discount for the verification gap.

- **Tool use: 75/100.** SWE-bench Pro 61.7 / OSWorld-Verified 84.3 / AndroidWorld 81.9 are credible vendor claims; independent runs not yet published. Below the 80-class ceiling held by Opus 4.6 / Sonnet 4.6 / GPT-5.5.
- **Reasoning: 70/100.** No 27B-specific GPQA or HLE in our slice; xhigh default over-thinks; tier is "near-flagship on agentic coding, behind on broad-knowledge exams" per Qwen's own narrative.
- **Context window: 88/100.** 262K native + 1M via YaRN is among the longest practical windows in any 27B-class open model. Discount from 90+ because 1M fidelity is unverified.
- **Multimodal: 72/100.** Native vision + video in; 91.1 on OmniDocBench. Image + video in only (text out), so not full generative multimodal. Solid for a 27B.
- **Coding: 78/100.** Qwen claims 61.7 SWE-bench Pro and 90.3 LiveCodeBench v6, beating Opus 4.6 Max on the vendor-run card. Discounted because (a) all numbers vendor-run, (b) Simon Willison's hands-on testing of xhigh defaults produced heavy over-thinking that hurts throughput, (c) the headline 21-minute SVG-of-a-pelican run shows the default reasoning mode is not how you should ship this.
- **Cost efficiency: 95/100.** Apache 2.0 self-host = $0 marginal cost; managed route ~$0.42/$3.00 (mid-pack API price). For self-hosted teams the cost story is unmatched in the frontier-near tier.
- **Overall Score: 77/100** Mean of the 5 non-cost quality dims (75+70+88+72+78)/5 = 76.6 → 77.

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: independent MiniMax M3 evaluation. Sources: Hugging Face model card, kie.ai Qwen 3.8 27B release writeup, Alibaba Cloud announcement, Simon Willison hands-on, Unsloth deployment notes, Qwen3.8-Max vendor table (Qwen ai emergent.sh summary) for cross-reference. All coding/agentic scores are vendor-reported (Qwen's own benchmark card) and discounted accordingly. Cost reflects Apache 2.0 self-host availability.
- Future sources: add a new file next to this one, e.g. `Qwen_M3.md`, using the same headings; the Qwen3.8-Max (2.4T API) sibling has separate evidence and should be a separate row in `model-queue.md`.

