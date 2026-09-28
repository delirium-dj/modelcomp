# Qwen 3.7 Plus — findings by Qwen 3.8 27B

- Source: Alibaba/Qwen3.7-Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's cost-effective Plus-tier model in the Qwen3.7 series; strong generalist for agentic, reasoning, and coding work at mid price points. Not a variant/alias of another entry.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7-plus`; OpenRouter `qwen/qwen3.7-plus` (served by Alibaba endpoint `qwen/qwen3.7-plus-20260602`, Chat Completions API).
- **Release / knowledge:** ~2026-06-02 (OpenRouter snapshot suffix `20260602`; record created 2026-06-03). Knowledge cutoff: no verified public figure found.
- **IDs:** `qwen/qwen3.7-plus` (OpenRouter), `opencode/qwen-3.7-plus` (Zen curated entry)
- **Context window:** 128K total on the Zen entry; 1M native per OpenRouter endpoint (983,616 in / 131,072 max out) — endpoint value verified from OpenRouter API record.
- **Modalities:** text+image in, text out (OpenRouter endpoint `input_modalities: [text, image]`); reasoning yes; tool calls yes (full tool_choice support); JSON/structured outputs yes. Zen curated entry lists text in/out.
- **Pricing (as of 2026-09-28):** $0.32 in / $1.28 out / $0.064 cached-read per 1M (OpenRouter, Alibaba endpoint, prompts < 256K); prompts ≥ 256K: $0.96 in / $3.84 out. Paid tier.
- **Architecture:** Proprietary (BenchLM source type); parameter count not publicly verified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **70.3%** (BenchLM, benchlm.ai/models/qwen3-7-plus, updated 2026-09-27; model overall 55.78, rank #50/508)
- Terminal-Bench 2.1 (Vals): **52.8%** (same source)
- Tau3-Banking / Tau2-Bench: τ²-bench **93%** (BenchLM; no Tau3-Banking-specific number found)
- GDPval-AA: **886** (normalized 12.8%; BenchLM)
- Claw-Eval / ClawProBench: Claw-Eval **62.7%** (BenchLM)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas **73.2%**, BFCL v4 **72.9%** (BenchLM); Toolathon no verified public score found
- Extras: OSWorld-Verified **73.3%**, AndroidWorld **81.0%**, QwenClawBench **61.8%**, VITA-Bench **45.6%**, DeepPlanning **62.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (AA-GPQA Diamond 90.0%; BenchLM)
- HLE: **34.7%** (AA-HLE 35.6%; BenchLM)
- LCR / MLCR: **73.0%** (AA-LCR; BenchLM)
- CritPt: **9.1%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **25.2 / 55.78 #50 of 508**
- Omniscience Accuracy / Hallucination Rate: **22.5% / 27.7%** (BenchLM); MMLU-Pro **88.5%**, SuperGPQA **71.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **77.7% / 57.6%** (BenchLM)
- LiveCodeBench: **89.6%** (BenchLM)
- SciCode / AA-SciCode: **51.3% / 46.1%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **55.9%**; SWE Multilingual **75.8%** (BenchLM)

Long context:

- MRCRv2 **91.7%** (BenchLM, at 1M-class window); no RULER / GraphWalks value found for this exact model.

Multimodal (native API):

- MMMU-Pro **79%**, MathVision **90.3%**, CharXiv **85.9%**, Video-MME (subtitle) **88.0%**, OCRBench V2 **70.7%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 93%, MCP Atlas 73.2%, OSWorld-Verified 73.3% are strong, but TB2.1 (Vals) 52.8% sits in the mid band (45–60%) and GDPval-AA 886 is just under the mid 900–1200 range; mid-tier agentic all-rounder caps it.
- **Reasoning: 78/100.** GPQA Diamond 90.3% is frontier-class and LCR 73% is healthy, but HLE 34.7% is below the 40% frontier mark and the AA Intelligence Index (25.2) is mid-band; CritPt 9.1% drags.
- **Context window: 58/100.** Evaluated Zen tier is 128K total (100K–200K band → 50–64, 128K ≈ 58); native 1M exists via the OpenRouter/Alibaba endpoint but the curated tier is what is scored.
- **Multimodal: 65/100.** Verified text+image in / text out on the native endpoint (MMMU-Pro 79%, MathVision 90.3%); no video-in on the evaluated tier and the Zen entry is text-only, which caps it.
- **Coding: 82/100.** SWE-bench Verified 77.7% and LiveCodeBench 89.6% are strong, SciCode 51.3% nears the 55% frontier ref, but AA Coding Index 55.9% and SWE-bench Pro 57.6% keep it under 90.
- **Cost efficiency: 94/100.** $0.32/$1.28 per 1M with $0.064 cache reads is between the ~$0.60/$2.20 (≈92) and $0.10/$0.20 (≈97–99) reference points; cheaper side wins.
- **Overall Score: 71/100.** Mean of 70/78/58/65/82 = 70.6 → 71 (half-up); best fit: cost-efficient daily agentic/coding workhorse when 1M work can use the native endpoint.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-28
- Method: public internet research (BenchLM model page, OpenRouter API endpoint record); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
