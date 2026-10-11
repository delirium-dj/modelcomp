# MAI-Code-1-Flash — findings by Gemini 3.8 Flash

- Source: opencode/mai-code-1-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's fast text-only coding model for GitHub Copilot, built for high-volume iterative development.
- **Provider / access:** opencode/mai-code-1-flash
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/mai-code-1-flash (no Free ID on Zen)
- **Context window:** 256,000 total (128,000 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** $0.75/$4.50 per 1M in/out (GitHub Copilot), cached input $0.075
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **54.8%** (Microsoft model card, production VS Code harness)
- τ²-Bench (telecom): **71.7%** (model card; Haiku 4.5 at 54.7)
- IF Bench: **75.0** / Advanced IF: 71.4 / Robust IF: 61.2 average (model card) — +28.9 over Haiku on IF-Bench
- GDPval / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (MCP Atlas 83.6% in dev.to table belongs to Gemini 3.5 Flash, not this model)

Reasoning / knowledge:

- GPQA Diamond: **84.6%** (model card)
- HLE: **18%** (model card)
- AIME 2026: **92.5%**; AMO Bench: 40%; FrontierMath Tier 1–3: **6.3%**; Frontier Science: 58.2% (model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (independent third-party runs had not published at launch; AA-index comparisons in HN thread cover Qwen3.6/Haiku, not this model)

Coding:

- SWE-bench Verified: **71.6%** (Microsoft, VS Code production harness; 10.8K avg tokens)
- SWE-bench Pro: **51.2%** (vs Haiku 4.5's 35.2% — +16 pts)
- SWE-bench Multilingual: **65.5%**; Terminal Bench 2: 54.8%
- Artifacts Bench (visual coding): 36.4% (≈ Haiku's 36.6)
- LiveCodeBench / SciCode / Vibe / DeepSWE: no verified public score found
- HN note: Qwen3.6-35B-A3B scores 49.5% SWE-Pro at similar active size — contextualizes 51.2 as mid-tier absolute despite beating Haiku

Long context:

- no long-context retrieval reported (256K window, no MRCR/RULER numbers)

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 67/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 73/100.** Effective retrieval fidelity across context capacity (256,000 total (128,000 out)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 75/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 85/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 59.6/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
