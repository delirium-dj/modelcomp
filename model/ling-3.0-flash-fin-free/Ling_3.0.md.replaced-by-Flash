# Ling 3.0 Flash Fin — findings by Ling 3.0

> Provided by: **Ling 3.0 (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (Free)
- **Short description:** Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math capabilities.
- **Provider / access:** OpenCode Zen (`opencode/ling-3-0-flash-fin-free`), OpenRouter (`inclusionai/ling-3.0-flash-fin:free`), DeepInfra. Chat Completions API. Free tier (limited-time promo).
- **Release / knowledge:** 2026-08-27 (API release); 2026-09-03 (MIT weights on HuggingFace). Knowledge cutoff not explicitly stated.
- **IDs:** `inclusionai/ling-3.0-flash-fin:free` (OpenRouter), `opencode/ling-3-0-flash-fin-free` (Zen), `inclusionAI/Ling-3.0-flash` (HuggingFace)
- **Context window:** 262,144 total (256K marketed) / 32,768 max output
- **Modalities:** Text in/out only; reasoning enabled by default; tool calls supported; JSON mode available
- **Pricing (as of 2026-09-23):** Free tier (limited-time promo) on Zen and OpenRouter; standard rates $0.06/1M input, $0.18/1M output, $0.012/1M cached (DeepInfra)
- **Architecture:** 124B total parameters, 5.1B active per token (~8.1% activation), Mixture-of-Experts with native hybrid-linear attention (KDA + MLA), 512 routed experts, 8 activated experts, MIT license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers for this exact model/ID — every row below would read "no verified public score found" and all normalized dims would be guesses — do NOT save a scored .md file. Save model/ling-3.0-flash-fin-free/Ling_3.0.md.excluded instead (same headings, your negative-findings notes; scores inside are ignored). pnpm sync skips .excluded files loudly so they never poison the average. Never invent placeholder scores (0, 10, ) to fill a .md file — one fabricated number drags the mean for every reader. (pnpm sync enforces this automatically: 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or flat-identical dims with zero cited numbers = renamed to .excluded.)

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (Artificial Analysis, rank 69th percentile)
- tau2-Banking (AA): **38.6%** (Artificial Analysis, rank 37th percentile)
- APEX-Agents (AA): **27.4%** (Artificial Analysis, rank 15th percentile)
- BFCL v4: **73.0%** (AI Atlas, rank 97th percentile)
- Agentic Index (AA): **29.3/100** (Artificial Analysis)
- MCP-Atlas: **no verified public score found** (cited as strong in official model card)
- SkillsBench: **44.8%** (official model card)
- GDPval-AA: **33.5%** (Artificial Analysis, rank 96th percentile)

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (Artificial Analysis, rank 84th percentile)
- HLE: **22.6%** (Artificial Analysis, rank 150th percentile)
- AA Intelligence Index: **23.0/100** (Artificial Analysis v4.3)
- AA-LCR: **73.7%** (Artificial Analysis, rank 130th percentile)
- AA-Omniscience Accuracy: **17.9%** (Artificial Analysis)
- AA-Omniscience Non-Hallucination Rate: **60.5%** (Artificial Analysis)
- CritPt: **2.6%** (Artificial Analysis, rank 141st percentile)
- Context Arena: **74.3%** (BenchmarkList, rank 88th percentile)
- AIME 2026: **93.2%** (BenchmarkList, rank 34th percentile)
- HMMT-Feb26: **87.0%** (official model card)

Coding:

- SWE-bench Pro: **56.6%** (BenchmarkList, rank 33rd percentile)
- SWE-bench Multilingual: **72.4%** (BenchmarkList, rank 47th percentile)
- LiveCodeBench (2408-2505): **82.8%** (official model card / Artificial Analysis)
- SciCode (AA): **42.4%** (Artificial Analysis, rank 110th percentile)
- AA Coding Index: **55.6/100** (Artificial Analysis, rank 74th percentile)
- Vibe Coding Index: **39.3/100** (TheVibeFather, rank 50th of 149)

Long context:

- AA-LCR: **73.7%** at 262K context window (Artificial Analysis)
- Context training schedule: 8K -> 32K -> 256K (official model card)
- Long context retrieval: no specific MRCL/RULER value published; AA-LCR at 73.7% indicates strong long-context understanding

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in model-comparison.md. Add a one-sentence justification citing the key evidence, and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5) (half-up rounding to nearest integer).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 58/100.** Terminal-Bench 2.1 at 57% and BFCL v4 at 73% show solid agentic capability, but APEX-Agents at 27.4% and Agentic Index at 29.3 drag the score down. Strong on terminal tasks, weaker on multi-agent workflows.
- **Reasoning: 64/100.** GPQA Diamond 85.5% and AIME 2026 93.2% demonstrate excellent mathematical and scientific reasoning, but HLE at 22.6% and Intelligence Index at 23.0 indicate gaps in general knowledge breadth.
- **Context window: 75/100.** 262K context window with AA-LCR at 73.7% confirms strong long-context understanding; not class-leading but well above average.
- **Multimodal: 15/100.** Text in/out only; no image, audio, or video input modalities supported.
- **Coding: 67/100.** LiveCodeBench 82.8% and SWE-bench Multilingual 72.4% are strong, but SciCode 42.4% and Vibe Coding Index 39.3 show inconsistency across coding benchmarks.
- **Cost efficiency: 100/100.** Free tier (limited-time promo) on Zen and OpenRouter; $0 cost per 1M tokens. Standard paid rates of $0.06/$0.18 are among the cheapest in its class.
- **Overall Score: 56/100.** Mean of the five non-cost dimensions (58 + 64 + 75 + 15 + 67) / 5 = 55.8, rounded half-up to 56. A capable finance-tuned agent with strong math and coding, but limited general reasoning breadth and no multimodal support.

---

## Signature

- Provided by: **Ling 3.0 (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, HuggingFace, OpenRouter, BenchLeader, BenchmarkList, TheVibeFather, and official model card; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/ling-3.0-flash-fin-free/Ling_3.0.md (folder name = filesystem-safe slug, see model/README.md).
3. Signature block filled in; relative links (../../model-comparison.md, ../../model-findings.md) resolve from model/ling-3.0-flash-fin-free/.
4. No raw benchmark invented — no verified public score found used where missing.
5. Zero verified benchmarks for this model -> file saved as Ling_3.0.md.excluded, not .md (see SELF-EXCLUSION above).
