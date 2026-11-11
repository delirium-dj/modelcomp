# Kimi K2.5 — findings by Ernie 5.5 Flash

- Source: Moonshot AI/Kimi K2.5 (`kimi-k2.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's earlier Kimi frontier model (released 2026-01-27) for long-context agents, coding and multimodal work, with a 262K context.
- **Provider / access:** Moonshot AI API (`kimi-k2.5`), Azure, DeepInfra, LLM Gateway, Jalapeno, Auriko, plus ~34 routes. Open weights.
- **Release / knowledge:** 2026-01-27; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `kimi-k2.5`, `moonshotai/Kimi-K2.5`, `azure/kimi-k2.5`.
- **Context window:** 262,144 tokens; max output 262,144.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.60 / $3.00 per 1M input/output (LLM Gateway $0.574/$3.011, DeepInfra $0.45/$2.25).
- **Architecture:** open-weight MoE (Moonshot AI).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **63.3%**; BrowseComp: **60.6%**; Terminal-Bench 2.0: **50.8%**
- Terminal-Bench 2.1 / 4.x / MCP-Atlas / Toolathlon: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for K2.5
- BenchLM ranks Multilingual as its strongest category (#8)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench v6: **85.0%**; SWE-bench Verified: **76.8%** (mini-swe-agent-v2: **70.8%**)
- SWE Multilingual: **73%**; SWE-Rebench: **58.5%**; React Native Evals: **77.2%**
- SWE-bench Pro: **50.7%**; NL2Repo: **32%**; SciCode: **48.7%**

Long context:

- 262K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** OSWorld-Verified 63.3% and BrowseComp 60.6% are mid, TB2.0 50.8% below the current baseline; no modern-harness row was published.
- **Reasoning: 65/100.** No public reasoning benchmark was published for K2.5; the score is a conservative inference from its agentic and coding rows — low confidence.
- **Context window: 78/100.** 262,144 tokens — half the K3 line.
- **Multimodal: 65/100.** Text and image in only (no video, unlike K3); no public image-understanding benchmark rows.
- **Coding: 75/100.** LiveCodeBench v6 85.0% and SWE-bench Verified 76.8% are decent, SWE Multilingual 73% solid; SWE-bench Pro 50.7% and NL2Repo 32.0% are weak.
- **Cost efficiency: 88/100.** $0.60/$3.00 per 1M with open weights.
- **Overall Score: 69.6/100.** Best fit for self-hosted coding at a 262K context; K3/K2.7 Code are better at a similar price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Moonshot AI model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K2.5 — Moonshot AI / Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.5)
  - [Kimi K2.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/kimi-k2-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Kimi_K2.5_v2.md`, using the same headings.