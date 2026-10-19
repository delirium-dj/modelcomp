# Claude Sonnet 4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: anthropic.com news "Introducing Claude Sonnet 4.6" (references Sonnet 4 as predecessor), anthropic.com system cards index (Claude Sonnet 4 and Opus 4, May 2025), deeplearning.ai The Batch (2025-05-28), datacamp.com Claude 4 benchmarks, serenitiesai.com model page, llm-stats.com model page, llm-stats.com compare (vs Claude Opus 4.5), Anthropic system card: Claude Opus 4 & Claude Sonnet 4 (May 2025 PDF)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4 (Anthropic)
- **Short description:** Anthropic's mid-tier Claude 4 family model, released May 2025; hybrid reasoning with optional reasoning mode; strong coding (SWE-bench Verified 72.7%); 200K context per provider tables (conflict: Serenities lists 1.0M — see below); proprietary; available on free and paid plans.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex AI; free tier and paid plans.
- **Release / knowledge:** Released 2025-05-22 (llm-stats); knowledge cutoff not explicitly stated for Sonnet 4 in fetched sources (Claude 4 family trained on public info as of March 2025 per system card).
- **IDs:** `claude-sonnet-4-20250514` (llm-stats), `claude-sonnet-4` (benchlm/serenities).
- **Context window:** Conflicting: **200,000** tokens (llm-stats provider table: Anthropic/Bedrock/Google all 200.0K in / 64.0K out; deeplearning.ai "up to 200,000 tokens") vs **1.0M** tokens (serenitiesai.com model page). Anthropic system card/deeplearning.ai support 200K; treat 200K as authoritative, 1.0M as unverified.
- **Modalities:** Text + image + PDF in (up to 200K), text out (up to 64K); multimodal yes; reasoning yes (optional/selectable reasoning mode); tool calls yes (parallel tool use incl. computer use); structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** $3.00/M input, $15.00/M output (Anthropic; serenities/llm-stats confirm).
- **Architecture:** Hybrid reasoning dense Transformer; parameter count undisclosed.

### Raw benchmarks found

Sources: deeplearning.ai (Anthropic-sourced), datacamp (Anthropic-sourced), serenitiesai (provider-checked 14 Sep 2026), llm-stats, benchmarklist not fetched for Sonnet 4 specifically, Vals not fetched.

Agent / tool use:

- SWE-bench Verified: **72.7%** (deeplearning.ai, datacamp, serenities) — ties/slightly edges Opus 4 (72.5%)
- TerminalBench (CLI agentic coding): **35.5%** (deeplearning.ai) / **33.5%** (deeplearning.ai alternative figure)
- TAU-bench: **80.5% Retail / 60.0% Airline** (datacamp)
- Computer use: strong (deeplearning.ai top marks for agentic computer-use benchmarks)

Reasoning / knowledge:

- GPQA Diamond: **75.4%** (datacamp)
- MMLU: **86.5%** (datacamp)
- MMLU-Pro: **81.0%** (serenities)
- MATH: **85.0%** (serenities)
- AIME: **70.5%** (datacamp)
- GSM8K: not found isolated
- HLE: not found
- BBH: not found
- Chatbot Arena ELO: **1365** (serenities)

Coding:

- HumanEval+: **88.0%** (serenities)
- LiveCodeBench: **58.0%** (serenities)
- SWE-bench Verified: **72.7%** — see above
- Codeforces: not found
- Website Arena ELO: **1151** (serenities)
- Design Arena ELO: **1145** (serenities)
- BFCL: **70.3%** (serenities, 2nd of 7)
- AA Coding Index: **37.6** (serenities, 62nd of 96)

Multimodal & grounded:

- MMMU: **74.4%** (datacamp)
- Vision: multimodal input (text+image+PDF) confirmed

Long context:

- Context: 200K (authoritative) vs 1.0M (serenities, unverified conflict); no public needle-recall curve found.

Instruction following:

- IFEval: **87.0%** (serenities, 18th of 25)

### Conflicting results noted

- **Context window:** 200K (llm-stats provider tables ×3 providers; deeplearning.ai) vs 1.0M (serenitiesai). Anthropic's own system card/deeplearning.ai support 200K; treat 1.0M as unverified.
- **TerminalBench:** 35.5% (deeplearning.ai) vs 33.5% (deeplearning.ai lists both) — minor figure discrepancy within same source.
- **GPQA:** 75.4% (datacamp) — only one source found; no cross-check.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** SWE-bench Verified 72.7% (frontier-tier), TAU-bench Retail 80.5/Airline 60.0, TerminalBench 35.5, computer-use strength; strong agentic profile.
- **Reasoning: 74/100.** GPQA Diamond 75.4, MMLU 86.5, MMLU-Pro 81.0, MATH 85.0, AIME 70.5, IFEval 87.0; no HLE/BBH found → moderate confidence.
- **Context window: 80/100.** Declared 200K (authoritative) vs unverified 1.0M; no public retrieval curve.
- **Multimodal: 75/100.** Multimodal (text+image+PDF in); MMMU 74.4; few other vision benchmarks isolated → moderate confidence.
- **Coding: 82/100.** SWE-bench Verified 72.7% (frontier), HumanEval+ 88.0, LiveCodeBench 58.0, BFCL 70.3, Website Arena 1151, Design Arena 1145; coding is Sonnet 4's standout.
- **Cost efficiency: 60/100.** $3/$15 per M mid-range; not counted toward Overall.
- **Overall Score: 78/100.** Half-up mean of (78 + 74 + 80 + 75 + 82) / 5 = 77.8 → 78. Best-fit recommendation: strong mid-tier coding/reasoning model; coding is its clear strength; superseded by Sonnet 4.5/4.6.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Anthropic system cards index + system card PDF + deeplearning.ai + datacamp + serenitiesai + llm-stats + press); scores are normalized 1–100 interpretations, not official vendor scores. Context-window conflict (200K vs 1.0M) flagged; 200K treated as authoritative.
- Future sources: add a new file next to this one, using the same headings.
