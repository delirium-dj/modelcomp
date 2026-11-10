# Grok 4.5 — findings by Iceman

- Source: xAI/Grok 4.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI’s Grok 4.5 is a coding- and agent-focused reasoning model (co-trained with Cursor) for software engineering, agentic workflows, and knowledge work, with 500K context and strong token efficiency claims.
- **Provider / access:** xAI Grok Build / Cursor / xAI API (`grok-4.5`). Local metadata lists `opencode/grok-4.5` and `noFreeId`.
- **Release / knowledge:** Announced July 16, 2026 (xAI news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `grok-4.5`, `grok-4.5-latest`, `grok-build-latest`.
- **Context window:** 500,000 tokens (xAI developer docs).
- **Modalities:** Text and image input; text output (xAI developer docs).
- **Pricing (as of 2026-11-10):** $2.00 / 1M input, $0.30 / 1M cached input, $6.00 / 1M output for prompts < 200K tokens; $4.00 / $0.60 / $12.00 for prompts ≥ 200K tokens (all tokens in request billed at higher rate). Batch API 20% discount (xAI developer docs).
- **Architecture:** Proprietary xAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from xAI’s “Introducing Grok 4.5” announcement and xAI developer docs unless noted. Competitor comparison figures shown on announcement charts are vendor-presented; Grok 4.5 scores cited here are those shown for Grok 4.5.

Agent / tool use:

- Office/productivity workflows (Grok Build plugins for Word/PowerPoint/Excel/Outlook): capability claims described qualitatively; **no standardized public agent benchmark score extracted**.
- Agents’ Last Exam: **no verified public score found**
- Terminal-Bench 2.1 (coding/agent context): **83.3%** (xAI announcement chart)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- DeepSWE 1.0 (pass@1): **62.0%** (xAI announcement chart)
- DeepSWE 1.1: **53%** (xAI announcement chart)
- SWE Marathon (resolution rate, pass@1): **29.0%** (xAI announcement chart)
- Terminal Bench 2.1: **83.3%** (xAI announcement chart)
- SWE Bench Pro (resolve rate): **64.7%** (xAI announcement chart)
- Token efficiency claim: resolves SWE Bench Pro tasks with ~15,954 average output tokens (~4.2× fewer than Opus 4.8 max in the cited comparison)

Multimodal / other:

- Text and image input supported (docs). No standalone multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 84/100.** Strong coding-agent orientation and high Terminal Bench 2.1 (83.3%) suggest good tool-using/coding-agent capability, but direct evidence on broader tool-use/office-agent benchmarks is limited.
- **Reasoning: 82/100.** Engineering/reasoning strength is implied by coding/agent results and xAI positioning, but canonical public reasoning benchmark scores (GPQA/HLE/AA Index etc.) were not extracted from reviewed sources.
- **Context window: 91/100.** 500K context window supports large codebases and long workflows; a strong asset for repo-scale tasks.
- **Multimodal: 80/100.** Verified text+image input and text output provide basic multimodal utility, but no strong multimodal benchmark evidence was extracted.
- **Coding: 88/100.** Verified coding results are strong across multiple evaluations (DeepSWE 1.0 62.0%, SWE Bench Pro 64.7%, Terminal Bench 2.1 83.3%, SWE Marathon 29.0%), with notable token efficiency claims; capped by lower DeepSWE 1.1 (53%) and limited breadth of standardized public coding benchmarks.
- **Cost efficiency: 87/100.** $2/$6 (<200K) with $0.30 cached input and strong token-efficiency claims provide good value, but long-prompt pricing doubles at ≥200K.
- **Overall Score: 85/100.** Mean of the five non-cost dims (84, 82, 91, 80, 88) = 85.0 → 85. Best fit for efficient coding agents, repo-scale engineering, and cost-conscious software workflows; now superseded by Grok 4.7 as xAI’s flagship.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to xAI announcement and developer docs; scores are normalized 1–100 interpretations from verified figures, not official vendor scores.
- Reference URLs:
  - [Introducing Grok 4.5 (xAI news)](https://x.ai/news/grok-4-5)
  - [Grok 4.5 model documentation (xAI developers)](https://docs.x.ai/docs/models/grok-4.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
