# Claude Opus 4.6 — findings by Ling 3.0 Flash

- Source: Anthropic (`anthropic/claude-opus-4.6`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model enhanced with thinking capabilities for complex, multi-step tasks; 200K context with strong agentic coding.
- **Provider / access:** Anthropic API (`claude-opus-4-6`), Amazon Bedrock. Messages API. No Zen Free ID; paid pricing.
- **Release / knowledge:** February 5, 2026 release (5 months before Opus 4.8). Knowledge cutoff not explicitly stated.
- **IDs:** `anthropic/claude-opus-4-6` (Anthropic API)
- **Context window:** 200,000 tokens, 128K max output (per meta.json)
- **Modalities:** Text, image in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $5.00/1M input, $25.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; Anthropic's flagship reasoning model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (BenchLM)
- BrowseComp: **83.7%** (BenchLM)
- OSWorld-Verified: **72.7%** (BenchLM)
- τ²-bench: **84.8%** (BenchLM)
- Claw-Eval: **70.4%** (BenchLM)
- CyberGym: **66.6%** (BenchLM)
- DeepSearchQA: **73.7%** (BenchLM)
- Agentic Index (BenchLM): 73.0

Reasoning / knowledge:

- GPQA: **91.3%** / **91.3%** (BenchLM / macaron.im)
- GPQA-D: **89.2%** (BenchLM)
- SuperGPQA: **95%** (BenchLM)
- HLE: **53%** (with tools) / **40%** (without) (BenchLM)
- ARC-AGI-2: **68.8%** (macaron.im)
- MMLU-Pro: **82%** / **89.1%** (Arcee) (BenchLM)
- Intelligence Index (AA): **38.8** (BenchLM)
- GDPval-AA Elo: **1606** (macaron.im)
- Knowledge Index (BenchLM): 69.1
- SuperGPQA: 95%

Coding:

- SWE-bench Verified: **80.8%** (BenchLM)
- SWE-bench Verified*: **75.6%** (BenchLM)
- SWE-bench Pro: **53.4%** (BenchLM)
- LiveCodeBench Pro: **70.7%** (BenchLM)
- Vibe Code Bench: **57.57%** (BenchLM)
- FrontierCode 1.1 Main: **26.9%** (BenchLM)
- AA-SciCode: **45.7%** (BenchLM)
- SWE-bench Lite: **62.7%** (#1) (pricepertoken)
- Coding Index (BenchLM): 68.1

Multimodal:

- Text, image in; text out
- Multimodal Index (BenchLM): 77.3
- OSWorld-Verified: 72.7%
- MMMU-Pro: 77.3% (BenchLM)

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp at 83.7%, τ²-bench at 84.8%, OSWorld at 72.7%, Terminal-Bench 2.0 at 65.4%. Strong on browse and tool-use benchmarks but weaker on terminal coding.
- **Reasoning: 91/100.** GPQA at 91.3%, SuperGPQA at 95%, HLE at 53% (with tools). Elite graduate-level science reasoning with strong math.
- **Context window: 60/100.** 200K context window per meta.json; significantly shorter than 1M frontier models. Context score limited by shorter window.
- **Multimodal: 73/100.** Text and image input supported; text output; Multimodal Index at 77.3 (BenchLM); OSWorld at 72.7%. Narrower than Gemini models.
- **Coding: 82/100.** SWE-bench Verified at 80.8%; SWE-bench Lite #1 at 62.7%; LiveCodeBench Pro at 70.7%. Strong coding but weaker on frontier coding benchmarks.
- **Cost efficiency: 40/100.** No Zen Free ID; paid-only pricing at $5/$25 per 1M. Premium pricing.
- **Overall Score: 79/100.** Mean of the five non-cost dimensions (88 + 91 + 60 + 73 + 82) / 5 = 78.8, rounded to 79. Anthropic's 4.6 flagship with GPQA 91.3%, SuperGPQA 95%, SWE-bench Verified 80.8%, and 200K context at premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via BenchLM, macaron.im, llm-stats.com, pricepertoken.com, and apxml.com; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4.6/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4.6/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
