# Agnes 3.0 Flash — findings by MiMo 2.6 Flash

- Source: Agnes AI (`Agnes-AI/Agnes-3.0-Flash` Preview)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Singapore lab Agnes AI's fast multimodal hybrid-attention model (Sep 2026) — open-weights Preview checkpoint: 33B params, 262K context, text/image/video in with adjustable reasoning effort and tool calling; a separate production/API checkpoint with 1M context is served by Agnes AI.
- **Provider / access:** Hugging Face `Agnes-AI/Agnes-3.0-Flash` (Apache 2.0, bf16, requires `trust_remote_code=True`); served via SGLang/vLLM with OpenAI-compatible Chat Completions (`serve.sh` overlay); Agnes AI API for the separate 1M production checkpoint.
- **Release / knowledge:** announced and released 2026-09-14 (LLM Releases record; HF citation Sep 2026); knowledge cutoff not announced.
- **IDs:** `Agnes-AI/Agnes-3.0-Flash` (HF, Preview), `Agnes-3.0-Flash` (SGLang served name); no OpenCode Zen Free ID found.
- **Context window:** 262,144 tokens (262K) for the open Preview checkpoint; the production/API model is a different checkpoint with a 1M-token window — its benchmarks must not be attributed to these weights.
- **Modalities:** text, image, video in; text out; reasoning yes (high / medium / low effort plus thinking-off switch); tool calls yes (custom `<think>…` format; structured `tool_calls` needs a matching parser); streaming yes; JSON mode not explicitly claimed.
- **Pricing (as of 2026-11-12):** open weights free (Apache 2.0); no public API price found; self-hosting needs ~66 GB bf16 on 1× H100 80 GB / H200 141 GB (or --tp 2).
- **Architecture:** 33B hybrid-attention decoder — 72 layers = 54 gated-delta-rule recurrent + 18 global GQA (24 query / 4 KV, 3:1 ratio), hidden 5120, SwiGLU (17408 + 2048 parallel branch), 3-axis rotary positions, vocab 248,320, 27-layer vision tower (patch 16), recurrent state fp32.

### Raw benchmarks found

> All rows are the vendor-compiled table for the **Agnes-3.0-Flash Preview** open-weight checkpoint (HF model card, 2026-09); reference columns are other models from mixed harnesses, not a controlled comparison. Production/API-model results are explicitly excluded by the vendor.

Reasoning / knowledge:

- GPQA Diamond: **85.05%** (reference columns: Qwen3.8 90.5, Gemini 3.5 Flash 92.2, MiniMax M3 92.9)
- AA-LCR: **68.33%** (reference: Qwen3.8 82.0, DeepSeek V4 Flash 79.7)
- AA-Omniscience Accuracy: **23.00%** (reference: DeepSeek V4 Flash 40.4, Gemini 3.5 Flash 51.4)
- HLE / MMLU-Pro / AA Intelligence Index: no verified public score found

Coding:

- SciCode: **38.08%** (reference: Qwen3.8 46.6, Gemini 3.5 Flash 53.1)
- SWE-bench / LiveCodeBench / DeepSWE / Terminal-Bench: no verified public score found

Instruction following / tool use:

- IFBench: **74.20%** (reference: Qwen3.8 79.5, MiniMax M3 82.9)
- Terminal-Bench / Tau3 / GDPval / BFCL / OSWorld: no verified public score found (tool calling is supported but unbenchmarked)

Long context: no MRCR / RULER retrieval score published (262K window advertised).

### Normalized scores (1–100)

- **Tool use: 56/100.** Tool calling and reasoning-effort controls are first-class in the chat template, but zero agentic harness numbers (Terminal-Bench, Tau3, BFCL, OSWorld) exist for this ID — the missing-evidence penalty keeps it mid-low despite the capability claims.
- **Reasoning: 80/100.** GPQA Diamond 85.05% is solidly upper-mid (below the 90%+ frontier ref) and AA-LCR 68.33% is genuinely strong, but Omniscience 23.0% trails frontier models by 18–28 points and no HLE/Index row exists.
- **Context window: 76/100.** 262K native sits in the 200K–500K tier (65–84); no measured retrieval at depth, so mid-tier applies (the 1M production checkpoint is a different model and not scored here).
- **Multimodal: 78/100.** Text/image/video in with text out lands in the +video tier (75–90); no vision benchmark rows (MMMU/OCR) were published, so it stays at the lower end of that tier.
- **Coding: 65/100.** SciCode 38.08% matches the methodology's "SciCode <40% → mid" band and no SWE-bench / LiveCodeBench / DeepSWE number exists for this ID — the coding story is unproven beyond SciCode.
- **Cost efficiency: 90/100.** Apache 2.0 weights at $0 beat most paid tiers, but a 66 GB bf16 footprint requiring H100/H200-class hardware is a real serving cost, and no cheap hosted API price for these weights was found.
- **Overall Score: 71/100.** (56 + 80 + 76 + 78 + 65) / 5 = 71.0 → 71 — best-fit: an offline-capable mid-size multimodal reasoner for teams that already run datacenter GPUs, with agentic coding still to be proven.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (vendor model card, release tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Agnes-AI/Agnes-3.0-Flash (Preview model card + benchmarks)](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)
  - [LLM Releases — Agnes 3.0 Flash (release record, 2026-09-14)](https://www.llm-releases.com/models/agnes-3-0-flash)
  - [Agnes AI official site](https://agnes-ai.com/)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
