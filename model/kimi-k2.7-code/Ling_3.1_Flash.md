# Kimi K2.7 Code — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Kimi K2.7 Code
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **META NOTE:** This folder's meta.json is a stale scaffold stub ("128K total", "Text in/out", "Standard pricing"). Verified specs below come from the official Kimi K2.7 Code model card (kimi.ai/resources/kimi-k2-7-code, huggingface.co/moonshotai/Kimi-K2.7-Code) and Moonshot's platform pricing docs (platform.kimi.ai/docs/pricing/chat-k27-code).

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-source, coding-focused agentic model built on Kimi K2.6 — stronger long-horizon coding and agentic execution with ~30% less thinking-token usage; thinking is forced on (instant mode not supported).
- **Provider / access:** Moonshot AI — pay-per-token API at platform.moonshot.ai (OpenAI/Anthropic-compatible, base `https://api.moonshot.ai/v1`, model id `kimi-k2.7-code`); Kimi Code subscription (`kimi-for-coding`, 7-day quota); open weights on Hugging Face / ModelScope under a Modified MIT license (code and weights); also on Azure (Microsoft Foundry, Global Standard).
- **Release / knowledge:** 2026-06-13. Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/kimi-k2.7-code` (repo meta.json, stale stub); `kimi-k2.7-code` / `kimi-k2.7-code-highspeed` (Moonshot API); `kimi-for-coding` (Kimi Code subscription); `moonshotai/Kimi-K2.7-Code` (HF).
- **Context window:** 262,144 tokens (256K native per model card; vendor evals ran at 262,144 via Kimi Code CLI).
- **Modalities:** Text, image, video in (video input experimental, official API only); text out. 400M-param MoonViT vision encoder. Forced thinking with `preserve_thinking` always on; interleaved thinking and multi-step tool calls.
- **Pricing (as of 2026-10):** $0.95 input / $4.00 output per 1M, cache hit $0.19 — same headline rate as Kimi K2.6; Highspeed tier $1.90 / $8.00 (cache $0.38, ~180 tok/s, up to ~260 short-run); Azure Global Standard $0.95 / $4.00 / $0.19.
- **Architecture:** Sparse MoE — 1T total / 32B active, 61 layers (1 dense), 384 experts (8 selected per token + 1 shared), MLA attention, SwiGLU, 160K vocabulary; native INT4 quantization (same method as Kimi K2-Thinking); 29 quantized variants listed on HF.

### Raw benchmarks found

Vendor card (Kimi K2.7 Code and K2.6 tested via Kimi Code CLI, thinking enabled, temperature 1.0, top-p 0.95, 262,144-token context; GPT-5.5 in Codex xhigh; Claude Opus 4.8 in Claude Code xhigh):

Coding:

- Kimi Code Bench v2 (in-house; 10+ languages, full production tech stack): **62.0%** (K2.6: 50.9%; GPT-5.5: 69.0%; Opus 4.8: 67.4%).
- Program Bench (recreate program behavior from compiled binary + docs only; 200 tasks, 248K+ fuzz tests, no internet): **53.6%** (K2.6: 48.3%; GPT-5.5: 69.1%; Opus 4.8: 63.8%).
- MLS Bench Lite (official 30-task MLS-Bench subset; 5-hour exploration budget): **35.1%** (K2.6: 26.7%; GPT-5.5: 35.5%; Opus 4.8: 42.8%).

Agentic / tool use:

- Kimi Claw 24/7 Bench (in-house; 17 scenarios, 610 evaluation points, OpenClaw harness, avg of 3 runs): **46.9%** (K2.6: 42.9%; GPT-5.5: 52.8%; Opus 4.8: 50.4%).
- MCP Atlas (Scale; official config, 100 tool-call budget, 32K max tokens/step, avg of 3 runs): **76.0%** (K2.6: 69.4%; GPT-5.5: 79.4%; Opus 4.8: 81.3%).
- MCP Mark Verified (human-verified MCPMark: Notion, GitHub, Filesystem, Postgres, Playwright; 100-step budget, 32K max tokens/step, avg of 3 runs): **81.1%** (K2.6: 72.8%; GPT-5.5: 92.9%; Opus 4.8: 76.4%).

Independent / third-party (Artificial Analysis via aggregator listings; not vendor-confirmed for K2.7 Code):

- GPQA Diamond (thinking, no tools): **89.6%** (AA). HLE (thinking, no tools, text-only): **35.0%** (AA). AA Intelligence Index: **25.8**; AA Omniscience accuracy 39.6% / hallucination rate 82.4% / Omniscience Index -10.2.
- Terminal-Bench: **44.7%**; LiveCodeBench: **82.1%** (aggregator listings citing AA/Vals).
- Hugging Face eval results: WildClawBench overall **46.9** (avg time 674 s); Long-Horizon Terminal Bench (LHTB) listed, value not captured.
- Other aggregators: SciCode **47.8%**, CritPt **10.0%**, DeepSWE **31.0%** (LLMLearner); SWE-Bench **78.2%**, AIME 2025 **91.5%**, HumanEval **94.2%**, GPQA **65.8%** (full 448-question set), HLE **38.2%** (automatio — conflicts with AA's Diamond/no-tools figures; treat as unverified).
- SemiAnalysis: Moonshot published the broader public suites (SWE-bench Verified, LiveCodeBench, AIME, HMMT, GPQA, MMLU-Pro) for K2.6/K2.5 but did not re-run them for K2.7 Code (K2.6 baselines: HLE-Full w/tools 54.0%, no tools 34.7%; AIME 2026 96.4%; GPQA Diamond 90.5%).
- Multimodal benchmarks (MMMU, MathVision, VideoMME), SWE-bench Verified (official), GPQA/HLE vendor-run: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 71/100.** MCP Mark Verified 81.1% (beats Opus 4.8's 76.4%) and MCP Atlas 76.0% are near-frontier; Kimi Claw 24/7 46.9%, WildClawBench 46.9% and Terminal-Bench 44.7% sit mid-pack; no τ-bench evidence.
- **Reasoning: 68/100.** GPQA Diamond 89.6% (AA, no tools) is frontier-tier, but HLE 35.0% (AA, no tools) trails the 40%+ frontier band; SciCode 47.8% mid; AIME 2025 91.5% is aggregator-sourced, not vendor-run.
- **Context window: 74/100.** 262,144-token native context; no published 256K-point retrieval figure.
- **Multimodal: 75/100.** Native text/image/video input via a 400M MoonViT encoder (video experimental, official API only); no public multimodal benchmark scores for this checkpoint.
- **Coding: 70/100.** Kimi Code Bench v2 62.0%, Program Bench 53.6% and MLS Bench Lite 35.1% all trail GPT-5.5 and Opus 4.8; aggregator-listed LiveCodeBench 82.1% and SWE-Bench 78.2% are unverified by the vendor.
- **Cost efficiency: 90/100.** $0.95/$4.00 per 1M hosted (below the $1.25/$4.25 frontier-adjacent anchor) with $0.19 cache hits and ~30% fewer thinking tokens; open Modified MIT weights make self-hosting a zero-license-cost option for steady volume.
- **Overall Score: 71.6/100.** Mean of the five quality dimensions. Third-party reasoning/coding figures are aggregator-reported and partially conflicting (automatio vs AA); the vendor card covers only coding and agentic suites.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
