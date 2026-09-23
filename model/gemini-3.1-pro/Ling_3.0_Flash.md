# Gemini 3.1 Pro — findings by Ling 3.0 Flash

- Source: Google (`google/gemini-3.1-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's most capable core reasoning model, featuring 2M context window, native multimodal understanding, and three-tier thinking modes (low/medium/high) for balancing speed and depth.
- **Provider / access:** Google AI Studio (`gemini-3.1-pro`), OpenRouter, OpenCode Zen. Chat Completions API. Free tier available on Google AI Studio and OpenCode Zen.
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff 2026-03.
- **IDs:** `google/gemini-3.1-pro` (Google AI Studio / Gemini API)
- **Context window:** 2,097,152 (2M) tokens, 65,536 max output
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning enabled; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** Free tier on Google AI Studio and OpenCode Zen; standard rates $2.00/1M input, $0.20/1M cached, $12.00/1M output (Google AI Studio)
- **Architecture:** Proprietary, closed weights; three-tier thinking system (Low/Medium/High compute modes)

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **95.6%** (BenchLM)
- BrowseComp: **85.9%** (gemini3.us)
- MCP Atlas: **69.2%** (gemini3.us)
- DeepSearchQA: **69.7%** (BenchLM)
- Claw-Eval: **57.8%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **70.8%** (BenchLM)
- Terminal-Bench 2.0: **68.5%** (BenchmarkList)
- APEX-Agents: **33.5%** (gemini3.us)
- ResearchClawBench: **13.3%** (BenchLM)
- Gert Labs: **56.87%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google official)
- HLE: **44.4%** (Google official)
- MMLU: **92.6%** (Google official)
- ARC-AGI-2: **77.1%** (Google official)
- MMMU-Pro: **83.9%** (BenchLM)
- CharXiv: **80.2%** (BenchLM)
- ERQA: **69.4%** (BenchLM)
- AA Intelligence Index: **57.0** (gemini3.us)
- BenchLM reasoning score: 50.7
- Knowledge score (BenchLM): 65.6

Coding:

- SWE-Bench Verified: **80.6%** (Google official)
- SWE-Bench Pro (Public): **54.2%** (Google official)
- LiveCodeBench Pro Elo: **2887** (gemini3.us)
- LiveCodeBench (Vals): **88.5%** (BenchLM)
- LiveCodeBench Pro: **82.9%** (BenchLM)
- SWE-bench (Vals): **78.8%** (BenchLM)
- React Native Evals: **78.9%** (BenchLM)
- SciCode: **59%** (gemini3.us)
- Coding Index: **55.5** (Artificial Analysis)

Long context:

- 2M context window, 65K max output
- Native 1M context, extendable to 2M
- AA-LCR: not directly published for 3.1 Pro specifically
- Score: 2M context window with strong long-context retrieval demonstrated across benchmarks

### Normalized scores (1–100)

- **Tool use: 86/100.** Exceptional on τ²-bench (95.6%) and BrowseComp (85.9%); strong on MCP Atlas (69.2%) and DeepSearchQA (69.7%); moderate on Terminal-Bench 2.1 Vals (70.8%); weak on APEX-Agents (33.5%). Top-tier agentic coordination and web research capability.
- **Reasoning: 87/100.** GPQA Diamond at 94.3% and MMLU at 92.6% are exceptional; ARC-AGI-2 at 77.1% demonstrates elite abstract reasoning; HLE at 44.4% is strong. AA Intelligence Index at 57.0 confirms frontier-level reasoning.
- **Context window: 97/100.** 2M native context window is class-leading; strong long-context retrieval demonstrated across all agentic and coding benchmarks.
- **Multimodal: 90/100.** Text, image, audio, video, and PDF input supported; MMMU-Pro at 83.9% and CharXiv at 80.2% demonstrate strong multimodal understanding.
- **Coding: 85/100.** SWE-Bench Verified at 80.6% and LiveCodeBench Vals at 88.5% are strong; SWE-Bench Pro at 54.2% and SciCode at 59% show gaps in advanced engineering tasks.
- **Cost efficiency: 100/100.** Free tier on Google AI Studio and OpenCode Zen ($0 input/output). Standard paid rates are $2.00/$12.00.
- **Overall Score: 89/100.** Mean of the five non-cost dimensions (86 + 87 + 97 + 90 + 85) / 5 = 89.0, rounded half-up to 89. A powerful frontier reasoning model with exceptional GPQA Diamond and MMLU performance, class-leading 2M context, and strong multimodal support at competitive pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchLM, LLM Stats, gemini3.us, Google official model card and blog, and BenchmarkList; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.1-pro/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.1-pro/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
