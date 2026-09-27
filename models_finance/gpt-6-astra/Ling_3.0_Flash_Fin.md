# GPT-6 Astra — findings by Ling 3.0 Flash

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship above GPT-5.6 Sol with 1.05M context, staged rollout from Trusted Access programs, built for frontier reasoning and agents; leads Terminal-Bench 2.1 and FrontierMath.
- **Provider / access:** OpenAI API (`gpt-6-astra`), ChatGPT (staged rollout). Chat Completions / Responses API. No Zen Free ID; paid pricing only.
- **Release / knowledge:** September 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `openai/gpt-6-astra` (OpenAI API)
- **Context window:** 1,050,000 (1M) tokens, 128K max output
- **Modalities:** Text, image in; text out; reasoning enabled; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** Paid only — $10.00/1M input, $0.20/1M cached, $50.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; OpenAI's most capable model, featuring advanced agentic and reasoning capabilities

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (max reasoning): **87.27%** (BenchLM Vals, ranked #1 across 61 models)
- Terminal-Bench 2.1 (Vals): **87.3%** (LMSpeed rank #1)
- Terminal-Bench 4.0: **59.6%** xhigh / **59.1%** max (Artificial Analysis, #1)
- Terminal-Bench Science 0.1: **64.6%** (OpenAI official)
- OSWorld 2.0: **72.6%** (BenchLM, LMSpeed rank #1)
- BrowseComp: **83.3%** (BenchLM)
- deepSWE v1.1: **74.1%** (BenchLM)
- AutomationBench-AA: **69%** (Artificial Analysis)
- FrontiersCode 1.1 Extended: **64.5%** (OpenAI official)
- FrontiersCode 1.1 Main: **53.3%** (OpenAI official)
- Terminal-Bench 3.0: not measured

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI official)
- FrontierMath Tier 4 (v2): **97.6%** (OpenAI official)
- ARC-AGI-2: **95%** (BenchLM)
- ARC-AGI-3: **96%** (OpenAI official)
- HLE (with tools): **57.2%** (OpenAI official)
- AA Intelligence Index: **53** (AA, max effort) / **61** (AA, per blog)
- BenchLM reasoning score: 95.0
- BenchLM knowledge score: 96.0
- BenchLM math score: 97.6
- AA-Omniscience hallucination rate: 51% (down from 92% at GPT-5.6 Sol)
- AA-Briefcase: ~80 point improvement over GPT-5.6 Sol

Coding:

- Terminal-Bench 2.1: **87.27%** (also agentic, #1)
- DeepSWE v1.1: **74.1%**
- Terminal-Bench 4.0: **59.6%** (also agentic, #1)
- SciCode: **53.5%** (LMSpeed)
- Coding Agent Index: **67.0** (Artificial Analysis v1.4)
- FrontierCode 1.1 Main: **53.3%**
- SWE-bench Pro: not directly measured for GPT-6 Astra

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: **100.0%** (perfect score!)
- OpenAI MRCR v2 8-needle 512K-1M: **96.3%**
- AA-Briefcase: significant ~80 point Elo improvement
- 1M context window with near-perfect long-context retrieval

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional on Terminal-Bench 2.1 (87.27%, #1 across 61 models) and Terminal-Bench 4.0 (59.6%, #1); strong on OSWorld (72.6%, #1), BrowseComp (83.3%), deepSWE (74.1%); moderate on Terminal-Bench Science (64.6%) and AutomationBench (69%). Top-tier agentic coding and terminal capability.
- **Reasoning: 96/100.** GPQA Diamond at 96.0%, FrontierMath Tier 4 at 97.6%, ARC-AGI-2 at 95%, ARC-AGI-3 at 96% — nearly perfect scores across elite reasoning benchmarks; HLE at 57.2% is strong; AA Intelligence Index at 53-61 confirms frontier-level reasoning.
- **Context window: 97/100.** 1M context window with perfect MRCR score (100.0% at 256K-512K) and 96.3% at 512K-1M; near-perfect long-context retrieval confirmed across multiple evaluations.
- **Multimodal: 65/100.** Text and image input only; no audio, video, or PDF input support; narrower multimodal coverage than Gemini or Muse Spark models.
- **Coding: 88/100.** Terminal-Bench 2.1 at 87.27% (#1) and Terminal-Bench 4.0 at 59.6% (#1); DeepSWE v1.1 at 74.1%; strong coding agent performance across benchmarks.
- **Cost efficiency: 35/100.** No Zen Free ID; paid-only pricing at $10/$50 per 1M input/output. Among the most expensive frontier models.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (94 + 96 + 97 + 65 + 88) / 5 = 88.0, rounded half-up to 88. OpenAI's flagship model with the #1-ranked Terminal-Bench 2.1 score, near-perfect FrontierMath and GPQA Diamond performance, and class-leading long-context retrieval at premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchLM, LLM Stats, OpenAI official model card and blog, LMSpeed, and ComputingForGeeks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-astra/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-astra/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
