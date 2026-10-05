# DeepSeek-V3.2 — findings by Qwen 3.8 27B

- Source: DeepSeek (`deepseek-ai/DeepSeek-V3.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V3.2
- **Short description:** DeepSeek's open-weights successor to V3.2-Exp (launched 2025-12-01 on app, web and API) — a reasoning-first agent model built on DeepSeek Sparse Attention (DSA) that "performs comparably to GPT-5" and is the first DeepSeek model to integrate thinking directly into tool-use. Its high-compute variant V3.2-Speciale (API-only, no tool calls, temporary endpoint that expired 2025-12-15) rivals Gemini-3.0-Pro and earned gold-medal-level results in IMO, CMO, ICPC World Finals and IOI 2025.
- **Provider / access:** DeepSeek API (api.deepseek.com; Chat Completions / Responses-style API with thinking mode) and DeepSeek app/web; open weights on Hugging Face `deepseek-ai/DeepSeek-V3.2`. No OpenCode Zen listing found this pass.
- **Release / knowledge:** Released 2025-12-01 (V3.2-Exp preceded it in late 2025 with API prices cut 50%+; V3.2 is the official successor with "same usage pattern as V3.2-Exp").
- **IDs:** `deepseek-ai/DeepSeek-V3.2` (Hugging Face); DeepSeek API model for the V3.2 generation. No Free ID on OpenCode Zen this pass.
- **Context window:** 128K native (continued pre-training from DeepSeek-V3.1-Terminus's 128K extension, per the tech report; llm-stats lists a 164K-token API window as of 2025-12-01).
- **Modalities:** text in / text out; thinking mode (and non-thinking mode); tool calls in both thinking and non-thinking modes (first DeepSeek model to integrate thinking into tool-use). No vision verified for this generation (native visual understanding arrived later with DeepSeek-V4.1-Flash).
- **Pricing (as of 2025-12-01, per llm-stats):** $0.260 input / $0.130 cached input / $0.380 output per 1M tokens; open weights free to self-host.
- **Architecture:** MoE continued from DeepSeek-V3.1-Terminus with DeepSeek Sparse Attention (lightning indexer + fine-grained top-k token selection, instantiated under MLA/MQA; core attention complexity O(L²)→O(Lk)); post-training = specialist distillation + scaled GRPO mixed RL; open weights.

### Raw benchmarks found

> Primary source: DeepSeek-V3.2 Tech Report, arXiv:2512.02556v1 (02 Dec 2025), Table 2 — thinking mode, temperature 1.0, 128K context window, fetched 2026-10-05. DeepSeek's official launch post (deepseek.com/en/news/deepseek-v3-2/, 2025-12-01) carries the same numbers in image form.

Agent / tool use:

- Terminal-Bench 2.0: **46.4%** (tech report; GPT-5 35.2, Gemini-3.0 Pro 54.2, Kimi-K2 Thinking 35.7)
- Tau2-Bench (τ², Pass@1): **80.3** (tech report; Claude-4.5 Sonnet 84.7, GPT-5 80.2, Gemini-3.0 Pro 85.4)
- MCP-Universe (Success Rate): **45.9** (tech report, DeepSeek internal environment)
- MCP-Mark (Pass@1): **38.0** (tech report, DeepSeek internal environment)
- Tool-Decathlon (Pass@1): **35.2** (tech report)
- BrowseComp (Pass@1): **51.4 / 67.6 with context management** (tech report; GPT-5 54.9)
- BrowseCompZh / HLE-with-search: **65.0 / 40.8** (tech report, search-agent rows)

Reasoning / knowledge:

- GPQA Diamond (Pass@1): **82.4** (tech report; GPT-5 85.7, Gemini-3.0 Pro 91.9, Kimi-K2 Thinking 84.5)
- HLE text-only (Pass@1): **25.1** (tech report; 23.9 on the official template; GPT-5 26.3, Gemini-3.0 Pro 37.7)
- MMLU-Pro (EM): **85.0** (tech report)
- AIME 2025 (Pass@1): **93.1**; HMMT Feb 2025 **92.5**; HMMT Nov 2025 **90.2**; IMOAnswerBench **78.3** (tech report)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found this pass

Coding:

- SWE-bench Verified (Resolved): **73.1%** (tech report; GPT-5 74.9, Gemini-3.0 Pro 76.2, Claude-4.5 Sonnet 77.2)
- SWE Multilingual (Resolved): **70.2%** (tech report; highest in its row)
- LiveCodeBench 2024.08–2025.04 (Pass@1-COT): **83.3** (tech report)
- Codeforces rating: **2386** (tech report; GPT-5 2537)
- SciCode / Vibe Code Bench: no verified public score found this pass

Long context:

- 128K native; AA-LCR3 (Artificial Analysis Long Context Reasoning): V3.2-Exp scored four points higher than V3.1-Terminus in reasoning mode (tech report §2.2; absolute value not published there).

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench 80.3 (frontier-tier on that harness) and BrowseCompZh 65.0, but Terminal-Bench 2.0 at 46.4 and Tool-Decathlon 35.2 hold it back; thinking-in-tool-use is a genuine first for the open-weights class.
- **Reasoning: 82/100.** AIME 2025 93.1 and HMMT 90–92.5 are elite, MMLU-Pro 85.0 strong, but HLE 25.1 trails GPT-5 (26.3) and Gemini-3.0 Pro (37.7) — "comparable to GPT-5" with a ceiling gap on the hardest problems.
- **Context window: 60/100.** 128K native / 164K API (100K–200K band, 50–64); DSA targets long-sequence efficiency but no verified ≥98% retrieval at 512K+.
- **Multimodal: 15/100.** Text-only in/out for this generation (no image/audio/video input verified); vision arrived only with the V4.x line.
- **Coding: 88/100.** SWE-bench Verified 73.1 (frontier cluster: GPT-5 74.9, Gemini-3.0 Pro 76.2) with the top-of-row SWE Multilingual 70.2, LiveCodeBench 83.3 and Codeforces 2386.
- **Cost efficiency: 95/100.** $0.26/$0.38 per 1M (cached $0.13) at launch — near the top price band of the methodology — plus open weights free to self-host.
- **Overall Score: 65/100.** (78 + 82 + 60 + 15 + 88) / 5 = 64.6 → 65; best-fit as the cheap open-weights daily-driver for coding + math/agentic work when a 128K window and text-only modality are acceptable.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b:free)** — 2026-10-05
- Method: public internet research (DeepSeek-V3.2 Tech Report arXiv:2512.02556v1 Table 2, official launch post deepseek.com/en/news/deepseek-v3-2/, llm-stats model page for pricing/context; retrieved 2026-10-05); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
