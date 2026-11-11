# Agnes 3.0 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Agnes AI (`agnes-3.0-flash`), OpenAI-compatible gateway at apihub.agnes-ai.com
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agnes AI's all-new next-generation text model for agentic coding and tool-driven tasks, with stronger end-to-end execution quality. Successor to Agnes 2.5 Flash, focused on stable execution, reliable tool use, long-task context retention, and high-quality delivery.
- **Provider / access:** Agnes AI, OpenAI-compatible Chat Completions (`POST https://apihub.agnes-ai.com/v1/chat/completions`), Responses API (`POST /v1/responses`), Messages API (`POST /v1/messages`). Model name `agnes-3.0-flash`. Base URL `https://apihub.agnes-ai.com/v1`.
- **Release / knowledge:** Generally available; knowledge cutoff not disclosed in fetched sources.
- **IDs:** `agnes-3.0-flash` (Agnes AI gateway `apihub.agnes-ai.com`). No Free ID confirmed on OpenCode Zen.
- **Context window:** 512K tokens; maximum output 65,536 tokens.
- **Modalities:** Text and image URL in; text out. Thinking mode supported; tool calling and orchestration; function calling; structured outputs.
- **Pricing (as of 2026-11-11):** List price — cached input $0.005 / 1M tokens; input $0.05 / 1M tokens; output $0.15 / 1M tokens. Trial price for all three items: $0.
- **Architecture:** Parameter count and MoE density not disclosed in fetched sources. New-generation text model focused on agentic coding and tool-driven tasks.

### Raw benchmarks found

No independent third-party benchmark scores were found in fetched sources for Agnes 3.0 Flash. The model's capabilities are described qualitatively by Agnes AI documentation (agentic coding, tool orchestration, instruction adherence, trustworthy delivery) rather than measured on public leaderboards.

No verified public scores found for: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, SWE-bench Verified/Pro/Multilingual, LiveCodeBench, SciCode, Terminal-Bench, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.

### Normalized scores (1–100)

Derived from the available specifications using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong focus on tool calling and orchestration (function calling, tool selection, multi-step tool orchestration, agentic workflows); capped by absence of published tool-use benchmark scores.
- **Reasoning: 78/100.** Thinking mode supported; positioned for stable execution and grounded reasoning; capped by absence of public reasoning benchmark scores (GPQA, HLE, etc.).
- **Context window: 92/100.** Declared 512K-token context with 65,536 max output; very wide window; capped because no public long-context retrieval measurement at the full window.
- **Multimodal: 70/100.** Image URL input supported; text output only; capped by no published vision benchmark scores.
- **Coding: 85/100.** Core focus on agentic coding (Agnes Code task execution, requirements through final delivery); capped by absence of public coding benchmark scores (SWE-bench, LiveCodeBench, etc.).
- **Cost efficiency: 95/100.** Low pricing ($0.05 input / $0.15 output per 1M) with free trial tier; not counted toward Overall.
- **Overall Score: 82/100.** Half-up mean of (85 + 78 + 92 + 70 + 85) / 5 = 82. Best-fit recommendation: agentic coding and tool-orchestration model with wide context; verify on independent benchmarks before production reliance.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (Agnes AI official docs wiki); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes 3.0 Flash — official docs](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.