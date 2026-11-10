# GPT-5.3 Codex — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-5.3-codex`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's agentic coding/reasoning model (introduced Feb 5, 2026) combining frontier coding performance with broader reasoning and professional knowledge capabilities, designed for long-running interactive software engineering and computer-use workflows.
- **Provider / access:** OpenAI (ChatGPT paid plans/Codex surfaces per announcement); OpenRouter lists `openai/gpt-5.3-codex` served by OpenAI/Azure. API access noted as planned in announcement context; availability varies by surface.
- **Release / knowledge:** Released 2026-02-05 (OpenAI announcement). Artificial Analysis lists knowledge cutoff Aug 31, 2025 for GPT-5.3 Codex (Xhigh); other sources do not add detail.
- **IDs:** `openai/gpt-5.3-codex`, `gpt-5.3-codex` (provider naming varies by surface)
- **Context window:** 400k tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA/OpenAI describe reasoning/agentic behavior). Tool use and computer-use/agentic workflows are core to Codex surfaces (exact API feature matrix varies).
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $1.75 / 1M input, $14.00 / 1M output, 90% cache discount (GPT-5.3 Codex Xhigh). OpenRouter lists similar/variant pricing by provider/priority; paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID GPT-5.3 Codex as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI announcement, xhigh reasoning effort)
- OSWorld-Verified: **64.7%** (OpenAI announcement, xhigh reasoning effort; computer-use/agentic benchmark)
- GDPval (wins or ties): **70.9%** (OpenAI announcement, xhigh reasoning effort; professional knowledge-work tasks)
- Cybersecurity Capture The Flag Challenges: **77.6%** (OpenAI announcement, xhigh reasoning effort)
- SWE-Lancer IC Diamond: **81.4%** (OpenAI announcement, xhigh reasoning effort)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GDPval (wins or ties): **70.9%** (OpenAI announcement; cross-cutting knowledge work benchmark)
- Artificial Analysis Intelligence Index: **no verified public score found** (AA snapshot reported N/A/unavailable)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Bench Pro (Public): **56.8%** (OpenAI announcement, xhigh reasoning effort)
- Terminal-Bench 2.0: **77.3%** (OpenAI announcement, xhigh reasoning effort)
- SWE-Lancer IC Diamond: **81.4%** (OpenAI announcement, xhigh reasoning effort)
- SWE-bench Verified: **no verified public score found** (OpenAI emphasized SWE-Bench Pro; Verified not reported in fetched text)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Context window reported as **400k tokens** (Artificial Analysis). No verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) score found for this exact model.

### Normalized scores (1–100)

> Derived from vendor-reported benchmark evidence (OpenAI announcement) plus accessible metadata. Some dimensions lack broad third-party coverage; scores are interpretations.

- **Tool use: 88/100.** Strong agentic/computer-use and execution evidence: OSWorld-Verified 64.7%, Terminal-Bench 2.0 77.3%, GDPval 70.9%, CTF 77.6% (OpenAI, xhigh) indicate robust tool-using/interactive workflows; capped by limited third-party cross-benchmark validation in fetched sources.
- **Reasoning: 82/100.** GDPval 70.9% and strong agentic coding/computer-use results imply high reasoning/planning ability, but direct reasoning benchmarks (GPQA/HLE/LCR/CritPt) were not found in accessible sources; capped by missing standardized reasoning-suite coverage.
- **Context window: 70/100.** 400k-token window reported (Artificial Analysis), a strong but not 1M-class context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 55/100.** Supports text and image input with text output per AA specs; useful for UI/screenshot-driven coding workflows, but no verified vision benchmark scores found.
- **Coding: 90/100.** Excellent verified vendor-reported coding/agentic coding results: SWE-Bench Pro 56.8%, Terminal-Bench 2.0 77.3%, SWE-Lancer IC Diamond 81.4% (OpenAI, xhigh); capped slightly by reliance on vendor reporting and missing some common third-party coding benchmarks in fetched sources.
- **Cost efficiency: 40/100.** Paid pricing at $1.75/$14.00 per 1M tokens (AA snapshot) is expensive on output, reflecting frontier/professional positioning rather than budget efficiency.
- **Overall Score: 77/100.** Mean of five non-cost dims `(88+82+70+55+90)/5 = 77`. Best fit as a high-end agentic coding/computer-use model with strong verified coding and workflow benchmarks but moderate context and premium pricing.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (OpenAI announcement, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/)
  - [Artificial Analysis — GPT-5.3 Codex (Xhigh)](https://artificialanalysis.ai/models/gpt-5-3-codex)
  - [OpenRouter — openai/gpt-5.3-codex](https://openrouter.ai/openai/gpt-5.3-codex)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
