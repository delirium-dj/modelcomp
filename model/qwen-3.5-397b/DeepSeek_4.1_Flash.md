# Qwen3.5-397B-A17B — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen3.5-397B-A17B (`Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B
- **Short description:** Alibaba's flagship open-weight sparse MoE of early 2026 (released 2026-02-16), natively multimodal (early-fusion vision-language) with thinking-by-default reasoning, native tool calling/MCP, and a long-context hybrid attention stack. `397B` is a parameter count, not a version.
- **Provider / access:** Alibaba first-party API, DeepInfra, Novita, OpenRouter; OpenAI-compatible. OpenCode Zen tracks `opencode/qwen-3.5-397b`. Open weights (Apache-2.0).
- **Release / knowledge:** 2026-02-16; knowledge cutoff not separately published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`; `opencode/qwen-3.5-397b`.
- **Context window:** **262,144 native, extensible to 1,010,000** (HF card, YaRN); anchor-hosted sibling Qwen3.5-Plus defaults to 1M. Max output not separately published.
- **Modalities:** text, image and **video** in; text out. Reasoning (thinking by default, server-side disable); native tools, MCP, agentic (Qwen-Agent/Qwen Code).
- **Pricing (as of 2026-10-09):** **$0.45–$0.60 in / $3.00–$3.60 out** with $0.22–$0.24 cached (DeepInfra/Alibaba); blended ~$0.385/$2.45. Paid; Apache-2.0 self-host.
- **Architecture:** sparse MoE, **397B total / 17B active**; 60 layers; hybrid Gated DeltaNet (linear attention) + Gated Attention; 512 experts (10 routed + 1 shared); hidden 4096; 248,320 vocab; MTP; open weights Apache-2.0.

### Raw benchmarks found

> Self-reported rows are the HF model card; independent rows are Vals AI / Artificial Analysis / BenchmarkList / Epoch.

Agent / tool use:

- Tau2-Bench: **86.7** self; Tau2 Telecom **95.6** (independent); Tau2 Airline 81.5 (independent)
- BrowseComp 69.0 / 78.6 (self); WideSearch 74.0 (self)
- ScreenSpot-Pro **76.8** (independent); t2-bench 87.9 (independent)

Reasoning / knowledge:

- GPQA: **88.4** self / GPQA Diamond 89.3 (independent)
- HLE: 28.7 self (37.6 HLE-Verified; 48.3 with tools) / 29.0 independent
- MMLU-Pro: 87.8 self / 88.3 independent; AIME 2026 91.3 self / 93.3 independent
- HMMT Feb 2025 94.8; IMOAnswerBench 80.9; AA Intelligence Index 18 (AA) — conflict: 33.68 (BenchmarkList)

Coding:

- SWE-bench Verified: 76.4 self / **69.9** independent; SWE Multilingual 69.3 / 67.7
- Terminal-Bench 2: 52.5 self / Terminal-Bench 2.1 **51.3** (Vals/BenchmarkList)
- LiveCodeBench v6 83.6 self / 79.3 independent

Multimodal / long context:

- MMMU 85.0; MMMU-Pro 79.0; MathVision 88.6; OmniDocBench 1.5 90.8; OCRBench 93.1 (self)
- RULER **90.1** (independent); AA-LCR 68.7 self / 77.3 independent; **no MRCR published**

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 Telecom 95.6, ScreenSpot-Pro 76.8 and BrowseComp 78.6 are strong; capped by mid Tau2 overall 86.7 and thin GDPval evidence.
- **Reasoning: 82/100.** GPQA 88.4–89.3%, MMLU-Pro 87.8–88.3% and AIME 91–93% are high; HLE 28.7% and a low AA Index (18–34) cap it.
- **Context window: 88/100.** 262K native extensible to 1.01M (500K–1M band) with RULER 90.1; no ≥98%-at-512K retrieval benchmark, so not held at 95+.
- **Multimodal: 80/100.** Text + image + **video** input (video band) with MMMU-Pro 79.0 and MathVision 88.6; no audio.
- **Coding: 76/100.** SWE-bench Verified 69.9–76.4%, LiveCodeBench 79–84%, Terminal-Bench 2.1 51.3% are strong for open weights.
- **Cost efficiency: 90/100.** $0.45–$0.60/$3.00–$3.60 with caching; Apache-2.0 open weights enable self-hosting.
- **Overall Score: 81/100.** (78 + 82 + 88 + 80 + 76) / 5 = 80.8 → 81. Best fit: open-weight multimodal long-context reasoning and agent work; self-host for cost control.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Hugging Face model card, Artificial Analysis, Vals AI, BenchmarkList, Epoch and LLM Stats. Note `397B` is a parameter count, not a version; self-reported vs independent rows are labelled and AA-Index conflicts surfaced. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
