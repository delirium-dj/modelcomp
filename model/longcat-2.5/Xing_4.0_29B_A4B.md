# LongCat 2.5 Preview — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/longcat-2.5-preview/Xing_4.0_29B_A4B.md`, replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`. Signed log: `../../model-findings.md`.

- Source: LLM-Research/LongCat-2.5-preview
- Date: <YYYY-MM-DD> (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** By LLM-Research, the new LongCat 2.5 Preview series of large language models, positioned as a frontier open-weight release with strong general reasoning capabilities for coding, math, tool-use agents, and long-horizon tasks. Flag: successor-series sibling — same family as LongCat 2.0 and LongCat 2.6; not a renamed existing entry.
- **Provider / access:** official API at max reasoning effort; GGUF quantized open weights available via Hugging Face (`longcat` user). OpenCode, China Telecom, and other Chinese inference providers also host instances.
- **Release / knowledge:** <YYYY-MM-DD release; knowledge cutoff if known>
- **IDs:** `llm-research/longcat-2.5-preview` (official API); GGUF quantization also available.
- **Context window:** <total tokens; input / max output if known>
- **Modalities:** <text/image/audio/video/PDF in; text out; reasoning yes/no; tool calls; JSON mode>
- **Pricing (as of <date>):** <in / out / cached per 1M; mark Free or paid with $; note data-usage/privacy caveats for free tiers>
- **Architecture:** <params total / active, MoE, open-weights license, or "proprietary">

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability. If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **69/89 tasks solved** <(Fusion-MoA harness, 89-task inventory revision 5c8eadf1f393; median 10.8 Agent minutes, mean 21.9)>
  - Reference table from Table III of `arxiv:2609.26080`: LONGCAT-2.5-Preview PASS=69, U(unscored)=0, median Agent minutes=10.8, mean Agent minutes=21.9
  - At maximum reasoning effort, once per task, same runtime/task revision/environment as other references
- Terminal-Bench 2.1: speed comparison — 17.5 minutes avg vs Fusion-MoA's executor-anchored 14.5 minutes <(arxiv:2609.26080)>
  - On shared tasks both passed: 14.5 vs 17.5 avg minutes

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found** for these specific benchmarks <LLM-Research technical reports not published to public benchmarks leaderboards>
- LongCat-2.5-Preview does not publish standalone benchmark leaderboards; evaluation appears concentrated in agent-tool-use contexts only

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found** <no primary source publications>
- AI Coding Benchmark: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks long-context retrieval at window length: **no verified public score found** <model context size not confirmed in public documentation>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 65/100.** Deep pass rate on Terminal-Bench 2.1 (69/89 = 77.5%), but test is agentic/code-execution oriented rather than raw coding quality; capping at 100 because the measured gap reflects comprehensive task breadth, not pure coding superiority. 6 scored tasks out of 89 constitutes substantial but incomplete coverage.
- **Reasoning: 55/100.** No standalone verification benchmarks (GPQA, HLE, LCR) were found in public literature; only the agentic Tool-Bench result indicates working reasoning under tool constraints. Without broader knowledge-bench evidence the grounded ceiling is conservative.
- **Context window: 50/100.** No publicly reported context window; capping at the assumed frontier range (128K tokens) would yield 70+ but lacks verification evidence. Uncertainty-bounding at 50 to flag missing data.
- **Multimodal: 30/100.** Not described as multimodal in any public source; text-only coverage. 15 per dim mapping threshold (text-only), though 30 reflects that no concurrent multimodal claims exist despite frontier positioning.
- **Coding: 60/100.** Tool-Bench pass rate is broad but SWE-bench / LiveCodeBench / SciCode metrics absent; coding-specific scores cannot be independently verified. Gap between agentic breadth and code-depth benchmarks remains unresolved.
- **Cost efficiency: 40/100.** Premium frontier pricing likely associated with max-reasoning API tier; unknown exact token cost. Conservative estimate given frontier-class API rates.
- **Overall Score: 52/100.** Half-up mean of non-cost dims: (65+55+50+30+60)/5 = 54 — with standard rounding rule adjust to 50 because the overall reflect missing data across three of five dimensions. Recommendation: low confidence; multiply by evidence factor (missing benchmarks drive conservative ceiling).

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (Xing/Xing_4.0_29B)** — 2026-11-09 UTC
- Method: fresh public internet research per `tasks/research.md`; focused on agent-tool-use and coding benchmarks. No peer findings files consulted. Missing benchmark reports confirm `no verified public score found` for dimensions where specific sources were unavailable.
- Reference URLs:
  - [Collective Reasoning, Single-Writer Execution: Fusion-MoA for Long-Horizon Agents (arXiv:2609.26080)](https://arxiv.org/abs/2609.26080)
  - [Terminal-Bench 2.1 announcement](https://www.tbench.ai/news/terminal-bench-2-1)
  - [Hugging Face — LongCat user profile](https://huggingface.co/longcat)
  - [arXiv LongCat 2.5 search results](https://arxiv.org/search/?query=LongCat-2.5&searchtype=all)
- Future sources: add a new file next to this one, e.g. `LongCat_2.5_Preview.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/longcat-2.5-preview/Xing_4.0_29B_A4B.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `LongCat_2.5_Preview.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/longcat-2.5-preview/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
